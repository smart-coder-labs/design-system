"use client";

import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

/* ========================================
   TYPES
   ======================================== */

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    message: string;
    sender?: string;
    avatar?: string;
    timestamp?: string;
    isOwn?: boolean;
    variant?: 'default' | 'system' | 'error';
    status?: 'sending' | 'sent' | 'delivered' | 'read';
    showAvatar?: boolean;
    showTimestamp?: boolean;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
    (
        {
            message,
            sender,
            avatar,
            timestamp,
            isOwn = false,
            variant = 'default',
            status,
            showAvatar = true,
            showTimestamp = true,
            className,
            ...props
        },
        ref
    ) => {
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

        return (
            <motion.div
                ref={ref}
                className={cn(
                    "flex gap-2 mb-4",
                    isOwn && "flex-row-reverse",
                    className
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {/* Avatar */}
                {showAvatar && !isOwn && variant === 'default' && (
                    <div className="flex-shrink-0">
                        <Avatar className="w-8 h-8">
                            {avatar && <AvatarImage src={avatar} alt={sender} />}
                            <AvatarFallback>
                                {sender?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                )}

                {/* Message Container */}
                <div className={cn(
                    "flex flex-col",
                    isOwn ? "items-end" : "items-start",
                    variant === 'system' && "items-center w-full"
                )}>
                    {/* Sender Name */}
                    {sender && !isOwn && variant === 'default' && (
                        <span className="text-xs text-text-tertiary mb-1 px-1">
                            {sender}
                        </span>
                    )}

                    {/* Bubble */}
                    <div
                        className={cn(
                            "relative px-4 py-2.5 rounded-2xl max-w-[80%]",
                            variantStyles[variant],
                            isOwn && variant === 'default' && "rounded-br-sm",
                            !isOwn && variant === 'default' && "rounded-bl-sm",
                            variant === 'system' && "max-w-full"
                        )}
                    >
                        <p className={cn(
                            "text-sm leading-relaxed whitespace-pre-wrap break-words",
                            variant === 'system' && "text-center"
                        )}>
                            {message}
                        </p>
                    </div>

                    {/* Timestamp & Status */}
                    {(showTimestamp || status) && (
                        <div className={cn(
                            "flex items-center gap-1.5 mt-1 px-1",
                            isOwn ? "flex-row-reverse" : "flex-row"
                        )}>
                            {timestamp && showTimestamp && (
                                <span className="text-xs text-text-tertiary">
                                    {timestamp}
                                </span>
                            )}
                            {status && isOwn && (
                                <span className="text-xs text-text-tertiary">
                                    {statusIcons[status]}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        );
    }
);

ChatBubble.displayName = 'ChatBubble';

