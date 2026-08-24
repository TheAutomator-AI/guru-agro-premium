import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const ProjectsHeader: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="pt-20 sm:pt-28 pb-8 bg-botanical-950 text-ivory-100 relative overflow-hidden">
      <Container size="architectural">
        <div className="max-w-4xl space-y-4">
          {/* Eyebrow */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-botanical-900 border border-earth-gold/30 rounded-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-earth-gold" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-earth-gold font-medium uppercase">
                SELECTED INITIATIVES
              </span>
            </motion.div>
          </div>

          {/* Monumental Title: OUR PROJECTS */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: prefersReduced ? 0 : 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
              className="font-display font-medium text-[clamp(2.75rem,8vw,6.5rem)] text-ivory-100 uppercase tracking-[-0.03em] leading-[0.92] select-none"
            >
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                PROJECTS
              </span>
            </motion.h2>
          </div>

          {/* Editorial Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: TRANSITION_EASINGS.editorial }}
            className="pt-1 max-w-2xl"
          >
            <p className="font-serif-editorial text-2xl sm:text-3xl text-ivory-200 tracking-tight leading-snug">
              Demonstration grounds &amp; agro-ecological reserves.
            </p>
            <p className="font-sans text-sm sm:text-base text-sand-300 leading-relaxed mt-2">
              Explore our active demonstration models showcasing integrated multi-tier agroforestry, living pedological regeneration, and sustainable crop architectures in Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
