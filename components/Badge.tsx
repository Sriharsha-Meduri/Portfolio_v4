import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'lime';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'light' }) => {
  const styles = {
    dark: "bg-zen-black text-white border-zen-black dark:bg-white dark:text-zen-black dark:border-white",
    light: "bg-white text-zen-black border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700",
    lime: "bg-zen-lime text-zen-black border-zen-lime"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${styles[variant]} inline-block`}>
      {children}
    </span>
  );
};

export default Badge;