import React from 'react';
export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
export type TagSize = 'sm' | 'md' | 'lg';
export interface TagProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    label: string;
    variant?: TagVariant;
    size?: TagSize;
    icon?: React.ElementType;
    onRemove?: () => void;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tag.d.ts.map