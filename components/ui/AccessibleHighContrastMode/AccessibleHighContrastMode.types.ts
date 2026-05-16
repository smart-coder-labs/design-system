/* ========================================
   ACCESSIBLE HIGH CONTRAST MODE - TYPES
   ======================================== */

import type { HTMLAttributes, ReactNode } from 'react';

export type HighContrastMode = 'default' | 'high';

export interface AccessibleHighContrastModeProps extends HTMLAttributes<HTMLDivElement> {
    mode?: HighContrastMode;
    highContrastLabel?: string;
    largeTextLabel?: string;
    dyslexicFontLabel?: string;
    accessibilityBadgeLabel?: string;
}

export interface HighContrastControlsProps extends HTMLAttributes<HTMLDivElement> {
    highContrastLabel?: string;
    largeTextLabel?: string;
    dyslexicFontLabel?: string;
}

export interface HighContrastPreviewProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

/* Context type */
export interface AccessibleHighContrastContextValue {
    highContrast: boolean;
    largeText: boolean;
    dyslexicFont: boolean;
    setHighContrast: (v: boolean) => void;
    setLargeText: (v: boolean) => void;
    setDyslexicFont: (v: boolean) => void;
}