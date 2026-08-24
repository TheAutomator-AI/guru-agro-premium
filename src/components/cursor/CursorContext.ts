import { createContext } from 'react';

export type CursorType = 'default' | 'view' | 'explore' | 'open' | 'call' | 'drag' | 'hidden';

export interface CursorContextValue {
  cursorType: CursorType;
  cursorText: string;
  setCursor: (type: CursorType, text?: string) => void;
  resetCursor: () => void;
}

export const CursorContext = createContext<CursorContextValue>({
  cursorType: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {},
});
