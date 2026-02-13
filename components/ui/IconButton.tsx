import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion, HTMLMotionProps } from 'framer-motion';
import { Spinner } from './Spinner';
import { Tooltip, TooltipProvider } from './Tooltip';

/* ========================================
   TYPES
   ======================================== */

export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    icon: React.ElementType;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    isLoading?: boolean;
    tooltip?: string;
    "aria-label": string; // Required for accessibility
}

/* ========================================
   ICON BUTTON COMPONENT
   ======================================== */

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            icon: Icon,
            variant = 'secondary',
            size = 'md',
            isLoading = false,
            tooltip,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const variants = {
            primary: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",
            secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",
            tertiary: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
            ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50",
            danger: "bg-status-error/10 text-status-error hover:bg-status-error/20",
        };

        const sizes = {
            xs: "w-6 h-6 p-1",
            sm: "w-8 h-8 p-1.5",
            md: "w-10 h-10 p-2",
            lg: "w-12 h-12 p-2.5",
            xl: "w-14 h-14 p-3",
        };

        const iconSizes = {
            xs: "w-3.5 h-3.5",
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
            xl: "w-7 h-7",
        };

        const buttonContent = (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.92 }}
                disabled={disabled || isLoading}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",
                    variants[variant],
                    sizes[size],
                    (disabled || isLoading) && "opacity-50 cursor-not-allowed",
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <Spinner
                        size="sm"
                        color={variant === 'primary' ? 'white' : 'blue'}
                    />
                ) : (
                    <Icon className={cn(iconSizes[size])} />
                )}
            </motion.button>
        );

        if (tooltip) {
            return (
                <TooltipProvider>
                    <Tooltip content={tooltip}>
                        {buttonContent}
                    </Tooltip>
                </TooltipProvider>
            );
        }

        return buttonContent;
    }
);

IconButton.displayName = 'IconButton';
