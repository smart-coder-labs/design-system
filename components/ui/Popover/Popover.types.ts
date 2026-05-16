/* ========================================
   POPOVER - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export interface PopoverTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}

export interface PopoverAnchorProps extends HTMLAttributes<HTMLDivElement> {}