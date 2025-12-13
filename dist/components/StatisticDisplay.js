import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Sparkline as SparklineComponent } from './Sparkline';
/* ========================================
   CONSTANTS
   ======================================== */
const MotionDiv = motion.div;
const sizeClasses = {
    sm: {
        label: "text-[11px]",
        value: "text-2xl",
        meta: "text-xs",
        padding: "p-4",
        gap: "space-y-3",
        icon: "w-8 h-8",
        sparkline: { width: 100, height: 32 },
    },
    md: {
        label: "text-xs",
        value: "text-4xl",
        meta: "text-sm",
        padding: "p-5",
        gap: "space-y-4",
        icon: "w-10 h-10",
        sparkline: { width: 120, height: 38 },
    },
    lg: {
        label: "text-sm",
        value: "text-5xl",
        meta: "text-base",
        padding: "p-6",
        gap: "space-y-5",
        icon: "w-12 h-12",
        sparkline: { width: 140, height: 44 },
    },
};
const variantClasses = {
    card: "bg-surface-primary border border-border-primary rounded-2xl shadow-sm",
    soft: "bg-surface-secondary/70 border border-border-secondary/60 rounded-2xl",
    bordered: "bg-surface-primary border border-border-tertiary rounded-2xl",
    minimal: "rounded-xl",
    glass: "bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl",
};
const accentTokens = {
    blue: {
        color: '#2563eb',
        fillColor: 'rgba(37,99,235,0.12)',
        text: 'text-accent-blue',
        chip: 'bg-accent-blue/10 text-accent-blue',
    },
    green: {
        color: '#16a34a',
        fillColor: 'rgba(22,163,74,0.12)',
        text: 'text-status-success',
        chip: 'bg-status-success/10 text-status-success',
    },
    purple: {
        color: '#7c3aed',
        fillColor: 'rgba(124,58,237,0.12)',
        text: 'text-accent-purple',
        chip: 'bg-accent-purple/10 text-accent-purple',
    },
    orange: {
        color: '#ea580c',
        fillColor: 'rgba(234,88,12,0.12)',
        text: 'text-status-warning',
        chip: 'bg-status-warning/15 text-status-warning',
    },
    pink: {
        color: '#db2777',
        fillColor: 'rgba(219,39,119,0.12)',
        text: 'text-accent-pink',
        chip: 'bg-accent-pink/15 text-accent-pink',
    },
};
const trendTokens = {
    up: {
        icon: TrendingUp,
        text: 'text-status-success',
        bg: 'bg-status-success/10',
        trend: 'up',
    },
    down: {
        icon: TrendingDown,
        text: 'text-status-error',
        bg: 'bg-status-error/10',
        trend: 'down',
    },
    neutral: {
        icon: Minus,
        text: 'text-text-tertiary',
        bg: 'bg-surface-secondary/80',
        trend: 'neutral',
    },
};
const GoalMeter = ({ goal }) => {
    if (!goal)
        return null;
    const progress = Math.min(Math.max(goal.progress ?? 0, 0), 1);
    return (_jsxs("div", { className: "mt-3", children: [(goal.label || goal.value) && (_jsxs("div", { className: "flex items-center justify-between text-[11px] text-text-tertiary mb-1", children: [_jsx("span", { children: goal.label ?? 'Target' }), _jsx("span", { children: goal.value })] })), _jsx("div", { className: "h-1.5 w-full rounded-full bg-surface-secondary overflow-hidden", children: _jsx("div", { className: "h-full rounded-full bg-accent-blue transition-all", style: { width: `${progress * 100}%` } }) })] }));
};
/* ========================================
   STATISTIC DISPLAY COMPONENT
   ======================================== */
const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
};
const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
};
export const StatisticDisplay = forwardRef(({ metrics, variant = 'card', size = 'md', columns = 3, animate = true, gap = 'md', className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('grid', columnClasses[columns], gapClasses[gap], className), ...props, children: metrics.map((metric, index) => {
            const trend = metric.trend ?? 'neutral';
            const TrendIcon = trendTokens[trend].icon;
            const accent = metric.sparklineAccent ?? 'blue';
            return (_jsxs(MotionDiv, { className: cn('relative overflow-hidden group', variantClasses[variant], sizeClasses[size].padding, sizeClasses[size].gap, metric.subtle && 'bg-surface-secondary/60'), initial: animate ? { opacity: 0, y: 12 } : false, animate: animate ? { opacity: 1, y: 0 } : undefined, transition: {
                    delay: animate ? index * 0.05 : 0,
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                }, children: [metric.badge && (_jsx("div", { className: "absolute top-4 right-4 text-xs font-semibold text-text-secondary", children: metric.badge })), _jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: cn('uppercase tracking-[0.18em] text-text-tertiary font-semibold mb-1', sizeClasses[size].label), children: metric.label }), metric.description && (_jsx("p", { className: cn('text-text-secondary leading-relaxed', sizeClasses[size].meta), children: metric.description }))] }), metric.icon && (_jsx("div", { className: cn('flex items-center justify-center rounded-xl bg-surface-secondary/70 text-text-secondary', sizeClasses[size].icon), children: metric.icon }))] }), _jsxs("div", { className: "flex items-baseline gap-2 mt-2", children: [_jsx("span", { className: cn('font-semibold text-text-primary tracking-tight', sizeClasses[size].value), children: metric.value }), metric.target && (_jsx("span", { className: "text-text-tertiary text-xs font-medium", children: metric.target }))] }), (metric.change || metric.trend) && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: cn('inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold', trendTokens[trend].bg), children: [_jsx(TrendIcon, { className: cn('w-3.5 h-3.5', trendTokens[trend].text) }), metric.change && (_jsx("span", { className: cn(trendTokens[trend].text), children: metric.change }))] }), metric.goal?.value && (_jsxs("span", { className: "text-text-tertiary text-[11px]", children: ["vs ", metric.goal.value] }))] })), metric.sparkline && (_jsx("div", { className: "mt-3", children: _jsx(SparklineComponent, { data: metric.sparkline, width: sizeClasses[size].sparkline.width, height: sizeClasses[size].sparkline.height, color: accentTokens[accent].color, fillColor: accentTokens[accent].fillColor, showArea: true, trend: trendTokens[trend]?.trend }) })), _jsx(GoalMeter, { goal: metric.goal })] }, metric.id ?? index));
        }) }));
});
StatisticDisplay.displayName = 'StatisticDisplay';
/* ========================================
   STATISTIC HIGHLIGHT COMPONENT
   ======================================== */
export const StatisticHighlight = forwardRef(({ label, value, change, trend, description, badge, sparkline, sparklineAccent = 'blue', size = 'md', progress, className, ...props }, ref) => {
    const resolvedTrend = trend ?? 'neutral';
    const TrendIcon = trendTokens[resolvedTrend].icon;
    return (_jsxs(MotionDiv, { ref: ref, className: cn('w-full rounded-3xl bg-surface-primary border border-border-primary shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)] p-6 md:p-8 relative overflow-hidden', className), initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, ...props, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent pointer-events-none" }), _jsxs("div", { className: "relative flex flex-col gap-4", children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsxs("div", { children: [_jsx("p", { className: cn('uppercase tracking-[0.18em] text-text-tertiary font-semibold', sizeClasses[size].label), children: label }), description && (_jsx("p", { className: cn('text-text-secondary mt-1', sizeClasses[size].meta), children: description }))] }), badge && (_jsx("div", { className: "text-xs font-semibold text-text-secondary", children: badge }))] }), _jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [_jsx("span", { className: cn('font-semibold text-text-primary tracking-tight leading-none', sizeClasses[size].value), children: value }), (change || trend) && TrendIcon && (_jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary/80 text-[11px] font-semibold", children: [_jsx(TrendIcon, { className: cn('w-4 h-4', trendTokens[resolvedTrend].text) }), change && (_jsx("span", { className: trendTokens[resolvedTrend].text, children: change }))] }))] }), sparkline && (_jsx("div", { className: "mt-2", children: _jsx(SparklineComponent, { data: sparkline, width: 160, height: 64, color: accentTokens[sparklineAccent].color, fillColor: accentTokens[sparklineAccent].fillColor, showArea: true }) })), typeof progress === 'number' && (_jsxs("div", { className: "mt-2", children: [_jsxs("div", { className: "flex items-center justify-between text-[11px] text-text-tertiary mb-1", children: [_jsx("span", { children: "Progress" }), _jsxs("span", { children: [Math.round(progress * 100), "%"] })] }), _jsx("div", { className: "h-1.5 bg-surface-secondary rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-accent-blue rounded-full", style: { width: `${Math.min(Math.max(progress, 0), 1) * 100}%` } }) })] }))] })] }));
});
StatisticHighlight.displayName = 'StatisticHighlight';
//# sourceMappingURL=StatisticDisplay.js.map