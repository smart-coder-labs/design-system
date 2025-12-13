import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map