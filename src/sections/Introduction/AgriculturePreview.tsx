import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AGRICULTURE_CATEGORIES } from '../../data';
import { Container, Button, Badge } from '../../components/ui';
import { MediaFrame, LazyVideo } from '../../components/media';
import { useSmoothScroll } from '../../components/motion';
import { formatIndex } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const PREVIEW_ITEMS = [
  { shortName: 'HORTICULTURE', catId: 'horticulture' },
  { shortName: 'GRAINS', catId: 'grains' },
  { shortName: 'COCONUT', catId: 'coconut-plantation' },
  { shortName: 'SERICULTURE', catId: 'sericulture' },
  { shortName: 'DAIRY', catId: 'indigenous-dairy' },
  { shortName: 'AQUACULTURE', catId: 'aquaculture' },
  { shortName: 'POULTRY', catId: 'country-poultry' },
];

export const AgriculturePreview: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  const selectedCategory = AGRICULTURE_CATEGORIES[selectedIndex] || AGRICULTURE_CATEGORIES[0];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % PREVIEW_ITEMS.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + PREVIEW_ITEMS.length) % PREVIEW_ITEMS.length);
    }
  };

  return (
    <div className="py-24 sm:py-32 md:py-40 bg-botanical-900 text-ivory-100 relative overflow-hidden border-t border-ivory-200/10">
      <Container size="architectural">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-ivory-200/10 mb-12">
          <div>
            <span className="font-mono text-xs text-earth-gold tracking-[0.25em] uppercase block mb-3">
              ECOSYSTEM TAXONOMY
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl text-ivory-100 uppercase tracking-tight leading-[0.95]">
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                AGRICULTURE
              </span>
            </h2>
          </div>
          <p className="text-sm font-sans text-sand-300 max-w-md leading-relaxed">
            Seven interconnected agricultural disciplines operating under closed-loop biological protocols.
          </p>
        </div>

        {/* Interactive Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Category List */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex flex-col" role="tablist" aria-label="Agricultural Divisions Preview">
              {PREVIEW_ITEMS.map((item, index) => {
                const isSelected = selectedIndex === index;
                const cat = AGRICULTURE_CATEGORIES[index];

                return (
                  <button
                    key={item.shortName}
                    type="button"
                    role="tab"
                    id={`agri-tab-${index}`}
                    aria-selected={isSelected}
                    aria-controls={`agri-panel-${index}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onKeyDown={handleKeyDown}
                    data-cursor="explore"
                    data-cursor-text="EXPLORE →"
                    className={`w-full text-left py-3.5 sm:py-4 px-4 sm:px-6 rounded-sm transition-all duration-300 flex items-center justify-between border-b cursor-pointer ${
                      isSelected
                        ? 'bg-botanical-850 border-earth-gold/60 text-ivory-100'
                        : 'bg-transparent border-ivory-200/10 text-sand-400 hover:text-ivory-200 hover:border-ivory-200/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs tracking-wider ${isSelected ? 'text-earth-gold' : 'text-sand-500'}`}>
                        {formatIndex(index + 1)}
                      </span>
                      <span className="font-display font-medium text-lg sm:text-2xl tracking-wide uppercase">
                        {item.shortName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block font-sans text-xs text-sand-400">
                        {cat.title}
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'translate-x-1 text-earth-gold opacity-100' : 'opacity-30'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-8">
              <Button
                variant="gold"
                size="md"
                href="#agriculture"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#agriculture');
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View Full 7 Divisions Detail
              </Button>
            </div>
          </div>

          {/* Right Active Preview Media */}
          <div className="lg:col-span-6" id={`agri-panel-${selectedIndex}`} role="tabpanel" aria-labelledby={`agri-tab-${selectedIndex}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: prefersReduced ? 1 : 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <MediaFrame tag={`DIV-${formatIndex(selectedIndex + 1)} // ${selectedCategory.division}`} borderColor="gold">
                  {selectedCategory.videoSrc ? (
                    <LazyVideo
                      src={selectedCategory.videoSrc}
                      poster={selectedCategory.mediaPlaceholder}
                      aspectRatio="16/9"
                      cursorText="VIEW"
                      className="rounded-none"
                    />
                  ) : (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-950">
                      <img
                        src={selectedCategory.mediaPlaceholder}
                        alt={selectedCategory.mediaAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </MediaFrame>

                <div className="p-6 bg-botanical-950/80 border border-botanical-750/50 rounded-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium text-xl text-ivory-100">
                      {selectedCategory.title}
                    </h3>
                    <Badge variant="gold" size="sm">
                      {selectedCategory.division}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-sand-300 leading-relaxed">
                    {selectedCategory.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-ivory-200/10">
                    {selectedCategory.focusPillars.map((pillar) => (
                      <span key={pillar} className="inline-flex items-center gap-1 text-[11px] font-mono text-earth-gold">
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
      </Container>
    </div>
  );
};
