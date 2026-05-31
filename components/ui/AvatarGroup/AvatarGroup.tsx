import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { motion } from 'framer-motion';
import type { AvatarGroupProps, AvatarGroupItem, AvatarGroupSize } from './AvatarGroup.types';

/* ========================================
   AVATAR GROUP COMPONENT
   ======================================== */

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
    (
        {
            items,
            max = 5,
            size = 'md',
            showTooltip = true,
            variant = 'default',
            className,
            ...props
        },
        ref
    ) => {
        const sizes = {
            xs: "w-6 h-6 text-xs",
            sm: "w-8 h-8 text-sm",
            md: "w-10 h-10 text-base",
            lg: "w-12 h-12 text-lg",
            xl: "w-14 h-14 text-xl",
        };

        const displayItems = items.slice(0, max);
        const remainingCount = items.length - max;

        const getInitials = (name: string) => {
            const parts = name.split(' ');
            if (parts.length >= 2) {
                return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
            }
            return name.slice(0, 2).toUpperCase();
        };

        const isGlass = variant === 'glasphormism';

        return (
            <div
                ref={ref}
                className={cn("flex items-center -space-x-2", className)}
                {...props}
            >
                {displayItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative group"
                    >
                        <div
                            className={cn(
                                "relative inline-flex items-center justify-center rounded-full overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10",
                                isGlass 
                                    ? "border-2 border-white/20 dark:border-white/10 bg-surface-glass/40 backdrop-blur-sm shadow-sm"
                                    : "border-2 border-surface-primary bg-surface-secondary",
                                sizes[size]
                            )}
                        >
                            {item.src ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className={cn("font-medium", isGlass ? "text-text-primary" : "text-text-primary")}>
                                    {item.fallback || getInitials(item.alt)}
                                </span>
                            )}
                        </div>

                        {/* Tooltip */}
                        {showTooltip && (
                            <div className={cn(
                                "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20",
                                isGlass
                                    ? "bg-surface-glass/85 backdrop-blur-md border border-white/20 dark:border-white/10 text-text-primary"
                                    : "bg-surface-elevated border border-border-primary text-text-primary text-xs"
                            )}>
                                <span className="text-xs">{item.alt}</span>
                            </div>
                        )}
                    </motion.div>
                ))}

                {/* Remaining count */}
                {remainingCount > 0 && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: displayItems.length * 0.05 }}
                        className={cn(
                            "relative inline-flex items-center justify-center rounded-full font-medium transition-all cursor-default hover:z-10",
                            isGlass
                                ? "border-2 border-white/20 dark:border-white/10 bg-surface-glass/60 backdrop-blur-sm text-text-primary"
                                : "border-2 border-surface-primary bg-surface-tertiary text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20",
                            sizes[size]
                        )}
                    >
                        +{remainingCount}
                    </motion.div>
                )}
            </div>
        );
    }
);

AvatarGroup.displayName = 'AvatarGroup';
