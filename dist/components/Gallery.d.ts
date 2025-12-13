import React from 'react';
import { LightboxImage } from './Lightbox';
export interface GalleryProps {
    images: LightboxImage[];
    columns?: number;
    gap?: number;
    aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
    className?: string;
}
export declare const Gallery: React.FC<GalleryProps>;
//# sourceMappingURL=Gallery.d.ts.map