import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Plane, Target, Anchor, BrainCircuit } from 'lucide-react';
import Badge from './Badge';
import { Reveal } from './effects';

const items = [
  {
    span: 'md:col-span-2', featured: true, icon: Trophy, date: 'National', accent: 'bg-zen-lime',
    title: 'Winner - National Cybersecurity Hackathon',
    org: 'Organised by the Ministry of Electronics & IT (MeitY)',
    desc: 'Took first place building a real-time phishing-detection browser extension - the seed that later grew into PhishingLens, my multi-modal detection system.',
  },
  {
    span: 'md:col-span-1', icon: Plane, date: 'Switzerland', accent: 'bg-blue-500',
    title: 'Research @ USI, Switzerland',
    org: 'Under Prof. Paolo Tonella',
    desc: 'Selected for a summer research internship at Università della Svizzera italiana (USI) under the Director of the Software Institute.',
  },
  {
    span: 'md:col-span-1', icon: Target, date: '2026', accent: 'bg-violet-500',
    title: 'Qualified GATE 2026',
    org: 'AIR ~17k / 1,000,000+',
    desc: 'Cleared GATE 2026 with an All India Rank of ~17,000 among over a million candidates nationwide.',
  },
  {
    span: 'md:col-span-1', icon: Anchor, date: 'BITS Pilani', accent: 'bg-orange-500',
    title: 'Round 2 - DP World Hackathon 2026',
    org: 'BITS Pilani',
    desc: 'Advanced to round 2 with the container-damage detection idea that became Corten.',
  },
  {
    span: 'md:col-span-1', icon: BrainCircuit, date: '2025', accent: 'bg-pink-500',
    title: 'Round 3 - MumbaiHacks 2025',
    org: "World's largest Agentic AI hackathon",
    desc: 'Reached round 3 in the Misinformation track - the space that inspired Provenance, my video-forensics system.',
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <Reveal className="mb-10">
        <Badge variant="lime">Milestones</Badge>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-zen-black dark:text-white">Proof of work</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={i} delay={(i % 3) * 0.07} className={`${it.span} h-full`}>
            <motion.div whileHover={{ y: -5 }}
              className={`group relative h-full rounded-3xl p-7 overflow-hidden border transition-all ${
                it.featured ? 'bg-zen-black text-white border-transparent' : 'bg-white dark:bg-zen-dark-card border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl'}`}>
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500 ${it.accent}`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${it.featured ? 'bg-zen-lime text-zen-black' : 'bg-gray-100 dark:bg-gray-800 text-zen-black dark:text-white'}`}>
                    <it.icon className="w-5 h-5" />
                  </div>
                  <span className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ${it.featured ? 'bg-white/10 text-zen-lime' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300'}`}>{it.date}</span>
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-1 ${it.featured ? 'text-white' : 'text-zen-black dark:text-white'}`}>{it.title}</h3>
                <p className={`text-xs font-medium mb-3 ${it.featured ? 'text-zen-lime' : 'text-gray-500 dark:text-gray-400'}`}>{it.org}</p>
                <p className={`text-sm leading-relaxed ${it.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>{it.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
