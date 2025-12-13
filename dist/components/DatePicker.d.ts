import React from 'react';
export interface DatePickerProps {
    label?: string;
    value?: Date;
    onChange?: (date: Date | null) => void;
    placeholder?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: 'short' | 'medium' | 'long';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
//# sourceMappingURL=DatePicker.d.ts.map