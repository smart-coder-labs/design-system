/* ========================================
   AVATAR GROUP - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export type AvatarGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarGroupItem {
    src?: string;
    alt: string;
    fallback?: string;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    items: AvatarGroupItem[];
    max?: number;
    size?: AvatarGroupSize;
    showTooltip?: boolean;
}