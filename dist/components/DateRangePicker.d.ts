import React from 'react';
export interface DateRange {
    from: Date | null;
    to: Date | null;
}
export interface DateRangePickerProps {
    label?: string;
    value?: DateRange;
    onChange?: (range: DateRange) => void;
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
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
//# sourceMappingURL=DateRangePicker.d.ts.map