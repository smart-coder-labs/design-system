import React from 'react';
export type DiffViewMode = 'unified' | 'split';
export interface DiffViewerProps {
    oldText: string;
    newText: string;
    oldTitle?: string;
    newTitle?: string;
    initialMode?: DiffViewMode;
    className?: string;
    hideHeader?: boolean;
}
export declare const DiffViewer: React.FC<DiffViewerProps>;
//# sourceMappingURL=DiffViewer.d.ts.map