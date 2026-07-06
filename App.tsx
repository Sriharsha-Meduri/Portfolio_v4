import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';
import { Aurora } from './components/effects';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans selection:bg-zen-lime selection:text-zen-black text-zen-black dark:text-white transition-colors duration-300">
      <Aurora />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main className="relative z-10 flex flex-col gap-6 md:gap-16">
        <Hero />
        <BentoGrid />
        <Projects />
        <Achievements />
        <SkillsList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
