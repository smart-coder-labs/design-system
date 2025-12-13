import React from 'react';
export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    helperText?: string;
    showStrengthMeter?: boolean;
    strengthRequirements?: StrengthRequirement[];
}
export interface StrengthRequirement {
    regex: RegExp;
    label: string;
}
export declare const PasswordInput: React.FC<PasswordInputProps>;
//# sourceMappingURL=PasswordInput.d.ts.map