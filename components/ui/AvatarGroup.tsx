import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export type AvatarGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarGroupItem {
    src?: string;
    alt: string;
    fallback?: string;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: AvatarGroupItem[];
    max?: number;
    size?: AvatarGroupSize;
    showTooltip?: boolean;
}

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
                                "relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-secondary overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10",
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
                                <span className="font-medium text-text-primary">
                                    {item.fallback || getInitials(item.alt)}
                                </span>
                            )}
                        </div>

                        {/* Tooltip */}
                        {showTooltip && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-elevated border border-border-primary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                <span className="text-xs text-text-primary">{item.alt}</span>
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
                            "relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-tertiary font-medium text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20 transition-all cursor-default hover:z-10",
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
