import React from 'react';
export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type ChipSize = 'sm' | 'md' | 'lg';
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    label: string;
    variant?: ChipVariant;
    size?: ChipSize;
    icon?: React.ElementType;
    onDelete?: () => void;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Chip.d.ts.map