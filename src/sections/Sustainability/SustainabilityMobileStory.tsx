import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

interface StoryStep {
  id: string;
  number: string;
  word: string;
  copy: string;
  videoSrc?: string;
  poster: string;
  mediaAlt: string;
}

const SUSTAINABILITY_STEPS: StoryStep[] = [
  {
    id: 'soil',
    number: '01',
    word: 'SOIL',
    copy: 'Where cultivation begins.',
    videoSrc: '/media/video/V02-crops.mp4',
    poster: '/media/agriculture/organic-cultivation.svg',
    mediaAlt: 'Living soil and organic crops',
  },
  {
    id: 'water',
    number: '02',
    word: 'WATER',
    copy: 'A foundation for life and agriculture.',
    videoSrc: '/media/video/V05-fisheries.mp4',
    poster: '/media/fisheries/sustainable-aquaculture.svg',
    mediaAlt: 'Freshwater ponds and sustainable aquatic ecosystems',
  },
  {
    id: 'biodiversity',
    number: '03',
    word: 'BIODIVERSITY',
    copy: 'A living agricultural ecosystem.',
    videoSrc: '/media/video/V01-hero.mp4',
    poster: '/media/projects/agro-forestry-model.svg',
    mediaAlt: 'Agroforestry biodiversity and multi-tier canopy',
  },
  {
    id: 'people',
    number: '04',
    word: 'PEOPLE',
    copy: 'The human element behind cultivation.',
    videoSrc: '/media/video/V03-human.mp4',
    poster: '/media/livestock/country-poultry.svg',
    mediaAlt: 'Cultivators and agrarian stewardship',
  },
  {
    id: 'future',
    number: '05',
    word: 'FUTURE',
    copy: 'Agriculture continues to evolve.',
    videoSrc: '/media/video/V06-harvest.mp4',
    poster: '/media/agriculture/paddy-cereals.svg',
    mediaAlt: 'Sustainable harvest and agricultural renewal',
  },
];

export const SustainabilityMobileStory: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-12 sm:py-16 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural" className="space-y-16 sm:space-y-20">
        {SUSTAINABILITY_STEPS.map((step) => (
          <article
            key={step.id}
            className="space-y-6 border-b border-ivory-200/10 pb-16 last:border-b-0"
          >
            {/* Header: Pillar Number & Word */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-earth-gold tracking-widest uppercase block">
                PILLAR // {step.number}
              </span>
              <h3 className="font-display font-medium text-4xl sm:text-5xl text-ivory-100 uppercase tracking-tight">
                {step.word}
              </h3>
              <p className="font-serif-editorial text-xl sm:text-2xl text-sand-200 tracking-tight leading-snug">
                {step.copy}
              </p>
            </div>

            {/* Media Window */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
            >
              <MediaFrame tag={`PILLAR // ${step.number} — ${step.word}`} borderColor="gold">
                {step.videoSrc ? (
                  <LazyVideo
                    src={step.videoSrc}
                    poster={step.poster}
                    aspectRatio="16/9"
                    cursorText="VIEW"
                    className="rounded-none"
                  />
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-900">
                    <img
                      src={step.poster}
                      alt={step.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </MediaFrame>
            </motion.div>
          </article>
        ))}
      </Container>
    </div>
  );
};
