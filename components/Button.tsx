import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  download?: string | boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, href, className = '', download }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all duration-300";
  
  const variants = {
    primary: "bg-zen-black text-white hover:bg-gray-800 dark:bg-zen-lime dark:text-zen-black dark:hover:bg-lime-400",
    secondary: "bg-zen-lime text-zen-black hover:brightness-105 dark:bg-white dark:text-zen-black dark:hover:bg-gray-200",
    outline: "border-2 border-zen-black text-zen-black hover:bg-zen-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zen-black"
  };

  const content = (
    <>
      {children}
      {/* Hide arrow if it's not a link or if explicitly desired not to have it, but for now we keep it consistent */}
      <ArrowUpRight className="ml-2 w-4 h-4" />
    </>
  );

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer", download } : { onClick };

  return (
    // @ts-ignore
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </Component>
  );
};

export default Button;