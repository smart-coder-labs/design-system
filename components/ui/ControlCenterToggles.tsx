"use client";

import React from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { Wifi, Bluetooth, Moon, Volume2, Airplay, Battery } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface ToggleControl {
    id: string;
    label: string;
    icon: React.ReactNode;
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
    value?: string | number;
    showValue?: boolean;
    disabled?: boolean;
}

export interface ControlCenterTogglesProps extends React.HTMLAttributes<HTMLDivElement> {
    controls: ToggleControl[];
    layout?: 'grid' | 'list';
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const ControlCenterToggles = React.forwardRef<HTMLDivElement, ControlCenterTogglesProps>(
    (
        {
            controls,
            layout = 'grid',
            className,
            ...props
        },
        ref
    ) => {
        const isGrid = layout === 'grid';

        return (
            <div
                ref={ref}
                className={cn(
                    isGrid ? "grid grid-cols-3 gap-3" : "flex flex-col gap-2",
                    className
                )}
                {...props}
            >
                {controls.map((control, index) => (
                    <motion.button
                        key={control.id}
                        onClick={() => !control.disabled && control.onToggle(!control.enabled)}
                        disabled={control.disabled}
                        className={cn(
                            "relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl",
                            "bg-surface-primary border border-border-primary",
                            "hover:bg-surface-secondary transition-colors",
                            "focus:outline-none focus:ring-2 focus:ring-accent-blue",
                            control.disabled && "opacity-40 cursor-not-allowed",
                            isGrid && "aspect-square"
                        )}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={!control.disabled ? { scale: 1.02 } : {}}
                        whileTap={!control.disabled ? { scale: 0.98 } : {}}
                    >
                        {/* Icon */}
                        <div className={cn(
                            "flex items-center justify-center",
                            control.enabled ? "text-accent-blue" : "text-text-tertiary"
                        )}>
                            {control.icon}
                        </div>

                        {/* Label */}
                        <span className={cn(
                            "text-xs font-medium text-center",
                            control.enabled ? "text-text-primary" : "text-text-secondary"
                        )}>
                            {control.label}
                        </span>

                        {/* Value */}
                        {control.showValue && control.value !== undefined && (
                            <span className="text-xs text-text-tertiary">
                                {control.value}
                            </span>
                        )}

                        {/* Active Indicator (for grid layout) */}
                        {isGrid && control.enabled && (
                            <motion.div
                                className="absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        );
    }
);

ControlCenterToggles.displayName = 'ControlCenterToggles';

