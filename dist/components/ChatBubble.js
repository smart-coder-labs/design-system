"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
/* ========================================
   COMPONENT
   ======================================== */
export const ChatBubble = React.forwardRef(({ message, sender, avatar, timestamp, isOwn = false, variant = 'default', status, showAvatar = true, showTimestamp = true, className, children, ...props }, ref) => {
    const statusIcons = {
        sending: '⏳',
        sent: '✓',
        delivered: '✓✓',
        read: '✓✓',
    };
    const variantStyles = {
        default: isOwn
            ? 'bg-accent-blue text-white'
            : 'bg-surface-secondary text-text-primary',
        system: 'bg-surface-tertiary text-text-secondary text-center',
        error: 'bg-status-error/10 text-status-error border border-status-error/20',
    };
    return (_jsxs(motion.div, { ref: ref, className: cn("flex gap-2 mb-4", isOwn && "flex-row-reverse", className), initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2 }, ...props, children: [showAvatar && !isOwn && variant === 'default' && (_jsx("div", { className: "flex-shrink-0", children: _jsxs(Avatar, { className: "w-8 h-8", children: [avatar && _jsx(AvatarImage, { src: avatar, alt: sender }), _jsx(AvatarFallback, { children: sender?.charAt(0).toUpperCase() || 'U' })] }) })), _jsxs("div", { className: cn("flex flex-col", isOwn ? "items-end" : "items-start", variant === 'system' && "items-center w-full"), children: [sender && !isOwn && variant === 'default' && (_jsx("span", { className: "text-xs text-text-tertiary mb-1 px-1", children: sender })), _jsx("div", { className: cn("relative px-4 py-2.5 rounded-2xl max-w-[80%]", variantStyles[variant], isOwn && variant === 'default' && "rounded-br-sm", !isOwn && variant === 'default' && "rounded-bl-sm", variant === 'system' && "max-w-full"), children: _jsx("p", { className: cn("text-sm leading-relaxed whitespace-pre-wrap break-words", variant === 'system' && "text-center"), children: message }) }), _jsxs("div", { className: cn("flex flex-col gap-1 w-full"), children: [children && (_jsx("div", { className: "w-full", children: children })), (showTimestamp || status) && (_jsxs("div", { className: cn("flex items-center gap-1.5 mt-1 px-1", isOwn ? "flex-row-reverse" : "flex-row"), children: [timestamp && showTimestamp && (_jsx("span", { className: "text-xs text-text-tertiary", children: timestamp })), status && isOwn && (_jsx("span", { className: "text-xs text-text-tertiary", children: statusIcons[status] }))] }))] })] })] }));
});
ChatBubble.displayName = 'ChatBubble';
//# sourceMappingURL=ChatBubble.js.map