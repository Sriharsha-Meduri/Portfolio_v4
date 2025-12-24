import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck } from 'lucide-react';
import Button from './Button';
import heroImg from './Hero.jpg';
import resume from './Resume13.pdf';

const Hero: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 pt-20 pb-12 md:pt-32 md:pb-24 scroll-mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-zen-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-green-600 dark:text-zen-lime">● Open to Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zen-black dark:text-white">
            MLOps<br/>
            Engineer &<br/>
            <span className="text-gray-500 dark:text-gray-400">Web Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed font-sans">
            I'm <strong>Sriharsha Meduri</strong>. I build production-grade AI models and secure web applications. 
            Blending Machine Learning with Cybersecurity to create resilient tech.
          </p>

          <div className="flex flex-wrap gap-4">
             {/* Swapped positions: View GitHub first, Contact Me second */}
            <Button variant="outline" href={resume} download="Sriharsha_Meduri_Resume.pdf">Download CV</Button>
            <Button variant="secondary" href="mailto:sriharshameduri07@gmail.com">Contact Me</Button>
          </div>
        </motion.div>

        {/* Right Content - Visual Representation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full bg-zen-lime rounded-3xl md:rounded-4xl p-6 md:p-8 flex flex-col justify-between overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full blur-3xl -mr-12 -mt-12 md:-mr-16 md:-mt-16 pointer-events-none"></div>
          
          {/* Replaced floating cards with practical code/security element */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="self-start z-10"
          >
            <div className="bg-zen-black/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-2xl border border-white/10 w-56 md:w-64">
              <div className="flex items-center justify-between mb-2 md:mb-3 border-b border-white/10 pb-2">
                 <div className="flex gap-1.5">
                   <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500"></div>
                   <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500"></div>
                   <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500"></div>
                 </div>
                 <Terminal size={12} className="text-gray-500" />
              </div>
              <div className="font-mono text-[9px] md:text-[10px] space-y-1">
                {/* <p className="text-green-400">$ ./scan_vulnerabilities.sh</p> */}
                <p className="text-gray-300">Target: <span className="text-blue-400">production_api</span></p>
                {/* <p className="text-gray-300">Scanning ports...</p> */}
                {/* <p className="text-gray-300">Analyzing ML model weights...</p>
                <p className="text-zen-lime font-bold">✓ System Secure</p> */}
              </div>
            </div>
          </motion.div>

          {/* Main Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative rounded-full border-4 border-white shadow-2xl overflow-hidden bg-zen-black">
               <img 
                 src={heroImg}
                 alt="Sriharsha Meduri" 
                 className="w-full h-full object-cover object-[70%_30%] opacity-90 hover:scale-110 transition-transform duration-700"
               />
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="self-end z-10"
          >
            <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-[240px]">
              <div className="p-2 md:p-3 bg-blue-100 rounded-full">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase">Status</p>
                <p className="font-bold text-xs md:text-sm text-zen-black">Building Secure AI</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;