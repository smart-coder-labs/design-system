import React from 'react';
export interface QRCodeGeneratorProps {
    /** Initial value for the QR code */
    defaultValue?: string;
    /** Size of the QR code in pixels (default: 200) */
    size?: number;
    /** Color of the QR code modules (hex, default: 000000) */
    color?: string;
    /** Background color (hex, default: FFFFFF) */
    backgroundColor?: string;
    /** Show an internal input to change the value */
    showInput?: boolean;
    /** Class name for the container */
    className?: string;
}
export declare const QRCodeGenerator: React.FC<QRCodeGeneratorProps>;
//# sourceMappingURL=QRCodeGenerator.d.ts.map