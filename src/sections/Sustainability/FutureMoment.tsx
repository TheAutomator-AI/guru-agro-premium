import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { Container, Button } from '../../components/ui';
import { useSmoothScroll } from '../../components/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const FutureMoment: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  const lines = ['THE FUTURE', 'IS CULTIVATED.'];

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-botanical-950 via-botanical-900 to-botanical-950 text-ivory-100 relative overflow-hidden border-t border-ivory-200/10">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(248,245,238,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,245,238,0.5)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <Container size="architectural" className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-botanical-850 border border-earth-gold/30 rounded-sm"
            >
              <Compass className="w-3.5 h-3.5 text-earth-gold" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-earth-gold font-medium uppercase">
                FORWARD VISION
              </span>
            </motion.div>
          </div>

          {/* Monumental 2-line Statement: THE FUTURE IS CULTIVATED. */}
          <h2 className="font-display font-medium text-[clamp(2.75rem,8vw,6.5rem)] text-ivory-100 uppercase tracking-[-0.03em] leading-[0.92] select-none">
            {lines.map((line, idx) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: prefersReduced ? 0 : 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.7,
                    delay: prefersReduced ? 0 : idx * 0.1,
                    ease: TRANSITION_EASINGS.editorial,
                  }}
                >
                  {line === 'IS CULTIVATED.' ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Narrative Ground */}
          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: TRANSITION_EASINGS.editorial }}
            className="text-base sm:text-lg md:text-xl font-sans text-sand-300 font-normal leading-relaxed max-w-2xl"
          >
            Sustainable agriculture is not a static endpoint, but a continuous daily practice of observation, biological replenishment, and long-term environmental stewardship.
          </motion.p>

          {/* Transition CTA toward Projects */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: TRANSITION_EASINGS.editorial }}
            className="pt-4 flex items-center gap-4"
          >
            <Button
              variant="gold"
              size="lg"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#projects');
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Projects
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
