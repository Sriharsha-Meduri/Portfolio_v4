import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Globe } from 'lucide-react';
import { Reveal, Magnetic } from './effects';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full mt-20 scroll-mt-10">
      {/* CTA */}
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0">
        <Reveal>
          <div className="relative rounded-4xl bg-zen-black text-white p-10 md:p-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-zen-lime/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="font-mono text-sm text-zen-lime uppercase tracking-widest mb-4">● Available for roles & collabs</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Let's build something <span className="italic font-serif text-zen-lime">people actually use.</span>
              </h2>
              <p className="text-gray-400 mt-5 max-w-xl">Internships, research, a wild project idea, or just to talk ML and security — my inbox is open.</p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Magnetic>
                  <a href="mailto:sriharshameduri07@gmail.com" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zen-lime text-zen-black font-mono font-bold hover:brightness-105 transition">
                    <Mail className="w-4 h-4" /> sriharshameduri07@gmail.com
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://sriharshameduri.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 font-mono font-bold hover:bg-white/10 transition">
                    <Globe className="w-4 h-4" /> sriharshameduri.in <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-display text-lg font-bold text-zen-black dark:text-white">Sriharsha Meduri</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">ML engineer · builder · perpetual student.</p>
        </div>
        <div className="flex gap-3">
          {[[Github, 'https://github.com/Sriharsha-Meduri', 'hover:bg-zen-black hover:text-white dark:hover:bg-white dark:hover:text-zen-black'],
            [Linkedin, 'https://linkedin.com/in/sriharsha-meduri', 'hover:bg-blue-600 hover:text-white'],
            [Mail, 'mailto:sriharshameduri07@gmail.com', 'hover:bg-red-500 hover:text-white']].map(([Icon, href, hov]: any, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-all text-zen-black dark:text-white ${hov}`}><Icon size={18} /></a>
          ))}
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-500 font-mono">© {new Date().getFullYear()} · built with React + too much coffee</div>
      </div>
    </footer>
  );
};

export default Footer;
