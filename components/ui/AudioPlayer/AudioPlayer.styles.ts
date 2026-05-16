/* ========================================
   AUDIO PLAYER - STYLES
   ======================================== */

export const playerContainerStyles = `
  flex items-center gap-4 p-4 rounded-2xl
  bg-surface-primary border border-border-primary
`;

export const coverArtStyles = `
  w-14 h-14 rounded-xl overflow-hidden flex-shrink-0
  bg-surface-secondary flex items-center justify-center
`;

export const controlsContainerStyles = 'flex-1 min-w-0 space-y-2';

export const titleStyles = 'text-sm font-semibold text-text-primary truncate';

export const artistStyles = 'text-xs text-text-secondary truncate';

export const progressContainerStyles = 'flex items-center gap-3';

export const progressBarStyles = 'flex-1';

export const timeStyles = 'text-xs text-text-tertiary font-mono min-w-[40px]';

export const volumeContainerStyles = 'flex items-center gap-2';

export const volumeButtonStyles = 'text-text-secondary hover:text-text-primary transition-apple';