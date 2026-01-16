import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';;

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

export const TopActionBar = React.forwardRef<HTMLDivElement, TopActionBarProps>(
    (
        {
            leftContent,
            centerContent,
            rightContent,
            glass = false,
            sticky = true,
            showBorder = true,
            size = 'md',
            className = '',
            ...props
        },
        ref
    ) => {
        const sizeStyles = {
            sm: 'h-12 px-3',
            md: 'h-14 px-4',
            lg: 'h-16 px-6',
        };

        const baseStyles = `
            ${sizeStyles[size]}
            w-full
            flex items-center justify-between
            ${sticky ? 'sticky top-0 z-sticky' : ''}
            ${glass
                ? 'bg-surface-glass backdrop-blur-xl'
                : 'bg-surface-primary'
            }
            ${showBorder ? 'border-b border-border-primary' : ''}
            transition-apple
        `;

        return (
            <motion.header
                ref={ref}
                className={cn(baseStyles, className)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                {...props}
            >
                {/* Left Section */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    {leftContent}
                </div>

                {/* Center Section */}
                {centerContent && (
                    <div className="flex items-center justify-center gap-2 flex-shrink-0 px-4">
                        {centerContent}
                    </div>
                )}

                {/* Right Section */}
                <div className="flex items-center justify-end gap-2 flex-1 min-w-0">
                    {rightContent}
                </div>
            </motion.header>
        );
    }
);

TopActionBar.displayName = 'TopActionBar';

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

export const TopActionBarButton = React.forwardRef<HTMLButtonElement, TopActionBarButtonProps>(
    (
        {
            children,
            icon,
            active = false,
            variant = 'default',
            className = '',
            ...props
        },
        ref
    ) => {
        const variantStyles = {
            default: `
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary
            `,
            ghost: `
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary/50
            `,
            primary: `
                bg-accent-blue text-white
                hover:bg-accent-blue/90
            `,
        };

        const baseStyles = `
            inline-flex items-center gap-2
            px-3 py-1.5
            rounded-md
            text-sm font-medium
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${active ? 'bg-surface-secondary text-text-primary' : ''}
        `;

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variantStyles[variant], className)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {icon && <span className="inline-flex">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);

TopActionBarButton.displayName = 'TopActionBarButton';

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

export const TopActionBarIconButton = React.forwardRef<HTMLButtonElement, TopActionBarIconButtonProps>(
    (
        {
            icon,
            active = false,
            badge,
            className = '',
            ...props
        },
        ref
    ) => {
        const baseStyles = `
            relative
            inline-flex items-center justify-center
            w-9 h-9
            rounded-md
            text-text-secondary hover:text-text-primary
            hover:bg-surface-secondary
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${active ? 'bg-surface-secondary text-text-primary' : ''}
        `;

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, className)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {icon}
                {badge && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-semibold rounded-full bg-accent-blue text-white">
                        {badge}
                    </span>
                )}
            </motion.button>
        );
    }
);

TopActionBarIconButton.displayName = 'TopActionBarIconButton';
