import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from './useCursor';
import type { CursorType } from './CursorContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText, setCursor, resetCursor } = useCursor();
  const prefersReduced = useReducedMotion();
  const isTouch = useIsTouchDevice();
  const [isVisible, setIsVisible] = useState(false);

  const rawMouseX = useMotionValue(-100);
  const rawMouseY = useMotionValue(-100);

  // Smooth springs for cursor follower
  const springX = useSpring(rawMouseX, { stiffness: 450, damping: 35, mass: 0.5 });
  const springY = useSpring(rawMouseY, { stiffness: 450, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (prefersReduced || isTouch || typeof window === 'undefined') return;

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global listener for elements with data-cursor attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        const type = (target.getAttribute('data-cursor') || 'view') as CursorType;
        const text = target.getAttribute('data-cursor-text') || '';
        setCursor(type, text);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        resetCursor();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [prefersReduced, isTouch, isVisible, rawMouseX, rawMouseY, setCursor, resetCursor]);

  if (prefersReduced || isTouch || !isVisible) {
    return null;
  }

  const isExpanded = cursorType === 'view' || cursorType === 'explore' || cursorType === 'open' || cursorType === 'call';
  const isDrag = cursorType === 'drag';
  const isOpen = cursorType === 'open' || cursorType === 'call';

  return (
    <div className="cursor-root" aria-hidden="true">
      {/* Precision Center Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: rawMouseX,
          y: rawMouseY,
        }}
        animate={{
          scale: isExpanded ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing Fluid Ring / Badge */}
      <motion.div
        className={`cursor-follower cursor-state-${cursorType}`}
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: cursorType === 'explore' ? 88 : isOpen ? 76 : cursorType === 'view' ? 72 : isDrag ? 64 : 28,
          height: cursorType === 'explore' ? 88 : isOpen ? 76 : cursorType === 'view' ? 72 : isDrag ? 64 : 28,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {(isExpanded || isDrag) && cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </motion.div>
    </div>
  );
};
