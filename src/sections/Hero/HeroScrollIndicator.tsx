import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '../../components/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { COMPANY_INFO } from '../../data';

export interface HeroScrollIndicatorProps {
  scrollYProgress?: MotionValue<number>;
}

export const HeroScrollIndicator: React.FC<HeroScrollIndicatorProps> = ({ scrollYProgress }) => {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();
  const defaultProgress = useTransform(() => 0);
  const progress = scrollYProgress || defaultProgress;

  // Fades out immediately upon initial scroll
  const indicatorOpacity = useTransform(progress, [0, 0.15, 0.3], [1, 0.4, 0]);
  const indicatorY = useTransform(progress, [0, 0.3], ['0px', '20px']);

  return (
    <motion.div
      className="flex items-end justify-between pt-6 border-t border-ivory-200/10 text-xs font-mono text-sand-400 will-change-transform"
      style={{
        opacity: prefersReduced ? 1 : indicatorOpacity,
        y: prefersReduced ? 0 : indicatorY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.6 }}
    >
      {/* Left Coordinates & Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-botanical-400" />
          <span className="text-[10px] tracking-widest uppercase">
            REGIONAL ANCHOR: {COMPANY_INFO.headquarters.locality.toUpperCase()}, {COMPANY_INFO.headquarters.city.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Center/Right Minimal Animated Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#introduction')}
        className="group flex items-center gap-3 text-sand-300 hover:text-earth-gold transition-colors cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-botanical-300 rounded"
        aria-label="Scroll down to introduction section"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">SCROLL</span>
        <div className="flex flex-col items-center gap-0.5">
          <ChevronDown className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform" />
          {!prefersReduced && (
            <motion.span
              className="w-[1px] h-3 bg-earth-gold block origin-top"
              animate={{ scaleY: [0, 1, 0], y: [0, 2, 6] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          )}
        </div>
      </button>
    </motion.div>
  );
};
