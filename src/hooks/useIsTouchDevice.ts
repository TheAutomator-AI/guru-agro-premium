import { useMediaQuery } from './useMediaQuery';

/**
 * Determines whether the current device is a touch/mobile device
 * or supports fine pointer precision with hover.
 */
export function useIsTouchDevice(): boolean {
  const isFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  return !isFinePointer;
}
