import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface HeroAtmosphereProps {
  scrollYProgress?: MotionValue<number>;
}

export const HeroAtmosphere: React.FC<HeroAtmosphereProps> = ({ scrollYProgress }) => {
  const prefersReduced = useReducedMotion();
  const defaultProgress = useTransform(() => 0);
  const progress = scrollYProgress || defaultProgress;

  // Layer 2 Atmosphere: Subtle depth overlay that leaves the agricultural video radiant
  const topGradientOpacity = useTransform(progress, [0, 0.8], [0.7, 0.95]);
  const bottomGradientOpacity = useTransform(progress, [0, 0.8], [0.75, 1]);
  const vignetteOpacity = useTransform(progress, [0, 0.8], [0.3, 0.6]);

  return (
    <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden select-none" aria-hidden="true">
      {/* Top Header Scrim (Ensures crystal clear header readability without muting video) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-botanical-950/75 via-botanical-950/20 to-transparent will-change-opacity"
        style={{ opacity: prefersReduced ? 0.7 : topGradientOpacity }}
      />

      {/* Bottom Ground Scrim (Gives contrast for CTA and smooth transition into next section) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-52 sm:h-64 md:h-80 bg-gradient-to-t from-botanical-950/90 via-botanical-950/30 to-transparent will-change-opacity"
        style={{ opacity: prefersReduced ? 0.75 : bottomGradientOpacity }}
      />

      {/* Subtle Radial Edge Vignette */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,18,12,0.45)_100%)] will-change-opacity"
        style={{ opacity: prefersReduced ? 0.3 : vignetteOpacity }}
      />

      {/* Architectural Fine Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,rgba(248,245,238,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,245,238,0.4)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
};
