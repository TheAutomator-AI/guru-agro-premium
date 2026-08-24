import { useContext } from 'react';
import { SmoothScrollContext } from './SmoothScrollContext';
import type { SmoothScrollContextType } from './SmoothScrollContext';

export function useSmoothScroll(): SmoothScrollContextType {
  return useContext(SmoothScrollContext);
}
