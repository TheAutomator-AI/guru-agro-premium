import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { fadeUpVariants, getMotionVariants } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FadeUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
  ...props
}) => {
  const prefersReduced = useReducedMotion();
  const variants = getMotionVariants(fadeUpVariants, prefersReduced);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
