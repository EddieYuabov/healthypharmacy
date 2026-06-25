'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className = '',
  hover = true,
  glass = false,
}: CardProps) {
  const baseClasses = glass
    ? 'rounded-3xl border border-white/20 bg-white/70 shadow-soft-lg backdrop-blur-xl'
    : 'rounded-3xl border border-slate-200/70 bg-white shadow-soft-lg';

  return (
    <motion.div
      className={`${baseClasses} ${className}`.trim()}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px rgba(0, 0, 0, 0.08)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
