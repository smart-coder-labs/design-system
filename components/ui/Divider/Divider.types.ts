/* ========================================
   DIVIDER - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';
import type { ReactNode } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: ReactNode;
    labelPosition?: 'left' | 'center' | 'right';
    variant?: 'solid' | 'dashed' | 'dotted';
    lineClassName?: string;
}