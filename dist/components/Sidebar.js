import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
export const Sidebar = React.forwardRef(({ items, className = '', ...props }, ref) => {
    const baseStyles = `
      flex flex-col space-y-1 p-4 bg-surface-secondary rounded-lg shadow-sm`;
    const itemBase = `
      flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
      transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
    `;
    const itemActive = `text-text-primary bg-surface-primary`;
    const itemInactive = `text-text-secondary hover:bg-surface-primary/20`;
    return (_jsx(motion.nav, { ref: ref, className: cn(baseStyles, className), initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, ...props, children: items.map((item, idx) => {
            const Component = item.href ? 'a' : 'button';
            const isActive = !!item.active;
            return (_jsxs(Component, { href: item.href, onClick: item.onClick, className: cn(itemBase, isActive ? itemActive : itemInactive), children: [item.icon && _jsx("span", { className: "inline-flex", children: item.icon }), item.label] }, idx));
        }) }));
});
Sidebar.displayName = 'Sidebar';
//# sourceMappingURL=Sidebar.js.map