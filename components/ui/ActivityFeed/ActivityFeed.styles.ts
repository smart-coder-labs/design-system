/* ========================================
   ACTIVITY FEED - STYLES
   ======================================== */

import type { ActivityType } from './ActivityFeed.types';

export const feedContainerStyles = 'space-y-4';

export const itemContainerStyles = `
  relative flex gap-4 p-4 rounded-2xl
  transition-apple
`;

export const itemVariantStyles: Record<ActivityType, string> = {
    default: 'bg-surface-primary',
    comment: 'bg-surface-primary',
    commit: 'bg-surface-secondary',
    pr: 'bg-accent-blue/5 border border-accent-blue/20',
    review: 'bg-status-warning/5 border border-status-warning/20',
    alert: 'bg-status-error/5 border border-status-error/20',
    success: 'bg-status-success/5 border border-status-success/20',
    file: 'bg-surface-secondary',
};

export const iconContainerStyles = `
  flex-shrink-0 w-10 h-10 rounded-xl
  flex items-center justify-center
`;

export const contentContainerStyles = 'flex-1 min-w-0';

export const titleStyles = 'text-sm font-semibold text-text-primary';

export const descriptionStyles = 'text-xs text-text-secondary mt-1';

export const timestampStyles = 'text-[10px] text-text-tertiary mt-2';