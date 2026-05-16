/* ========================================
   COLLAPSIBLE - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
}