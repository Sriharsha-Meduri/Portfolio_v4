import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { SkillGroup } from '../types';
import { Reveal, Marquee } from './effects';

const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
  { category: 'Web Development', skills: ['React', 'Next.js', 'Vite', 'FastAPI', 'Django', 'Tailwind CSS', 'Framer Motion', 'Node.js'] },
  { category: 'Machine Learning / AI', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'OpenCV', 'ONNX', 'CLIP', 'GNN', 'YOLO'] },
  { category: 'DevOps & Infra', skills: ['Docker', 'AWS', 'GCP', 'Vercel', 'HF Spaces', 'REST APIs', 'GitHub Actions'] },
];

const competencies = [
  'I turn ML research into deployed products - APIs, front-ends, and browser extensions people actually use.',
  'Comfortable across the whole stack: a PyTorch model one day, a React + Tailwind interface the next.',
  'Obsessed with shipping - honest metrics, explainable outputs, and real deploys that fit free tiers.',
];

const marqueeTech = ['Python', 'PyTorch', 'DistilBERT', 'FastAPI', 'React', 'TypeScript', 'ONNX', 'OpenCV', 'CLIP', 'YOLO', 'Docker', 'Tailwind', 'Vite', 'Hugging Face', 'Framer Motion'];

const SkillsList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-zen-black dark:text-white">Technical arsenal</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">The toolkit behind everything above - full-stack, ML, and the ops to ship it.</p>
          <div className="space-y-5">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">How I work</h3>
            {competencies.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-zen-lime flex-shrink-0 mt-0.5" />
                <p className="text-zen-black dark:text-gray-300 text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-3">
            {skillGroups.map((group, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center py-4 text-left group">
                  <span className="font-display font-bold text-lg md:text-xl text-zen-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-zen-lime transition-colors">{group.category}</span>
                  <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-zen-lime text-zen-black' : 'bg-gray-100 dark:bg-gray-800 text-zen-black dark:text-white'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="pt-1 pb-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300 hover:border-zen-lime hover:-translate-y-0.5 transition-all">
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tech marquee */}
      <div className="mt-16">
        <Marquee items={marqueeTech.map((t) => (
          <span className="font-display text-3xl md:text-5xl font-bold text-zen-black/15 dark:text-white/15 hover:text-zen-lime dark:hover:text-zen-lime transition-colors px-2">{t}</span>
        ))} />
      </div>
    </section>
  );
};

export default SkillsList;
