import { createContext } from 'react';
import type Lenis from 'lenis';

export interface SmoothScrollContextType {
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
  getLenis: () => Lenis | null;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
  getLenis: () => null,
});
