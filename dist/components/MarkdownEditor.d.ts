import React from 'react';
export interface MarkdownEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: string;
}
export declare const MarkdownEditor: React.FC<MarkdownEditorProps>;
//# sourceMappingURL=MarkdownEditor.d.ts.map