import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { Input } from './Input';
import { Download, Copy, Check, RefreshCw } from 'lucide-react';
export const QRCodeGenerator = ({ defaultValue = "https://example.com", size = 200, color = "#000000", backgroundColor = "#FFFFFF", showInput = false, className }) => {
    const [value, setValue] = useState(defaultValue);
    const [imgSrc, setImgSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    // Clean hex colors for API (remove #)
    const cleanColor = (hex) => hex.replace('#', '');
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
        }
        catch (error) {
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
    return (_jsxs("div", { className: cn("flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-sm", className), children: [showInput && (_jsxs("div", { className: "w-full space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-text-secondary", children: "Content" }), _jsx(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: "Enter URL or text...", className: "w-full" })] })), _jsxs("div", { className: "relative rounded-xl overflow-hidden bg-white shadow-inner border border-border-secondary", style: { width: size, height: size }, children: [isLoading && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-surface-secondary animate-pulse", children: _jsx(RefreshCw, { className: "w-8 h-8 text-text-tertiary animate-spin" }) })), imgSrc && (_jsx("img", { src: imgSrc, alt: "QR Code", className: cn("w-full h-full object-contain transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100") }))] }), _jsxs("div", { className: "flex items-center gap-2 w-full", children: [_jsxs(Button, { variant: "outline", className: "flex-1", onClick: handleCopyUrl, title: "Copy content to clipboard", children: [isCopied ? _jsx(Check, { className: "w-4 h-4 mr-2" }) : _jsx(Copy, { className: "w-4 h-4 mr-2" }), isCopied ? "Copied" : "Copy"] }), _jsxs(Button, { variant: "primary", className: "flex-1", onClick: handleDownload, children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download"] })] })] }));
};
//# sourceMappingURL=QRCodeGenerator.js.map