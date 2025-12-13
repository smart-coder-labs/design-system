import React from 'react';
export interface LightboxImage {
    src: string;
    alt?: string;
    caption?: string;
}
export interface LightboxProps {
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    onIndexChange?: (index: number) => void;
    className?: string;
}
export declare const Lightbox: React.FC<LightboxProps>;
//# sourceMappingURL=Lightbox.d.ts.map