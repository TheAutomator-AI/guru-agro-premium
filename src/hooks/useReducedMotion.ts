import { useMediaQuery } from './useMediaQuery';

/**
 * Checks whether the user has enabled prefers-reduced-motion in their OS/browser.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
