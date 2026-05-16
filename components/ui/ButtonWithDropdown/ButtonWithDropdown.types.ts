/* ========================================
   BUTTON WITH DROPDOWN - TYPES
   ======================================== */

export type ButtonWithDropdownVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonWithDropdownSize = 'sm' | 'md' | 'lg';

export interface ButtonWithDropdownAction {
    label: string;
    onClick: () => void;
    icon?: React.ElementType;
    disabled?: boolean;
}

export interface ButtonWithDropdownProps {
    label: string;
    actions: ButtonWithDropdownAction[];
    variant?: ButtonWithDropdownVariant;
    size?: ButtonWithDropdownSize;
    disabled?: boolean;
    className?: string;
}