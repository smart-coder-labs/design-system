"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Settings, CheckCircle2, AlertCircle, Info, XCircle } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

/* ========================================
   TYPES
   ======================================== */

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
    id: string;
    title: string;
    message?: string;
    type?: NotificationType;
    timestamp: string;
    read?: boolean;
    action?: {
        label: string;
        onClick: () => void;
    };
    icon?: React.ReactNode;
}

export interface NotificationCenterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    notifications: Notification[];
    onNotificationClick?: (notification: Notification) => void;
    onMarkAllRead?: () => void;
    onClearAll?: () => void;
    onDismiss?: (notification: Notification) => void;
    className?: string;
}

/* ========================================
   HELPERS
   ======================================== */

const getTypeIcon = (type?: NotificationType) => {
    switch (type) {
        case 'success':
            return <CheckCircle2 className="w-5 h-5 text-status-success" />;
        case 'warning':
            return <AlertCircle className="w-5 h-5 text-status-warning" />;
        case 'error':
            return <XCircle className="w-5 h-5 text-status-error" />;
        default:
            return <Info className="w-5 h-5 text-accent-blue" />;
    }
};

const getTypeStyles = (type?: NotificationType) => {
    switch (type) {
        case 'success':
            return 'border-status-success/20 bg-status-success/5';
        case 'warning':
            return 'border-status-warning/20 bg-status-warning/5';
        case 'error':
            return 'border-status-error/20 bg-status-error/5';
        default:
            return 'border-border-primary bg-surface-primary';
    }
};

/* ========================================
   COMPONENT
   ======================================== */

export const NotificationCenterPanel = React.forwardRef<HTMLDivElement, NotificationCenterPanelProps>(
    (
        {
            notifications,
            onNotificationClick,
            onMarkAllRead,
            onClearAll,
            onDismiss,
            className,
            ...props
        },
        ref
    ) => {
        const unreadCount = notifications.filter(n => !n.read).length;

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full max-w-md bg-surface-primary border border-border-primary rounded-2xl shadow-xl overflow-hidden",
                    className
                )}
                {...props}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-primary">
                    <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-text-primary" />
                        <h2 className="text-lg font-semibold text-text-primary">Notifications</h2>
                        {unreadCount > 0 && (
                            <Badge variant="error" size="sm">{unreadCount}</Badge>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {onMarkAllRead && unreadCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onMarkAllRead}
                            >
                                Mark all read
                            </Button>
                        )}
                        {onClearAll && notifications.length > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onClearAll}
                            >
                                Clear all
                            </Button>
                        )}
                    </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-[600px] overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                            <Bell className="w-12 h-12 text-text-tertiary mb-3" />
                            <p className="text-sm font-medium text-text-primary mb-1">No notifications</p>
                            <p className="text-xs text-text-secondary">
                                You're all caught up!
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y divide-border-primary">
                            {notifications.map((notification, index) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={cn(
                                        "relative px-6 py-4 transition-colors",
                                        !notification.read && "bg-accent-blue/5",
                                        "hover:bg-surface-secondary/50"
                                    )}
                                    onClick={() => onNotificationClick?.(notification)}
                                >
                                    <div className="flex items-start gap-3">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 mt-0.5">
                                            {notification.icon || getTypeIcon(notification.type)}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <h3 className={cn(
                                                    "text-sm font-semibold",
                                                    notification.read ? "text-text-secondary" : "text-text-primary"
                                                )}>
                                                    {notification.title}
                                                </h3>
                                                {!notification.read && (
                                                    <div className="w-2 h-2 bg-accent-blue rounded-full flex-shrink-0 mt-1.5" />
                                                )}
                                            </div>
                                            {notification.message && (
                                                <p className="text-xs text-text-secondary mb-2 line-clamp-2">
                                                    {notification.message}
                                                </p>
                                            )}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-text-tertiary">
                                                    {notification.timestamp}
                                                </span>
                                                {notification.action && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            notification.action?.onClick();
                                                        }}
                                                    >
                                                        {notification.action.label}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Dismiss */}
                                        {onDismiss && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDismiss(notification);
                                                }}
                                                className="flex-shrink-0"
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

NotificationCenterPanel.displayName = 'NotificationCenterPanel';

