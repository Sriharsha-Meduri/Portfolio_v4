import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProjectHighlight from './components/ProjectHighlight';
import Achievements from './components/Achievements';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen font-sans selection:bg-zen-lime selection:text-zen-black bg-zen-bg dark:bg-zen-black text-zen-black dark:text-white transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex flex-col gap-8 md:gap-16">
        <Hero />
        <BentoGrid />
        <ProjectHighlight />
        <Achievements />
        <SkillsList />
      </main>

      <Footer />
    </div>
  );
};

export default App;