import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

/* ========================================
   TYPES
   ======================================== */

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

/* ========================================
   SPLIT BUTTON COMPONENT
   ======================================== */

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
    (
        {
            label,
            onClick,
            actions,
            variant = 'primary',
            size = 'md',
            disabled = false,
            className,
        },
        ref
    ) => {
        const variants = {
            primary: {
                button: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive",
                divider: "bg-white/20",
                container: "",
            },
            secondary: {
                button: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80",
                divider: "bg-border-primary",
                container: "border border-border-primary",
            },
            tertiary: {
                button: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
                divider: "bg-border-primary",
                container: "border border-border-primary",
            },
        };

        const sizes = {
            sm: {
                button: "h-8 px-3 text-sm",
                icon: "w-3.5 h-3.5",
                dropdown: "w-7",
            },
            md: {
                button: "h-10 px-4 text-base",
                icon: "w-4 h-4",
                dropdown: "w-9",
            },
            lg: {
                button: "h-12 px-5 text-lg",
                icon: "w-5 h-5",
                dropdown: "w-11",
            },
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex rounded-xl overflow-hidden shadow-sm",
                    variants[variant].container,
                    className
                )}
            >
                {/* Primary Action Button */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={onClick}
                    disabled={disabled}
                    className={cn(
                        "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
                        variants[variant].button,
                        sizes[size].button,
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {label}
                </motion.button>

                {/* Divider */}
                <div className={cn("w-px", variants[variant].divider)} />

                {/* Dropdown Menu */}
                <DropdownMenuPrimitive.Root>
                    <DropdownMenuPrimitive.Trigger asChild>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            disabled={disabled}
                            className={cn(
                                "flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
                                variants[variant].button,
                                sizes[size].dropdown,
                                disabled && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            <ChevronDown className={sizes[size].icon} />
                        </motion.button>
                    </DropdownMenuPrimitive.Trigger>

                    <DropdownMenuPrimitive.Portal>
                        <DropdownMenuPrimitive.Content
                            align="end"
                            sideOffset={4}
                            className={cn(
                                "min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1",
                                "z-dropdown",
                                "animate-in fade-in-0 zoom-in-95"
                            )}
                        >
                            {actions.map((action, index) => (
                                <DropdownMenuPrimitive.Item
                                    key={index}
                                    onClick={action.onClick}
                                    disabled={action.disabled}
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors",
                                        "text-text-primary hover:bg-surface-secondary",
                                        "focus:bg-surface-secondary",
                                        action.disabled && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {action.icon && <action.icon className="w-4 h-4" />}
                                    {action.label}
                                </DropdownMenuPrimitive.Item>
                            ))}
                        </DropdownMenuPrimitive.Content>
                    </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Root>
            </div>
        );
    }
);

SplitButton.displayName = 'SplitButton';
