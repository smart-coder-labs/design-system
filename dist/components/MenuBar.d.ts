import React from 'react';
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
export declare const MenuBar: React.ForwardRefExoticComponent<MenuBarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MenuBar.d.ts.map