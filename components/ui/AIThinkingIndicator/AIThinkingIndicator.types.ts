/* ========================================
   AI THINKING INDICATOR - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

export type IndicatorVariant = 'dots' | 'pulse' | 'wave';
export type IndicatorSize = 'sm' | 'md' | 'lg';

export interface AIThinkingIndicatorProps
    extends HTMLAttributes<HTMLDivElement> {
    variant?: IndicatorVariant;
    size?: IndicatorSize;
    color?: string;
    message?: string;
}