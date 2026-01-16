import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

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

/* ========================================
   CHIP COMPONENT
   ======================================== */

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            label,
            variant = 'default',
            size = 'md',
            icon: Icon,
            onDelete,
            onClick,
            disabled = false,
            className,
            ...props
        },
        ref
    ) => {
        const variants = {
            default: "bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary",
            primary: "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:bg-accent-blue/20",
            success: "bg-status-success/10 text-status-success border-status-success/20 hover:bg-status-success/20",
            warning: "bg-status-warning/10 text-status-warning border-status-warning/20 hover:bg-status-warning/20",
            error: "bg-status-error/10 text-status-error border-status-error/20 hover:bg-status-error/20",
            info: "bg-status-info/10 text-status-info border-status-info/20 hover:bg-status-info/20",
        };

        const sizes = {
            sm: {
                container: "h-6 px-2 gap-1 text-xs",
                icon: "w-3 h-3",
                deleteButton: "w-3.5 h-3.5",
            },
            md: {
                container: "h-8 px-3 gap-1.5 text-sm",
                icon: "w-4 h-4",
                deleteButton: "w-4 h-4",
            },
            lg: {
                container: "h-10 px-4 gap-2 text-base",
                icon: "w-5 h-5",
                deleteButton: "w-5 h-5",
            },
        };

        const isClickable = !!onClick && !disabled;

        const Component = motion.div;

        return (
            <Component
                ref={ref}
                whileHover={isClickable ? { scale: 1.02 } : undefined}
                whileTap={isClickable ? { scale: 0.98 } : undefined}
                onClick={isClickable ? onClick : undefined}
                className={cn(
                    "inline-flex items-center justify-center rounded-full border font-medium transition-colors",
                    variants[variant],
                    sizes[size].container,
                    isClickable && "cursor-pointer",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                {Icon && <Icon className={sizes[size].icon} />}
                <span>{label}</span>
                {onDelete && !disabled && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="rounded-full hover:bg-black/10 transition-colors focus:outline-none p-0.5"
                        aria-label="Delete"
                    >
                        <X className={sizes[size].deleteButton} />
                    </button>
                )}
            </Component>
        );
    }
);

Chip.displayName = 'Chip';
