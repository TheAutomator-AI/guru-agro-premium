import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data';
import { Container, Button, Badge } from '../../components/ui';
import { LazyVideo, MediaFrame } from '../../components/media';
import { formatIndex } from '../../lib/utils';
import { useSmoothScroll } from '../../components/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const DesktopProjectsJournal: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  return (
    <div className="pt-2 pb-20 sm:pb-28 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural" className="space-y-16 sm:space-y-24">
        {PROJECTS_DATA.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={project.id}
              className="grid grid-cols-12 gap-10 lg:gap-14 items-center border-b border-ivory-200/10 pb-16 sm:pb-20 last:border-b-0 last:pb-0"
            >
              {/* Left Column: Project Narrative & Technical Highlights */}
              <motion.div
                initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
                className={`col-span-5 space-y-5 ${isEven ? 'order-1' : 'order-2'}`}
              >
                {/* Project Index & Category */}
                <div className="flex items-center justify-between border-b border-ivory-200/10 pb-3">
                  <span className="font-mono text-xs text-earth-gold tracking-widest uppercase font-medium">
                    INITIATIVE // {formatIndex(index + 1)} OF {formatIndex(PROJECTS_DATA.length)}
                  </span>
                  <Badge variant="outline" size="sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-sand-400">
                  <MapPin className="w-3.5 h-3.5 text-earth-gold shrink-0" />
                  <span>{project.location}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-medium text-2xl lg:text-3xl text-ivory-100 uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-sand-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-earth-gold uppercase block mb-1">
                    Key Technical Highlights
                  </span>
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-xs text-sand-300 font-sans leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-botanical-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="md"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#contact');
                    }}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire on this Initiative
                  </Button>
                </div>
              </motion.div>

              {/* Right Column: Large Cinematic Media Frame */}
              <motion.div
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
                className={`col-span-7 group ${isEven ? 'order-2' : 'order-1'}`}
              >
                <MediaFrame
                  tag={`CASE STUDY // ${formatIndex(index + 1)} — ${project.category}`}
                  borderColor="gold"
                >
                  {project.videoSrc ? (
                    <LazyVideo
                      src={project.videoSrc}
                      poster={project.mediaPlaceholder}
                      aspectRatio="16/9"
                      cursorText="VIEW"
                      className="rounded-none group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-900">
                      <img
                        src={project.mediaPlaceholder}
                        alt={project.mediaAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                </MediaFrame>
              </motion.div>
            </article>
          );
        })}
      </Container>
    </div>
  );
};
