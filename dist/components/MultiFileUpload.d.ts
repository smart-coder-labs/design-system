import React from 'react';
export interface MultiFileUploadProps {
    label?: string;
    value?: File[];
    onChange?: (files: File[]) => void;
    accept?: string;
    maxSize?: number;
    maxFiles?: number;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
}
export declare const MultiFileUpload: React.FC<MultiFileUploadProps>;
//# sourceMappingURL=MultiFileUpload.d.ts.map