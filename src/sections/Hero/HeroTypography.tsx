import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const HeroTypography: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const statementLines = ['GROWING', 'A BETTER', 'TOMORROW.'];

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-7 max-w-5xl select-none">
      {/* Refined Brand Identity Eyebrow */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: TRANSITION_EASINGS.editorial }}
          className="inline-flex items-center gap-2.5 px-3 py-1 bg-botanical-950/80 backdrop-blur-md border border-earth-gold/30 rounded-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-earth-gold" aria-hidden="true" />
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-earth-gold font-medium uppercase">
            GURU AGRO PRODUCTS
          </span>
        </motion.div>
      </div>

      {/* Monumental Primary Statement */}
      <h1 className="font-display font-medium text-ivory-100 uppercase tracking-[-0.03em] leading-[0.92] text-[clamp(2.35rem,8vw,7.5rem)]">
        {statementLines.map((line, lineIndex) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: prefersReduced ? 0 : '110%', opacity: prefersReduced ? 1 : 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: prefersReduced ? 0 : 0.8,
                delay: prefersReduced ? 0 : 0.3 + lineIndex * 0.12,
                ease: TRANSITION_EASINGS.editorial,
              }}
            >
              {line === 'TOMORROW.' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                  {line}
                </span>
              ) : (
                line
              )}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
};
