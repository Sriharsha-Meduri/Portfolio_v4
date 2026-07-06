import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Button from './Button';
import { Magnetic } from './effects';

interface NavbarProps { isDark: boolean; toggleTheme: () => void; }

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Milestones', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('about');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zen-bg/70 dark:bg-zen-black/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 transition-colors">
      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-zen-lime origin-left" />
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-3.5 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zen-black dark:bg-zen-lime rounded-lg flex items-center justify-center">
            <span className="text-zen-lime dark:text-zen-black font-bold font-mono">S</span>
          </div>
          <span className="font-display font-bold text-lg hidden sm:block text-zen-black dark:text-white">Sriharsha</span>
        </a>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a key={link.name} href={link.href}
                className={`relative px-3 py-1.5 rounded-full transition-colors ${isActive ? 'text-zen-black dark:text-zen-lime' : 'text-gray-500 dark:text-gray-400 hover:text-zen-black dark:hover:text-white'}`}>
                {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-zen-black/5 dark:bg-white/10 -z-10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-zen-black dark:text-white" aria-label="Toggle theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="hidden md:block">
            <Magnetic><Button variant="primary" className="!py-2 !px-4 !rounded-lg text-xs" href="mailto:sriharshameduri07@gmail.com">Get in touch</Button></Magnetic>
          </div>
          <button className="md:hidden p-2 text-zen-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zen-black border-b border-gray-200 dark:border-gray-800 py-6 px-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-zen-black dark:text-gray-300 hover:text-zen-lime transition-colors">{link.name}</a>
          ))}
          <div className="pt-3"><Button variant="primary" className="w-full" href="mailto:sriharshameduri07@gmail.com">Get in touch</Button></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
