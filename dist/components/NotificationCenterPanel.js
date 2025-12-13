"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { X, Bell, CheckCircle2, AlertCircle, Info, XCircle } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';
/* ========================================
   HELPERS
   ======================================== */
const getTypeIcon = (type) => {
    switch (type) {
        case 'success':
            return _jsx(CheckCircle2, { className: "w-5 h-5 text-status-success" });
        case 'warning':
            return _jsx(AlertCircle, { className: "w-5 h-5 text-status-warning" });
        case 'error':
            return _jsx(XCircle, { className: "w-5 h-5 text-status-error" });
        default:
            return _jsx(Info, { className: "w-5 h-5 text-accent-blue" });
    }
};
const getTypeStyles = (type) => {
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
export const NotificationCenterPanel = React.forwardRef(({ notifications, onNotificationClick, onMarkAllRead, onClearAll, onDismiss, className, ...props }, ref) => {
    const unreadCount = notifications.filter(n => !n.read).length;
    return (_jsxs("div", { ref: ref, className: cn("w-full max-w-md bg-surface-primary border border-border-primary rounded-2xl shadow-xl overflow-hidden", className), ...props, children: [_jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border-primary", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Bell, { className: "w-5 h-5 text-text-primary" }), _jsx("h2", { className: "text-lg font-semibold text-text-primary", children: "Notifications" }), unreadCount > 0 && (_jsx(Badge, { variant: "error", size: "sm", children: unreadCount }))] }), _jsxs("div", { className: "flex items-center gap-2", children: [onMarkAllRead && unreadCount > 0 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: onMarkAllRead, children: "Mark all read" })), onClearAll && notifications.length > 0 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: onClearAll, children: "Clear all" }))] })] }), _jsx("div", { className: "max-h-[600px] overflow-y-auto", children: notifications.length === 0 ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-12 px-6 text-center", children: [_jsx(Bell, { className: "w-12 h-12 text-text-tertiary mb-3" }), _jsx("p", { className: "text-sm font-medium text-text-primary mb-1", children: "No notifications" }), _jsx("p", { className: "text-xs text-text-secondary", children: "You're all caught up!" })] })) : (_jsx("div", { className: "divide-y divide-border-primary", children: notifications.map((notification, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.05 }, className: cn("relative px-6 py-4 transition-colors", !notification.read && "bg-accent-blue/5", "hover:bg-surface-secondary/50"), onClick: () => onNotificationClick?.(notification), children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "flex-shrink-0 mt-0.5", children: notification.icon || getTypeIcon(notification.type) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", children: [_jsx("h3", { className: cn("text-sm font-semibold", notification.read ? "text-text-secondary" : "text-text-primary"), children: notification.title }), !notification.read && (_jsx("div", { className: "w-2 h-2 bg-accent-blue rounded-full flex-shrink-0 mt-1.5" }))] }), notification.message && (_jsx("p", { className: "text-xs text-text-secondary mb-2 line-clamp-2", children: notification.message })), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs text-text-tertiary", children: notification.timestamp }), notification.action && (_jsx(Button, { variant: "ghost", size: "sm", onClick: (e) => {
                                                        e.stopPropagation();
                                                        notification.action?.onClick();
                                                    }, children: notification.action.label }))] })] }), onDismiss && (_jsx(Button, { variant: "ghost", size: "sm", onClick: (e) => {
                                        e.stopPropagation();
                                        onDismiss(notification);
                                    }, className: "flex-shrink-0", children: _jsx(X, { className: "w-4 h-4" }) }))] }) }, notification.id))) })) })] }));
});
NotificationCenterPanel.displayName = 'NotificationCenterPanel';
//# sourceMappingURL=NotificationCenterPanel.js.map