"use client";

import React from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface AIThinkingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'dots' | 'pulse' | 'wave';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    message?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const AIThinkingIndicator = React.forwardRef<HTMLDivElement, AIThinkingIndicatorProps>(
    (
        {
            variant = 'dots',
            size = 'md',
            color = 'rgb(0, 122, 255)',
            message = '',
            className,
            ...props
        },
        ref
    ) => {
        const sizeStyles = {
            sm: { dot: 'w-1.5 h-1.5', gap: 'gap-1', text: 'text-xs' },
            md: { dot: 'w-2 h-2', gap: 'gap-1.5', text: 'text-sm' },
            lg: { dot: 'w-2.5 h-2.5', gap: 'gap-2', text: 'text-base' },
        };

        const styles = sizeStyles[size];

        const DotsVariant = () => (
            <div className={cn("flex items-center", styles.gap)}>
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className={cn("rounded-full", styles.dot)}
                        style={{ backgroundColor: color }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        );

        const PulseVariant = () => (
            <motion.div
                className={cn("rounded-full", styles.dot)}
                style={{ backgroundColor: color }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        );

        const WaveVariant = () => (
            <div className={cn("flex items-end", styles.gap)} style={{ height: '16px' }}>
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="rounded-full"
                        style={{
                            width: '3px',
                            backgroundColor: color,
                        }}
                        animate={{
                            height: ['8px', '16px', '8px'],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        );

        const renderVariant = () => {
            switch (variant) {
                case 'dots':
                    return <DotsVariant />;
                case 'pulse':
                    return <PulseVariant />;
                case 'wave':
                    return <WaveVariant />;
                default:
                    return <DotsVariant />;
            }
        };

        return (
            <div
                ref={ref}
                className={cn("flex items-center gap-3", className)}
                {...props}
            >
                {renderVariant()}
                {message && (
                    <span className={cn("text-text-secondary", styles.text)}>
                        {message}
                    </span>
                )}
            </div>
        );
    }
);

AIThinkingIndicator.displayName = 'AIThinkingIndicator';

