import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StoryStep {
  id: string;
  number: string;
  word: string;
  copy: string;
  description: string;
  videoSrc: string;
  poster: string;
  mediaAlt: string;
}

const SUSTAINABILITY_STEPS: StoryStep[] = [
  {
    id: 'soil',
    number: '01',
    word: 'SOIL',
    copy: 'Where cultivation begins.',
    description: 'Living soil enriched by organic compost, mycorrhizal networks, and zero synthetic chemical inputs.',
    videoSrc: '/media/video/V02-crops.mp4',
    poster: '/media/agriculture/organic-cultivation.svg',
    mediaAlt: 'Living soil and organic crops',
  },
  {
    id: 'water',
    number: '02',
    word: 'WATER',
    copy: 'A foundation for life and agriculture.',
    description: 'Micro-drip networks, rainwater recharge swales, and biological freshwater filtration.',
    videoSrc: '/media/video/V05-fisheries.mp4',
    poster: '/media/fisheries/sustainable-aquaculture.svg',
    mediaAlt: 'Freshwater ponds and sustainable aquatic ecosystems',
  },
  {
    id: 'biodiversity',
    number: '03',
    word: 'BIODIVERSITY',
    copy: 'A living agricultural ecosystem.',
    description: 'Multi-tiered canopy architecture uniting high coconut palms, fruit trees, and ground cover.',
    videoSrc: '/media/video/V01-hero.mp4',
    poster: '/media/projects/agro-forestry-model.svg',
    mediaAlt: 'Agroforestry biodiversity and multi-tier canopy',
  },
  {
    id: 'people',
    number: '04',
    word: 'PEOPLE',
    copy: 'The human element behind cultivation.',
    description: 'Generational knowledge and patient observation guiding daily farm operations and sericulture.',
    videoSrc: '/media/video/V03-human.mp4',
    poster: '/media/livestock/country-poultry.svg',
    mediaAlt: 'Cultivators and agrarian stewardship',
  },
  {
    id: 'future',
    number: '05',
    word: 'FUTURE',
    copy: 'Agriculture continues to evolve.',
    description: 'A circular, self-sustaining model designed to nourish future generations with ecological balance.',
    videoSrc: '/media/video/V06-harvest.mp4',
    poster: '/media/agriculture/paddy-cereals.svg',
    mediaAlt: 'Sustainable harvest and agricultural renewal',
  },
];

export const SustainabilityScrollStory: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const activeStep = SUSTAINABILITY_STEPS[selectedIndex] || SUSTAINABILITY_STEPS[0];

  return (
    <div className="py-12 sm:py-16 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Vertical Pillar Selection Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="pb-4 mb-2 border-b border-ivory-200/10 flex items-center justify-between">
              <span className="font-mono text-xs text-sand-400 tracking-[0.2em] uppercase font-medium">
                THE 5 PILLARS // SUSTAINABILITY
              </span>
              <span className="font-mono text-xs text-earth-gold uppercase">
                SELECT TO VIEW
              </span>
            </div>

            <div className="flex flex-col space-y-2" role="tablist" aria-label="Sustainability Pillars">
              {SUSTAINABILITY_STEPS.map((step, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    id={`sustainability-tab-${idx}`}
                    aria-selected={isSelected}
                    aria-controls={`sustainability-panel-${idx}`}
                    onClick={() => setSelectedIndex(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    data-cursor="explore"
                    data-cursor-text="EXPLORE →"
                    className={`w-full text-left py-4 px-5 rounded-sm transition-all duration-300 flex items-center justify-between border cursor-pointer select-none ${
                      isSelected
                        ? 'bg-botanical-900 border-earth-gold/70 text-ivory-100 shadow-lg shadow-botanical-950/60'
                        : 'bg-botanical-950/40 border-botanical-800/40 text-sand-400 hover:text-ivory-200 hover:border-ivory-200/20'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className={`font-mono text-xs tracking-widest ${isSelected ? 'text-earth-gold font-semibold' : 'text-sand-500'}`}>
                        {step.number}
                      </span>
                      <span className="font-display font-medium text-xl sm:text-2xl uppercase tracking-wide">
                        {step.word}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'text-earth-gold translate-x-1 opacity-100' : 'opacity-20'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Video Stream & Narrative Card */}
          <div className="lg:col-span-7" id={`sustainability-panel-${selectedIndex}`} role="tabpanel" aria-labelledby={`sustainability-tab-${selectedIndex}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: prefersReduced ? 1 : 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <MediaFrame tag={`PILLAR // ${activeStep.number} — ${activeStep.word}`} borderColor="gold">
                  <LazyVideo
                    src={activeStep.videoSrc}
                    poster={activeStep.poster}
                    aspectRatio="16/9"
                    cursorText="VIEW"
                    className="rounded-none"
                  />
                </MediaFrame>

                <div className="p-6 md:p-8 bg-botanical-900/90 border border-botanical-750/50 rounded-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-ivory-200/10 pb-3">
                    <h3 className="font-display font-medium text-2xl md:text-3xl text-ivory-100 uppercase tracking-tight">
                      {activeStep.word}
                    </h3>
                    <span className="font-mono text-xs text-earth-gold uppercase">
                      PILLAR {activeStep.number} OF 05
                    </span>
                  </div>

                  <p className="font-serif-editorial text-xl sm:text-2xl text-sand-200 leading-snug">
                    {activeStep.copy}
                  </p>
                  <p className="text-sm font-sans text-sand-300 leading-relaxed pt-1">
                    {activeStep.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
};
