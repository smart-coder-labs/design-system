import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
/* ========================================
   DEFINITION LIST COMPONENT
   ======================================== */
export const DefinitionList = forwardRef(({ items, variant = 'default', orientation = 'horizontal', divider = false, hoverable = false, density = 'comfortable', className, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    const isCompact = density === 'compact';
    const containerVariants = {
        default: "bg-surface-primary",
        bordered: "bg-surface-primary border border-border-primary rounded-xl",
        striped: "bg-surface-primary",
        compact: "bg-transparent",
    };
    const itemVariants = {
        default: "",
        bordered: "border-b border-border-primary last:border-b-0",
        striped: "even:bg-surface-secondary/50",
        compact: "",
    };
    const paddingClass = isCompact ? "py-2" : "py-3";
    const gapClass = isCompact ? "gap-2" : "gap-4";
    const MotionDL = motion.dl;
    return (_jsx(MotionDL, { ref: ref, className: cn("overflow-hidden", containerVariants[variant], variant === 'bordered' && "shadow-sm", className), initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1],
        }, ...props, children: items.map((item, index) => (_jsxs(motion.div, { className: cn("group", itemVariants[variant], isHorizontal
                ? `flex ${gapClass} ${paddingClass} px-4 sm:px-6`
                : `flex flex-col ${gapClass} ${paddingClass} px-4 sm:px-6`, divider && index !== items.length - 1 && "border-b border-border-primary", hoverable && "transition-colors hover:bg-surface-secondary/30 cursor-default"), initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: {
                duration: 0.2,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1],
            }, children: [_jsx("dt", { className: cn("font-semibold text-text-primary", isHorizontal
                        ? "min-w-[140px] sm:min-w-[180px] flex-shrink-0"
                        : "mb-1", isCompact ? "text-sm" : "text-base"), children: item.term }), _jsx("dd", { className: cn("text-text-secondary", isHorizontal ? "flex-1" : "", isCompact ? "text-sm" : "text-base"), children: item.description })] }, index))) }));
});
DefinitionList.displayName = 'DefinitionList';
export const CompactDefinitionList = forwardRef((props, ref) => {
    return _jsx(DefinitionList, { ref: ref, ...props, density: "compact" });
});
CompactDefinitionList.displayName = 'CompactDefinitionList';
//# sourceMappingURL=DefinitionList.js.map