import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const CropsStory: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-botanical-950 text-ivory-100 relative overflow-hidden">
      <Container size="architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-botanical-850 border border-earth-gold/30 text-earth-gold font-mono text-xs uppercase tracking-widest rounded-sm">
                PHASE // 01
              </span>
              <span className="font-mono text-xs text-sand-400 uppercase tracking-wider">
                AGRONOMIC CULTIVATION
              </span>
            </div>

            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-ivory-100 uppercase tracking-tight leading-[1.02]">
              CULTIVATION IN LIVING SOIL
            </h2>

            <div className="space-y-4 text-sand-300 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Sustainable agriculture begins with the uncompromised vitality of the soil. By eliminating synthetic chemicals, fertilizers, and toxic pesticides, we cultivate nutrient-dense vegetables, fruits, and heritage grain crops.
              </p>
              <p className="text-sm text-sand-400 leading-relaxed">
                Every crop cycle utilizes organic soil amendments, natural green compost, and beneficial microbial balancing to support long-term ecological resilience.
              </p>
            </div>
          </motion.div>

          {/* Right Cinematic Video Frame */}
          <div className="lg:col-span-7">
            <MediaFrame tag="V02 // LIVING CROPS & HORTICULTURE" borderColor="gold">
              <LazyVideo
                src="/media/video/V02-crops.mp4"
                poster="/media/agriculture/organic-cultivation.svg"
                aspectRatio="16/9"
                cursorText="VIEW CROPS"
                className="rounded-none"
              />
            </MediaFrame>
          </div>
        </div>
      </Container>
    </div>
  );
};
