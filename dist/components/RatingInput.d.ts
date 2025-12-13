import React from 'react';
export interface RatingInputProps {
    value?: number;
    onChange?: (value: number) => void;
    max?: number;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const RatingInput: React.FC<RatingInputProps>;
//# sourceMappingURL=RatingInput.d.ts.map