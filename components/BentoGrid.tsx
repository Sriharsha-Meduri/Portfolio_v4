import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Users } from 'lucide-react';
import Badge from './Badge';
import gdscImg from './GDSC.png';

const BentoGrid: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <div className="mb-12 flex justify-between items-end">
        <div>
           <Badge variant="lime">Career Path</Badge>
           <h2 className="text-3xl md:text-4xl font-bold mt-4 text-zen-black dark:text-white">Experience & Education</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Main Internship (Large) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-zen-lime rounded-3xl p-8 flex flex-col justify-between min-h-[320px]"
        >
          <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <Briefcase className="w-6 h-6 text-zen-black" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-zen-black">Machine Learning Intern</h3>
            <p className="font-mono text-sm mb-4 text-zen-black">iMerit Technology • Present</p>
            <p className="text-sm leading-relaxed opacity-80 text-zen-black">
              Supporting Fortune 500 AI projects in CV & NLP. Optimizing annotation pipelines for autonomous vehicles and medical AI.
            </p>
          </div>
          <div className="mt-6 flex gap-2">
             <span className="px-3 py-1 bg-white/40 rounded-full text-xs font-bold text-zen-black">DataStudio</span>
             <span className="px-3 py-1 bg-white/40 rounded-full text-xs font-bold text-zen-black">Ango Hub</span>
          </div>
        </motion.div>

        {/* Card 2: Research (White) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-sm transition-colors"
        >
          <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
            <Code2 className="w-6 h-6 text-zen-black dark:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-zen-black dark:text-white">ML Research Intern</h3>
            <p className="font-mono text-sm mb-4 text-gray-500 dark:text-gray-400">IIM Shillong • Present</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Drafting research on Deep Learning for text classification (LSTM/BiGRU). Achieved 83% F1-score on customer datasets.
            </p>
          </div>
          <div className="mt-6">
             <Badge variant="light">PyTorch</Badge>
             <Badge variant="light">Scikit-learn</Badge>
             <Badge variant="light">NLP</Badge>
          </div>
        </motion.div>

        {/* Card 3: Web Dev (White) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-sm transition-colors"
        >
          <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
            <Users className="w-6 h-6 text-zen-black dark:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-zen-black dark:text-white">Web Dev Intern</h3>
            <p className="font-mono text-sm mb-4 text-gray-500 dark:text-gray-400">InsightKnox • Present</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Built responsive React components. Reduced page load by 35% via lazy loading. Improved mobile retention by 22%.
            </p>
          </div>
          <div className="mt-6">
             <Badge variant="light">React</Badge>
             <Badge variant="light">Tailwind CSS</Badge>
             <Badge variant="light">Django</Badge>
             <Badge variant="light">PostgreSQL</Badge>
          </div>
        </motion.div>

        {/* Card 4: Education (Wide) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-zen-black dark:bg-[#111] text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border dark:border-gray-800"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-zen-lime" />
              </div>
              <span className="font-mono text-zen-lime">Education</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Andhra University College of Engineering</h3>
            <p className="text-gray-400">B.Tech in Information Technology</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-4xl font-mono font-bold text-zen-lime">8.0</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest">CGPA / 10</p>
            <p className="text-xs text-gray-500 mt-2">2023 - 2027</p>
          </div>
        </motion.div>

        {/* Card 5: Leadership */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-white dark:bg-zen-dark-card rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm transition-colors"
        >
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
            <img src={gdscImg} alt="GDSC" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold text-zen-black dark:text-white">GDSC Co-Lead</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Cybersecurity Chapter</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">Mentored 200+ Students</p>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;