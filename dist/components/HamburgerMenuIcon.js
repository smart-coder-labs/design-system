import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
export const HamburgerMenuIcon = React.forwardRef(({ isOpen, onClick, size = 'md', variant = 'default', className = '', 'aria-label': ariaLabel = 'Toggle menu', ...props }, ref) => {
    const sizeStyles = {
        sm: {
            button: 'w-8 h-8',
            width: 16,
            gap: 3,
            strokeWidth: 2,
        },
        md: {
            button: 'w-10 h-10',
            width: 20,
            gap: 4,
            strokeWidth: 2,
        },
        lg: {
            button: 'w-12 h-12',
            width: 24,
            gap: 5,
            strokeWidth: 2.5,
        },
    };
    const variantStyles = {
        default: 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary',
        primary: 'text-white bg-accent-blue hover:bg-accent-blue/90',
        ghost: 'text-text-secondary hover:text-text-primary hover:bg-transparent',
    };
    const { button: buttonSize, width, gap, strokeWidth } = sizeStyles[size];
    return (_jsx(motion.button, { ref: ref, onClick: onClick, className: cn('inline-flex items-center justify-center rounded-md transition-colors', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue', buttonSize, variantStyles[variant], className), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, "aria-label": ariaLabel, "aria-expanded": isOpen, ...props, children: _jsxs("svg", { width: width, height: width, viewBox: `0 0 ${width} ${width}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx(motion.line, { x1: "0", y1: "0", x2: width, y2: "0", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", animate: {
                        rotate: isOpen ? 45 : 0,
                        translateY: isOpen ? width / 2 : gap,
                    }, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, style: { originX: '50%', originY: '0px' } }), _jsx(motion.line, { x1: "0", y1: width / 2, x2: width, y2: width / 2, stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", animate: {
                        opacity: isOpen ? 0 : 1,
                        scaleX: isOpen ? 0 : 1,
                    }, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }, style: { originX: '50%', originY: '50%' } }), _jsx(motion.line, { x1: "0", y1: "0", x2: width, y2: "0", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", animate: {
                        rotate: isOpen ? -45 : 0,
                        translateY: isOpen ? width / 2 : width - gap,
                    }, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, style: { originX: '50%', originY: '0px' } })] }) }));
});
HamburgerMenuIcon.displayName = 'HamburgerMenuIcon';
//# sourceMappingURL=HamburgerMenuIcon.js.map