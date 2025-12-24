import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';
import { SkillGroup } from '../types';

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C"]
  },
  {
    category: "Web Development",
    skills: ["React", "FastAPI", "Django", "Vite", "TailwindCSS", "HTML/CSS"]
  },
  {
    category: "Machine Learning / AI",
    skills: ["PyTorch", "Scikit-learn", "Transformers", "TensorFlow", "GNN", "ONNX"]
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Microservices", "REST APIs", "CI/CD", "MySQL"]
  }
];

const SkillsList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-zen-black dark:text-white">Technical Arsenal</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            A comprehensive toolkit enabling full-stack development and advanced AI model deployment. 
            Constantly expanding into new technologies.
          </p>
          
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Core Competencies</h3>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zen-lime flex-shrink-0" />
              <p className="text-zen-black dark:text-gray-300">Specialized in building robust deep learning models for NLP and Computer Vision.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zen-lime flex-shrink-0" />
              <p className="text-zen-black dark:text-gray-300">Experienced in securing web applications against modern threat vectors.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zen-lime flex-shrink-0" />
              <p className="text-zen-black dark:text-gray-300">Passionate about scalable architecture and writing clean, maintainable code.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {skillGroups.map((group, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="font-bold text-lg md:text-xl text-zen-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {group.category}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-zen-lime text-zen-black' : 'bg-gray-100 dark:bg-gray-800 text-zen-black dark:text-white'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsList;