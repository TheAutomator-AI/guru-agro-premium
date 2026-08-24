import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AGRICULTURE_CATEGORIES } from '../../data';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { formatIndex } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const SHORT_TITLES: Record<string, string> = {
  horticulture: 'HORTICULTURE',
  grains: 'GRAINS',
  'coconut-plantation': 'COCONUT',
  sericulture: 'SERICULTURE',
  'indigenous-dairy': 'DAIRY',
  aquaculture: 'AQUACULTURE',
  'country-poultry': 'POULTRY',
};

export const DesktopEcosystem: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const selectedCategory = AGRICULTURE_CATEGORIES[selectedIndex] || AGRICULTURE_CATEGORIES[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((index + 1) % AGRICULTURE_CATEGORIES.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((index - 1 + AGRICULTURE_CATEGORIES.length) % AGRICULTURE_CATEGORIES.length);
    }
  };

  return (
    <div className="pt-2 pb-20 sm:pb-28 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT / PRIMARY AREA: Sticky Cinematic Media & Detail Display */}
          <div className="col-span-7 sticky top-28 space-y-6">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{
                    opacity: 0,
                    scale: prefersReduced ? 1 : 0.98,
                    clipPath: prefersReduced ? 'none' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    clipPath: prefersReduced ? 'none' : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                  exit={{
                    opacity: 0,
                    scale: prefersReduced ? 1 : 0.98,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 will-change-transform"
                >
                  {/* Media Frame Window */}
                  <MediaFrame
                    tag={`DIV-${formatIndex(selectedIndex + 1)} // ${selectedCategory.division}`}
                    borderColor="gold"
                  >
                    {selectedCategory.videoSrc ? (
                      <LazyVideo
                        src={selectedCategory.videoSrc}
                        poster={selectedCategory.mediaPlaceholder}
                        aspectRatio="16/9"
                        cursorText="VIEW STREAM"
                        className="rounded-none"
                      />
                    ) : (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-900">
                        <img
                          src={selectedCategory.mediaPlaceholder}
                          alt={selectedCategory.mediaAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </MediaFrame>

                  {/* Active Category Detail Panel */}
                  <div className="p-6 md:p-8 bg-botanical-900/90 border border-botanical-750/50 rounded-sm space-y-4">
                    <div className="flex items-baseline justify-between border-b border-ivory-200/10 pb-4">
                      <div>
                        <span className="font-mono text-xs text-earth-gold tracking-widest uppercase block mb-1">
                          DISCIPLINE // {formatIndex(selectedIndex + 1)}
                        </span>
                        <h3 className="font-display font-medium text-2xl lg:text-3xl text-ivory-100">
                          {selectedCategory.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 bg-botanical-850 border border-botanical-700/60 rounded text-sand-300 uppercase">
                        {selectedCategory.subtitle}
                      </span>
                    </div>

                    <p className="text-sm font-sans text-sand-300 leading-relaxed max-w-xl">
                      {selectedCategory.description}
                    </p>

                    {/* Verified Focus Pillars */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {selectedCategory.focusPillars.map((pillar) => (
                        <span
                          key={pillar}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-botanical-850 border border-botanical-700/40 rounded text-xs font-mono text-earth-gold"
                        >
                          <Sparkles className="w-3 h-3 text-botanical-400 shrink-0" />
                          <span>{pillar}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT / SECONDARY AREA: Vertical Category Navigation */}
          <div className="col-span-5 space-y-3 pt-2">
            <div className="pb-4 mb-2 border-b border-ivory-200/10 flex items-center justify-between">
              <span className="font-mono text-xs text-sand-400 tracking-[0.2em] uppercase">
                AGRICULTURAL ARCHIVE (07)
              </span>
              <span className="font-mono text-xs text-earth-gold uppercase">
                HOVER TO EXPLORE
              </span>
            </div>

            <nav
              role="tablist"
              aria-label="Agriculture Divisions List"
              className="flex flex-col space-y-2"
            >
              {AGRICULTURE_CATEGORIES.map((cat, index) => {
                const isSelected = selectedIndex === index;
                const shortTitle = SHORT_TITLES[cat.id] || cat.title.toUpperCase();

                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    id={`desktop-agri-tab-${index}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    data-cursor="explore"
                    data-cursor-text="EXPLORE →"
                    className={`w-full text-left py-4 sm:py-5 px-6 rounded-sm transition-all duration-300 flex items-center justify-between border cursor-pointer select-none group ${
                      isSelected
                        ? 'bg-botanical-900 border-earth-gold/70 text-ivory-100 shadow-lg shadow-botanical-950/60'
                        : 'bg-botanical-950/40 border-botanical-800/40 text-sand-400 hover:text-ivory-200 hover:border-ivory-200/20'
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`font-mono text-xs tracking-widest ${
                          isSelected ? 'text-earth-gold font-semibold' : 'text-sand-500'
                        }`}
                      >
                        {formatIndex(index + 1)}
                      </span>
                      <span
                        className={`font-display font-medium tracking-wide uppercase transition-all duration-200 ${
                          isSelected
                            ? 'text-2xl lg:text-3xl text-ivory-100'
                            : 'text-xl lg:text-2xl text-sand-400 group-hover:text-sand-200'
                        }`}
                      >
                        {shortTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-sand-400 opacity-80 hidden xl:inline-block">
                        {cat.subtitle}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'text-earth-gold translate-x-1 opacity-100' : 'opacity-20'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};
