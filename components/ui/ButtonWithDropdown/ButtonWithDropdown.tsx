'use client';

import React, { forwardRef, useState, useEffect, useLayoutEffect, useCallback, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
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
        const [mounted, setMounted] = useState(false);
        const [position, setPosition] = useState({ top: 0, left: 0 });
        // Roving focus index across the action list (-1 = nothing focused)
        const [activeIndex, setActiveIndex] = useState(-1);
        const containerRef = useRef<HTMLDivElement>(null);
        const menuRef = useRef<HTMLDivElement>(null);
        const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
        const triggerRef = useRef<HTMLButtonElement | null>(null);

        const reactId = useId();
        const triggerId = `button-with-dropdown-trigger-${reactId}`;
        const menuId = `button-with-dropdown-menu-${reactId}`;

        // Keep the local trigger ref usable while still honouring the forwarded ref
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

        // SSR guard: only portal once mounted on the client
        useEffect(() => {
            setMounted(true);
        }, []);

        // Position the fixed-position menu relative to the trigger
        const updatePosition = useCallback(() => {
            const trigger = containerRef.current;
            if (!trigger) return;

            const rect = trigger.getBoundingClientRect();
            const menu = menuRef.current;
            const menuWidth = menu?.offsetWidth ?? 0;
            const menuHeight = menu?.offsetHeight ?? 0;

            let left = rect.left;
            let top = rect.bottom + 8; // matches the previous `mt-2` offset

            if (menuWidth && left + menuWidth > window.innerWidth - 8) {
                left = window.innerWidth - menuWidth - 8;
            }
            if (left < 8) left = 8;
            if (menuHeight && top + menuHeight > window.innerHeight - 8) {
                top = rect.top - menuHeight - 8;
            }
            if (menuHeight) {
                top = Math.max(8, Math.min(top, window.innerHeight - menuHeight - 8));
            } else if (top < 8) {
                top = 8;
            }

            setPosition((prev) => (prev.top === top && prev.left === left ? prev : { top, left }));
        }, []);

        useLayoutEffect(() => {
            if (!isOpen) return;
            updatePosition();
            // Focus is owned by the `activeIndex` effect below, not by positioning.
        }, [isOpen, updatePosition]);

        useEffect(() => {
            if (!isOpen) return;
            const handleReposition = () => updatePosition();
            window.addEventListener('scroll', handleReposition, true);
            window.addEventListener('resize', handleReposition);
            return () => {
                window.removeEventListener('scroll', handleReposition, true);
                window.removeEventListener('resize', handleReposition);
            };
        }, [isOpen, updatePosition]);

        // Click outside handler (ignores clicks inside the portaled menu)
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

        // Escape closes the menu from anywhere. Arrow navigation is owned by
        // `handleMenuKeyDown` so a single keypress never advances twice.
        useEffect(() => {
            if (!isOpen) return;
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key !== 'Escape') return;
                setIsOpen(false);
                triggerRef.current?.focus();
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [isOpen]);

        // Reset the roving focus index / cached item refs whenever the menu closes
        useEffect(() => {
            if (!isOpen) {
                setActiveIndex(-1);
                itemRefs.current = [];
            }
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

        const menu = (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        id={menuId}
                        role="menu"
                        aria-labelledby={triggerId}
                        onKeyDown={handleMenuKeyDown}
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                        transition={{ duration: 0.1 }}
                        style={{ position: 'fixed', top: position.top, left: position.left }}
                        className={cn(
                            "z-50 text-left",
                            "min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1"
                        )}
                    >
                        {actions.map((action, index) => (
                            <button
                                key={index}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
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
                                {action.icon && <action.icon className="w-4 h-4" />}
                                {action.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        );

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
                    onClick={handleTriggerClick}
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

                {mounted ? createPortal(menu, document.body) : null}
            </div>
        );
    }
);

ButtonWithDropdown.displayName = 'ButtonWithDropdown';
