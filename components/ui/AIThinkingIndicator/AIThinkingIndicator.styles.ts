/* ========================================
   AI THINKING INDICATOR - STYLES (cva)
   ======================================== */

import { cva } from 'class-variance-authority';

export const indicatorVariants = cva('flex items-center gap-3', {
  variants: {
    size: {
      sm: '[&_.dot]:w-1.5 [&_.dot]:h-1.5 [&_div]:gap-1 [&_span]:text-xs',
      md: '[&_.dot]:w-2 [&_.dot]:h-2 [&_div]:gap-1.5 [&_span]:text-sm',
      lg: '[&_.dot]:w-2.5 [&_dot]:h-2.5 [&_div]:gap-2 [&_span]:text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});