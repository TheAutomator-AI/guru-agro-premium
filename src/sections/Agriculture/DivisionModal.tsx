import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import type { AgricultureCategory } from '../../data';
import { Badge, Button } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { formatIndex } from '../../lib/utils';
import { useSmoothScroll } from '../../components/motion';

export interface DivisionModalProps {
  category: AgricultureCategory | null;
  divisionIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  category,
  divisionIndex,
  isOpen,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!category) return null;

  const handleInquireClick = () => {
    onClose();
    setTimeout(() => {
      scrollTo('#contact');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="division-modal-title"
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
        >
          {/* Backdrop Blur Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-botanical-950/90 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Architecture Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-botanical-900 border border-earth-gold/40 rounded-sm shadow-2xl overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 text-ivory-100"
          >
            {/* Top Bar Header */}
            <div className="flex items-start justify-between border-b border-ivory-200/10 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-earth-gold tracking-widest uppercase">
                    DISCIPLINE // {formatIndex(divisionIndex + 1)}
                  </span>
                  <Badge variant="gold" size="sm">
                    {category.division}
                  </Badge>
                </div>
                <h2 id="division-modal-title" className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-ivory-100 tracking-tight">
                  {category.title}
                </h2>
                <p className="font-mono text-xs text-sand-400 mt-1 uppercase tracking-wider">
                  {category.subtitle}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full border border-ivory-200/20 text-ivory-100 hover:text-earth-gold hover:border-earth-gold transition-colors focus-visible:outline-2 focus-visible:outline-botanical-300"
                aria-label="Close division details modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Window */}
            <div>
              <MediaFrame tag={`CINEMATIC REFERENCE // ${category.division}`} borderColor="gold">
                {category.videoSrc ? (
                  <LazyVideo
                    src={category.videoSrc}
                    poster={category.mediaPlaceholder}
                    aspectRatio="16/9"
                    cursorText="VIEW STREAM"
                    className="rounded-none"
                  />
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-950">
                    <img
                      src={category.mediaPlaceholder}
                      alt={category.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </MediaFrame>
            </div>

            {/* Deep-Dive Grid: Methodology & Closed-Loop Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Operational Methodology */}
              <div className="p-6 bg-botanical-950/80 border border-botanical-750/60 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-earth-gold text-xs font-mono tracking-wider uppercase">
                  <Layers className="w-4 h-4 text-earth-gold shrink-0" />
                  <span>Operational Methodology</span>
                </div>
                <p className="text-sm font-sans text-sand-300 leading-relaxed">
                  {category.operationalMethodology || category.description}
                </p>
              </div>

              {/* Ecosystem Role */}
              <div className="p-6 bg-botanical-950/80 border border-botanical-750/60 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-earth-gold text-xs font-mono tracking-wider uppercase">
                  <RefreshCw className="w-4 h-4 text-botanical-400 shrink-0" />
                  <span>Closed-Loop Ecosystem Role</span>
                </div>
                <p className="text-sm font-sans text-sand-300 leading-relaxed">
                  {category.ecosystemRole || 'Interconnected within the closed-loop agronomy network.'}
                </p>
              </div>
            </div>

            {/* Focus Pillars & Action Footer */}
            <div className="pt-6 border-t border-ivory-200/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {category.focusPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-botanical-850 border border-botanical-700/50 rounded text-xs font-mono text-earth-gold"
                  >
                    <Sparkles className="w-3 h-3 text-botanical-400" />
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>

              <Button
                variant="gold"
                size="md"
                onClick={handleInquireClick}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shrink-0"
              >
                Inquire on this Division
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
