"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
/* ========================================
   HELPER FUNCTIONS
   ======================================== */
const variantStyles = {
    default: 'bg-surface-primary border-t border-border-primary',
    glass: 'glass border-t border-border-secondary/50',
    elevated: 'bg-surface-primary border-t border-border-primary shadow-lg',
};
const sizeStyles = {
    sm: {
        container: 'h-16',
        icon: 'w-5 h-5',
        label: 'text-xs',
        padding: 'px-2 py-1',
        gap: 'gap-1',
    },
    md: {
        container: 'h-20',
        icon: 'w-6 h-6',
        label: 'text-xs',
        padding: 'px-3 py-2',
        gap: 'gap-1.5',
    },
    lg: {
        container: 'h-24',
        icon: 'w-7 h-7',
        label: 'text-sm',
        padding: 'px-4 py-3',
        gap: 'gap-2',
    },
};
const NavigationItem = ({ item, showLabel, size, onItemClick, }) => {
    const { icon: iconSize, label: labelSize, padding, gap } = sizeStyles[size];
    const Icon = item.icon;
    const isActive = item.active || false;
    const isDisabled = item.disabled || false;
    const handleClick = () => {
        if (isDisabled)
            return;
        if (item.onClick) {
            item.onClick();
        }
        if (onItemClick) {
            onItemClick(item);
        }
    };
    const Component = item.href && !isDisabled ? 'a' : 'button';
    return (_jsx(motion.div, { className: cn("flex flex-col items-center justify-center relative", gap, padding, "flex-1 min-w-0", isDisabled && "opacity-40 cursor-not-allowed"), whileHover: !isDisabled ? { scale: 1.05 } : {}, whileTap: !isDisabled ? { scale: 0.95 } : {}, transition: { type: 'spring', stiffness: 400, damping: 25 }, children: _jsxs(Component, { href: item.href, onClick: handleClick, disabled: isDisabled, className: cn("flex flex-col items-center justify-center relative", gap, "w-full min-w-0", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-lg", isDisabled && "cursor-not-allowed"), children: [_jsxs("div", { className: "relative", children: [_jsx(motion.div, { className: cn("flex items-center justify-center rounded-lg transition-colors", iconSize, isActive
                                ? "text-accent-blue"
                                : "text-text-secondary"), animate: {
                                scale: isActive ? 1.1 : 1,
                            }, transition: { type: 'spring', stiffness: 400, damping: 25 }, children: _jsx(Icon, { className: iconSize, strokeWidth: isActive ? 2.5 : 2 }) }), isActive && (_jsx(motion.div, { layoutId: "bottom-nav-indicator", className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-blue rounded-full", initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: 'spring', stiffness: 400, damping: 25 } })), item.badge && (_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, className: cn("absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 flex items-center justify-center", "bg-status-error text-white text-[10px] font-bold rounded-full", typeof item.badge === 'number' && item.badge > 99 && "px-1"), children: typeof item.badge === 'number' && item.badge > 99 ? '99+' : item.badge }))] }), showLabel && (_jsx(motion.span, { className: cn(labelSize, "font-medium text-center truncate w-full", isActive
                        ? "text-accent-blue"
                        : "text-text-secondary"), animate: {
                        opacity: isActive ? 1 : 0.7,
                    }, children: item.label }))] }) }));
};
/* ========================================
   MAIN COMPONENT
   ======================================== */
export const BottomNavigation = React.forwardRef(({ items, variant = 'default', showLabels = true, size = 'md', onItemClick, className, ...props }, ref) => {
    const { container } = sizeStyles[size];
    return (_jsx(motion.nav, { ref: ref, className: cn(`fixed bottom-0 left-0 right-0 z-50 pb-safe`, "flex items-center justify-around", // Keep flex properties
        variantStyles[variant], container, // Keep container height
        className), initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' }, transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        }, ...props, children: items.map((item) => (_jsx(NavigationItem, { item: item, showLabel: showLabels, size: size, onItemClick: onItemClick }, item.id))) }));
});
BottomNavigation.displayName = 'BottomNavigation';
//# sourceMappingURL=BottomNavigation.js.map