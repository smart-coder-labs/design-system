/* ========================================
   BOTTOM NAVIGATION - STYLES
   ======================================== */

export const navContainerStyles = `
  fixed bottom-0 left-0 right-0 z-50 pb-safe
  flex items-center justify-around
`;

export const navVariantStyles = {
    default: 'bg-surface-primary border-t border-border-primary',
    glass: 'glass border-t border-border-secondary/50',
    elevated: 'bg-surface-primary border-t border-border-primary shadow-lg',
};

export const navSizeStyles = {
    sm: 'h-16',
    md: 'h-20',
    lg: 'h-24',
};

export const itemContainerStyles = `
  flex flex-col items-center justify-center relative
  flex-1 min-w-0
`;

export const itemDisabledStyles = 'opacity-40 cursor-not-allowed';

export const itemLinkStyles = `
  flex flex-col items-center justify-center relative
  w-full min-w-0
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-lg
`;

export const iconContainerStyles = `
  flex items-center justify-center rounded-lg transition-colors
`;

export const activeIndicatorStyles = `
  absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1
  bg-accent-blue rounded-full
`;

export const badgeStyles = `
  absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 flex items-center justify-center
  bg-status-error text-white text-[10px] font-bold rounded-full
`;

export const labelStyles = 'font-medium text-center truncate w-full';