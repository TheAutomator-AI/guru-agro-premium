import { useContext } from 'react';
import { CursorContext } from './CursorContext';
import type { CursorType } from './CursorContext';

/**
 * Hook to access cursor state and bind custom cursor behaviors to elements.
 */
export function useCursor() {
  const { cursorType, cursorText, setCursor, resetCursor } = useContext(CursorContext);

  const bindCursor = (type: CursorType, text?: string) => ({
    onMouseEnter: () => setCursor(type, text),
    onMouseLeave: () => resetCursor(),
  });

  return {
    cursorType,
    cursorText,
    setCursor,
    resetCursor,
    bindCursor,
  };
}
