/* ========================================
   CALLOUT - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export type CalloutVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CalloutVariant;
    title?: string;
    icon?: React.ElementType;
    dismissible?: boolean;
    onDismiss?: () => void;
}