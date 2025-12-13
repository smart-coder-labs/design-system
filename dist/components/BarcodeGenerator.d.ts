import React from 'react';
export type BarcodeFormat = 'code128' | 'ean13' | 'upca' | 'code39' | 'itf14' | 'qrcode';
export interface BarcodeGeneratorProps {
    /** Initial value for the barcode */
    defaultValue?: string;
    /** Barcode format (default: code128) */
    format?: BarcodeFormat;
    /** Scale factor (1-5, default: 3) */
    scale?: number;
    /** Show the text value below the barcode */
    includeText?: boolean;
    /** Show an internal input to change the value */
    showInput?: boolean;
    /** Class name for the container */
    className?: string;
}
export declare const BarcodeGenerator: React.FC<BarcodeGeneratorProps>;
//# sourceMappingURL=BarcodeGenerator.d.ts.map