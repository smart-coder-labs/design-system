import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
/* ========================================
   PROVIDER
   ======================================== */
export const TooltipProvider = TooltipPrimitive.Provider;
/* ========================================
   COMPONENT
   ======================================== */
const TooltipContent = motion(TooltipPrimitive.Content);
export const Tooltip = ({ children, content, side = 'top', align = 'center', delayDuration = 200, sideOffset = 8, }) => {
    const [open, setOpen] = React.useState(false);
    return (_jsxs(TooltipPrimitive.Root, { open: open, onOpenChange: setOpen, delayDuration: delayDuration, children: [_jsx(TooltipPrimitive.Trigger, { asChild: true, children: _jsx("span", { className: "inline-flex w-fit cursor-default", tabIndex: 0, children: children }) }), _jsx(AnimatePresence, { children: open && (_jsx(TooltipPrimitive.Portal, { forceMount: true, children: _jsxs(TooltipContent, { side: side, align: align, sideOffset: sideOffset, className: "\n                  px-3 py-2\n                  bg-surface-primary\n                  border border-border-primary\n                  text-text-primary\n                  text-sm\n                  rounded-lg\n                  shadow-md\n                  max-w-xs\n                  z-tooltip\n                  origin-[var(--radix-tooltip-content-transform-origin)]\n                ", initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 }, transition: {
                            duration: 0.16,
                            ease: [0.16, 1, 0.3, 1],
                        }, children: [content, _jsx(TooltipPrimitive.Arrow, { className: "fill-border-primary", width: 12, height: 6 })] }) })) })] }));
};
//# sourceMappingURL=Tooltip.js.map