"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { ActivityFeed, ActivityItem } from './ActivityFeed';
import { Shield, Lock, Unlock, Key, AlertTriangle, CheckCircle2, XCircle, Globe, MapPin } from 'lucide-react';
/* ========================================
   HELPERS
   ======================================== */
const getEventIcon = (type) => {
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
const getEventType = (type, status) => {
    if (status === 'error' || type === 'suspicious_activity')
        return 'alert';
    if (status === 'success')
        return 'success';
    return 'default';
};
/* ========================================
   COMPONENT
   ======================================== */
export const SecurityActivityLog = React.forwardRef(({ events, onEventClick, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("w-full", className), ...props, children: _jsx(ActivityFeed, { children: events.map((event, index) => {
                const Icon = getEventIcon(event.type);
                const activityType = getEventType(event.type, event.status);
                return (_jsx(ActivityItem, { actor: {
                        name: event.user || 'System',
                        initials: event.user?.charAt(0).toUpperCase() || 'S',
                    }, action: event.description, date: event.timestamp, type: activityType, icon: Icon, isLast: index === events.length - 1, children: _jsxs("div", { className: "space-y-2 text-xs", children: [event.location && (_jsxs("div", { className: "flex items-center gap-2 text-text-secondary", children: [_jsx(MapPin, { className: "w-3 h-3" }), _jsx("span", { children: event.location })] })), event.ipAddress && (_jsxs("div", { className: "flex items-center gap-2 text-text-secondary", children: [_jsx(Globe, { className: "w-3 h-3" }), _jsx("span", { children: event.ipAddress })] })), event.device && (_jsxs("div", { className: "text-text-tertiary", children: ["Device: ", event.device] }))] }) }, event.id));
            }) }) }));
});
SecurityActivityLog.displayName = 'SecurityActivityLog';
//# sourceMappingURL=SecurityActivityLog.js.map