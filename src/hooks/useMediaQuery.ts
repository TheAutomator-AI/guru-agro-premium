import { useSyncExternalStore } from 'react';

/**
 * Hook to evaluate a CSS media query and reactively track matches using useSyncExternalStore.
 * Safe for SSR and concurrent React 19 rendering.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === 'undefined') {
      return () => {};
    }

    const mediaQueryList = window.matchMedia(query);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', onStoreChange);
      return () => mediaQueryList.removeEventListener('change', onStoreChange);
    } else {
      // Legacy fallback
      mediaQueryList.addListener(onStoreChange);
      return () => mediaQueryList.removeListener(onStoreChange);
    }
  };

  const getSnapshot = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = (): boolean => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
