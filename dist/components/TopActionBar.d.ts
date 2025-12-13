import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
/**
 * Top Action Bar component – macOS/iOS style top navigation bar.
 *
 * Features a clean, minimal design with left, center, and right sections.
 * Supports glassmorphism effect and sticky positioning.
 */
export interface TopActionBarProps extends Omit<HTMLMotionProps<'header'>, 'children'> {
    /** Content for the left section */
    leftContent?: React.ReactNode;
    /** Content for the center section */
    centerContent?: React.ReactNode;
    /** Content for the right section */
    rightContent?: React.ReactNode;
    /** Whether to use glassmorphism effect */
    glass?: boolean;
    /** Whether the bar should be sticky */
    sticky?: boolean;
    /** Whether to show bottom border */
    showBorder?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Optional className for custom styling */
    className?: string;
}
export declare const TopActionBar: React.ForwardRefExoticComponent<Omit<TopActionBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * TopActionBarButton – Specialized button for use in TopActionBar
 */
export interface TopActionBarButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    /** Button content */
    children: React.ReactNode;
    /** Icon to display */
    icon?: React.ReactNode;
    /** Whether button is active */
    active?: boolean;
    /** Button variant */
    variant?: 'default' | 'ghost' | 'primary';
    /** Optional className */
    className?: string;
}
export declare const TopActionBarButton: React.ForwardRefExoticComponent<Omit<TopActionBarButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 * TopActionBarIconButton – Icon-only button for TopActionBar
 */
export interface TopActionBarIconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    /** Icon to display */
    icon: React.ReactNode;
    /** Accessible label */
    'aria-label': string;
    /** Whether button is active */
    active?: boolean;
    /** Optional badge content */
    badge?: string | number;
    /** Optional className */
    className?: string;
}
export declare const TopActionBarIconButton: React.ForwardRefExoticComponent<Omit<TopActionBarIconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=TopActionBar.d.ts.map