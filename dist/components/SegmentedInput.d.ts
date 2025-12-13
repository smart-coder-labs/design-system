import React from 'react';
export interface SegmentedInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    type?: 'text' | 'number' | 'password';
    placeholder?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare const SegmentedInput: React.FC<SegmentedInputProps>;
//# sourceMappingURL=SegmentedInput.d.ts.map