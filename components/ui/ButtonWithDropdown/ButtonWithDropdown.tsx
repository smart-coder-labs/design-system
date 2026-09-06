'use client';

import React, { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ButtonWithDropdownProps, ButtonWithDropdownVariant, ButtonWithDropdownSize, ButtonWithDropdownAction } from './ButtonWithDropdown.types';

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
        // Index of the menu item that currently owns focus (-1 = none)
        const [activeIndex, setActiveIndex] = useState(-1);
        const containerRef = useRef<HTMLDivElement>(null);
        const triggerRef = useRef<HTMLButtonElement | null>(null);
        const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

        const baseId = React.useId();
        const triggerId = `${baseId}-trigger`;
        const menuId = `${baseId}-menu`;

        // Keep the internal trigger ref in sync with the forwarded ref (object or callback)
        const setTriggerRef = useCallback(
            (node: HTMLButtonElement | null) => {
                triggerRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            },
            [ref]
        );

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

        // Reset the roving focus index whenever the menu closes
        useEffect(() => {
            if (!isOpen) setActiveIndex(-1);
        }, [isOpen]);

        // Move DOM focus to the active menu item
        useEffect(() => {
            if (!isOpen || activeIndex < 0) return;
            itemRefs.current[activeIndex]?.focus();
        }, [isOpen, activeIndex]);

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

        const handleActionClick = (action: ButtonWithDropdownAction) => {
            if (action.disabled) return;
            action.onClick();
            closeMenu(true);
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
            <div className="relative inline-block text-left" ref={containerRef}>
                <motion.button
                    ref={setTriggerRef}
                    type="button"
                    id={triggerId}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? menuId : undefined}
                    whileTap={{ scale: 0.98 }}
                    disabled={disabled}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    onKeyDown={handleTriggerKeyDown}
                    className={cn(
                        "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",
                        variants[variant],
                        sizes[size].button,
                        disabled && "opacity-50 cursor-not-allowed",
                        className
                    )}
                >
                    {label}
                    <ChevronDown aria-hidden="true" className={cn(sizes[size].icon, "transition-transform duration-200", isOpen && "rotate-180")} />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id={menuId}
                            role="menu"
                            aria-labelledby={triggerId}
                            tabIndex={-1}
                            onKeyDown={handleMenuKeyDown}
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
                                    ref={(node) => {
                                        itemRefs.current[index] = node;
                                    }}
                                    type="button"
                                    role="menuitem"
                                    tabIndex={index === activeIndex ? 0 : -1}
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

ButtonWithDropdown.displayName = 'ButtonWithDropdown';
