import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
/* ========================================
   KPI BLOCK COMPONENT
   ======================================== */
export const KPIBlock = forwardRef(({ label, value, change, trend, icon, variant = 'default', size = 'md', description, loading = false, className, ...props }, ref) => {
    const sizeClasses = {
        sm: {
            label: "text-xs",
            value: "text-2xl",
            change: "text-xs",
            description: "text-xs",
            padding: "p-4",
            iconSize: "w-8 h-8",
        },
        md: {
            label: "text-sm",
            value: "text-4xl",
            change: "text-sm",
            description: "text-sm",
            padding: "p-6",
            iconSize: "w-10 h-10",
        },
        lg: {
            label: "text-base",
            value: "text-5xl",
            change: "text-base",
            description: "text-base",
            padding: "p-8",
            iconSize: "w-12 h-12",
        },
    };
    const variantClasses = {
        default: "bg-surface-primary",
        bordered: "bg-surface-primary border border-border-primary shadow-sm",
        elevated: "bg-surface-primary shadow-md hover:shadow-lg transition-shadow",
        minimal: "bg-transparent",
    };
    const trendConfig = {
        up: {
            icon: TrendingUp,
            color: "text-status-success",
            bg: "bg-status-success/10",
        },
        down: {
            icon: TrendingDown,
            color: "text-status-error",
            bg: "bg-status-error/10",
        },
        neutral: {
            icon: Minus,
            color: "text-text-tertiary",
            bg: "bg-surface-secondary",
        },
    };
    const TrendIcon = trend ? trendConfig[trend].icon : null;
    const MotionDiv = motion.div;
    return (_jsx(MotionDiv, { ref: ref, className: cn("rounded-xl overflow-hidden", variantClasses[variant], sizeClasses[size].padding, className), initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1],
        }, ...props, children: _jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: cn("font-medium text-text-secondary mb-2", sizeClasses[size].label), children: label }), loading ? (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: cn("h-10 bg-surface-secondary rounded-lg animate-pulse", size === 'sm' && "h-8", size === 'lg' && "h-12") }), change && (_jsx("div", { className: "h-5 w-20 bg-surface-secondary rounded animate-pulse" }))] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: cn("font-bold text-text-primary mb-2 tracking-tight", sizeClasses[size].value), children: value }), (change || trend) && (_jsxs("div", { className: "flex items-center gap-2", children: [trend && TrendIcon && (_jsxs("div", { className: cn("flex items-center gap-1 px-2 py-1 rounded-md", trendConfig[trend].bg), children: [_jsx(TrendIcon, { className: cn("w-3.5 h-3.5", trendConfig[trend].color) }), change && (_jsx("span", { className: cn("font-semibold", trendConfig[trend].color, sizeClasses[size].change), children: change }))] })), change && !trend && (_jsx("span", { className: cn("font-medium text-text-secondary", sizeClasses[size].change), children: change }))] })), description && (_jsx("div", { className: cn("text-text-tertiary mt-2", sizeClasses[size].description), children: description }))] }))] }), icon && (_jsx("div", { className: cn("flex-shrink-0 flex items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue", sizeClasses[size].iconSize), children: icon }))] }) }));
});
KPIBlock.displayName = 'KPIBlock';
export const KPIGroup = forwardRef(({ children, columns = 3, gap = 'md', className, ...props }, ref) => {
    const gapClasses = {
        sm: "gap-3",
        md: "gap-4",
        lg: "gap-6",
    };
    const columnClasses = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    };
    return (_jsx("div", { ref: ref, className: cn("grid", columnClasses[columns], gapClasses[gap], className), ...props, children: children }));
});
KPIGroup.displayName = 'KPIGroup';
//# sourceMappingURL=KPIBlock.js.map