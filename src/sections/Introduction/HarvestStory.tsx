import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const HarvestStory: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const sequenceSteps = [
    { step: '01', label: 'CULTIVATE', desc: 'Preparing living soil with organic inoculants and companion roots.' },
    { step: '02', label: 'GROW', desc: 'Natural sunlight, rainwater recharge, and zero synthetic intervention.' },
    { step: '03', label: 'HARVEST', desc: 'Nutrient-dense yields harvested at peak physiological maturity.' },
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-botanical-950 text-ivory-100 relative overflow-hidden">
      <Container size="architectural" className="space-y-12">
        {/* Conceptual 3-Step Sequence Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-ivory-200/10 pb-8">
          {sequenceSteps.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: TRANSITION_EASINGS.editorial }}
              className="space-y-2 relative"
            >
              <div className="flex items-center justify-between text-xs font-mono text-earth-gold">
                <span>STAGE // {item.step}</span>
                {idx < 2 && <span className="hidden md:block text-sand-500">→</span>}
              </div>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-ivory-100 tracking-tight">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-sand-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Wide Panoramic Video Anchor */}
        <div>
          <MediaFrame tag="V06 // SEASONAL HARVEST & ABUNDANCE" borderColor="gold">
            <LazyVideo
              src="/media/video/V06-harvest.mp4"
              poster="/media/agriculture/paddy-cereals.svg"
              aspectRatio="21/9"
              cursorText="VIEW HARVEST"
              className="rounded-none"
            />
          </MediaFrame>
        </div>
      </Container>
    </div>
  );
};
