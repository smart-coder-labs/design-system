"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const WindowControls = React.forwardRef(({ onClose, onMinimize, onMaximize, variant = 'macos', className, ...props }, ref) => {
    if (variant === 'windows') {
        return (_jsxs("div", { ref: ref, className: cn("flex items-center gap-1", className), ...props, children: [onMinimize && (_jsx("button", { onClick: onMinimize, className: "w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors", "aria-label": "Minimize", children: _jsx(Minus, { className: "w-4 h-4 text-text-secondary" }) })), onMaximize && (_jsx("button", { onClick: onMaximize, className: "w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors", "aria-label": "Maximize", children: _jsx(Square, { className: "w-3.5 h-3.5 text-text-secondary" }) })), onClose && (_jsx("button", { onClick: onClose, className: "w-12 h-8 flex items-center justify-center hover:bg-status-error text-status-error transition-colors", "aria-label": "Close", children: _jsx(X, { className: "w-4 h-4" }) }))] }));
    }
    // macOS style
    return (_jsxs("div", { ref: ref, className: cn("flex items-center gap-2", className), ...props, children: [onClose && (_jsx(motion.button, { onClick: onClose, className: "w-3 h-3 rounded-full bg-status-error flex items-center justify-center group", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, "aria-label": "Close", children: _jsx(X, { className: "w-2 h-2 text-status-error opacity-0 group-hover:opacity-100 transition-opacity" }) })), onMinimize && (_jsx(motion.button, { onClick: onMinimize, className: "w-3 h-3 rounded-full bg-status-warning flex items-center justify-center group", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, "aria-label": "Minimize", children: _jsx(Minus, { className: "w-2 h-2 text-status-warning opacity-0 group-hover:opacity-100 transition-opacity" }) })), onMaximize && (_jsx(motion.button, { onClick: onMaximize, className: "w-3 h-3 rounded-full bg-status-success flex items-center justify-center group", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, "aria-label": "Maximize", children: _jsx(Square, { className: "w-1.5 h-1.5 text-status-success opacity-0 group-hover:opacity-100 transition-opacity" }) }))] }));
});
WindowControls.displayName = 'WindowControls';
//# sourceMappingURL=WindowControls.js.map