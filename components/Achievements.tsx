import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="blog" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
       <div className="flex items-center gap-3 mb-8">
         <div className="p-2 bg-zen-lime rounded-full">
            <Trophy className="w-6 h-6 text-zen-black" />
         </div>
         <h2 className="text-3xl md:text-4xl font-bold text-zen-black dark:text-white">Key Achievements</h2>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievement 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-zen-dark-card rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group transition-colors"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-zen-lime/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
             
             <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-zen-black/5 dark:bg-white/10 text-xs font-mono font-bold mb-4 text-zen-black dark:text-gray-300">
                  Apr 2025
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-zen-black dark:text-white">2nd Position – National Cybersecurity Bootcamp</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Andhra University & ISEA (Sponsored by MeitY, Govt. of India)</p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  Secured 2nd place and Rs. 5,000 prize among 150+ participants. Built a browser extension to detect phishing websites, implementing real-time alerts and user whitelist management to protect users from malicious content.
                </p>
             </div>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-zen-dark-card rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group transition-colors"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
             
             <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-zen-black/5 dark:bg-white/10 text-xs font-mono font-bold mb-4 text-zen-black dark:text-gray-300">
                  Sep 2025
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-zen-black dark:text-white">Qualified – MumbaiHacks 2025</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Tech Entrepreneurs Association of Mumbai (TEAM) • NESCO</p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  Participated in the second round of MumbaiHacks 2025, the world’s largest Agentic AI hackathon with 3,000+ innovators, building a Machine Learning project under the Misinformation track.
                </p>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default Achievements;