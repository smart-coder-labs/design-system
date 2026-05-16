/* ========================================
   CALENDAR - STYLES (cva)
   ======================================== */

import { cva } from 'class-variance-authority';

export const calendarVariants = cva('w-full', {
    variants: {
        variant: {
            default: '',
            filled: 'bg-surface-secondary',
            bordered: 'border border-border-primary rounded-lg',
        },
        size: {
            sm: '[&_button]:text-sm [&_button]:p-1',
            md: '[&_button]:text-base [&_button]:p-2',
            lg: '[&_button]:text-lg [&_button]:p-3',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
    },
});

export const calendarDayVariants = cva(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
    {
        variants: {
            variant: {
                default: 'hover:bg-surface-secondary',
                selected: 'bg-accent-blue text-white',
                today: 'border-2 border-accent-blue',
                disabled: 'opacity-50 cursor-not-allowed',
                outside: 'opacity-40',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export const calendarHeaderVariants = cva('flex items-center justify-between', {
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
        },
    },
    defaultVariants: {
        size: 'md',
    },
});