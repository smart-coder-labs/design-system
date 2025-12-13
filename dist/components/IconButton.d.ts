import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface IconButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    icon: React.ElementType;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    isLoading?: boolean;
    tooltip?: string;
    "aria-label": string;
}
export declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map