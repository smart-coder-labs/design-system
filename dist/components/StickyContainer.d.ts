import React from 'react';
export interface StickyContainerProps {
    /**
     * Children to render inside the sticky container
     */
    children: React.ReactNode;
    /**
     * Top offset in px (default: 0)
     */
    top?: number;
    /**
     * Z-index (default: 20)
     */
    zIndex?: number;
    /**
     * Optional className for custom styles
     */
    className?: string;
    /**
     * Optional style for custom CSS
     */
    style?: React.CSSProperties;
}
/**
 * StickyContainer: Apple/macOS style sticky surface
 * - Uses position: sticky
 * - Glass effect, border, shadow
 * - Top offset configurable
 * - Responsive, works in scrollable containers
 */
export declare const StickyContainer: React.FC<StickyContainerProps>;
//# sourceMappingURL=StickyContainer.d.ts.map