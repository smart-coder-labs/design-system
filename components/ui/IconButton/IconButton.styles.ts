/* ========================================
   ICON BUTTON - STYLES
   ======================================== */

import type { IconButtonVariant, IconButtonSize } from './IconButton.types';

export const iconButtonVariantStyles: Record<IconButtonVariant, string> = {
    primary: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",
    secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",
    tertiary: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50",
    danger: "bg-status-error/10 text-status-error hover:bg-status-error/20",
};

export const iconButtonSizeStyles: Record<IconButtonSize, string> = {
    xs: "w-6 h-6 p-1",
    sm: "w-8 h-8 p-1.5",
    md: "w-10 h-10 p-2",
    lg: "w-12 h-12 p-2.5",
    xl: "w-14 h-14 p-3",
};

export const iconSizeStyles: Record<IconButtonSize, string> = {
    xs: "w-3.5 h-3.5",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
};