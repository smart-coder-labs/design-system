import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { Input } from './Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';
import { Download, Copy, Check, RefreshCw, Barcode } from 'lucide-react';
export const BarcodeGenerator = ({ defaultValue = "1234567890", format = "code128", scale = 3, includeText = true, showInput = false, className }) => {
    const [value, setValue] = useState(defaultValue);
    const [selectedFormat, setSelectedFormat] = useState(format);
    const [imgSrc, setImgSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    // Generate URL using bwip-js API
    useEffect(() => {
        if (!value)
            return;
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
        }
        catch (error) {
            console.error("Error downloading barcode:", error);
            window.open(imgSrc, '_blank');
        }
    };
    const handleCopyValue = () => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    return (_jsxs("div", { className: cn("flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md", className), children: [showInput && (_jsxs("div", { className: "w-full space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-text-secondary", children: "Content" }), _jsx(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: "Enter value...", className: "w-full" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-text-secondary", children: "Format" }), _jsxs(Select, { value: selectedFormat, onValueChange: (v) => setSelectedFormat(v), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select format" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "code128", children: "Code 128 (Standard)" }), _jsx(SelectItem, { value: "ean13", children: "EAN-13 (Retail)" }), _jsx(SelectItem, { value: "upca", children: "UPC-A (US Retail)" }), _jsx(SelectItem, { value: "code39", children: "Code 39" }), _jsx(SelectItem, { value: "itf14", children: "ITF-14 (Logistics)" })] })] })] })] })), _jsxs("div", { className: "relative min-h-[120px] w-full flex items-center justify-center p-4 bg-white rounded-xl border border-border-secondary shadow-inner overflow-hidden", children: [isLoading && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-white/80 z-10", children: _jsx(RefreshCw, { className: "w-6 h-6 text-accent-blue animate-spin" }) })), imgSrc ? (_jsx("img", { src: imgSrc, alt: `Barcode ${value}`, className: "max-w-full h-auto object-contain mix-blend-multiply" })) : (_jsxs("div", { className: "flex flex-col items-center text-text-tertiary", children: [_jsx(Barcode, { className: "w-8 h-8 mb-2 opacity-50" }), _jsx("span", { className: "text-xs", children: "Invalid Data" })] }))] }), _jsxs("div", { className: "flex items-center gap-2 w-full", children: [_jsxs(Button, { variant: "outline", className: "flex-1", onClick: handleCopyValue, title: "Copy value to clipboard", children: [isCopied ? _jsx(Check, { className: "w-4 h-4 mr-2" }) : _jsx(Copy, { className: "w-4 h-4 mr-2" }), isCopied ? "Copied" : "Copy Text"] }), _jsxs(Button, { variant: "primary", className: "flex-1", onClick: handleDownload, disabled: !imgSrc || isLoading, children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download"] })] })] }));
};
//# sourceMappingURL=BarcodeGenerator.js.map