"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { ChatBubbleProps } from './ChatBubble.types';

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
            children,
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
            glasphormism: isOwn
                ? 'bg-accent-blue/35 backdrop-blur-md border border-white/25 text-white dark:text-text-primary shadow-sm'
                : 'bg-surface-glass/40 backdrop-blur-md border border-border-primary/50 text-text-primary shadow-sm',
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
                {showAvatar && !isOwn && (variant === 'default' || variant === 'glasphormism') && (
                    <div className="flex-shrink-0">
                        <Avatar className="w-8 h-8" variant={variant === 'glasphormism' ? 'glasphormism' : undefined}>
                            {avatar && <AvatarImage src={avatar} alt={sender} />}
                            <AvatarFallback>
                                {sender?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                )}

                <div className={cn(
                    "flex flex-col",
                    isOwn ? "items-end" : "items-start",
                    variant === 'system' && "items-center w-full"
                )}>
                    {sender && !isOwn && (variant === 'default' || variant === 'glasphormism') && (
                        <span className="text-xs text-text-tertiary mb-1 px-1">
                            {sender}
                        </span>
                    )}

                    <div
                        className={cn(
                            "relative px-4 py-2.5 rounded-2xl max-w-[80%]",
                            variantStyles[variant],
                            isOwn && (variant === 'default' || variant === 'glasphormism') && "rounded-br-sm",
                            !isOwn && (variant === 'default' || variant === 'glasphormism') && "rounded-bl-sm",
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

                    <div className={cn(
                        "flex flex-col gap-1 w-full"
                    )}>
                        {children && (
                            <div className="w-full">
                                {children}
                            </div>
                        )}

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
                </div>
            </motion.div>
        );
    }
);

ChatBubble.displayName = 'ChatBubble';