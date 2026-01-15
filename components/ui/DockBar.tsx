import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

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

export const DockBar = React.forwardRef<HTMLDivElement, DockBarProps>(
    ({ items, position = 'bottom', size = 'md', magnification = true, className = '' }, ref) => {
        const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

        const sizeStyles = {
            sm: {
                icon: 'w-10 h-10',
                gap: 'gap-2',
                padding: 'p-2',
                magnifiedSize: 56,
                normalSize: 40,
            },
            md: {
                icon: 'w-14 h-14',
                gap: 'gap-3',
                padding: 'p-3',
                magnifiedSize: 72,
                normalSize: 56,
            },
            lg: {
                icon: 'w-16 h-16',
                gap: 'gap-4',
                padding: 'p-4',
                magnifiedSize: 88,
                normalSize: 64,
            },
        };

        const positionStyles = {
            bottom: 'bottom-4 left-1/2 -translate-x-1/2 flex-row',
            left: 'left-4 top-1/2 -translate-y-1/2 flex-col',
            right: 'right-4 top-1/2 -translate-y-1/2 flex-col',
        };

        const { icon: iconSize, gap, padding, magnifiedSize, normalSize } = sizeStyles[size];

        const getScale = (index: number) => {
            if (!magnification || hoveredIndex === null) return 1;

            const distance = Math.abs(index - hoveredIndex);
            if (distance === 0) return magnifiedSize / normalSize;
            if (distance === 1) return 1.2;
            if (distance === 2) return 1.1;
            return 1;
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'fixed z-sticky',
                    positionStyles[position],
                    className
                )}
            >
                <motion.div
                    className={cn(
                        'flex items-end glass rounded-2xl border border-border-secondary shadow-2xl backdrop-blur-xl',
                        position === 'bottom' ? 'flex-row' : 'flex-col',
                        gap,
                        padding
                    )}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {items.map((item, index) => (
                        <DockBarIcon
                            key={item.id}
                            item={item}
                            scale={getScale(index)}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            iconSize={iconSize}
                        />
                    ))}
                </motion.div>
            </div>
        );
    }
);

DockBar.displayName = 'DockBar';

interface DockBarIconProps {
    item: DockBarItem;
    scale: number;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    iconSize: string;
}

const DockBarIcon: React.FC<DockBarIconProps> = ({
    item,
    scale,
    onHoverStart,
    onHoverEnd,
    iconSize,
}) => {
    const [showLabel, setShowLabel] = React.useState(false);

    return (
        <div className="relative flex flex-col items-center">
            {/* Label tooltip */}
            {showLabel && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-medium rounded-lg backdrop-blur-sm whitespace-nowrap"
                >
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45" />
                </motion.div>
            )}

            {/* Icon */}
            <motion.button
                onClick={item.onClick}
                onHoverStart={() => {
                    onHoverStart();
                    setShowLabel(true);
                }}
                onHoverEnd={() => {
                    onHoverEnd();
                    setShowLabel(false);
                }}
                className={cn(
                    'relative flex items-center justify-center rounded-xl transition-all',
                    'bg-surface-primary/50 backdrop-blur-sm',
                    'hover:bg-surface-primary/80',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
                    item.active && 'ring-2 ring-accent-blue',
                    iconSize
                )}
                style={{
                    scale,
                    transformOrigin: 'bottom center',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
                <div className="text-2xl">{item.icon}</div>

                {/* Badge */}
                {item.badge && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full"
                    >
                        {item.badge}
                    </motion.div>
                )}

                {/* Active indicator */}
                {item.active && (
                    <motion.div
                        layoutId="dock-active-indicator"
                        className="absolute -bottom-1 w-1 h-1 bg-accent-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                )}
            </motion.button>
        </div>
    );
};
