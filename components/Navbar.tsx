import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#blog' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zen-bg/80 dark:bg-zen-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zen-black dark:bg-zen-lime rounded-lg flex items-center justify-center transition-colors">
            <span className="text-zen-lime dark:text-zen-black font-bold font-mono">S</span>
          </div>
          <span className="font-bold text-lg hidden sm:block text-zen-black dark:text-white">Sriharsha</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zen-black dark:text-gray-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-zen-black dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden md:block">
            <Button variant="primary" className="!py-2 !px-4 !rounded-lg text-xs" href="mailto:sriharshameduri07@gmail.com">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zen-black dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zen-black border-b border-gray-200 dark:border-gray-800 py-6 px-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-lg font-medium text-zen-black dark:text-gray-300 hover:text-zen-lime transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <Button variant="primary" className="w-full" href="mailto:sriharshameduri07@gmail.com">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;