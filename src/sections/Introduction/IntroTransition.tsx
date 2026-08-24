import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const IntroTransition: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-full bg-gradient-to-b from-botanical-950 via-botanical-900 to-ivory-100 py-16 sm:py-24 overflow-hidden">
      <Container size="architectural">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-earth-gold font-medium"
          >
            CHAPTER // 01 — THE LIVING CONTINUUM
          </motion.span>

          <motion.div
            initial={{ scaleX: prefersReduced ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: TRANSITION_EASINGS.editorial }}
            className="w-16 h-[1px] bg-earth-gold/40 origin-center"
            aria-hidden="true"
          />
        </div>
      </Container>
    </div>
  );
};
