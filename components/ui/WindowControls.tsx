"use client";

import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface WindowControlsProps extends React.HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    variant?: 'macos' | 'windows';
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const WindowControls = React.forwardRef<HTMLDivElement, WindowControlsProps>(
    (
        {
            onClose,
            onMinimize,
            onMaximize,
            variant = 'macos',
            className,
            ...props
        },
        ref
    ) => {
        if (variant === 'windows') {
            return (
                <div
                    ref={ref}
                    className={cn("flex items-center gap-1", className)}
                    {...props}
                >
                    {onMinimize && (
                        <button
                            onClick={onMinimize}
                            className="w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors"
                            aria-label="Minimize"
                        >
                            <Minus className="w-4 h-4 text-text-secondary" />
                        </button>
                    )}
                    {onMaximize && (
                        <button
                            onClick={onMaximize}
                            className="w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors"
                            aria-label="Maximize"
                        >
                            <Square className="w-3.5 h-3.5 text-text-secondary" />
                        </button>
                    )}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="w-12 h-8 flex items-center justify-center hover:bg-status-error text-status-error transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            );
        }

        // macOS style
        return (
            <div
                ref={ref}
                className={cn("flex items-center gap-2", className)}
                {...props}
            >
                {onClose && (
                    <motion.button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-status-error flex items-center justify-center group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Close"
                    >
                        <X className="w-2 h-2 text-status-error opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                )}
                {onMinimize && (
                    <motion.button
                        onClick={onMinimize}
                        className="w-3 h-3 rounded-full bg-status-warning flex items-center justify-center group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Minimize"
                    >
                        <Minus className="w-2 h-2 text-status-warning opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                )}
                {onMaximize && (
                    <motion.button
                        onClick={onMaximize}
                        className="w-3 h-3 rounded-full bg-status-success flex items-center justify-center group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Maximize"
                    >
                        <Square className="w-1.5 h-1.5 text-status-success opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                )}
            </div>
        );
    }
);

WindowControls.displayName = 'WindowControls';

