/* ========================================
   BIOMETRIC PROMPT - STYLES
   ======================================== */

import type { BiometricStatus } from './BiometricPrompt.types';

export const overlayStyles = 'fixed inset-0 bg-black/40 backdrop-blur-md z-50';

export const promptContainerStyles = `
  fixed top-1/2 left-1/2 z-50 w-[300px]
  bg-surface-primary border border-border-primary rounded-3xl shadow-xl p-8
  flex flex-col items-center text-center
`;

export const closeButtonStyles = `
  absolute top-3 right-3 w-7 h-7 rounded-full
  bg-surface-secondary flex items-center justify-center
  text-text-tertiary hover:text-text-primary transition-apple
`;

export const iconContainerStyles = 'relative mb-6';

export const scanningRingStyles = 'absolute inset-0 rounded-full';

export const iconCircleStyles = `
  relative w-20 h-20 rounded-full flex items-center justify-center transition-apple duration-300
`;

export const iconCircleSuccessStyles = 'bg-status-success/10 text-status-success';

export const iconCircleErrorStyles = 'bg-status-error/10 text-status-error';

export const iconCircleDefaultStyles = 'bg-accent-blue/10 text-accent-blue';

export const titleStyles = 'text-base font-bold text-text-primary mb-1';

export const subtitleStyles = 'text-xs text-text-secondary leading-relaxed mb-6';

export const statusMessageStyles = 'text-xs font-semibold';

export const statusMessageSuccessStyles = 'text-status-success';

export const statusMessageErrorStyles = 'text-status-error mb-4';

export const actionButtonStyles = `
  w-full py-3 px-6 rounded-xl text-sm font-semibold text-white
  bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-active
  transition-apple duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
`;