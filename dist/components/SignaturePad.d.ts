import React from 'react';
export interface SignaturePadProps {
    /** Width of the canvas in pixels (default: 100% of container) */
    width?: number;
    /** Height of the canvas in pixels (default: 200) */
    height?: number;
    /** Color of the pen stroke (default: #000000) */
    penColor?: string;
    /** Background color of the canvas (default: #FFFFFF) */
    backgroundColor?: string;
    /** Stroke width (default: 2) */
    strokeWidth?: number;
    /** Callback when drawing ends */
    onEnd?: (dataUrl: string) => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const SignaturePad: React.FC<SignaturePadProps>;
//# sourceMappingURL=SignaturePad.d.ts.map