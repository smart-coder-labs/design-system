"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Copy, Check, Download, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
/* ========================================
   COMPONENT
   ======================================== */
export const RecoveryCodeDisplay = React.forwardRef(({ codes, onCopy, onDownload, title = 'Recovery Codes', description = 'Save these codes in a safe place. You can use them to access your account if you lose your device.', showWarning = true, className, ...props }, ref) => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [revealedCodes, setRevealedCodes] = useState(new Set());
    const handleCopy = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
        onCopy?.(code);
    };
    const toggleReveal = (index) => {
        setRevealedCodes((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            }
            else {
                newSet.add(index);
            }
            return newSet;
        });
    };
    const handleDownload = () => {
        const content = codes.join('\n');
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recovery-codes.txt';
        a.click();
        URL.revokeObjectURL(url);
        onDownload?.();
    };
    return (_jsxs("div", { ref: ref, className: cn("w-full max-w-md space-y-4", className), ...props, children: [_jsxs("div", { className: "text-center space-y-2", children: [_jsx("h2", { className: "text-xl font-bold text-text-primary", children: title }), description && (_jsx("p", { className: "text-sm text-text-secondary", children: description }))] }), showWarning && (_jsxs("div", { className: "flex items-start gap-3 p-4 bg-status-warning/10 border border-status-warning/20 rounded-xl", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-status-warning flex-shrink-0 mt-0.5" }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium text-text-primary mb-1", children: "Important" }), _jsx("p", { className: "text-xs text-text-secondary", children: "These codes can only be viewed once. Make sure to save them securely." })] })] })), _jsx("div", { className: "bg-surface-primary border border-border-primary rounded-xl p-4 space-y-2", children: codes.map((code, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, className: "flex items-center justify-between gap-3 p-3 bg-surface-secondary rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("span", { className: "text-xs font-medium text-text-tertiary w-6 flex-shrink-0", children: index + 1 }), _jsx("code", { className: "text-sm font-mono text-text-primary flex-1 truncate", children: revealedCodes.has(index) ? code : '•'.repeat(code.length) })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => toggleReveal(index), children: revealedCodes.has(index) ? (_jsx(EyeOff, { className: "w-3.5 h-3.5" })) : (_jsx(Eye, { className: "w-3.5 h-3.5" })) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleCopy(code, index), children: copiedIndex === index ? (_jsx(Check, { className: "w-3.5 h-3.5 text-status-success" })) : (_jsx(Copy, { className: "w-3.5 h-3.5" })) })] })] }, index))) }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "secondary", fullWidth: true, onClick: handleDownload, leftIcon: _jsx(Download, { className: "w-4 h-4" }), children: "Download Codes" }), _jsx(Button, { variant: "primary", fullWidth: true, onClick: () => {
                            codes.forEach((code, index) => handleCopy(code, index));
                        }, leftIcon: _jsx(Copy, { className: "w-4 h-4" }), children: "Copy All" })] })] }));
});
RecoveryCodeDisplay.displayName = 'RecoveryCodeDisplay';
//# sourceMappingURL=RecoveryCodeDisplay.js.map