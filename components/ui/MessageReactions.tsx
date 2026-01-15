"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Heart, ThumbsUp, ThumbsDown, Laugh, Angry } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type ReactionType = 'like' | 'love' | 'laugh' | 'angry' | 'thumbs-up' | 'thumbs-down';

export interface Reaction {
    type: ReactionType;
    count: number;
    users?: string[];
    userReacted?: boolean;
}

export interface MessageReactionsProps extends React.HTMLAttributes<HTMLDivElement> {
    reactions: Reaction[];
    onReactionClick?: (type: ReactionType) => void;
    showCount?: boolean;
    showUsers?: boolean;
    className?: string;
}

const reactionConfig: Record<ReactionType, { icon: React.ReactNode; label: string; color: string }> = {
    'like': { icon: <ThumbsUp className="w-4 h-4" />, label: 'Like', color: 'text-accent-blue' },
    'love': { icon: <Heart className="w-4 h-4" />, label: 'Love', color: 'text-status-error' },
    'laugh': { icon: <Laugh className="w-4 h-4" />, label: 'Haha', color: 'text-status-warning' },
    'angry': { icon: <Angry className="w-4 h-4" />, label: 'Angry', color: 'text-status-error' },
    'thumbs-up': { icon: <ThumbsUp className="w-4 h-4" />, label: 'Thumbs Up', color: 'text-accent-blue' },
    'thumbs-down': { icon: <ThumbsDown className="w-4 h-4" />, label: 'Thumbs Down', color: 'text-text-tertiary' },
};

/* ========================================
   COMPONENT
   ======================================== */

export const MessageReactions = React.forwardRef<HTMLDivElement, MessageReactionsProps>(
    (
        {
            reactions,
            onReactionClick,
            showCount = true,
            showUsers = false,
            className,
            ...props
        },
        ref
    ) => {
        const [hoveredReaction, setHoveredReaction] = useState<ReactionType | null>(null);

        if (reactions.length === 0) return null;

        return (
            <div
                ref={ref}
                className={cn("flex flex-wrap gap-1.5 mt-2", className)}
                {...props}
            >
                {reactions.map((reaction) => {
                    const config = reactionConfig[reaction.type];
                    const isActive = reaction.userReacted;

                    return (
                        <motion.button
                            key={reaction.type}
                            onClick={() => onReactionClick?.(reaction.type)}
                            onMouseEnter={() => setHoveredReaction(reaction.type)}
                            onMouseLeave={() => setHoveredReaction(null)}
                            className={cn(
                                "flex items-center gap-1.5 px-2 py-1 rounded-full",
                                "bg-surface-secondary border border-border-primary",
                                "hover:bg-surface-tertiary transition-colors",
                                "text-xs font-medium",
                                isActive && "bg-accent-blue/10 border-accent-blue/30",
                                config.color
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={cn("flex-shrink-0", config.color)}>
                                {config.icon}
                            </span>
                            {showCount && reaction.count > 0 && (
                                <span className={cn(
                                    "text-text-secondary",
                                    isActive && "text-accent-blue font-semibold"
                                )}>
                                    {reaction.count}
                                </span>
                            )}

                            {/* Tooltip with users */}
                            {showUsers && hoveredReaction === reaction.type && reaction.users && reaction.users.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-full mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50"
                                >
                                    {reaction.users.slice(0, 3).join(', ')}
                                    {reaction.users.length > 3 && ` +${reaction.users.length - 3} more`}
                                </motion.div>
                            )}
                        </motion.button>
                    );
                })}
            </div>
        );
    }
);

MessageReactions.displayName = 'MessageReactions';

/* ========================================
   REACTION PICKER
   ======================================== */

export interface ReactionPickerProps {
    onReactionSelect: (type: ReactionType) => void;
    className?: string;
}

export const ReactionPicker: React.FC<ReactionPickerProps> = ({
    onReactionSelect,
    className,
}) => {
    const reactions: ReactionType[] = ['like', 'love', 'laugh', 'thumbs-up', 'thumbs-down', 'angry'];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={cn(
                "flex items-center gap-1 p-1 bg-surface-primary border border-border-primary rounded-full shadow-lg",
                className
            )}
        >
            {reactions.map((type) => {
                const config = reactionConfig[type];
                return (
                    <motion.button
                        key={type}
                        onClick={() => onReactionSelect(type)}
                        className={cn(
                            "p-1.5 rounded-full hover:bg-surface-secondary transition-colors",
                            config.color
                        )}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title={config.label}
                    >
                        {config.icon}
                    </motion.button>
                );
            })}
        </motion.div>
    );
};

ReactionPicker.displayName = 'ReactionPicker';

