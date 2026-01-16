import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

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

/* ========================================
   TAG COMPONENT
   ======================================== */

export const Tag = forwardRef<HTMLDivElement, TagProps>(
    (
        {
            label,
            variant = 'default',
            size = 'md',
            icon: Icon,
            onRemove,
            onClick,
            disabled = false,
            className,
            ...props
        },
        ref
    ) => {
        const variants = {
            default: "bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary",
            primary: "bg-accent-blue text-white border-accent-blue hover:bg-accent-blueHover",
            success: "bg-status-success text-white border-status-success hover:bg-status-success/90",
            warning: "bg-status-warning text-white border-status-warning hover:bg-status-warning/90",
            error: "bg-status-error text-white border-status-error hover:bg-status-error/90",
            info: "bg-status-info text-white border-status-info hover:bg-status-info/90",
            outline: "bg-transparent text-text-primary border-border-primary hover:bg-surface-secondary",
        };

        const sizes = {
            sm: {
                container: "h-5 px-2 gap-1 text-xs",
                icon: "w-3 h-3",
                removeButton: "w-3 h-3",
            },
            md: {
                container: "h-6 px-2.5 gap-1.5 text-sm",
                icon: "w-3.5 h-3.5",
                removeButton: "w-3.5 h-3.5",
            },
            lg: {
                container: "h-7 px-3 gap-2 text-base",
                icon: "w-4 h-4",
                removeButton: "w-4 h-4",
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
                    "inline-flex items-center justify-center rounded-md border font-medium transition-colors",
                    variants[variant],
                    sizes[size].container,
                    isClickable && "cursor-pointer",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                {Icon && <Icon className={sizes[size].icon} />}
                <span className="leading-none">{label}</span>
                {onRemove && !disabled && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        className="rounded hover:bg-black/10 transition-colors focus:outline-none p-0.5 -mr-0.5"
                        aria-label="Remove"
                    >
                        <X className={sizes[size].removeButton} />
                    </button>
                )}
            </Component>
        );
    }
);

Tag.displayName = 'Tag';
