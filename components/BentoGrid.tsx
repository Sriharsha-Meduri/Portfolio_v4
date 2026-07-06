import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Fingerprint, Clapperboard, ScanEye, FlaskConical, Code2, GraduationCap, ShieldHalf, Users } from 'lucide-react';
import Badge from './Badge';
import { Reveal } from './effects';

const roles = [
  {
    icon: Rocket, role: 'Head of Engineering', company: 'OviGuide', date: '2026 - Present', present: true, accent: 'text-zen-black bg-zen-lime',
    desc: 'Leading an AI counselling co-pilot for engineering admissions. Built an admission-prediction engine across 50,000+ college-branch combinations (JoSAA, Comedk, MHT-CET, EAPCET); it has reached 120K+ students and 6.5M+ interactions.',
    tags: ['AI', 'Full-stack', 'Product'],
  },
  {
    icon: Fingerprint, role: 'CTO & Co-Founder', company: 'QuickPe', date: '2026 - Present', present: true, accent: 'text-white bg-emerald-600',
    desc: 'Co-founded a fintech reimagining digital payments with biometric auth and offline-first transactions. Owned the security core: ECDSA P-256 signing, hardware-backed key management, and fraud detection.',
    tags: ['Fintech', 'Cryptography', 'System design'],
  },
  {
    icon: Clapperboard, role: 'AI Software Engineer', company: 'Oviqo', date: '2026 - Present', present: true, accent: 'text-white bg-violet-600',
    desc: 'Building a personalized video-generation engine with fine-tuned diffusion models and TTS pipelines, turning structured data into tailored, dynamic video at scale.',
    tags: ['GenAI', 'Diffusion', 'TTS'],
  },
  {
    icon: ScanEye, role: 'Machine Learning Intern', company: 'iMerit Technology', date: '2025 - 2026', present: false, accent: 'text-white bg-teal-600',
    desc: 'Built a post-hoc out-of-distribution detection pipeline (MSP, ODIN, Energy-score) for semantic segmentation in autonomous driving, evaluated on KITTI, Fishyscapes, and nuScenes.',
    tags: ['OOD', 'Computer Vision', 'PyTorch'],
  },
  {
    icon: FlaskConical, role: 'Research Intern, ML', company: 'IIM Shillong', date: '2025 - Present', present: true, accent: 'text-white bg-sky-600',
    desc: 'Domain-adapted BiLSTM + GloVe on 162K CFPB complaints at 88.1% accuracy, matching a fine-tuned DistilBERT at a fraction of the cost. First-author paper submitted to Decision Support Systems (Elsevier, Q1).',
    tags: ['NLP', 'Research', 'PyTorch'],
  },
  {
    icon: Code2, role: 'Full Stack Developer Intern', company: 'InsightKnox', date: '2025 - 2026', present: false, accent: 'text-white bg-indigo-600',
    desc: 'Maintained and redesigned the company website end to end: UI/UX improvements, feature work, frontend and backend logic, plus performance and security optimization.',
    tags: ['React', 'Full-stack', 'Web'],
  },
];

const BentoGrid: React.FC = () => {
  return (
    <section id="work" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <Reveal className="mb-12">
        <Badge variant="lime">Career path</Badge>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-zen-black dark:text-white">Six roles, one throughline.</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">Founder, engineer, and researcher, often at the same time. The common thread: turning ideas into things that ship.</p>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[11px] md:left-3 top-1 bottom-1 w-0.5 bg-gradient-to-b from-zen-lime via-gray-300 dark:via-gray-700 to-transparent" />
        <div className="space-y-6">
          {roles.map((r, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
              <div className="relative pl-10 md:pl-14">
                <div className="absolute left-0 md:left-1 top-7">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {r.present && <span className="absolute inline-flex h-full w-full rounded-full bg-zen-lime opacity-60 animate-ping" />}
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-zen-bg dark:border-zen-black ${r.present ? 'bg-zen-lime' : 'bg-gray-400 dark:bg-gray-600'}`} />
                  </span>
                </div>
                <motion.div whileHover={{ y: -4 }} className="group bg-white dark:bg-zen-dark-card rounded-3xl p-6 md:p-7 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:border-zen-lime/40">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${r.accent} transition-transform group-hover:scale-110`}><r.icon className="w-5 h-5" /></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-bold text-zen-black dark:text-white leading-tight">{r.role}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{r.company}</p>
                    </div>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ${r.present ? 'bg-zen-lime/20 text-zen-black dark:text-zen-lime' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>{r.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {r.tags.map((t) => <Badge key={t} variant="light">{t}</Badge>)}
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education + Leadership */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal className="md:col-span-2 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-zen-black dark:bg-[#111] text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border dark:border-gray-800">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center"><GraduationCap className="w-5 h-5 text-zen-lime" /></div>
                <span className="font-mono text-zen-lime text-sm">Education</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Andhra University College of Engineering</h3>
              <p className="text-gray-400">B.Tech, Information Technology · GATE 2026 qualified</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-4xl font-mono font-bold text-zen-lime">8.0</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">CGPA / 10</p>
              <p className="text-xs text-gray-500 mt-1">2023 - 2027</p>
            </div>
          </motion.div>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-1 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4"><ShieldHalf className="w-7 h-7 text-blue-600 dark:text-zen-lime" /></div>
            <h3 className="text-lg font-bold text-zen-black dark:text-white">Cybersecurity Co-Lead</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">GDGoC, Andhra University</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1"><Users className="w-3 h-3" /> Mentored 200+ students</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default BentoGrid;
