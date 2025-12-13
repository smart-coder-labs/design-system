import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
export const TopActionBar = React.forwardRef(({ leftContent, centerContent, rightContent, glass = false, sticky = true, showBorder = true, size = 'md', className = '', ...props }, ref) => {
    const sizeStyles = {
        sm: 'h-12 px-3',
        md: 'h-14 px-4',
        lg: 'h-16 px-6',
    };
    const baseStyles = `
            ${sizeStyles[size]}
            w-full
            flex items-center justify-between
            ${sticky ? 'sticky top-0 z-sticky' : ''}
            ${glass
        ? 'bg-surface-glass backdrop-blur-xl'
        : 'bg-surface-primary'}
            ${showBorder ? 'border-b border-border-primary' : ''}
            transition-apple
        `;
    return (_jsxs(motion.header, { ref: ref, className: cn(baseStyles, className), initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, ...props, children: [_jsx("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: leftContent }), centerContent && (_jsx("div", { className: "flex items-center justify-center gap-2 flex-shrink-0 px-4", children: centerContent })), _jsx("div", { className: "flex items-center justify-end gap-2 flex-1 min-w-0", children: rightContent })] }));
});
TopActionBar.displayName = 'TopActionBar';
export const TopActionBarButton = React.forwardRef(({ children, icon, active = false, variant = 'default', className = '', ...props }, ref) => {
    const variantStyles = {
        default: `
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary
            `,
        ghost: `
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary/50
            `,
        primary: `
                bg-accent-blue text-white
                hover:bg-accent-blue/90
            `,
    };
    const baseStyles = `
            inline-flex items-center gap-2
            px-3 py-1.5
            rounded-md
            text-sm font-medium
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${active ? 'bg-surface-secondary text-text-primary' : ''}
        `;
    return (_jsxs(motion.button, { ref: ref, className: cn(baseStyles, variantStyles[variant], className), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, ...props, children: [icon && _jsx("span", { className: "inline-flex", children: icon }), children] }));
});
TopActionBarButton.displayName = 'TopActionBarButton';
export const TopActionBarIconButton = React.forwardRef(({ icon, active = false, badge, className = '', ...props }, ref) => {
    const baseStyles = `
            relative
            inline-flex items-center justify-center
            w-9 h-9
            rounded-md
            text-text-secondary hover:text-text-primary
            hover:bg-surface-secondary
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${active ? 'bg-surface-secondary text-text-primary' : ''}
        `;
    return (_jsxs(motion.button, { ref: ref, className: cn(baseStyles, className), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, ...props, children: [icon, badge && (_jsx("span", { className: "absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-semibold rounded-full bg-accent-blue text-white", children: badge }))] }));
});
TopActionBarIconButton.displayName = 'TopActionBarIconButton';
//# sourceMappingURL=TopActionBar.js.map