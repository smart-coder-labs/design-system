import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { Input } from './Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';
import { Download, Copy, Check, RefreshCw, Barcode } from 'lucide-react';

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

export const BarcodeGenerator: React.FC<BarcodeGeneratorProps> = ({
    defaultValue = "1234567890",
    format = "code128",
    scale = 3,
    includeText = true,
    showInput = false,
    className
}) => {
    const [value, setValue] = useState(defaultValue);
    const [selectedFormat, setSelectedFormat] = useState<BarcodeFormat>(format);
    const [imgSrc, setImgSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    // Generate URL using bwip-js API
    useEffect(() => {
        if (!value) return;
        
        setIsLoading(true);
        const encodedValue = encodeURIComponent(value);
        
        // bwip-js API parameters
        // bcid: Barcode type
        // text: Text to encode
        // scale: Scale factor (x-axis)
        // rotate: Rotation (N, R, L, I)
        // includetext: Show human readable text
        
        const url = `https://bwipjs-api.metafloor.com/?bcid=${selectedFormat}&text=${encodedValue}&scale=${scale}&rotate=N${includeText ? '&includetext' : ''}`;
        
        // Preload image
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setImgSrc(url);
            setIsLoading(false);
        };
        img.onerror = () => {
            // Handle error (e.g. invalid characters for format)
            setIsLoading(false);
        };
    }, [value, selectedFormat, scale, includeText]);

    const handleDownload = async () => {
        try {
            const response = await fetch(imgSrc);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `barcode-${value}-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading barcode:", error);
            window.open(imgSrc, '_blank');
        }
    };

    const handleCopyValue = () => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className={cn(
            "flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md",
            className
        )}>
            {showInput && (
                <div className="w-full space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Content</label>
                        <Input 
                            value={value} 
                            onChange={(e) => setValue(e.target.value)} 
                            placeholder="Enter value..."
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Format</label>
                        <Select 
                            value={selectedFormat} 
                            onValueChange={(v) => setSelectedFormat(v as BarcodeFormat)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="code128">Code 128 (Standard)</SelectItem>
                                <SelectItem value="ean13">EAN-13 (Retail)</SelectItem>
                                <SelectItem value="upca">UPC-A (US Retail)</SelectItem>
                                <SelectItem value="code39">Code 39</SelectItem>
                                <SelectItem value="itf14">ITF-14 (Logistics)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}

            <div className="relative min-h-[120px] w-full flex items-center justify-center p-4 bg-white rounded-xl border border-border-secondary shadow-inner overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                        <RefreshCw className="w-6 h-6 text-accent-blue animate-spin" />
                    </div>
                )}
                
                {imgSrc ? (
                    <img 
                        src={imgSrc} 
                        alt={`Barcode ${value}`} 
                        className="max-w-full h-auto object-contain mix-blend-multiply"
                    />
                ) : (
                    <div className="flex flex-col items-center text-text-tertiary">
                        <Barcode className="w-8 h-8 mb-2 opacity-50" />
                        <span className="text-xs">Invalid Data</span>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 w-full">
                <Button 
                    variant="outline" 
                    className="flex-1" 
                    onClick={handleCopyValue}
                    title="Copy value to clipboard"
                >
                    {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {isCopied ? "Copied" : "Copy Text"}
                </Button>
                <Button 
                    variant="primary" 
                    className="flex-1" 
                    onClick={handleDownload}
                    disabled={!imgSrc || isLoading}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                </Button>
            </div>
        </div>
    );
};
