"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
/* ========================================
   COMPONENT
   ======================================== */
export const AIThinkingIndicator = React.forwardRef(({ variant = 'dots', size = 'md', color = 'rgb(0, 122, 255)', message = '', className, ...props }, ref) => {
    const sizeStyles = {
        sm: { dot: 'w-1.5 h-1.5', gap: 'gap-1', text: 'text-xs' },
        md: { dot: 'w-2 h-2', gap: 'gap-1.5', text: 'text-sm' },
        lg: { dot: 'w-2.5 h-2.5', gap: 'gap-2', text: 'text-base' },
    };
    const styles = sizeStyles[size];
    const DotsVariant = () => (_jsx("div", { className: cn("flex items-center", styles.gap), children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: cn("rounded-full", styles.dot), style: { backgroundColor: color }, animate: {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
            }, transition: {
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
            } }, i))) }));
    const PulseVariant = () => (_jsx(motion.div, { className: cn("rounded-full", styles.dot), style: { backgroundColor: color }, animate: {
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
        }, transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        } }));
    const WaveVariant = () => (_jsx("div", { className: cn("flex items-end", styles.gap), style: { height: '16px' }, children: [0, 1, 2, 3].map((i) => (_jsx(motion.div, { className: "rounded-full", style: {
                width: '3px',
                backgroundColor: color,
            }, animate: {
                height: ['8px', '16px', '8px'],
                opacity: [0.5, 1, 0.5],
            }, transition: {
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
            } }, i))) }));
    const renderVariant = () => {
        switch (variant) {
            case 'dots':
                return _jsx(DotsVariant, {});
            case 'pulse':
                return _jsx(PulseVariant, {});
            case 'wave':
                return _jsx(WaveVariant, {});
            default:
                return _jsx(DotsVariant, {});
        }
    };
    return (_jsxs("div", { ref: ref, className: cn("flex items-center gap-3", className), ...props, children: [renderVariant(), message && (_jsx("span", { className: cn("text-text-secondary", styles.text), children: message }))] }));
});
AIThinkingIndicator.displayName = 'AIThinkingIndicator';
//# sourceMappingURL=AIThinkingIndicator.js.map