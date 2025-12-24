import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, Server, LayoutDashboard, Users, Github, ExternalLink } from 'lucide-react';
import Button from './Button';

const ProjectHighlight: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <div className="bg-white dark:bg-zen-dark-card rounded-4xl p-8 md:p-12 overflow-hidden relative shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                 <span className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400">FEATURED PROJECT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zen-black dark:text-white">PhishingLens</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Multi-Modal Phishing Detection System</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A production-grade AI system achieving 96% detection accuracy with sub-50ms response times. 
              Leverages DistilBERT transformers for NLP and YOLOv5/v8 for visual brand detection to protect users from malicious attacks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <Zap className="w-6 h-6 mb-2 text-zen-black dark:text-zen-lime" />
                <p className="font-bold text-lg text-zen-black dark:text-white">50ms</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Response Time</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <Users className="w-6 h-6 mb-2 text-zen-black dark:text-zen-lime" />
                <p className="font-bold text-lg text-zen-black dark:text-white">5,000+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Users Protected</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <Server className="w-6 h-6 mb-2 text-zen-black dark:text-zen-lime" />
                <p className="font-bold text-lg text-zen-black dark:text-white">99.9%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Uptime (K8s)</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <Lock className="w-6 h-6 mb-2 text-zen-black dark:text-zen-lime" />
                <p className="font-bold text-lg text-zen-black dark:text-white">4-Source</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Threat Fusion</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" href="https://github.com/Sriharsha-Meduri/PhishingLens-frontend">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
              <Button variant="primary" href="https://phishinglensai.netlify.app/">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Abstract visual for the dashboard */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-zen-black rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden border-8 border-gray-100 dark:border-gray-700 shadow-2xl">
              
              {/* Mock UI Elements */}
              <div className="absolute top-0 w-full h-12 bg-gray-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 w-64 h-6 bg-gray-700 rounded-md"></div>
              </div>

              <motion.div 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full mt-10 space-y-4"
              >
                <div className="flex justify-between items-center text-white mb-8">
                  <h3 className="font-mono text-xl">Threat Monitor</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Live</span>
                </div>
                
                {/* Graph Bars */}
                <div className="flex items-end justify-between h-40 gap-2 px-4">
                  {[40, 70, 45, 90, 60, 85, 96].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-t-md ${i === 6 ? 'bg-zen-lime' : 'bg-gray-700'}`}
                    />
                  ))}
                </div>

                <div className="bg-gray-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Lock className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Phishing Attempt Blocked</p>
                    <p className="text-gray-400 text-xs font-mono">IP: 192.168.1.X • DistilBERT Score: 0.98</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;