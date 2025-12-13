import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
/* ========================================
   STYLES
   ======================================== */
const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-medium transition-apple
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
  disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
  select-none
`;
const variantStyles = {
    primary: `
    bg-accent-blue text-white
    hover:bg-accent-blue-hover
    active:bg-accent-blue-active
    shadow-sm
  `,
    secondary: `
    bg-surface-secondary text-text-primary
    border border-border-primary
    hover:bg-surface-primary hover:border-border-primary
    active:bg-surface-secondary
    shadow-xs
  `,
    ghost: `
    bg-transparent text-accent-blue
    hover:bg-accent-blue-tint
    active:bg-accent-blue-tint
  `,
    subtle: `
    bg-surface-secondary text-text-primary
    hover:bg-surface-primary
    active:bg-surface-secondary
  `,
    outline: `
    bg-transparent text-text-primary
    border border-border-primary
    hover:bg-surface-secondary hover:border-border-secondary
    active:bg-surface-tertiary
  `,
    destructive: `
    bg-status-error text-white
    hover:bg-red-600
    active:bg-red-700
    shadow-sm
  `,
};
const sizeStyles = {
    sm: 'h-8 px-3 text-sm rounded-lg',
    md: 'h-10 px-4 text-base rounded-xl',
    lg: 'h-12 px-6 text-lg rounded-xl',
};
/* ========================================
   COMPONENT
   ======================================== */
export const Button = React.forwardRef(({ variant = 'primary', size = 'md', loading = false, leftIcon, rightIcon, fullWidth = false, children, className = '', disabled, ...props }, ref) => {
    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');
    return (_jsx(motion.button, { ref: ref, className: combinedClassName, disabled: disabled || loading, whileHover: { scale: disabled || loading ? 1 : 1.02 }, whileTap: { scale: disabled || loading ? 1 : 0.98 }, transition: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
            mass: 0.6,
        }, ...props, children: loading ? (_jsx(LoadingSpinner, { size: size })) : (_jsxs(_Fragment, { children: [leftIcon && _jsx("span", { className: "inline-flex", children: leftIcon }), children, rightIcon && _jsx("span", { className: "inline-flex", children: rightIcon })] })) }));
});
Button.displayName = 'Button';
/* ========================================
   LOADING SPINNER
   ======================================== */
const LoadingSpinner = ({ size }) => {
    const sizeMap = {
        sm: 14,
        md: 16,
        lg: 18,
    };
    const spinnerSize = sizeMap[size];
    return (_jsxs(motion.svg, { width: spinnerSize, height: spinnerSize, viewBox: "0 0 24 24", fill: "none", animate: { rotate: 360 }, transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
        }, children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "60", strokeDashoffset: "15", opacity: "0.25" }), _jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "60", strokeDashoffset: "45" })] }));
};
//# sourceMappingURL=Button.js.map