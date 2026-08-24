import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const ProjectsToAboutTransition: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-20 sm:py-28 bg-gradient-to-b from-botanical-950 via-botanical-900 to-botanical-950 text-ivory-100 relative overflow-hidden border-t border-ivory-200/10">
      <Container size="architectural">
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-earth-gold font-medium"
          >
            CHAPTER // 05 — ETHOS &amp; LEADERSHIP
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: TRANSITION_EASINGS.editorial }}
            className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-ivory-100 uppercase tracking-tight"
          >
            ABOUT GURU AGRO PRODUCTS
          </motion.h3>

          <motion.div
            initial={{ scaleX: prefersReduced ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: TRANSITION_EASINGS.editorial }}
            className="w-16 h-[1px] bg-earth-gold/40 origin-center"
            aria-hidden="true"
          />
        </div>
      </Container>
    </div>
  );
};
