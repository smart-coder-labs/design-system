/* ========================================
   ACCESSIBLE HIGH CONTRAST MODE - STYLES
   ======================================== */

import { cva } from 'class-variance-authority';

export const highContrastVariants = cva('', {
    variants: {
        mode: {
            default: 'bg-bg-secondary border border-border-primary',
            high: 'bg-black border-4 border-yellow-400 grayscale-0',
        },
    },
    defaultVariants: {
        mode: 'default',
    },
});