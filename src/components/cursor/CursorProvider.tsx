import React, { useState, useCallback } from 'react';
import { CursorContext } from './CursorContext';
import type { CursorType } from './CursorContext';

export interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursor = useCallback((type: CursorType, text = '') => {
    setCursorType(type);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorType('default');
    setCursorText('');
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
