import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { useSmoothScroll } from '../../components/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useMagnetic } from '../../hooks/useMagnetic';
import { TRANSITION_EASINGS } from '../../lib/motion';

export const HeroCTA: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  // Magnetic interaction for primary button
  const {
    ref: primaryBtnRef,
    position: primaryPos,
    handleMouseMove: handlePrimaryMouseMove,
    handleMouseLeave: handlePrimaryMouseLeave,
    isMagneticActive,
  } = useMagnetic<HTMLAnchorElement>({ maxDistance: 10 });

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    scrollTo(target);
  };

  return (
    <motion.div
      className="flex items-center pt-2 md:pt-4"
      initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: TRANSITION_EASINGS.editorial }}
    >
      {/* Primary Action Button with Magnetic Displacement */}
      <motion.a
        ref={primaryBtnRef}
        href="#agriculture"
        onClick={(e) => handleScrollClick(e, '#agriculture')}
        onMouseMove={handlePrimaryMouseMove}
        onMouseLeave={handlePrimaryMouseLeave}
        animate={isMagneticActive ? { x: primaryPos.x, y: primaryPos.y } : undefined}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
        data-cursor="explore"
        data-cursor-text="EXPLORE →"
        className="group relative inline-flex items-center justify-between sm:justify-center gap-4 px-8 py-4 sm:py-4.5 bg-earth-gold hover:bg-earth-gold-light text-botanical-950 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm shadow-xl shadow-earth-gold/15 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-ivory-100 min-h-[48px] select-none"
        aria-label="Explore Guru Agro Products agricultural divisions"
      >
        <span className="inline-flex items-center gap-2.5">
          <Compass className="w-4 h-4 text-botanical-900 group-hover:scale-105 transition-transform duration-300" />
          <span>Explore Our Agriculture</span>
        </span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  );
};
