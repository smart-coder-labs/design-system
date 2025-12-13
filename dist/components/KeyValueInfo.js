import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
/* ========================================
   KEY VALUE INFO COMPONENT
   ======================================== */
export const KeyValueInfo = forwardRef(({ items, variant = 'default', size = 'md', columns = 1, hoverable = false, divider = false, className, ...props }, ref) => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const sizeClasses = {
        sm: {
            key: "text-xs",
            value: "text-sm",
            gap: "gap-1",
            padding: "p-3",
        },
        md: {
            key: "text-sm",
            value: "text-base",
            gap: "gap-1.5",
            padding: "p-4",
        },
        lg: {
            key: "text-base",
            value: "text-lg",
            gap: "gap-2",
            padding: "p-5",
        },
    };
    const variantClasses = {
        default: "space-y-2",
        card: "bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden",
        inline: "flex flex-wrap gap-6",
        grid: `grid gap-4`,
    };
    const gridColumns = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    };
    const handleCopy = async (text, index) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        }
        catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    const MotionDiv = motion.div;
    return (_jsx(MotionDiv, { ref: ref, className: cn(variantClasses[variant], variant === 'grid' && gridColumns[columns], className), initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1],
        }, ...props, children: items.map((item, index) => {
            const MotionItemDiv = motion.div;
            return (_jsxs(MotionItemDiv, { className: cn("group", variant === 'inline'
                    ? "flex items-center gap-2"
                    : cn("flex flex-col", sizeClasses[size].gap, variant === 'card' && sizeClasses[size].padding), variant === 'card' && divider && index !== items.length - 1 && "border-b border-border-primary", hoverable && "transition-colors hover:bg-surface-secondary/30 rounded-lg", item.copyable && "cursor-pointer"), onClick: () => {
                    if (item.copyable && typeof item.value === 'string') {
                        handleCopy(item.value, index);
                    }
                }, initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: {
                    duration: 0.2,
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                }, whileHover: item.copyable ? { scale: 1.01 } : {}, children: [_jsxs("div", { className: cn("flex items-center gap-2", variant === 'inline' ? "" : "mb-0.5"), children: [item.icon && (_jsx("span", { className: "text-text-tertiary flex-shrink-0", children: item.icon })), _jsxs("span", { className: cn("font-medium text-text-secondary", sizeClasses[size].key), children: [item.key, variant === 'inline' && ':'] })] }), _jsxs("div", { className: "flex items-center gap-2 min-w-0 relative", children: [_jsx("span", { className: cn("font-semibold text-text-primary break-words", sizeClasses[size].value, item.copyable && "group-hover:text-accent-blue transition-colors"), children: item.value }), item.badge && (_jsx("span", { className: "flex-shrink-0", children: item.badge })), item.copyable && (_jsxs(_Fragment, { children: [_jsx("svg", { className: "w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }), _jsx(AnimatePresence, { children: copiedIndex === index && (_jsx(motion.span, { initial: { opacity: 0, y: 10, scale: 0.8 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -10, scale: 0.8 }, transition: { duration: 0.2 }, className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-50", children: "\u00A1Copiado!" })) })] }))] })] }, index));
        }) }));
});
KeyValueInfo.displayName = 'KeyValueInfo';
export const CompactKeyValueInfo = forwardRef((props, ref) => {
    return _jsx(KeyValueInfo, { ref: ref, ...props, size: "sm" });
});
CompactKeyValueInfo.displayName = 'CompactKeyValueInfo';
export const InlineKeyValueInfo = forwardRef((props, ref) => {
    return _jsx(KeyValueInfo, { ref: ref, ...props, variant: "inline" });
});
InlineKeyValueInfo.displayName = 'InlineKeyValueInfo';
//# sourceMappingURL=KeyValueInfo.js.map