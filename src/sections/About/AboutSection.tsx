import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { COMPANY_INFO, AGRICULTURE_CATEGORIES } from '../../data';
import { formatIndex } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export interface AboutSectionProps {
  id?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ id = 'about' }) => {
  const prefersReduced = useReducedMotion();

  const headlineLines = [
    { text: 'ROOTED IN', highlight: false },
    { text: 'AGRICULTURE.', highlight: false },
    { text: 'BUILT FOR', highlight: false },
    { text: 'TOMORROW.', highlight: true },
  ];

  return (
    <section
      id={id}
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 bg-botanical-950 text-ivory-100 relative overflow-hidden border-t border-ivory-200/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,rgba(248,245,238,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,245,238,0.5)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <Container size="architectural" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Top 2-Column Balanced Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: TRANSITION_EASINGS.editorial }}
                className="inline-flex items-center gap-2.5 px-3 py-1 bg-botanical-900 border border-earth-gold/30 rounded-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-earth-gold" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-earth-gold font-medium uppercase">
                  ABOUT GURU AGRO PRODUCTS
                </span>
              </motion.div>
            </div>

            {/* Monumental Headline */}
            <h2
              id="about-heading"
              className="font-display font-medium text-[clamp(2.5rem,6.5vw,5.5rem)] text-ivory-100 uppercase tracking-[-0.03em] leading-[0.92] select-none"
            >
              {headlineLines.map((line, idx) => (
                <span key={line.text} className="block overflow-hidden pb-[0.04em]">
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
                    {line.highlight ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                        {line.text}
                      </span>
                    ) : (
                      line.text
                    )}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Verified Narrative Ground */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: TRANSITION_EASINGS.editorial }}
              className="pt-1 space-y-3 text-sand-300 font-sans text-sm sm:text-base leading-relaxed"
            >
              <p>
                Headquartered at {COMPANY_INFO.headquarters.locality}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.name} conducts integrated agro-product operations spanning organic cultivation, perennial plantation canopy, native livestock, sericulture, and freshwater aquaculture.
              </p>
              <p className="text-xs sm:text-sm text-sand-400">
                Our multidisciplinary agricultural approach unites traditional farming wisdom with ecological soil stewardship to maintain enduring biological harmony across all operations.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Thematic Agronomic Cinematography Window */}
          <div className="lg:col-span-6">
            <MediaFrame tag="CHAPTER // 06 — LIVING AGRONOMY" borderColor="gold">
              <LazyVideo
                src="/media/video/V03-human.mp4"
                poster="/media/projects/agro-forestry-model.svg"
                aspectRatio="16/9"
                cursorText="VIEW"
                className="rounded-none"
              />
            </MediaFrame>
          </div>
        </div>

        {/* Bottom Scope Index: The 7 Disciplines */}
        <div className="pt-8 border-t border-ivory-200/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
            <span className="font-mono text-xs text-earth-gold tracking-widest uppercase">
              OPERATIONAL SPECTRUM (07 DISCIPLINES)
            </span>
            <span className="font-mono text-xs text-sand-400 uppercase">
              AVADI, CHENNAI // TAMIL NADU
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {AGRICULTURE_CATEGORIES.map((cat, index) => (
              <div
                key={cat.id}
                className="p-4 bg-botanical-900/60 border border-botanical-800/40 rounded-sm space-y-2 hover:border-earth-gold/40 transition-colors"
              >
                <span className="font-mono text-xs text-earth-gold block">
                  {formatIndex(index + 1)}
                </span>
                <h3 className="font-display font-medium text-sm sm:text-base text-ivory-100 uppercase tracking-tight">
                  {cat.title}
                </h3>
                <span className="font-mono text-[10px] text-sand-400 block uppercase">
                  {cat.division}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
