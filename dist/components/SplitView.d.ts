import React from 'react';
export interface SplitViewProps {
    /**
     * Left panel content (Finder sidebar, etc)
     */
    left: React.ReactNode;
    /**
     * Main panel content (Finder files, etc)
     */
    right: React.ReactNode;
    /**
     * Initial width of left panel (px or %)
     */
    initialLeftSize?: string;
    /**
     * Minimum width of left panel (px)
     */
    minLeftSize?: number;
    /**
     * Maximum width of left panel (px)
     */
    maxLeftSize?: number;
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
 * SplitView (macOS Finder style):
 * - Left panel resizable
 * - Right panel fills remaining space
 * - Glass effect, subtle border, shadow
 * - Responsive, mobile stacks panels
 */
export declare const SplitView: React.FC<SplitViewProps>;
//# sourceMappingURL=SplitView.d.ts.map