import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
/* ========================================
   STYLES
   ======================================== */
const baseStyles = `
  rounded-2xl
  transition-apple
`;
const variantStyles = {
    elevated: `
    bg-surface-primary
    shadow-md
    hover:shadow-lg
  `,
    glass: `
    glass
    border border-border-secondary
    shadow-sm
  `,
    outlined: `
    bg-surface-primary
    border border-border-primary
    hover:border-border-primary
  `,
    flat: `
    bg-surface-secondary
  `,
};
const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};
/* ========================================
   COMPONENT
   ======================================== */
export const Card = React.forwardRef(({ variant = 'elevated', hoverable = false, padding = 'md', children, className = '', ...props }, ref) => {
    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${className}
    `.trim().replace(/\s+/g, ' ');
    const hoverAnimation = hoverable
        ? {
            whileHover: { y: -4, scale: 1.01 },
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 0.8,
            },
        }
        : {};
    return (_jsx(motion.div, { ref: ref, className: combinedClassName, initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1],
        }, ...hoverAnimation, ...props, children: children }));
});
Card.displayName = 'Card';
/* ========================================
   SUB-COMPONENTS
   ======================================== */
export const CardHeader = ({ children, className = '' }) => (_jsx("div", { className: `mb-4 ${className}`, children: children }));
export const CardTitle = ({ children, className = '' }) => (_jsx("h3", { className: `text-xl font-semibold text-text-primary mb-1 ${className}`, children: children }));
export const CardDescription = ({ children, className = '' }) => (_jsx("p", { className: `text-sm text-text-secondary ${className}`, children: children }));
export const CardContent = ({ children, className = '' }) => (_jsx("div", { className: className, children: children }));
export const CardFooter = ({ children, className = '' }) => (_jsx("div", { className: `mt-6 flex items-center gap-3 ${className}`, children: children }));
//# sourceMappingURL=Card.js.map