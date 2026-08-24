import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import Lenis from 'lenis';
import { SmoothScrollContext } from './SmoothScrollContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const prefersReduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // If reduced motion is enabled or server-side, do not initialize smooth scroll
    if (prefersReduced || typeof window === 'undefined') {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let reqId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    };

    reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReduced]);

  const scrollTo = useCallback(
    (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
      if (lenisRef.current && !prefersReduced) {
        lenisRef.current.scrollTo(target, options);
      } else {
        if (typeof target === 'string') {
          const el = document.querySelector(target);
          if (el) {
            el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
          }
        } else if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: prefersReduced ? 'auto' : 'smooth' });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
        }
      }
    },
    [prefersReduced]
  );

  const getLenis = useCallback(() => lenisRef.current, []);

  const contextValue = useMemo(
    () => ({
      scrollTo,
      getLenis,
    }),
    [scrollTo, getLenis]
  );

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
