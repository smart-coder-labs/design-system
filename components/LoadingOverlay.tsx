import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from './Spinner';
import { cn } from '../lib/utils';

export interface LoadingOverlayProps {
    /**
     * Whether the loading overlay is visible
     */
    isLoading: boolean;
    /**
     * Optional message to display below the spinner
     */
    message?: string;
    /**
     * Whether to cover the entire viewport (fixed) or just the parent container (absolute)
     * @default false
     */
    fullPage?: boolean;
    /**
     * Whether to apply a blur effect to the backdrop
     * @default true
     */
    blur?: boolean;
    /**
     * Custom class name for the container
     */
    className?: string;
    /**
     * Size of the spinner
     * @default "lg"
     */
    spinnerSize?: 'sm' | 'md' | 'lg';
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    isLoading,
    message,
    fullPage = false,
    blur = true,
    className,
    spinnerSize = 'lg',
}) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        'flex flex-col items-center justify-center z-50',
                        fullPage ? 'fixed inset-0' : 'absolute inset-0 rounded-inherit',
                        blur ? 'backdrop-blur-sm' : '',
                        'bg-surface-primary/80', // Semi-transparent background
                        className
                    )}
                >
                    <div className="flex flex-col items-center gap-4 p-4">
                        <Spinner size={spinnerSize} />
                        {message && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-medium text-text-secondary"
                            >
                                {message}
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

LoadingOverlay.displayName = 'LoadingOverlay';
