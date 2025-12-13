import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
export const EmptyState = ({ title, description, icon, action, className = '', }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1], // Apple-style ease
        }, className: `
        flex flex-col items-center justify-center text-center p-8
        bg-surface-primary/50 rounded-2xl
        ${className}
      `.trim().replace(/\s+/g, ' '), children: [icon && (_jsx("div", { className: "mb-6 text-text-tertiary", children: React.isValidElement(icon) ? (React.cloneElement(icon, {
                    // @ts-ignore
                    size: 48,
                    strokeWidth: 1.5,
                    className: 'w-12 h-12',
                })) : (icon) })), _jsx("h3", { className: "text-xl font-semibold text-text-primary mb-2", children: title }), description && (_jsx("p", { className: "text-text-secondary max-w-sm mb-8 leading-relaxed", children: description })), action && (_jsx("div", { className: "mt-2", children: action }))] }));
};
EmptyState.displayName = 'EmptyState';
//# sourceMappingURL=EmptyState.js.map