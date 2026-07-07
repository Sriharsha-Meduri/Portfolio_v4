import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Custom cursor: a dot + a ring that lags behind and grows on hover.  */
/* Uses mix-blend-difference so it stays visible on any background.    */
/* ------------------------------------------------------------------ */
export const Cursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a, button, [data-cursor="grow"], input, textarea'));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ mixBlendMode: 'difference' }}>
      <motion.div className="fixed top-0 left-0 rounded-full bg-white"
        style={{ x, y, width: 7, height: 7, translateX: '-50%', translateY: '-50%' }} />
      <motion.div className="fixed top-0 left-0 rounded-full border border-white"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hover ? 56 : 30, height: hover ? 56 : 30, opacity: hover ? 0.9 : 0.5 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }} />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Aurora background: slow-drifting blurred blobs + faint grid.        */
/* ------------------------------------------------------------------ */
export const Aurora: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 grid-bg opacity-50 md:opacity-60" />
    <div className="absolute -top-24 -left-20 h-[20rem] w-[20rem] md:h-[44rem] md:w-[44rem] rounded-full bg-zen-lime/[0.12] md:bg-zen-lime/30 dark:bg-zen-lime/[0.09] md:dark:bg-zen-lime/[0.13] blur-[80px] md:blur-[150px] animate-aurora1" />
    <div className="absolute top-1/3 -right-24 h-[18rem] w-[18rem] md:h-[42rem] md:w-[42rem] rounded-full bg-teal-300/[0.11] md:bg-teal-300/25 dark:bg-teal-500/[0.08] md:dark:bg-teal-500/[0.11] blur-[80px] md:blur-[150px] animate-aurora2" />
    <div className="absolute bottom-[-6rem] left-1/4 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem] rounded-full bg-sky-300/[0.10] md:bg-sky-300/20 dark:bg-indigo-500/[0.07] md:dark:bg-indigo-500/[0.10] blur-[80px] md:blur-[150px] animate-aurora1" style={{ animationDelay: '6s' }} />
  </div>
);

/* ------------------------------------------------------------------ */
/* Reveal: fade + rise into view on scroll.                            */
/* ------------------------------------------------------------------ */
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; y?: number; className?: string }> =
({ children, delay = 0, y = 26, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>
);

/* ------------------------------------------------------------------ */
/* Magnetic: nudges its child toward the cursor on hover.             */
/* ------------------------------------------------------------------ */
export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; className?: string }> =
({ children, strength = 0.35, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 15 });
  const sy = useSpring(my, { stiffness: 200, damping: 15 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* Counter: counts up when scrolled into view.                        */
/* ------------------------------------------------------------------ */
export const Counter: React.FC<{ to: number; suffix?: string; prefix?: string; decimals?: number; duration?: number }> =
({ to, suffix = '', prefix = '', decimals = 0, duration = 1.6 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    let raf = 0, started = false;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const run = () => {
      if (started) return; started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / (duration * 1000));
        setVal(to * easeOut(p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    let io: IntersectionObserver | undefined;
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { run(); io?.disconnect(); } }, { threshold: 0.2 });
      io.observe(el);
    }
    const fallback = setTimeout(run, 1500); // guarantee it starts even if IO is flaky
    // Hard fallback: if rAF never advanced (e.g. page loaded in a hidden tab where
    // requestAnimationFrame is paused), snap to the final value so it's never stuck at 0.
    const hard = setTimeout(() => setVal((v) => (v < to ? to : v)), 4000);
    return () => { io?.disconnect(); clearTimeout(fallback); clearTimeout(hard); if (raf) cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
};

/* ------------------------------------------------------------------ */
/* Marquee: seamless infinite horizontal scroll of items.             */
/* ------------------------------------------------------------------ */
export const Marquee: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <div className="mask-fade-x overflow-hidden">
    <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
      {[...items, ...items].map((it, i) => (
        <div key={i} className="shrink-0">{it}</div>
      ))}
    </div>
  </div>
);
