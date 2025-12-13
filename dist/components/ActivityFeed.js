import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { MessageSquare, GitCommit, GitPullRequest, AlertCircle, CheckCircle2, FileText } from 'lucide-react';
/* ========================================
   STYLES & ICONS
   ======================================== */
const typeIcons = {
    default: FileText,
    comment: MessageSquare,
    commit: GitCommit,
    pr: GitPullRequest,
    review: CheckCircle2,
    alert: AlertCircle,
    success: CheckCircle2,
    file: FileText,
};
const typeStyles = {
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
export const ActivityItem = React.forwardRef(({ actor, action, target, date, type = 'default', icon, showConnector = true, isLast = false, children, className, ...props }, ref) => {
    const Icon = icon || typeIcons[type];
    const iconStyle = typeStyles[type];
    return (_jsxs("div", { ref: ref, className: cn("flex gap-4 group", className), ...props, children: [_jsxs("div", { className: "flex flex-col items-center flex-none", children: [_jsxs("div", { className: "relative", children: [_jsxs(Avatar, { className: "w-10 h-10 border-2 border-surface-primary shadow-sm z-10", children: [_jsx(AvatarImage, { src: actor.avatarSrc, alt: actor.name }), _jsx(AvatarFallback, { children: actor.initials || actor.name.charAt(0) })] }), _jsx("div", { className: cn("absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-surface-primary flex items-center justify-center text-[10px] z-20", iconStyle), children: _jsx(Icon, { className: "w-3 h-3" }) })] }), showConnector && !isLast && (_jsx("div", { className: "w-px flex-1 bg-border-primary/40 my-2 group-hover:bg-border-primary/60 transition-colors" }))] }), _jsxs("div", { className: "flex-1 pb-10 min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between gap-4 mb-2", children: [_jsxs("div", { className: "flex items-center gap-1.5 text-sm text-text-primary min-w-0", children: [_jsx("span", { className: "font-semibold hover:underline cursor-pointer decoration-text-secondary/50 underline-offset-2 whitespace-nowrap", children: actor.name }), _jsx("span", { className: "text-text-secondary whitespace-nowrap", children: action }), target && (_jsx("span", { className: "font-medium text-text-primary hover:text-accent-blue transition-colors cursor-pointer truncate", children: target }))] }), _jsx("span", { className: "text-xs text-text-tertiary whitespace-nowrap flex-none", children: date })] }), children && (_jsx("div", { className: "mt-3 text-sm text-text-secondary bg-surface-secondary/30 rounded-xl p-4 border border-border-primary/40 leading-relaxed", children: children }))] })] }));
});
ActivityItem.displayName = 'ActivityItem';
export const ActivityFeed = React.forwardRef(({ items, children, showConnector = true, className, ...props }, ref) => {
    // If items prop is provided, render from data
    if (items) {
        return (_jsx("div", { ref: ref, className: cn("flex flex-col", className), ...props, children: items.map((item, index) => (_jsx(ActivityItem, { ...item, showConnector: showConnector, isLast: index === items.length - 1 }, index))) }));
    }
    // Otherwise render children and inject props
    const childArray = React.Children.toArray(children);
    return (_jsx("div", { ref: ref, className: cn("flex flex-col", className), ...props, children: childArray.map((child, index) => {
            if (!React.isValidElement(child))
                return null;
            return React.cloneElement(child, {
                showConnector,
                isLast: index === childArray.length - 1,
            });
        }) }));
});
ActivityFeed.displayName = 'ActivityFeed';
//# sourceMappingURL=ActivityFeed.js.map