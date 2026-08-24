import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const IntroStatement: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const lines = [
    { text: 'MORE THAN', highlight: false },
    { text: 'AGRICULTURE.', highlight: false },
    { text: 'WE CULTIVATE', highlight: false },
    { text: 'POSSIBILITIES.', highlight: true },
  ];

  return (
    <div className="py-20 sm:py-28 md:py-32 bg-ivory-100 text-botanical-950 relative overflow-hidden">
      {/* Architectural Background Grid Texture in Warm Ivory Tone */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,rgba(6,18,12,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,18,12,0.8)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Container size="architectural" className="relative z-10">
        <div className="max-w-5xl space-y-6">
          {/* Eyebrow */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-ivory-200/80 border border-botanical-800/15 rounded-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-botanical-700" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-botanical-800 font-medium uppercase">
                THE GURU AGRO PHILOSOPHY
              </span>
            </motion.div>
          </div>

          {/* Monumental 4-line Editorial Statement */}
          <h2 className="font-display font-medium text-botanical-950 uppercase tracking-[-0.03em] leading-[0.94] text-[clamp(2.5rem,7.5vw,6.5rem)] select-none">
            {lines.map((line, idx) => (
              <span key={line.text} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: prefersReduced ? 0 : 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.7,
                    delay: prefersReduced ? 0 : idx * 0.08,
                    ease: TRANSITION_EASINGS.editorial,
                  }}
                >
                  {line.highlight ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-botanical-900 via-botanical-800 to-earth-gold">
                      {line.text}
                    </span>
                  ) : (
                    line.text
                  )}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Narrative Ground Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: TRANSITION_EASINGS.editorial }}
            className="pt-4 max-w-2xl"
          >
            <p className="text-base sm:text-lg md:text-xl font-sans text-sand-700 font-normal leading-relaxed">
              Guru Agro Products is not merely an assortment of farm plots. We operate as an interconnected living ecosystem—integrating biological soil fertility, silkworm sericulture, freshwater aquaculture, and native dairy into an enduring closed loop.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
