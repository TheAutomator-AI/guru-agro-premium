import type { Variants, Transition } from 'framer-motion';

/**
 * Editorial Motion Easings & Durations
 */
export const TRANSITION_EASINGS = {
  editorial: [0.16, 1, 0.3, 1] as const,
  cinematic: [0.77, 0, 0.175, 1] as const,
  smoothInOut: [0.65, 0, 0.35, 1] as const,
  spring: { type: 'spring', stiffness: 300, damping: 30 } as const,
};

export const TRANSITION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  cinematic: 1.2,
};

export const defaultTransition: Transition = {
  duration: TRANSITION_DURATIONS.normal,
  ease: TRANSITION_EASINGS.editorial,
};

export const cinematicTransition: Transition = {
  duration: TRANSITION_DURATIONS.cinematic,
  ease: TRANSITION_EASINGS.cinematic,
};

/**
 * Motion Variant Presets
 */

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: TRANSITION_EASINGS.editorial,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: TRANSITION_EASINGS.editorial,
    },
  },
};

export const clipRevealVariants: Variants = {
  hidden: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 0,
  },
  visible: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: TRANSITION_EASINGS.editorial,
    },
  },
};

export const imageRevealVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: TRANSITION_EASINGS.editorial,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const textRevealLineVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: TRANSITION_EASINGS.editorial,
    },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1, clipPath: 'none' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: 'none',
    transition: { duration: 0 },
  },
};

/**
 * Returns safe variants based on reduced motion preference.
 */
export function getMotionVariants(variants: Variants, prefersReduced: boolean): Variants {
  if (prefersReduced) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return variants;
}
