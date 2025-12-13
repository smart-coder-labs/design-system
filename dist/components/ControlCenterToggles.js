"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
/* ========================================
   COMPONENT
   ======================================== */
export const ControlCenterToggles = React.forwardRef(({ controls, layout = 'grid', className, ...props }, ref) => {
    const isGrid = layout === 'grid';
    return (_jsx("div", { ref: ref, className: cn(isGrid ? "grid grid-cols-3 gap-3" : "flex flex-col gap-2", className), ...props, children: controls.map((control, index) => (_jsxs(motion.button, { onClick: () => !control.disabled && control.onToggle(!control.enabled), disabled: control.disabled, className: cn("relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl", "bg-surface-primary border border-border-primary", "hover:bg-surface-secondary transition-colors", "focus:outline-none focus:ring-2 focus:ring-accent-blue", control.disabled && "opacity-40 cursor-not-allowed", isGrid && "aspect-square"), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.05 }, whileHover: !control.disabled ? { scale: 1.02 } : {}, whileTap: !control.disabled ? { scale: 0.98 } : {}, children: [_jsx("div", { className: cn("flex items-center justify-center", control.enabled ? "text-accent-blue" : "text-text-tertiary"), children: control.icon }), _jsx("span", { className: cn("text-xs font-medium text-center", control.enabled ? "text-text-primary" : "text-text-secondary"), children: control.label }), control.showValue && control.value !== undefined && (_jsx("span", { className: "text-xs text-text-tertiary", children: control.value })), isGrid && control.enabled && (_jsx(motion.div, { className: "absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full", initial: { scale: 0 }, animate: { scale: 1 } }))] }, control.id))) }));
});
ControlCenterToggles.displayName = 'ControlCenterToggles';
//# sourceMappingURL=ControlCenterToggles.js.map