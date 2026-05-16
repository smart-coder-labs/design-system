/* ========================================
   ALERT - STYLES
   ======================================== */

import { cva } from 'class-variance-authority';
import type { AlertVariant } from './Alert.types';

export const alertVariants = cva(
    `relative w-full rounded-xl border p-4 
    [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] 
    [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground`,
    {
        variants: {
            variant: {
                default: 'bg-surface-secondary text-text-primary border-border-primary',
                destructive: 'border-status-error/50 text-status-error bg-red-600/10',
                success: 'border-status-success/50 text-status-success bg-status-success/10',
                warning: 'border-status-warning/50 text-status-warning bg-status-warning/10',
                info: 'border-status-info/50 text-status-info bg-status-info/10',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export const alertTitleStyles = 'mb-1 font-medium leading-none tracking-tight';

export const alertDescriptionStyles = 'text-sm [&_p]:leading-relaxed opacity-90';

export const alertIconStyles = 'h-4 w-4';