/* ========================================
   ALERT - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
}

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}