/* ========================================
   CARD SECURITY CONTROLS - TYPES
   ======================================== */

import type { ReactNode } from 'react';

export interface CardControl {
    id: string;
    label: string;
    description: string;
    icon: ReactNode;
    checked: boolean;
    variant?: 'default' | 'danger';
}

export interface CardSecurityControlsProps {
    controls?: CardControl[];
    onToggle?: (id: string, checked: boolean) => void;
    title?: string;
    className?: string;
}