import React from 'react';
export interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}
export declare const Dropdown: React.FC<DropdownProps>;
export declare const DropdownItem: React.FC<{
    children: React.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
    destructive?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}>;
export declare const DropdownSeparator: React.FC;
export declare const DropdownLabel: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const DropdownCheckboxItem: React.FC<{
    children: React.ReactNode;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}>;
export declare const DropdownRadioGroup: React.FC<{
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
}>;
export declare const DropdownRadioItem: React.FC<{
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}>;
//# sourceMappingURL=Dropdown.d.ts.map