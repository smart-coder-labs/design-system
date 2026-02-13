import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/* ========================================
   TYPES
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

/* ========================================
   BUTTON WITH DROPDOWN COMPONENT
   ======================================== */

export const ButtonWithDropdown = forwardRef<HTMLButtonElement, ButtonWithDropdownProps>(
    (
        {
            label,
            actions,
            variant = 'primary',
            size = 'md',
            disabled = false,
            className,
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);

        // Click outside handler
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const variants = {
            primary: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",
            secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",
            tertiary: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
        };

        const sizes = {
            sm: {
                button: "h-8 px-3 text-sm gap-1.5",
                icon: "w-3.5 h-3.5",
            },
            md: {
                button: "h-10 px-4 text-base gap-2",
                icon: "w-4 h-4",
            },
            lg: {
                button: "h-12 px-5 text-lg gap-2.5",
                icon: "w-5 h-5",
            },
        };

        const handleActionClick = (action: ButtonWithDropdownAction) => {
            if (action.disabled) return;
            action.onClick();
            setIsOpen(false);
        };

        return (
            <div className="relative inline-block text-left" ref={containerRef}>
                <motion.button
                    ref={ref}
                    whileTap={{ scale: 0.98 }}
                    disabled={disabled}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    className={cn(
                        "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",
                        variants[variant],
                        sizes[size].button,
                        disabled && "opacity-50 cursor-not-allowed",
                        className
                    )}
                >
                    {label}
                    <ChevronDown className={cn(sizes[size].icon, "transition-transform duration-200", isOpen && "rotate-180")} />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -5 }}
                            transition={{ duration: 0.1 }}
                            className={cn(
                                "absolute left-0 mt-2 z-dropdown",
                                "min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1"
                            )}
                        >
                            {actions.map((action, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleActionClick(action)}
                                    disabled={action.disabled}
                                    className={cn(
                                        "flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors",
                                        "text-text-primary hover:bg-surface-secondary text-left",
                                        "focus:bg-surface-secondary",
                                        action.disabled && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {action.icon && <action.icon className="w-4 h-4" />}
                                    {action.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);

ButtonWithDropdown.displayName = 'ButtonWithDropdown';
