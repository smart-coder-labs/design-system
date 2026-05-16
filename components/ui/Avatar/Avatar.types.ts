/* ========================================
   AVATAR - TYPES
   ======================================== */

import type { HTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    size?: AvatarSize;
    shape?: AvatarShape;
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {}