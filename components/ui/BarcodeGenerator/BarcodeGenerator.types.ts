/* ========================================
   BARCODE GENERATOR - TYPES
   ======================================== */

export type BarcodeFormat = 'code128' | 'ean13' | 'upca' | 'code39' | 'itf14' | 'qrcode';

export interface BarcodeGeneratorProps {
    defaultValue?: string;
    format?: BarcodeFormat;
    scale?: number;
    includeText?: boolean;
    showInput?: boolean;
    className?: string;
}