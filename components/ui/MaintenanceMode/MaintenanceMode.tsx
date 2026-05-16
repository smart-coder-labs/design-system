import React from 'react';
import { motion } from 'framer-motion';

import { Construction, Clock, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export interface MaintenanceModeProps {
    /**
     * Title of the maintenance page
     * @default "We'll be back soon"
     */
    title?: string;
    /**
     * Description text explaining the maintenance
     * @default "We're currently performing some scheduled maintenance. We should be back shortly."
     */
    description?: string;
    /**
     * Estimated time when the service will be back
     */
    estimatedReturnTime?: string;
    /**
     * Whether to show a contact support button
     * @default true
     */
    showContactSupport?: boolean;
    /**
     * Custom action button or link
     */
    customAction?: React.ReactNode;
    /**
     * Full page mode centers the content in the viewport
     * @default true
     */
    fullPage?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Callback for contact support button
     */
    onContactSupport?: () => void;
}

export const MaintenanceMode: React.FC<MaintenanceModeProps> = ({
    title = "We'll be back soon",
    description = "We're currently performing some scheduled maintenance. We should be back shortly.",
    estimatedReturnTime,
    showContactSupport = true,
    customAction,
    fullPage = true,
    className = '',
    onContactSupport,
}) => {
    const containerClasses = `
    flex flex-col items-center justify-center text-center p-8
    ${fullPage ? 'min-h-screen w-full bg-background-secondary' : 'w-full h-full bg-surface-primary rounded-2xl'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <div className={containerClasses}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md mx-auto"
            >
                {/* Icon Container */}
                <div className="relative mb-8 inline-flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 bg-accent-blue/10 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="relative bg-surface-primary p-6 rounded-full shadow-lg border border-border-primary">
                        <Construction className="w-12 h-12 text-accent-blue" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content */}
                <h1 className="text-3xl font-bold text-text-primary mb-4 tracking-tight">
                    {title}
                </h1>

                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Estimated Time */}
                {estimatedReturnTime && (
                    <div className="flex items-center justify-center gap-2 text-text-tertiary mb-8 bg-surface-tertiary/50 py-2 px-4 rounded-full inline-flex">
                        <Clock size={16} />
                        <span className="text-sm font-medium">Expected return: {estimatedReturnTime}</span>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {customAction}

                    {showContactSupport && !customAction && (
                        <Button
                            variant="outline"
                            onClick={onContactSupport}
                            rightIcon={<ArrowRight size={16} />}
                        >
                            Contact Support
                        </Button>
                    )}
                </div>

                {/* Footer info */}
                <div className="mt-12 text-sm text-text-quaternary">
                    <p>System Status: <span className="text-status-warning font-medium">Maintenance</span></p>
                </div>
            </motion.div>
        </div>
    );
};

MaintenanceMode.displayName = 'MaintenanceMode';
