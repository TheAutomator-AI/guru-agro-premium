import { useRef, useState, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { useIsTouchDevice } from './useIsTouchDevice';

export interface UseMagneticOptions {
  maxDistance?: number;
  damping?: number;
  stiffness?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(
  options: UseMagneticOptions = {}
) {
  const { maxDistance = 10 } = options;
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();
  const isTouch = useIsTouchDevice();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (prefersReduced || isTouch || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * 0.3;
      const distanceY = (e.clientY - centerY) * 0.3;

      const clampedX = Math.max(Math.min(distanceX, maxDistance), -maxDistance);
      const clampedY = Math.max(Math.min(distanceY, maxDistance), -maxDistance);

      setPosition({ x: clampedX, y: clampedY });
    },
    [prefersReduced, isTouch, maxDistance]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    position,
    handleMouseMove,
    handleMouseLeave,
    isMagneticActive: !prefersReduced && !isTouch,
  };
}
