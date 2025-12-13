import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Minus, Square, X } from 'lucide-react';
/* ========================================
   WINDOW FRAME COMPONENT
   ======================================== */
export const WindowFrame = forwardRef(({ title, onClose, onMinimize, onMaximize, showControls = true, variant = 'default', className, children, ...props }, ref) => {
    const [isHoveringControls, setIsHoveringControls] = useState(false);
    const variants = {
        default: {
            frame: "bg-surface-elevated border-border-primary",
            titleBar: "bg-surface-secondary/50",
            title: "text-text-primary",
        },
        dark: {
            frame: "bg-gray-900 border-gray-800",
            titleBar: "bg-gray-800/50",
            title: "text-gray-100",
        },
    };
    return (_jsxs("div", { ref: ref, className: cn("rounded-xl border shadow-xl overflow-hidden", variants[variant].frame, className), ...props, children: [_jsxs("div", { className: cn("flex items-center justify-between px-4 py-3 border-b backdrop-blur-sm", variants[variant].titleBar, variant === 'default' ? 'border-border-primary' : 'border-gray-800'), onMouseEnter: () => setIsHoveringControls(true), onMouseLeave: () => setIsHoveringControls(false), children: [showControls && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: onClose, className: "w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 flex items-center justify-center group transition-colors focus:outline-none", "aria-label": "Close", children: isHoveringControls && (_jsx(X, { className: "w-2 h-2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity", strokeWidth: 3 })) }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: onMinimize, className: "w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 flex items-center justify-center group transition-colors focus:outline-none", "aria-label": "Minimize", children: isHoveringControls && (_jsx(Minus, { className: "w-2 h-2 text-[#8B6914] opacity-0 group-hover:opacity-100 transition-opacity", strokeWidth: 3 })) }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: onMaximize, className: "w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 flex items-center justify-center group transition-colors focus:outline-none", "aria-label": "Maximize", children: isHoveringControls && (_jsx(Square, { className: "w-1.5 h-1.5 text-[#0F5323] opacity-0 group-hover:opacity-100 transition-opacity", strokeWidth: 3 })) })] })), title && (_jsx("div", { className: cn("absolute left-1/2 -translate-x-1/2 text-sm font-medium", variants[variant].title), children: title })), _jsx("div", { className: "w-[52px]" })] }), _jsx("div", { className: "overflow-auto", children: children })] }));
});
WindowFrame.displayName = 'WindowFrame';
//# sourceMappingURL=WindowFrame.js.map