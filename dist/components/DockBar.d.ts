import React from 'react';
/**
 * Dock Bar component – macOS-style dock with magnification effect.
 *
 * Features icon magnification on hover, smooth animations, and customizable positioning.
 * Inspired by macOS Dock.
 */
export interface DockBarItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
    badge?: string | number;
    active?: boolean;
}
export interface DockBarProps {
    /** Dock items */
    items: DockBarItem[];
    /** Position of the dock */
    position?: 'bottom' | 'left' | 'right';
    /** Size of icons */
    size?: 'sm' | 'md' | 'lg';
    /** Enable magnification effect */
    magnification?: boolean;
    /** Optional className for custom styling */
    className?: string;
}
export declare const DockBar: React.ForwardRefExoticComponent<DockBarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DockBar.d.ts.map