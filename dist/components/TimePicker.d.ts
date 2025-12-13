import React from 'react';
export interface TimePickerProps {
    label?: string;
    value?: string;
    onChange?: (time: string | null) => void;
    placeholder?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    format?: '12h' | '24h';
    step?: number;
    className?: string;
}
export declare const TimePicker: React.FC<TimePickerProps>;
//# sourceMappingURL=TimePicker.d.ts.map