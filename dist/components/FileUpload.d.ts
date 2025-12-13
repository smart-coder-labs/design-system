import React from 'react';
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
export declare const FileUpload: React.FC<FileUploadProps>;
//# sourceMappingURL=FileUpload.d.ts.map