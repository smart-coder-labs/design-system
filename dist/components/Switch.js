import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { motion } from 'framer-motion';
/* ========================================
   STYLES
   ======================================== */
const sizeStyles = {
    sm: {
        root: 'w-9 h-5',
        thumb: 'w-4 h-4',
        translate: 'translate-x-4',
    },
    md: {
        root: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-5',
    },
    lg: {
        root: 'w-14 h-8',
        thumb: 'w-7 h-7',
        translate: 'translate-x-6',
    },
};
/* ========================================
   COMPONENT
   ======================================== */
export const Switch = ({ checked, onCheckedChange, disabled = false, label, description, size = 'md', className = '', }) => {
    const sizes = sizeStyles[size];
    const switchElement = (_jsx(SwitchPrimitive.Root, { checked: checked, onCheckedChange: onCheckedChange, disabled: disabled, className: `
        ${sizes.root} relative rounded-full transition-apple focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed data-[state=checked]:bg-accent-blue data-[state=unchecked]:bg-surface-secondary ${className} group
      `, children: _jsx(SwitchPrimitive.Thumb, { asChild: true, children: _jsx(motion.span, { className: `
            ${sizes.thumb}
            block
            bg-white
            rounded-full
            shadow-sm
            transform
            `, animate: {
                    x: checked ? (size === 'sm' ? 16 : size === 'md' ? 20 : 24) : 0,
                }, transition: { type: 'spring', stiffness: 500, damping: 30 } }) }) }));
    if (label || description) {
        return (_jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [switchElement, _jsxs("div", { className: "flex-1", children: [label && (_jsx("p", { className: "text-sm font-medium text-text-primary", children: label })), description && (_jsx("p", { className: "text-xs text-text-secondary mt-0.5", children: description }))] })] }));
    }
    return switchElement;
};
//# sourceMappingURL=Switch.js.map