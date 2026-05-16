/* ========================================
   AVATAR GROUP - STYLES
   ======================================== */

import type { AvatarGroupSize } from './AvatarGroup.types';

export const avatarGroupContainerStyles = 'flex items-center -space-x-2';

export const avatarGroupSizeStyles: Record<AvatarGroupSize, string> = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl',
};

export const avatarItemStyles = `
  relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary 
  bg-surface-secondary overflow-hidden ring-0 
  hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10
`;

export const avatarImageStyles = 'w-full h-full object-cover';

export const avatarFallbackStyles = 'font-medium text-text-primary';

export const tooltipStyles = `
  absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
  bg-surface-elevated border border-border-primary rounded-lg shadow-lg 
  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none 
  whitespace-nowrap z-20
`;

export const remainingCountStyles = `
  relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary 
  bg-surface-tertiary font-medium text-text-secondary 
  hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20 
  transition-all cursor-default hover:z-10
`;