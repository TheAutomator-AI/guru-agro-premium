import Lenis from 'lenis';

export interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  syncTouch?: boolean;
}

export const defaultLenisOptions: LenisOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
};

export type LenisInstance = Lenis | null;
