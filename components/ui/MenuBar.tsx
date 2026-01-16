import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';;

/**
 * Menu Bar component – macOS-style menu bar with dropdown menus.
 *
 * Features nested menus, keyboard navigation, and smooth animations.
 * Inspired by macOS menu bar design.
 */

export interface MenuBarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    divider?: boolean;
    onSelect?: () => void;
    submenu?: MenuBarItem[];
}

export interface MenuBarMenu {
    id: string;
    label: string;
    items: MenuBarItem[];
}

export interface MenuBarProps {
    /** Menu items */
    menus: MenuBarMenu[];
    /** Optional left content (e.g., app logo) */
    leftContent?: React.ReactNode;
    /** Optional right content (e.g., user menu) */
    rightContent?: React.ReactNode;
    /** Optional className for custom styling */
    className?: string;
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
    ({ menus, leftContent, rightContent, className = '' }, ref) => {
        const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
        const [hoveredMenu, setHoveredMenu] = React.useState<string | null>(null);
        const menuRefs = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});

        // Close menu on outside click
        React.useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (activeMenu) {
                    setActiveMenu(null);
                    setHoveredMenu(null);
                }
            };

            if (activeMenu) {
                document.addEventListener('mousedown', handleClickOutside);
                return () => document.removeEventListener('mousedown', handleClickOutside);
            }
        }, [activeMenu]);

        // Handle escape key
        React.useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && activeMenu) {
                    setActiveMenu(null);
                    setHoveredMenu(null);
                }
            };

            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }, [activeMenu]);

        const handleMenuClick = (menuId: string) => {
            if (activeMenu === menuId) {
                setActiveMenu(null);
                setHoveredMenu(null);
            } else {
                setActiveMenu(menuId);
                setHoveredMenu(menuId);
            }
        };

        const handleMenuHover = (menuId: string) => {
            if (activeMenu) {
                setActiveMenu(menuId);
                setHoveredMenu(menuId);
            } else {
                setHoveredMenu(menuId);
            }
        };

        const handleItemClick = (item: MenuBarItem) => {
            if (!item.disabled && item.onSelect) {
                item.onSelect();
                setActiveMenu(null);
                setHoveredMenu(null);
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'flex items-center h-14 px-6 bg-surface-primary border-b border-border-primary',
                    className
                )}
            >
                {/* Left Content */}
                {leftContent && <div className="flex items-center mr-6">{leftContent}</div>}

                {/* Menus */}
                <div className="flex items-center gap-2 flex-1">
                    {menus.map((menu) => (
                        <div key={menu.id} className="relative">
                            <button
                                ref={(el) => { menuRefs.current[menu.id] = el }}
                                onClick={() => handleMenuClick(menu.id)}
                                onMouseEnter={() => handleMenuHover(menu.id)}
                                className={cn(
                                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                                    activeMenu === menu.id || hoveredMenu === menu.id
                                        ? 'bg-accent-blue/10 text-text-primary'
                                        : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                                )}
                            >
                                {menu.label}
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {activeMenu === menu.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 top-full mt-1 min-w-[240px] bg-surface-primary rounded-lg shadow-xl border border-border-primary overflow-hidden z-dropdown"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="py-2">
                                            {menu.items.map((item, idx) => (
                                                <React.Fragment key={item.id}>
                                                    {item.divider ? (
                                                        <div className="my-2 h-px bg-border-primary" />
                                                    ) : (
                                                        <button
                                                            onClick={() => handleItemClick(item)}
                                                            disabled={item.disabled}
                                                            className={cn(
                                                                'w-full flex items-center justify-between gap-6 px-4 py-3 text-sm transition-colors',
                                                                item.disabled
                                                                    ? 'text-text-tertiary cursor-not-allowed'
                                                                    : 'text-text-secondary hover:bg-accent-blue/10 hover:text-text-primary cursor-pointer'
                                                            )}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                {item.icon && (
                                                                    <span className="flex-shrink-0 text-lg">
                                                                        {item.icon}
                                                                    </span>
                                                                )}
                                                                <span>{item.label}</span>
                                                            </div>
                                                            {item.shortcut && (
                                                                <kbd className="text-xs text-text-tertiary font-medium">
                                                                    {item.shortcut}
                                                                </kbd>
                                                            )}
                                                        </button>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Content */}
                {rightContent && <div className="flex items-center ml-6">{rightContent}</div>}
            </div>
        );
    }
);

MenuBar.displayName = 'MenuBar';
