import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { Info, AlertCircle, CheckCircle, AlertTriangle, X } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type CalloutVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CalloutVariant;
    title?: string;
    icon?: React.ElementType;
    dismissible?: boolean;
    onDismiss?: () => void;
}

/* ========================================
   CALLOUT COMPONENT
   ======================================== */

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
    (
        {
            variant = 'info',
            title,
            icon,
            dismissible = false,
            onDismiss,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const variants = {
            info: {
                container: "bg-status-info/10 border-status-info/20 text-status-info",
                icon: Info,
            },
            success: {
                container: "bg-status-success/10 border-status-success/20 text-status-success",
                icon: CheckCircle,
            },
            warning: {
                container: "bg-status-warning/10 border-status-warning/20 text-status-warning",
                icon: AlertTriangle,
            },
            error: {
                container: "bg-status-error/10 border-status-error/20 text-status-error",
                icon: AlertCircle,
            },
            neutral: {
                container: "bg-surface-secondary border-border-primary text-text-primary",
                icon: Info,
            },
        };

        const Icon = icon || variants[variant].icon;

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex gap-3 p-4 rounded-xl border",
                    variants[variant].container,
                    className
                )}
                {...props}
            >
                <div className="flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className="font-semibold mb-1">
                            {title}
                        </h4>
                    )}
                    <div className={cn(
                        "text-sm",
                        variant === 'neutral' ? "text-text-secondary" : ""
                    )}>
                        {children}
                    </div>
                </div>

                {dismissible && onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="flex-shrink-0 p-1 rounded-lg hover:bg-black/10 transition-colors focus:outline-none"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        );
    }
);

Callout.displayName = 'Callout';
