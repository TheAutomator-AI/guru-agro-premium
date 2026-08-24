import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.04,
}) => {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  if (prefersReduced) {
    return <Component className={className}>{text}</Component>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: TRANSITION_EASINGS.editorial,
      },
    },
  };

  return (
    <Component className={className} aria-label={text}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
