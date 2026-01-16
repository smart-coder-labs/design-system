"use client";

import React from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { ActivityFeed, ActivityItem } from './ActivityFeed';
import { Shield, Lock, Unlock, Key, AlertTriangle, CheckCircle2, XCircle, Globe, MapPin } from 'lucide-react';
import type { ActivityType } from './ActivityFeed';

/* ========================================
   TYPES
   ======================================== */

export type SecurityEventType =
    | 'login'
    | 'logout'
    | 'password_change'
    | 'password_reset'
    | '2fa_enabled'
    | '2fa_disabled'
    | 'device_added'
    | 'device_removed'
    | 'suspicious_activity'
    | 'permission_granted'
    | 'permission_revoked';

export interface SecurityEvent {
    id: string;
    type: SecurityEventType;
    description: string;
    timestamp: string;
    location?: string;
    ipAddress?: string;
    device?: string;
    status: 'success' | 'warning' | 'error';
    user?: string;
}

export interface SecurityActivityLogProps extends React.HTMLAttributes<HTMLDivElement> {
    events: SecurityEvent[];
    onEventClick?: (event: SecurityEvent) => void;
    className?: string;
}

/* ========================================
   HELPERS
   ======================================== */

const getEventIcon = (type: SecurityEventType) => {
    switch (type) {
        case 'login':
            return Unlock;
        case 'logout':
            return Lock;
        case 'password_change':
        case 'password_reset':
            return Key;
        case '2fa_enabled':
        case '2fa_disabled':
            return Shield;
        case 'device_added':
        case 'device_removed':
            return Shield;
        case 'suspicious_activity':
            return AlertTriangle;
        case 'permission_granted':
            return CheckCircle2;
        case 'permission_revoked':
            return XCircle;
        default:
            return ActivityFeed;
    }
};

const getEventType = (type: SecurityEventType, status: string): ActivityType => {
    if (status === 'error' || type === 'suspicious_activity') return 'alert';
    if (status === 'success') return 'success';
    return 'default';
};

/* ========================================
   COMPONENT
   ======================================== */

export const SecurityActivityLog = React.forwardRef<HTMLDivElement, SecurityActivityLogProps>(
    (
        {
            events,
            onEventClick,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn("w-full", className)}
                {...props}
            >
                <ActivityFeed>
                    {events.map((event, index) => {
                        const Icon = getEventIcon(event.type);
                        const activityType = getEventType(event.type, event.status);

                        return (
                            <ActivityItem
                                key={event.id}
                                actor={{
                                    name: event.user || 'System',
                                    initials: event.user?.charAt(0).toUpperCase() || 'S',
                                }}
                                action={event.description}
                                date={event.timestamp}
                                type={activityType}
                                icon={Icon as any}
                                isLast={index === events.length - 1}
                            >
                                <div className="space-y-2 text-xs">
                                    {event.location && (
                                        <div className="flex items-center gap-2 text-text-secondary">
                                            <MapPin className="w-3 h-3" />
                                            <span>{event.location}</span>
                                        </div>
                                    )}
                                    {event.ipAddress && (
                                        <div className="flex items-center gap-2 text-text-secondary">
                                            <Globe className="w-3 h-3" />
                                            <span>{event.ipAddress}</span>
                                        </div>
                                    )}
                                    {event.device && (
                                        <div className="text-text-tertiary">
                                            Device: {event.device}
                                        </div>
                                    )}
                                </div>
                            </ActivityItem>
                        );
                    })}
                </ActivityFeed>
            </div>
        );
    }
);

SecurityActivityLog.displayName = 'SecurityActivityLog';

