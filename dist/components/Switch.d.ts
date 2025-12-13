import React from 'react';
export interface SwitchProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Switch: React.FC<SwitchProps>;
//# sourceMappingURL=Switch.d.ts.map