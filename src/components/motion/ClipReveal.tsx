import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clipRevealVariants, getMotionVariants } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ClipRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  delay = 0,
  className = '',
  ...props
}) => {
  const prefersReduced = useReducedMotion();
  const variants = getMotionVariants(clipRevealVariants, prefersReduced);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ delay }}
      className={`overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
