import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
export const GridContainer = React.forwardRef(({ className, fluid = false, as: Component = 'div', ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn('mx-auto w-full px-4 sm:px-6 lg:px-8', !fluid && 'max-w-7xl', className), ...props }));
});
GridContainer.displayName = 'GridContainer';
export const Row = React.forwardRef(({ className, as: Component = 'div', gutterX = 4, gutterY = 4, style, ...props }, ref) => {
    // We use negative margins on the row and padding on the cols to create gutters
    // This is the classic Bootstrap/Flexbox grid method
    const mx = gutterX * -0.25; // -1rem for gutter 4
    return (_jsx(Component, { ref: ref, className: cn('flex flex-wrap', className), style: {
            marginLeft: `${mx}rem`,
            marginRight: `${mx}rem`,
            marginTop: `-${gutterY * 0.25}rem`,
            ...style,
        }, ...props }));
});
Row.displayName = 'Row';
const getColClass = (span, prefix = '') => {
    if (span === true)
        return `${prefix}flex-1`;
    if (span === 'auto')
        return `${prefix}w-auto`;
    if (typeof span === 'number') {
        const width = (span / 12) * 100;
        return `${prefix}w-[${width}%] flex-none`;
    }
    return '';
};
// Helper to generate width classes safely since Tailwind doesn't support dynamic class construction like `w-[${width}%]` 
// unless it's JIT and seen at build time. 
// Better approach for Tailwind: use pre-defined classes `w-1/12`, `w-2/12` etc.
const getTailwindColClass = (span, breakpoint = '') => {
    const prefix = breakpoint ? `${breakpoint}:` : '';
    if (span === true)
        return `${prefix}flex-1 ${prefix}max-w-full`;
    if (span === 'auto')
        return `${prefix}w-auto ${prefix}max-w-full`;
    if (typeof span === 'number' && span >= 1 && span <= 12) {
        // Map 1-12 to percentages
        const map = {
            1: 'w-1/12', 2: 'w-2/12', 3: 'w-3/12', 4: 'w-4/12',
            5: 'w-5/12', 6: 'w-6/12', 7: 'w-7/12', 8: 'w-8/12',
            9: 'w-9/12', 10: 'w-10/12', 11: 'w-11/12', 12: 'w-full',
        };
        return `${prefix}${map[span]}`;
    }
    return '';
};
export const Col = React.forwardRef(({ className, as: Component = 'div', xs, sm, md, lg, xl, xxl, gutterX = 4, gutterY = 4, style, ...props }, ref) => {
    const classes = cn('relative max-w-full', // Ensure content doesn't overflow
    // Default to full width if no xs prop
    !xs && !sm && !md && !lg && !xl && !xxl ? 'w-full' : '', xs && getTailwindColClass(xs), sm && getTailwindColClass(sm, 'sm'), md && getTailwindColClass(md, 'md'), lg && getTailwindColClass(lg, 'lg'), xl && getTailwindColClass(xl, 'xl'), xxl && getTailwindColClass(xxl, '2xl'), className);
    const px = gutterX * 0.25; // 1rem
    const py = gutterY * 0.25; // 1rem
    return (_jsx(Component, { ref: ref, className: classes, style: {
            paddingLeft: `${px}rem`,
            paddingRight: `${px}rem`,
            paddingTop: `${py}rem`,
            ...style,
        }, ...props }));
});
Col.displayName = 'Col';
//# sourceMappingURL=GridSystem.js.map