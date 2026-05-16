/* ========================================
   BARCODE GENERATOR - STYLES
   ======================================== */

export const containerStyles = `
  flex flex-col items-center gap-6 p-6 rounded-2xl
  bg-surface-primary border border-border-primary shadow-sm
  w-full max-w-md
`;

export const inputContainerStyles = 'w-full space-y-4';

export const labelStyles = 'text-sm font-medium text-text-secondary';

export const imageContainerStyles = `
  relative min-h-[120px] w-full flex items-center justify-center p-4
  bg-white rounded-xl border border-border-secondary shadow-inner
  overflow-hidden
`;

export const loadingOverlayStyles = `
  absolute inset-0 flex items-center justify-center bg-white/80 z-10
`;

export const invalidDataStyles = `
  flex flex-col items-center text-text-tertiary
`;

export const actionsContainerStyles = 'flex items-center gap-2 w-full';