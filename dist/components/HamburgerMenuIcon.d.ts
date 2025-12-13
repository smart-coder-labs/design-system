import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
/**
 * Hamburger Menu Icon component – Animated hamburger menu icon.
 *
 * Transforms between hamburger (three lines) and close (X) states.
 * Features smooth animations and customizable styling.
 */
export interface HamburgerMenuIconProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    /** Whether the menu is open (shows X) or closed (shows hamburger) */
    isOpen: boolean;
    /** Callback when icon is clicked */
    onClick?: () => void;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Color variant */
    variant?: 'default' | 'primary' | 'ghost';
    /** Optional className for custom styling */
    className?: string;
    /** Aria label for accessibility */
    'aria-label'?: string;
}
export declare const HamburgerMenuIcon: React.ForwardRefExoticComponent<Omit<HamburgerMenuIconProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=HamburgerMenuIcon.d.ts.map