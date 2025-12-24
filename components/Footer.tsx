import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-zen-black mt-12 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <h3 className="text-xl font-bold mb-1 text-zen-black dark:text-white">Sriharsha Meduri</h3>
           <p className="text-gray-500 dark:text-gray-400 text-sm">Building the future of AI & Web.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/Sriharsha-Meduri" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-zen-black hover:text-white dark:hover:bg-white dark:hover:text-zen-black transition-all text-zen-black dark:text-white">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/sriharsha-meduri" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-zen-black dark:text-white">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sriharshameduri07@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-all text-zen-black dark:text-white">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;