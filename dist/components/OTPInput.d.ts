import React from 'react';
export interface OTPInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    separator?: React.ReactNode;
    groupSize?: number;
    className?: string;
    autoFocus?: boolean;
}
export declare const OTPInput: React.FC<OTPInputProps>;
//# sourceMappingURL=OTPInput.d.ts.map