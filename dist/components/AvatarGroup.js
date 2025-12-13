import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
/* ========================================
   AVATAR GROUP COMPONENT
   ======================================== */
export const AvatarGroup = forwardRef(({ items, max = 5, size = 'md', showTooltip = true, className, ...props }, ref) => {
    const sizes = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-14 h-14 text-xl",
    };
    const displayItems = items.slice(0, max);
    const remainingCount = items.length - max;
    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };
    return (_jsxs("div", { ref: ref, className: cn("flex items-center -space-x-2", className), ...props, children: [displayItems.map((item, index) => (_jsxs(motion.div, { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: index * 0.05 }, className: "relative group", children: [_jsx("div", { className: cn("relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-secondary overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10", sizes[size]), children: item.src ? (_jsx("img", { src: item.src, alt: item.alt, className: "w-full h-full object-cover" })) : (_jsx("span", { className: "font-medium text-text-primary", children: item.fallback || getInitials(item.alt) })) }), showTooltip && (_jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-elevated border border-border-primary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20", children: _jsx("span", { className: "text-xs text-text-primary", children: item.alt }) }))] }, index))), remainingCount > 0 && (_jsxs(motion.div, { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: displayItems.length * 0.05 }, className: cn("relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-tertiary font-medium text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20 transition-all cursor-default hover:z-10", sizes[size]), children: ["+", remainingCount] }))] }));
});
AvatarGroup.displayName = 'AvatarGroup';
//# sourceMappingURL=AvatarGroup.js.map