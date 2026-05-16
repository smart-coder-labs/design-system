/* ========================================
   CAPTION - TYPES
   ======================================== */

import type { HTMLAttributes, ReactNode } from 'react';

export interface CaptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children?: ReactNode;
}