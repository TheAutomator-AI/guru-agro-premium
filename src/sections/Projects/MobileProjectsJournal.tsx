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

export const MobileProjectsJournal: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-12 sm:py-16 bg-botanical-950 text-ivory-100 relative">
      <Container size="architectural" className="space-y-16 sm:space-y-20">
        {PROJECTS_DATA.map((project, index) => (
          <article
            key={project.id}
            className="space-y-6 border-b border-ivory-200/10 pb-16 last:border-b-0"
          >
            {/* Header: Index & Category */}
            <div className="flex items-center justify-between border-b border-ivory-200/10 pb-3">
              <span className="font-mono text-xs text-earth-gold tracking-widest uppercase">
                INITIATIVE // {formatIndex(index + 1)}
              </span>
              <Badge variant="outline" size="sm">
                {project.category}
              </Badge>
            </div>

            {/* Title & Location */}
            <div className="space-y-2">
              <h3 className="font-display font-medium text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-sand-400">
                <MapPin className="w-3.5 h-3.5 text-earth-gold shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Media Window */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
            >
              <MediaFrame tag={`CASE STUDY // ${formatIndex(index + 1)}`} borderColor="gold">
                {project.videoSrc ? (
                  <LazyVideo
                    src={project.videoSrc}
                    poster={project.mediaPlaceholder}
                    aspectRatio="16/9"
                    cursorText="VIEW"
                    className="rounded-none"
                  />
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-botanical-900">
                    <img
                      src={project.mediaPlaceholder}
                      alt={project.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </MediaFrame>
            </motion.div>

            {/* Description & Technical Highlights */}
            <div className="space-y-4 pt-2">
              <p className="text-sm sm:text-base font-sans text-sand-300 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-ivory-200/10">
                <span className="text-[10px] font-mono tracking-widest text-earth-gold uppercase block mb-1">
                  Key Technical Highlights
                </span>
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5 text-xs text-sand-300 font-sans leading-relaxed">
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
                  className="w-full sm:w-auto"
                >
                  Inquire on this Initiative
                </Button>
              </div>
            </div>
          </article>
        ))}
      </Container>
    </div>
  );
};
