import React from 'react';
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
export declare const GridContainer: React.ForwardRefExoticComponent<GridContainerProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=GridSystem.d.ts.map