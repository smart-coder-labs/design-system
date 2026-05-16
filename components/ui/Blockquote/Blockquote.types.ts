/* ========================================
   BLOCKQUOTE - TYPES
   ======================================== */

import type { ReactNode } from 'react';

export interface BlockquoteProps {
    children: ReactNode;
    author?: string;
    source?: string;
    className?: string;
}