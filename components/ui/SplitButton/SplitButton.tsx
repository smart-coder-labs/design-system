import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    /** Accessible name for the icon-only dropdown trigger. Defaults to `More ${label} actions`. */
    dropdownAriaLabel?: string;
    /** Accessible name for the dropdown menu. When omitted the menu is labelled by the trigger. */
    menuAriaLabel?: string;
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
            dropdownAriaLabel,
            menuAriaLabel,
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [activeIndex, setActiveIndex] = useState(-1);
        const containerRef = useRef<HTMLDivElement>(null);
        const triggerRef = useRef<HTMLButtonElement | null>(null);
        const menuRef = useRef<HTMLDivElement | null>(null);
        const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

        const baseId = React.useId();
        const triggerId = `${baseId}-trigger`;
        const menuId = `${baseId}-menu`;
        const triggerLabel = dropdownAriaLabel ?? (label ? `More ${label} actions` : 'More actions');

        // Click outside handler (only while the menu is open)
        useEffect(() => {
            if (!isOpen) return;
            const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as Node;
                if (containerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
                setIsOpen(false);
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [isOpen]);

        // Reset the roving focus index whenever the menu closes
        useEffect(() => {
            if (!isOpen) setActiveIndex(-1);
        }, [isOpen]);

        // Drop cached refs / roving index that point past the end of a shrunken action list
        useEffect(() => {
            itemRefs.current.length = actions.length;
            setActiveIndex((current) => (current < actions.length ? current : -1));
        }, [actions.length]);

        // Move DOM focus to the active menu item
        useEffect(() => {
            if (!isOpen || activeIndex < 0) return;
            itemRefs.current[activeIndex]?.focus();
        }, [isOpen, activeIndex]);

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

        const focusTrigger = () => {
            triggerRef.current?.focus();
        };

        // Walks the action list in `direction`, wrapping around and skipping disabled items
        const findEnabledIndex = (start: number, direction: 1 | -1): number => {
            const total = actions.length;
            if (total === 0) return -1;
            const origin = start < 0 ? (direction === 1 ? -1 : 0) : start;
            for (let step = 1; step <= total; step += 1) {
                const next = (((origin + direction * step) % total) + total) % total;
                if (!actions[next]?.disabled) return next;
            }
            return -1;
        };

        const closeMenu = (returnFocus: boolean) => {
            setIsOpen(false);
            if (returnFocus) focusTrigger();
        };

        const handleActionClick = (action: SplitButtonAction) => {
            if (action.disabled) return;
            action.onClick();
            closeMenu(true);
        };

        const handleTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) return;
            const opening = !isOpen;
            setIsOpen(opening);
            // detail === 0 means the click came from Enter/Space, which must focus the first item
            if (opening && event.detail === 0) setActiveIndex(findEnabledIndex(-1, 1));
        };

        const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (disabled) return;
            // Enter/Space are left to the native click handler
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setIsOpen(true);
                setActiveIndex(findEnabledIndex(-1, 1));
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setIsOpen(true);
                setActiveIndex(findEnabledIndex(-1, -1));
            } else if (event.key === 'Escape' && isOpen) {
                event.preventDefault();
                setIsOpen(false);
            }
        };

        const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    setActiveIndex(findEnabledIndex(activeIndex, 1));
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    setActiveIndex(findEnabledIndex(activeIndex, -1));
                    break;
                case 'Home':
                    event.preventDefault();
                    setActiveIndex(findEnabledIndex(-1, 1));
                    break;
                case 'End':
                    event.preventDefault();
                    setActiveIndex(findEnabledIndex(-1, -1));
                    break;
                case 'Escape':
                    event.preventDefault();
                    closeMenu(true);
                    break;
                case 'Tab':
                    // Let the browser move focus onward, but dismiss the menu
                    closeMenu(false);
                    break;
                default:
                    break;
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex rounded-xl overflow-visible shadow-sm relative", /* overflow-visible for dropdown */
                    variants[variant].container,
                    className
                )}
            >
                <div className="flex rounded-xl overflow-hidden" ref={containerRef}>
                    {/* Primary Action Button */}
                    <motion.button
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={onClick}
                        disabled={disabled}
                        className={cn(
                            "flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",
                            variants[variant].button,
                            sizes[size].button,
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        {label}
                    </motion.button>

                    {/* Divider */}
                    <div className={cn("w-px", variants[variant].divider)} />

                    {/* Dropdown Menu Trigger */}
                    <motion.button
                        ref={triggerRef}
                        type="button"
                        id={triggerId}
                        aria-label={triggerLabel}
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? menuId : undefined}
                        whileTap={{ scale: 0.98 }}
                        disabled={disabled}
                        onClick={handleTriggerClick}
                        onKeyDown={handleTriggerKeyDown}
                        className={cn(
                            "flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",
                            variants[variant].button,
                            sizes[size].dropdown,
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        <ChevronDown aria-hidden="true" className={cn(sizes[size].icon, "transition-transform duration-200", isOpen && "rotate-180")} />
                    </motion.button>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={menuRef}
                            id={menuId}
                            role="menu"
                            aria-label={menuAriaLabel}
                            aria-labelledby={menuAriaLabel ? undefined : triggerId}
                            onKeyDown={handleMenuKeyDown}
                            initial={{ opacity: 0, scale: 0.95, y: -5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -5 }}
                            transition={{ duration: 0.1 }}
                            className={cn(
                                "absolute right-0 top-full mt-2 z-dropdown",
                                "min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1"
                            )}
                        >
                            {actions.map((action, index) => (
                                <button
                                    key={index}
                                    ref={(node) => {
                                        itemRefs.current[index] = node;
                                    }}
                                    type="button"
                                    role="menuitem"
                                    onClick={() => handleActionClick(action)}
                                    disabled={action.disabled}
                                    className={cn(
                                        "flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors",
                                        "text-text-primary hover:bg-surface-secondary text-left",
                                        "focus:bg-surface-secondary",
                                        action.disabled && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {action.icon && <action.icon aria-hidden="true" className="w-4 h-4" />}
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

SplitButton.displayName = 'SplitButton';
