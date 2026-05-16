/* ========================================
   FILE UPLOAD - TYPES
   ======================================== */

export interface FileUploadProps {
    label?: string;
    onChange?: (file: File | null) => void;
    accept?: string;
    maxSize?: number;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
}