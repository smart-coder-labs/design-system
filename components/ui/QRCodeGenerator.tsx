import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';;
import { Button } from './Button';
import { Input } from './Input';
import { Download, Copy, Check, RefreshCw, QrCode } from 'lucide-react';

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

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
    defaultValue = "https://example.com",
    size = 200,
    color = "#000000",
    backgroundColor = "#FFFFFF",
    showInput = false,
    className
}) => {
    const [value, setValue] = useState(defaultValue);
    const [imgSrc, setImgSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    // Clean hex colors for API (remove #)
    const cleanColor = (hex: string) => hex.replace('#', '');
    
    // Generate URL
    useEffect(() => {
        setIsLoading(true);
        const encodedValue = encodeURIComponent(value);
        const colorParam = cleanColor(color);
        const bgParam = cleanColor(backgroundColor);
        
        // Using qrserver API which is reliable and free
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedValue}&color=${colorParam}&bgcolor=${bgParam}&margin=10`;
        
        // Preload image to handle loading state
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setImgSrc(url);
            setIsLoading(false);
        };
    }, [value, size, color, backgroundColor]);

    const handleDownload = async () => {
        try {
            const response = await fetch(imgSrc);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `qrcode-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading QR code:", error);
            // Fallback for when fetch fails (e.g. strict CORS)
            window.open(imgSrc, '_blank');
        }
    };

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className={cn(
            "flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-sm",
            className
        )}>
            {showInput && (
                <div className="w-full space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Content</label>
                    <Input 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder="Enter URL or text..."
                        className="w-full"
                    />
                </div>
            )}

            <div 
                className="relative rounded-xl overflow-hidden bg-white shadow-inner border border-border-secondary"
                style={{ width: size, height: size }}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-secondary animate-pulse">
                        <RefreshCw className="w-8 h-8 text-text-tertiary animate-spin" />
                    </div>
                )}
                {imgSrc && (
                    <img 
                        src={imgSrc} 
                        alt="QR Code" 
                        className={cn("w-full h-full object-contain transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
                    />
                )}
            </div>

            <div className="flex items-center gap-2 w-full">
                <Button 
                    variant="outline" 
                    className="flex-1" 
                    onClick={handleCopyUrl}
                    title="Copy content to clipboard"
                >
                    {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {isCopied ? "Copied" : "Copy"}
                </Button>
                <Button 
                    variant="primary" 
                    className="flex-1" 
                    onClick={handleDownload}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                </Button>
            </div>
        </div>
    );
};
