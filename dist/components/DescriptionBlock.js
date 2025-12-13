import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Badge } from './Badge';
/* ========================================
   DESCRIPTION BLOCK
   ======================================== */
export const DescriptionBlock = forwardRef(({ eyebrow, title, subtitle, description, badges, metadata, metadataColumns = 2, media, actions, footer, layout = 'stacked', variant = 'default', align = 'start', className, ...props }, ref) => {
    const MotionSection = motion.section;
    const variantClasses = {
        default: 'bg-surface-primary border border-border-primary shadow-sm',
        soft: 'bg-surface-secondary/60 border border-border-primary/50',
        panel: 'bg-surface-primary/90 border border-border-primary shadow-lg',
        glass: 'bg-white/5 dark:bg-white/2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(15,23,42,0.15)]',
    };
    const metadataGrid = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    };
    return (_jsxs(MotionSection, { ref: ref, className: cn('rounded-3xl p-6 sm:p-8 space-y-6', variantClasses[variant], className), initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, ...props, children: [_jsx("div", { className: cn(layout === 'split'
                    ? 'grid gap-8 lg:grid-cols-[1.8fr_1fr]'
                    : 'space-y-10'), children: _jsxs("div", { className: cn('space-y-7', align === 'center' && 'text-center items-center flex flex-col'), children: [eyebrow && (_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.35em] text-text-tertiary", children: eyebrow })), _jsxs("div", { className: "space-y-3 w-full", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: cn('text-3xl font-semibold tracking-tight text-text-primary', align === 'center' && 'text-center'), children: title }), subtitle && (_jsx("p", { className: cn('text-lg text-text-secondary', align === 'center' && 'text-center'), children: subtitle }))] }), badges && badges.length > 0 && (_jsx("div", { className: cn('flex flex-wrap gap-2', align === 'center' && 'justify-center'), children: badges.map((badge, index) => (_jsx(Badge, { size: "sm", className: "bg-surface-secondary/60 border border-border-primary/60 text-text-secondary", children: badge }, index))) }))] }), description && (_jsx("div", { className: cn('text-base text-text-secondary leading-relaxed max-w-2xl', align === 'center' && 'mx-auto text-center'), children: description })), actions && (_jsx("div", { className: cn('flex flex-wrap gap-3', align === 'center' && 'justify-center'), children: actions })), media && (_jsx("div", { className: "overflow-hidden rounded-2xl border border-border-primary/60 bg-surface-secondary/40", children: media })), metadata && metadata.length > 0 && (_jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-text-tertiary", children: "Detalles" }), _jsx("div", { className: cn('grid gap-6', metadataGrid[metadataColumns]), children: metadata.map((item, index) => (_jsxs("div", { className: "rounded-2xl border border-border-primary/40 bg-surface-secondary/30 p-5 space-y-1.5", children: [_jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary", children: [item.icon && _jsx("span", { className: "text-text-tertiary", children: item.icon }), _jsx("span", { children: item.label })] }), _jsx("div", { className: "text-text-primary text-lg font-semibold break-words", children: item.value }), item.hint && (_jsx("p", { className: "text-sm text-text-secondary", children: item.hint }))] }, index))) })] }))] }) }), layout === 'stacked' && footer && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("div", { className: "rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary", children: footer })] }))] }));
});
DescriptionBlock.displayName = 'DescriptionBlock';
//# sourceMappingURL=DescriptionBlock.js.map