import React, { useState, forwardRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type PanelVariant = 'default' | 'elevated' | 'outlined' | 'glass';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: PanelVariant;
    title?: string;
    subtitle?: string;
    headerActions?: React.ReactNode;
    footer?: React.ReactNode;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

/* ========================================
   PANEL COMPONENT
   ======================================== */

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
    (
        {
            variant = 'default',
            title,
            subtitle,
            headerActions,
            footer,
            collapsible = false,
            defaultCollapsed = false,
            padding = 'md',
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

        const variants = {
            default: "bg-surface-primary border border-border-primary",
            elevated: "bg-surface-elevated shadow-md",
            outlined: "bg-transparent border-2 border-border-primary",
            glass: "bg-surface-glass backdrop-blur-md border border-border-primary/50",
        };

        const paddings = {
            none: "",
            sm: "p-3",
            md: "p-4",
            lg: "p-6",
        };

        const hasHeader = title || subtitle || headerActions || collapsible;

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl overflow-hidden transition-all",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {/* Header */}
                {hasHeader && (
                    <div className={cn(
                        "flex items-center justify-between border-b border-border-primary",
                        padding === 'none' ? 'p-4' : paddings[padding]
                    )}>
                        <div className="flex-1">
                            {title && (
                                <h3 className="text-lg font-semibold text-text-primary">
                                    {title}
                                </h3>
                            )}
                            {subtitle && (
                                <p className="text-sm text-text-secondary mt-0.5">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            {headerActions}
                            {collapsible && (
                                <button
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    className="p-1 rounded-lg hover:bg-surface-secondary transition-colors focus:outline-none"
                                    aria-label={isCollapsed ? 'Expand' : 'Collapse'}
                                >
                                    <motion.div
                                        animate={{ rotate: isCollapsed ? -90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-text-tertiary" />
                                    </motion.div>
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Content */}
                <AnimatePresence initial={false}>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={cn(paddings[padding])}>
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer */}
                {footer && !isCollapsed && (
                    <div className={cn(
                        "border-t border-border-primary",
                        padding === 'none' ? 'p-4' : paddings[padding]
                    )}>
                        {footer}
                    </div>
                )}
            </div>
        );
    }
);

Panel.displayName = 'Panel';
