/* ========================================
   AVATAR - STYLES
   ======================================== */

import { cva } from 'class-variance-authority';
import type { AvatarSize, AvatarShape } from './Avatar.types';

export const avatarVariants = cva(
    'relative flex shrink-0 overflow-hidden rounded-full transition-opacity hover:opacity-90',
    {
        variants: {
            size: {
                xs: 'h-6 w-6 text-xs',
                sm: 'h-8 w-8 text-xs',
                md: 'h-10 w-10 text-sm',
                lg: 'h-12 w-12 text-base',
                xl: 'h-16 w-16 text-xl',
                '2xl': 'h-24 w-24 text-2xl',
            },
            shape: {
                circle: 'rounded-full',
                square: 'rounded-lg',
            },
        },
        defaultVariants: {
            size: 'md',
            shape: 'circle',
        },
    }
);

export const avatarImageStyles = 'aspect-square h-full w-full object-cover';

export const avatarFallbackStyles = 'flex h-full w-full items-center justify-center bg-surface-secondary text-text-secondary font-medium';