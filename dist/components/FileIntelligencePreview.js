"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { File, FileText, Image, Video, Music, Archive, Code, Download, Eye, Info } from 'lucide-react';
import { Button } from './Button';
/* ========================================
   HELPERS
   ======================================== */
const getFileIcon = (type) => {
    if (type.startsWith('image/'))
        return _jsx(Image, { className: "w-8 h-8" });
    if (type.startsWith('video/'))
        return _jsx(Video, { className: "w-8 h-8" });
    if (type.startsWith('audio/'))
        return _jsx(Music, { className: "w-8 h-8" });
    if (type.includes('pdf'))
        return _jsx(FileText, { className: "w-8 h-8" });
    if (type.includes('zip') || type.includes('rar'))
        return _jsx(Archive, { className: "w-8 h-8" });
    if (type.includes('code') || type.includes('text'))
        return _jsx(Code, { className: "w-8 h-8" });
    return _jsx(File, { className: "w-8 h-8" });
};
const formatFileType = (type) => {
    if (type.includes('/')) {
        return type.split('/')[1].toUpperCase();
    }
    return type.toUpperCase();
};
/* ========================================
   COMPONENT
   ======================================== */
export const FileIntelligencePreview = React.forwardRef(({ file, intelligence, onDownload, onPreview, showMetadata = true, className, ...props }, ref) => {
    const [showDetails, setShowDetails] = useState(false);
    const handlePreview = () => {
        if (onPreview) {
            onPreview();
        }
        else if (file.url || intelligence?.preview) {
            // Open file in new tab
            const previewUrl = file.url || intelligence?.preview;
            if (previewUrl) {
                window.open(previewUrl, '_blank');
            }
        }
    };
    const handleDownload = () => {
        if (onDownload) {
            onDownload();
        }
        else if (file.url) {
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    return (_jsxs("div", { ref: ref, className: cn("bg-surface-primary border border-border-primary rounded-xl overflow-hidden", className), ...props, children: [_jsx("div", { className: "p-4 border-b border-border-primary", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "flex-shrink-0 p-3 bg-surface-secondary rounded-lg text-text-tertiary", children: getFileIcon(file.type) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "text-sm font-semibold text-text-primary truncate", children: file.name }), _jsxs("p", { className: "text-xs text-text-secondary mt-0.5", children: [intelligence?.type || formatFileType(file.type), intelligence?.size && ` • ${intelligence.size}`] })] }), _jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [(file.url || intelligence?.preview) && (_jsx(Button, { variant: "ghost", size: "sm", onClick: handlePreview, children: _jsx(Eye, { className: "w-4 h-4" }) })), file.url && (_jsx(Button, { variant: "ghost", size: "sm", onClick: handleDownload, children: _jsx(Download, { className: "w-4 h-4" }) }))] })] }) }), intelligence?.preview && (_jsx("div", { className: "relative h-48 bg-surface-secondary", children: _jsx("img", { src: intelligence.preview, alt: file.name, className: "w-full h-full object-contain" }) })), intelligence && (_jsxs("div", { className: "p-4 space-y-3", children: [intelligence.summary && (_jsxs("div", { children: [_jsx("p", { className: "text-xs font-medium text-text-secondary mb-1", children: "Summary" }), _jsx("p", { className: "text-sm text-text-primary", children: intelligence.summary })] })), intelligence.extractedText && (_jsxs("div", { children: [_jsx("p", { className: "text-xs font-medium text-text-secondary mb-1", children: "Extracted Text" }), _jsx("p", { className: "text-sm text-text-secondary line-clamp-3", children: intelligence.extractedText })] })), showMetadata && intelligence.metadata && Object.keys(intelligence.metadata).length > 0 && (_jsxs("div", { children: [_jsxs("button", { onClick: () => setShowDetails(!showDetails), className: "flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors", children: [_jsx(Info, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Metadata" })] }), _jsx(AnimatePresence, { children: showDetails && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "mt-2 space-y-1 overflow-hidden", children: Object.entries(intelligence.metadata).map(([key, value]) => (_jsxs("div", { className: "flex justify-between text-xs", children: [_jsxs("span", { className: "text-text-tertiary", children: [key, ":"] }), _jsx("span", { className: "text-text-secondary", children: value })] }, key))) })) })] }))] }))] }));
});
FileIntelligencePreview.displayName = 'FileIntelligencePreview';
//# sourceMappingURL=FileIntelligencePreview.js.map