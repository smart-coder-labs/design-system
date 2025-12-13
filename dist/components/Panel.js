import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
/* ========================================
   PANEL COMPONENT
   ======================================== */
export const Panel = forwardRef(({ variant = 'default', title, subtitle, headerActions, footer, collapsible = false, defaultCollapsed = false, padding = 'md', className, children, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const variants = {
        default: "bg-surface-primary border border-border-primary",
        elevated: "bg-surface-elevated shadow-md",
        outlined: "bg-transparent border-2 border-border-primary",
        glass: "bg-surface-glass backdrop-blur-md border border-border-primary/50",
    };
    const paddings = {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
    };
    const hasHeader = title || subtitle || headerActions || collapsible;
    return (_jsxs("div", { ref: ref, className: cn("rounded-xl overflow-hidden transition-all", variants[variant], className), ...props, children: [hasHeader && (_jsxs("div", { className: cn("flex items-center justify-between border-b border-border-primary", padding === 'none' ? 'p-4' : paddings[padding]), children: [_jsxs("div", { className: "flex-1", children: [title && (_jsx("h3", { className: "text-lg font-semibold text-text-primary", children: title })), subtitle && (_jsx("p", { className: "text-sm text-text-secondary mt-0.5", children: subtitle }))] }), _jsxs("div", { className: "flex items-center gap-2", children: [headerActions, collapsible && (_jsx("button", { onClick: () => setIsCollapsed(!isCollapsed), className: "p-1 rounded-lg hover:bg-surface-secondary transition-colors focus:outline-none", "aria-label": isCollapsed ? 'Expand' : 'Collapse', children: _jsx(motion.div, { animate: { rotate: isCollapsed ? -90 : 0 }, transition: { duration: 0.2 }, children: _jsx(ChevronDown, { className: "w-5 h-5 text-text-tertiary" }) }) }))] })] })), _jsx(AnimatePresence, { initial: false, children: !isCollapsed && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx("div", { className: cn(paddings[padding]), children: children }) })) }), footer && !isCollapsed && (_jsx("div", { className: cn("border-t border-border-primary", padding === 'none' ? 'p-4' : paddings[padding]), children: footer }))] }));
});
Panel.displayName = 'Panel';
//# sourceMappingURL=Panel.js.map