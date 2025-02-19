'use client';

import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.querySelector(elementId);
    if (!element) return;

    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  return scrollTo;
};
