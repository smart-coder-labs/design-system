import React from 'react';
export interface MasonryLayoutProps {
    /**
     * Array of React nodes to render as items
     */
    children: React.ReactNode[];
    /**
     * Number of columns (default: 3)
     */
    columns?: number;
    /**
     * Gap between items (default: 16px)
     */
    gap?: number;
    /**
     * Optional className for root
     */
    className?: string;
    /**
     * Optional style for root
     */
    style?: React.CSSProperties;
}
/**
 * MasonryLayout: Apple-minimal masonry grid
 * - Responsive, fluid columns
 * - Animaciones suaves al reordenar
 * - Accesible y configurable
 */
export declare const MasonryLayout: React.FC<MasonryLayoutProps>;
//# sourceMappingURL=MasonryLayout.d.ts.map