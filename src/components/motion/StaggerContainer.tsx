import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { staggerContainerVariants, getMotionVariants } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.12,
  delayChildren = 0.08,
  className = '',
  ...props
}) => {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? getMotionVariants(staggerContainerVariants, true)
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
