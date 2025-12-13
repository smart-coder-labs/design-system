import React from 'react';
export interface JsonViewerProps {
    /** The JSON data to display */
    data: any;
    /** Whether nested objects/arrays should be expanded by default */
    initiallyExpanded?: boolean;
    /** Number of pixels to indent for each level */
    indentSize?: number;
    /** Optional class name for the container */
    className?: string;
    /** Whether to show the copy button */
    showCopyButton?: boolean;
    /** Maximum height of the container before scrolling */
    maxHeight?: string | number;
}
export declare const JsonViewer: React.FC<JsonViewerProps>;
//# sourceMappingURL=JsonViewer.d.ts.map