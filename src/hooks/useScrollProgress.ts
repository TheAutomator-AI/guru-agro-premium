import { useState, useEffect } from 'react';

export interface ScrollProgress {
  scrollY: number;
  progress: number;
  direction: 'up' | 'down' | 'none';
  isScrolled: boolean;
}

export function useScrollProgress(): ScrollProgress {
  const [scrollState, setScrollState] = useState<ScrollProgress>({
    scrollY: 0,
    progress: 0,
    direction: 'none',
    isScrolled: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;
      const direction = currentScrollY > lastScrollY ? 'down' : currentScrollY < lastScrollY ? 'up' : 'none';

      setScrollState({
        scrollY: currentScrollY,
        progress,
        direction,
        isScrolled: currentScrollY > 40,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}
