import { expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import * as matchers from 'vitest-axe/matchers';
expect.extend(matchers as any);

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock IntersectionObserver
global.IntersectionObserver = class implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '0px';
  readonly thresholds: ReadonlyArray<number> = [0];

  constructor(private callback: IntersectionObserverCallback) {}

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock scrollTo
window.scrollTo = () => {};
