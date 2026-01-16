import React from 'react';
import { cn } from '../../lib/utils';;

/* ========================================
   CONTAINER
   ======================================== */

export interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Removes the max-width, allowing the Gridcontainer to span the full width
     */
    fluid?: boolean;
    /**
     * The element tag to use
     * @default "div"
     */
    as?: React.ElementType;
}

export const GridContainer = React.forwardRef<HTMLDivElement, GridContainerProps>(
    ({ className, fluid = false, as: Component = 'div', ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    'mx-auto w-full px-4 sm:px-6 lg:px-8',
                    !fluid && 'max-w-7xl',
                    className
                )}
                {...props}
            />
        );
    }
);
GridContainer.displayName = 'GridContainer';

/* ========================================
   ROW (Grid Container)
   ======================================== */

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The element tag to use
     * @default "div"
     */
    as?: React.ElementType;
    /**
     * Horizontal spacing between columns (0-12)
     * @default 4
     */
    gutterX?: number;
    /**
     * Vertical spacing between rows (0-12)
     * @default 4
     */
    gutterY?: number;
}

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
    ({ className, as: Component = 'div', gutterX = 4, gutterY = 4, style, ...props }, ref) => {
        // We use negative margins on the row and padding on the cols to create gutters
        // This is the classic Bootstrap/Flexbox grid method
        const mx = gutterX * -0.25; // -1rem for gutter 4

        return (
            <Component
                ref={ref}
                className={cn('flex flex-wrap', className)}
                style={{
                    marginLeft: `${mx}rem`,
                    marginRight: `${mx}rem`,
                    marginTop: `-${gutterY * 0.25}rem`,
                    ...style,
                }}
                {...props}
            />
        );
    }
);
Row.displayName = 'Row';

/* ========================================
   COL (Grid Item)
   ======================================== */

type ColSpan = number | 'auto' | boolean;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    /**
     * Column span on extra small screens (default)
     */
    xs?: ColSpan;
    /**
     * Column span on small screens (640px+)
     */
    sm?: ColSpan;
    /**
     * Column span on medium screens (768px+)
     */
    md?: ColSpan;
    /**
     * Column span on large screens (1024px+)
     */
    lg?: ColSpan;
    /**
     * Column span on extra large screens (1280px+)
     */
    xl?: ColSpan;
    /**
     * Column span on 2xl screens (1536px+)
     */
    xxl?: ColSpan;
    /**
     * Gutter inherited from Row (passed via context ideally, but for simplicity we assume standard usage or manual override if needed. 
     * In a strict system we'd use Context, but here we'll rely on the user or parent Row's negative margin matching standard padding).
     * 
     * Actually, to make gutters work properly without Context, we need to apply padding to every Col.
     * We will assume the standard gutter passed to Row is also intended here, or we can accept a prop.
     * For this implementation, we'll accept gutterX/Y props to match Row if customized, defaulting to 4.
     */
    gutterX?: number;
    gutterY?: number;
}

const getColClass = (span: ColSpan, prefix: string = '') => {
    if (span === true) return `${prefix}flex-1`;
    if (span === 'auto') return `${prefix}w-auto`;
    if (typeof span === 'number') {
        const width = (span / 12) * 100;
        return `${prefix}w-[${width}%] flex-none`;
    }
    return '';
};

// Helper to generate width classes safely since Tailwind doesn't support dynamic class construction like `w-[${width}%]` 
// unless it's JIT and seen at build time. 
// Better approach for Tailwind: use pre-defined classes `w-1/12`, `w-2/12` etc.

const getTailwindColClass = (span: ColSpan, breakpoint: string = '') => {
    const prefix = breakpoint ? `${breakpoint}:` : '';

    if (span === true) return `${prefix}flex-1 ${prefix}max-w-full`;
    if (span === 'auto') return `${prefix}w-auto ${prefix}max-w-full`;
    if (typeof span === 'number' && span >= 1 && span <= 12) {
        // Map 1-12 to percentages
        const map: Record<number, string> = {
            1: 'w-1/12', 2: 'w-2/12', 3: 'w-3/12', 4: 'w-4/12',
            5: 'w-5/12', 6: 'w-6/12', 7: 'w-7/12', 8: 'w-8/12',
            9: 'w-9/12', 10: 'w-10/12', 11: 'w-11/12', 12: 'w-full',
        };
        return `${prefix}${map[span]}`;
    }
    return '';
};

export const Col = React.forwardRef<HTMLDivElement, ColProps>(
    ({
        className,
        as: Component = 'div',
        xs, sm, md, lg, xl, xxl,
        gutterX = 4,
        gutterY = 4,
        style,
        ...props
    }, ref) => {

        const classes = cn(
            'relative max-w-full', // Ensure content doesn't overflow
            // Default to full width if no xs prop
            !xs && !sm && !md && !lg && !xl && !xxl ? 'w-full' : '',
            xs && getTailwindColClass(xs),
            sm && getTailwindColClass(sm, 'sm'),
            md && getTailwindColClass(md, 'md'),
            lg && getTailwindColClass(lg, 'lg'),
            xl && getTailwindColClass(xl, 'xl'),
            xxl && getTailwindColClass(xxl, '2xl'),
            className
        );

        const px = gutterX * 0.25; // 1rem
        const py = gutterY * 0.25; // 1rem

        return (
            <Component
                ref={ref}
                className={classes}
                style={{
                    paddingLeft: `${px}rem`,
                    paddingRight: `${px}rem`,
                    paddingTop: `${py}rem`,
                    ...style,
                }}
                {...props}
            />
        );
    }
);
Col.displayName = 'Col';
