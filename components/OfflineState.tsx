import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export interface OfflineStateProps {
    /**
     * Title of the offline state
     * @default "No Internet Connection"
     */
    title?: string;
    /**
     * Description text
     * @default "Please check your network settings and try again."
     */
    description?: string;
    /**
     * Callback function when the retry button is clicked
     */
    onRetry?: () => void;
    /**
     * Whether the retry action is currently in progress
     */
    isRetrying?: boolean;
    /**
     * Whether to display as a full page overlay
     * @default false
     */
    fullPage?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom icon to display
     */
    icon?: React.ReactNode;
}

export const OfflineState: React.FC<OfflineStateProps> = ({
    title = "No Internet Connection",
    description = "Please check your network settings and try again.",
    onRetry,
    isRetrying = false,
    fullPage = false,
    className = '',
    icon,
}) => {
    const containerClasses = `
    flex flex-col items-center justify-center text-center p-8
    ${fullPage ? 'fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-sm' : 'w-full h-full bg-surface-primary rounded-2xl'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <div className={containerClasses}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md mx-auto flex flex-col items-center"
            >
                {/* Icon */}
                <div className="mb-6 relative">
                    <motion.div
                        className="absolute inset-0 bg-status-error/10 rounded-full blur-xl"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="relative bg-surface-secondary p-5 rounded-full">
                        {icon || <WifiOff className="w-10 h-10 text-text-secondary" strokeWidth={1.5} />}
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {title}
                </h3>

                <p className="text-text-secondary mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Action */}
                {onRetry && (
                    <Button
                        variant="primary"
                        onClick={onRetry}
                        loading={isRetrying}
                        leftIcon={!isRetrying ? <RefreshCw size={16} /> : undefined}
                    >
                        Try Again
                    </Button>
                )}
            </motion.div>
        </div>
    );
};

OfflineState.displayName = 'OfflineState';
