import React from 'react';
export interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}
export interface ImageCarouselProps {
    images: CarouselImage[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    effect?: 'slide' | 'fade';
    className?: string;
    height?: string | number;
}
export declare const ImageCarousel: React.FC<ImageCarouselProps>;
//# sourceMappingURL=ImageCarousel.d.ts.map