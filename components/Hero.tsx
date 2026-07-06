import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, ShieldCheck, Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import Button from './Button';
import { Magnetic, Counter } from './effects';
import heroImg from './Hero.jpg';
import resume from './Resume14.pdf';

const PHRASES = ['deepfake detectors.', 'phishing engines.', 'vision models.', 'things that ship.'];

const Hero: React.FC = () => {
  // typewriter
  const [pi, setPi] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = PHRASES[pi];
    const speed = del ? 45 : 85;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(full.slice(0, txt.length + 1));
        if (txt.length + 1 === full.length) setTimeout(() => setDel(true), 1300);
      } else {
        setTxt(full.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) { setDel(false); setPi((pi + 1) % PHRASES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, pi]);

  // parallax tilt on the visual card
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });
  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="about" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 pt-28 pb-12 md:pt-36 md:pb-20 scroll-mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

        {/* Left */}
        <div className="space-y-7">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zen-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-green-700 dark:text-zen-lime">Open to work</span>
            <span className="text-zen-black/20 dark:text-white/20">·</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">ML Engineer</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="block gradient-text">
              I build
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-zen-black dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zen-black to-gray-500 dark:from-white dark:to-zen-lime">{txt}</span>
              <span className="inline-block w-[3px] h-[0.9em] align-middle bg-zen-lime ml-1 animate-pulse" />
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            I'm <strong className="text-zen-black dark:text-white">Sriharsha Meduri</strong> - I turn ML research into products people actually use.
            Currently <span className="font-medium text-zen-black dark:text-white">Head of Engineering @ OviGuide</span>, and a GATE-qualified IT undergrad at Andhra University.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4">
            <Magnetic><Button variant="primary" href={resume} download="SriharshaMeduri_Resume.pdf">Download CV</Button></Magnetic>
            <Magnetic><Button variant="outline" href="mailto:sriharshameduri07@gmail.com">Let's talk</Button></Magnetic>
            <div className="flex items-center gap-2 ml-1">
              {[[Github, 'https://github.com/Sriharsha-Meduri'], [Linkedin, 'https://linkedin.com/in/sriharsha-meduri'], [Mail, 'mailto:sriharshameduri07@gmail.com']].map(([Icon, href]: any, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="p-2.5 rounded-full border border-zen-black/10 dark:border-white/10 hover:bg-zen-black hover:text-white dark:hover:bg-zen-lime dark:hover:text-zen-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }}
          style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
          className="relative h-[420px] sm:h-[500px] md:h-[560px] w-full bg-zen-lime rounded-3xl md:rounded-4xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-zen-lime/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/25 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

          <div style={{ transform: 'translateZ(40px)' }} className="self-start z-10">
            <div className="bg-zen-black/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 w-60 md:w-72">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <Terminal size={12} className="text-gray-500" />
              </div>
              <div className="font-mono text-[10px] leading-relaxed">
                <p className="text-gray-500">$ whoami</p>
                <p className="text-zen-lime">sriharsha - ml + full-stack</p>
                <p className="text-gray-500 mt-1">$ status</p>
                <p className="text-blue-400">3 products live in prod ✓</p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative rounded-full border-4 border-white shadow-2xl overflow-hidden bg-zen-black">
              <img src={heroImg} alt="Sriharsha Meduri" className="w-full h-full object-cover object-[70%_30%] hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} style={{ transform: 'translateZ(50px)' }} className="self-end z-10">
            <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[220px]">
              <div className="p-2.5 bg-blue-100 rounded-full"><ShieldCheck className="w-5 h-5 text-blue-600" /></div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase">Focus</p>
                <p className="font-bold text-sm text-zen-black">AI · Security · Web</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: <Counter to={3} suffix="" />, l: 'Products shipped to prod' },
          { n: <Counter to={6.5} decimals={1} suffix="M+" />, l: 'User interactions reached' },
          { n: <Counter to={88.1} decimals={1} suffix="%" />, l: 'Best model accuracy' },
          { n: <><span className="align-top text-lg">AIR</span> <Counter to={17} suffix="k" /></>, l: 'GATE 2026 rank' },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl border border-zen-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-5">
            <div className="font-display text-3xl md:text-4xl font-bold text-zen-black dark:text-white">{s.n}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <a href="#work" className="flex flex-col items-center gap-2 text-gray-400 hover:text-zen-black dark:hover:text-white transition-colors">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
