import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
export const Spacer = React.forwardRef(({ className, size = 'md', axis = 'vertical', flex = false, style, ...props }, ref) => {
    const getSizeValue = (s) => {
        if (typeof s === 'number')
            return s;
        const sizes = {
            xs: 4, // 0.25rem
            sm: 8, // 0.5rem
            md: 16, // 1rem
            lg: 24, // 1.5rem
            xl: 32, // 2rem
            '2xl': 48, // 3rem
            '3xl': 64, // 4rem
        };
        return sizes[s] || 16;
    };
    const sizeValue = getSizeValue(size);
    const computedStyle = {
        ...style,
    };
    if (flex) {
        computedStyle.flexGrow = 1;
        computedStyle.minWidth = 'auto';
        computedStyle.minHeight = 'auto';
    }
    else if (axis === 'vertical') {
        computedStyle.height = sizeValue;
        computedStyle.minHeight = sizeValue;
        computedStyle.width = '1px'; // Prevent collapse
        computedStyle.display = 'block';
    }
    else {
        computedStyle.width = sizeValue;
        computedStyle.minWidth = sizeValue;
        computedStyle.height = '1px'; // Prevent collapse
        computedStyle.display = 'inline-block';
    }
    return (_jsx("div", { ref: ref, className: cn('flex-shrink-0', // Prevent spacer from shrinking in flex containers
        className), style: computedStyle, "aria-hidden": "true", ...props }));
});
Spacer.displayName = 'Spacer';
//# sourceMappingURL=Spacer.js.map