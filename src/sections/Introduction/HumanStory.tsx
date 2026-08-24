import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const HumanStory: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const humanLines = [
    'THE LAND',
    'IS NOTHING',
    'WITHOUT',
    'THE PEOPLE',
    'WHO CULTIVATE IT.',
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-botanical-900 text-ivory-100 relative overflow-hidden border-t border-b border-ivory-200/10">
      <Container size="architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Cinematic Human Video */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <MediaFrame tag="V03 // AGRONOMIC STEWARDSHIP" borderColor="gold">
              <LazyVideo
                src="/media/video/V03-human.mp4"
                poster="/media/projects/agro-forestry-model.svg"
                aspectRatio="4/3"
                cursorText="VIEW STORY"
                className="rounded-none"
              />
            </MediaFrame>
          </div>

          {/* Right Poetic Statement */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-botanical-850 border border-earth-gold/30 text-earth-gold font-mono text-xs uppercase tracking-widest rounded-sm">
                HUMAN ELEMENT
              </span>
              <span className="font-mono text-xs text-sand-400 uppercase tracking-wider">
                GENERATIONAL DEDICATION
              </span>
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-100 uppercase tracking-tight leading-[0.96]">
              {humanLines.map((line, idx) => (
                <span key={line} className="block overflow-hidden pb-[0.04em]">
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
                    {line === 'THE PEOPLE' || line === 'WHO CULTIVATE IT.' ? (
                      <span className="text-earth-gold">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h2>

            <p className="text-sand-300 font-sans text-base sm:text-lg leading-relaxed pt-2 max-w-xl">
              Farming is a discipline of profound patience and observation. Our cultivators, field technicians, and sericulture caretakers nurture every plant and organism with generational respect for natural biological rhythms.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
