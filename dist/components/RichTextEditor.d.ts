import React from 'react';
export interface RichTextEditorProps {
    value?: string;
    onChange?: (html: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: string;
}
export declare const RichTextEditor: React.FC<RichTextEditorProps>;
//# sourceMappingURL=RichTextEditor.d.ts.map