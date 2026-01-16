import React from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { Check, Circle, Clock, AlertCircle, XCircle } from 'lucide-react';

export type TimelineLayout = 'default' | 'alternate';
export type TimelineStatus = 'default' | 'success' | 'warning' | 'error' | 'info' | 'loading';

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    layout?: TimelineLayout;
    children?: React.ReactNode;
}

export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    date?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: TimelineStatus;
    isActive?: boolean;
    isLast?: boolean;
    position?: 'left' | 'right'; // For alternate layout
    layout?: TimelineLayout;
}

const statusStyles = {
    default: {
        dot: 'bg-surface-primary border-border-primary text-text-tertiary',
        line: 'bg-border-primary/60',
    },
    success: {
        dot: 'bg-status-success/10 border-status-success text-status-success',
        line: 'bg-status-success',
    },
    warning: {
        dot: 'bg-status-warning/10 border-status-warning text-status-warning',
        line: 'bg-status-warning',
    },
    error: {
        dot: 'bg-status-error/10 border-status-error text-status-error',
        line: 'bg-status-error',
    },
    info: {
        dot: 'bg-accent-blue/10 border-accent-blue text-accent-blue',
        line: 'bg-accent-blue',
    },
    loading: {
        dot: 'bg-surface-primary border-accent-purple text-accent-purple',
        line: 'bg-border-primary/60',
    },
};

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
    (
        {
            className,
            date,
            title,
            description,
            icon,
            status = 'default',
            isActive,
            isLast,
            position = 'right',
            layout = 'default',
            children,
            ...props
        },
        ref
    ) => {
        const styles = statusStyles[status];
        
        // Default icons based on status if not provided
        const StatusIcon = React.useMemo(() => {
            if (icon) return null;
            switch (status) {
                case 'success': return Check;
                case 'error': return XCircle;
                case 'warning': return AlertCircle;
                case 'loading': return Clock;
                default: return Circle;
            }
        }, [status, icon]);

        const isAlternate = layout === 'alternate';
        const isLeft = isAlternate && position === 'left';

        return (
            <div
                ref={ref}
                className={cn(
                    'relative flex gap-6',
                    isAlternate ? (isLeft ? 'flex-row-reverse' : 'flex-row') : 'flex-row',
                    isAlternate && 'w-full',
                    className
                )}
                {...props}
            >
                {/* Date/Time Column for Default Layout */}
                {!isAlternate && (
                    <div className="flex-none w-24 pt-1 text-right">
                        {date && (
                            <span className="text-xs font-medium text-text-tertiary">
                                {date}
                            </span>
                        )}
                    </div>
                )}

                {/* Alternate Layout Spacer for opposite side */}
                {isAlternate && (
                    <div className="flex-1 pt-1">
                        <div className={cn("flex flex-col", isLeft ? "items-start text-left" : "items-end text-right")}>
                             {date && (
                                <span className="text-xs font-medium text-text-tertiary mb-1">
                                    {date}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Timeline Line & Dot */}
                <div className="relative flex flex-col items-center flex-none">
                    {/* Line */}
                    {!isLast && (
                        <div
                            className={cn(
                                'absolute top-8 bottom-[-24px] w-px transition-colors duration-300',
                                isActive ? styles.line : 'bg-border-primary/40'
                            )}
                        />
                    )}
                    
                    {/* Dot/Icon */}
                    <div
                        className={cn(
                            'relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300',
                            styles.dot,
                            isActive && 'ring-4 ring-surface-primary shadow-sm scale-110',
                            status === 'loading' && 'animate-pulse'
                        )}
                    >
                        {icon ? (
                            <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
                        ) : (
                            StatusIcon && <StatusIcon className={cn("w-4 h-4", status === 'default' && "w-2.5 h-2.5 fill-current")} />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className={cn(
                    "flex-1 pt-1 pb-8",
                    isAlternate && (isLeft ? "text-right" : "text-left")
                )}>
                    <div className={cn(
                        "flex flex-col gap-1",
                        isAlternate && isLeft && "items-end",
                        isAlternate && !isLeft && "items-start"
                    )}>
                        {title && (
                            <h3 className={cn(
                                "text-base font-semibold text-text-primary",
                                isActive && "text-accent-blue"
                            )}>
                                {title}
                            </h3>
                        )}
                        {description && (
                            <div className="text-sm text-text-secondary leading-relaxed">
                                {description}
                            </div>
                        )}
                        {children && (
                            <div className="mt-3 w-full">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

TimelineItem.displayName = 'TimelineItem';

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
    ({ className, layout = 'default', children, ...props }, ref) => {
        const items = React.Children.toArray(children);

        return (
            <div
                ref={ref}
                className={cn(
                    'relative',
                    layout === 'alternate' && 'w-full max-w-3xl mx-auto',
                    className
                )}
                {...props}
            >
                {items.map((child, index) => {
                    if (!React.isValidElement(child)) return null;
                    
                    return React.cloneElement(child as React.ReactElement<any>, {
                        isLast: index === items.length - 1,
                        layout,
                        position: index % 2 === 0 ? 'right' : 'left',
                    });
                })}
            </div>
        );
    }
);

Timeline.displayName = 'Timeline';
