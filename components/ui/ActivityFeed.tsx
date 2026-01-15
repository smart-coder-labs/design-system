import React from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { motion } from 'framer-motion';
import { 
    MessageSquare, 
    GitCommit, 
    GitPullRequest, 
    AlertCircle, 
    CheckCircle2, 
    FileText,
    MoreHorizontal,
    type LucideIcon
} from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type ActivityType = 'default' | 'comment' | 'commit' | 'pr' | 'review' | 'alert' | 'success' | 'file';

export interface ActivityActor {
    name: string;
    avatarSrc?: string;
    initials?: string;
}

export interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
    actor: ActivityActor;
    action: React.ReactNode;
    target?: React.ReactNode;
    date: React.ReactNode;
    type?: ActivityType;
    icon?: LucideIcon;
    showConnector?: boolean;
    isLast?: boolean;
}

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: ActivityItemProps[]; // Data driven
    children?: React.ReactNode; // Composition driven
    showConnector?: boolean;
}

/* ========================================
   STYLES & ICONS
   ======================================== */

const typeIcons: Record<ActivityType, LucideIcon> = {
    default: FileText,
    comment: MessageSquare,
    commit: GitCommit,
    pr: GitPullRequest,
    review: CheckCircle2,
    alert: AlertCircle,
    success: CheckCircle2,
    file: FileText,
};

const typeStyles: Record<ActivityType, string> = {
    default: 'text-text-tertiary bg-surface-secondary',
    comment: 'text-accent-blue bg-accent-blue/10',
    commit: 'text-text-secondary bg-surface-secondary',
    pr: 'text-accent-purple bg-accent-purple/10',
    review: 'text-status-success bg-status-success/10',
    alert: 'text-status-error bg-status-error/10',
    success: 'text-status-success bg-status-success/10',
    file: 'text-accent-blue bg-accent-blue/10',
};

/* ========================================
   COMPONENTS
   ======================================== */

export const ActivityItem = React.forwardRef<HTMLDivElement, ActivityItemProps>(
    (
        {
            actor,
            action,
            target,
            date,
            type = 'default',
            icon,
            showConnector = true,
            isLast = false,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const Icon = icon || typeIcons[type];
        const iconStyle = typeStyles[type];

        return (
            <div ref={ref} className={cn("flex gap-4 group", className)} {...props}>
                {/* Left Column: Avatar & Connector */}
                <div className="flex flex-col items-center flex-none">
                    <div className="relative">
                        <Avatar className="w-10 h-10 border-2 border-surface-primary shadow-sm z-10">
                            <AvatarImage src={actor.avatarSrc} alt={actor.name} />
                            <AvatarFallback>{actor.initials || actor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        {/* Type Icon Badge (absolute positioned on avatar) */}
                        <div className={cn(
                            "absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-surface-primary flex items-center justify-center text-[10px] z-20",
                            iconStyle
                        )}>
                            <Icon className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Connector Line */}
                    {showConnector && !isLast && (
                        <div className="w-px flex-1 bg-border-primary/40 my-2 group-hover:bg-border-primary/60 transition-colors" />
                    )}
                </div>

                {/* Right Column: Content */}
                <div className="flex-1 pb-10 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-1.5 text-sm text-text-primary min-w-0">
                            <span className="font-semibold hover:underline cursor-pointer decoration-text-secondary/50 underline-offset-2 whitespace-nowrap">
                                {actor.name}
                            </span>
                            <span className="text-text-secondary whitespace-nowrap">{action}</span>
                            {target && (
                                <span className="font-medium text-text-primary hover:text-accent-blue transition-colors cursor-pointer truncate">
                                    {target}
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-text-tertiary whitespace-nowrap flex-none">
                            {date}
                        </span>
                    </div>

                    {children && (
                        <div className="mt-3 text-sm text-text-secondary bg-surface-secondary/30 rounded-xl p-4 border border-border-primary/40 leading-relaxed">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

ActivityItem.displayName = 'ActivityItem';

export const ActivityFeed = React.forwardRef<HTMLDivElement, ActivityFeedProps>(
    ({ items, children, showConnector = true, className, ...props }, ref) => {
        // If items prop is provided, render from data
        if (items) {
            return (
                <div ref={ref} className={cn("flex flex-col", className)} {...props}>
                    {items.map((item, index) => (
                        <ActivityItem
                            key={index}
                            {...item}
                            showConnector={showConnector}
                            isLast={index === items.length - 1}
                        />
                    ))}
                </div>
            );
        }

        // Otherwise render children and inject props
        const childArray = React.Children.toArray(children);
        return (
            <div ref={ref} className={cn("flex flex-col", className)} {...props}>
                {childArray.map((child, index) => {
                    if (!React.isValidElement(child)) return null;
                    return React.cloneElement(child as React.ReactElement<any>, {
                        showConnector,
                        isLast: index === childArray.length - 1,
                    });
                })}
            </div>
        );
    }
);

ActivityFeed.displayName = 'ActivityFeed';
