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

interface DiffLine {
    type: 'added' | 'removed' | 'unchanged';
    content: string;
    oldLineNumber?: number;
    newLineNumber?: number;
}