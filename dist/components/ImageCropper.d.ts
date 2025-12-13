import React from 'react';
export interface ImageCropperProps {
    src: string;
    aspectRatio?: number;
    onCrop: (croppedImage: string) => void;
    onCancel: () => void;
    className?: string;
}
export declare const ImageCropper: React.FC<ImageCropperProps>;
//# sourceMappingURL=ImageCropper.d.ts.map