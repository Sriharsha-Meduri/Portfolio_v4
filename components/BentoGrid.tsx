import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, FlaskConical, ScanEye, GraduationCap, Users } from 'lucide-react';
import Badge from './Badge';
import { Reveal } from './effects';
import gdscImg from './GDSC.png';

const BentoGrid: React.FC = () => {
  return (
    <section id="work" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <Reveal className="mb-12">
        <Badge variant="lime">Career path</Badge>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-zen-black dark:text-white">Where I've been building</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* OviGuide - featured lime */}
        <Reveal className="md:col-span-1 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-zen-lime rounded-3xl p-8 flex flex-col justify-between min-h-[340px] shadow-lg shadow-zen-lime/20">
            <div className="flex items-center justify-between">
              <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center"><Rocket className="w-6 h-6 text-zen-black" /></div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zen-black/60">Now</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1 text-zen-black">Head of Engineering</h3>
              <p className="font-mono text-sm mb-4 text-zen-black/70">OviGuide · 2026 — Present</p>
              <p className="text-sm leading-relaxed text-zen-black/80">
                Leading an AI counselling co-pilot for engineering admissions. Built an admission-prediction engine spanning 50,000+ college-branch combinations (JoSAA, Comedk, MHT-CET, EAPCET).
              </p>
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white/40 rounded-full text-xs font-bold text-zen-black">120K+ students</span>
              <span className="px-3 py-1 bg-white/40 rounded-full text-xs font-bold text-zen-black">6.5M+ interactions</span>
            </div>
          </motion.div>
        </Reveal>

        {/* IIM Shillong */}
        <Reveal delay={0.06} className="md:col-span-1 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-between min-h-[340px] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center"><FlaskConical className="w-6 h-6 text-zen-black dark:text-white" /></div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-zen-black dark:text-white">Research Intern — ML</h3>
              <p className="font-mono text-sm mb-4 text-gray-500 dark:text-gray-400">IIM Shillong · 2025 — Present</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Domain-adapted BiLSTM + GloVe on 162K CFPB complaints, hitting 88.1% accuracy — within 0.7 pts of a fine-tuned DistilBERT at 12-60x lower cost. First-author paper submitted to <em>Decision Support Systems</em> (Elsevier, Q1).
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['BiLSTM', 'GloVe', 'PyTorch', 'NLP'].map((t) => <Badge key={t} variant="light">{t}</Badge>)}
            </div>
          </motion.div>
        </Reveal>

        {/* iMerit */}
        <Reveal delay={0.12} className="md:col-span-1 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-between min-h-[340px] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center"><ScanEye className="w-6 h-6 text-zen-black dark:text-white" /></div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-zen-black dark:text-white">ML Intern</h3>
              <p className="font-mono text-sm mb-4 text-gray-500 dark:text-gray-400">iMerit Technology · 2025 — 2026</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Built a post-hoc out-of-distribution detection pipeline (MSP, ODIN, Energy-score) for semantic segmentation in autonomous driving — evaluated on KITTI, Fishyscapes, and nuScenes.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['OOD', 'Segmentation', 'PyTorch', 'CV'].map((t) => <Badge key={t} variant="light">{t}</Badge>)}
            </div>
          </motion.div>
        </Reveal>

        {/* Education - wide */}
        <Reveal delay={0.05} className="md:col-span-2 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-zen-black dark:bg-[#111] text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border dark:border-gray-800">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center"><GraduationCap className="w-5 h-5 text-zen-lime" /></div>
                <span className="font-mono text-zen-lime text-sm">Education</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Andhra University College of Engineering</h3>
              <p className="text-gray-400">B.Tech, Information Technology · GATE 2026 qualified</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-4xl font-mono font-bold text-zen-lime">8.0</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">CGPA / 10</p>
              <p className="text-xs text-gray-500 mt-1">2023 — 2027</p>
            </div>
          </motion.div>
        </Reveal>

        {/* GDSC */}
        <Reveal delay={0.1} className="md:col-span-1 h-full">
          <motion.div whileHover={{ y: -5 }} className="h-full bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 overflow-hidden"><img src={gdscImg} alt="GDSC" className="w-full h-full object-cover" /></div>
            <h3 className="text-lg font-bold text-zen-black dark:text-white">GDSC Co-Lead</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Cybersecurity Chapter</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1"><Users className="w-3 h-3" /> Mentored 200+ students</p>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
};

export default BentoGrid;
