import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { AGRICULTURE_CATEGORIES } from '../../data';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { formatIndex } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const MobileEcosystem: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-12 sm:py-16 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural" className="space-y-16 sm:space-y-20">
        {AGRICULTURE_CATEGORIES.map((cat, index) => (
          <article
            key={cat.id}
            className="space-y-6 border-b border-ivory-200/10 pb-16 last:border-b-0"
          >
            {/* Header: Number & Category Title */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-earth-gold tracking-widest uppercase block">
                DISCIPLINE // {formatIndex(index + 1)}
              </span>
              <h3 className="font-display font-medium text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight">
                {cat.title}
              </h3>
              <p className="font-mono text-xs text-sand-400 uppercase tracking-wider">
                {cat.subtitle}
              </p>
            </div>

            {/* Media Window */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
            >
              <MediaFrame tag={`DIV-${formatIndex(index + 1)} // ${cat.division}`} borderColor="gold">
                {cat.videoSrc ? (
                  <LazyVideo
                    src={cat.videoSrc}
                    poster={cat.mediaPlaceholder}
                    aspectRatio="16/9"
                    cursorText="VIEW"
                    className="rounded-none"
                  />
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-900">
                    <img
                      src={cat.mediaPlaceholder}
                      alt={cat.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </MediaFrame>
            </motion.div>

            {/* Description & Focus Pillars */}
            <div className="space-y-4 pt-2">
              <p className="text-sm sm:text-base font-sans text-sand-300 leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.focusPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-botanical-900 border border-botanical-750/60 rounded text-xs font-mono text-earth-gold"
                  >
                    <Sparkles className="w-3 h-3 text-botanical-400 shrink-0" />
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </div>
  );
};
