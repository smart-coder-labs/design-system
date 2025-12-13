import React from 'react';
export type SplitButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type SplitButtonSize = 'sm' | 'md' | 'lg';
export interface SplitButtonAction {
    label: string;
    onClick: () => void;
    icon?: React.ElementType;
    disabled?: boolean;
}
export interface SplitButtonProps {
    label: string;
    onClick: () => void;
    actions: SplitButtonAction[];
    variant?: SplitButtonVariant;
    size?: SplitButtonSize;
    disabled?: boolean;
    className?: string;
}
export declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SplitButton.d.ts.map