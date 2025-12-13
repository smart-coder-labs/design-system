import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
/**
 * Sidebar component – vertical navigation list.
 *
 * Designed to follow the Apple‑style design system tokens.
 * Uses `bg-surface-secondary` as background, rounded corners, and subtle hover/active states.
 */
export interface SidebarItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}
export interface SidebarProps extends Omit<HTMLMotionProps<'nav'>, 'children'> {
    /** List of navigation items */
    items: SidebarItem[];
    /** Optional className for custom styling */
    className?: string;
}
export declare const Sidebar: React.ForwardRefExoticComponent<Omit<SidebarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Sidebar.d.ts.map