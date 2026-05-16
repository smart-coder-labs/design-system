/* ========================================
   MARKDOWN EDITOR - TYPES
   ======================================== */

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