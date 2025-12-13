import React from 'react';
export interface ResizablePanelProps {
    /** Initial width in px or % (e.g. '400px', '30%') */
    initialSize?: string;
    minSize?: number;
    maxSize?: number;
    direction?: 'horizontal' | 'vertical';
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * A resizable panel (horizontal or vertical).
 * Usage:
 * <ResizablePanel direction="horizontal">...</ResizablePanel>
 */
export declare const ResizablePanel: React.FC<ResizablePanelProps>;
//# sourceMappingURL=ResizablePanel.d.ts.map