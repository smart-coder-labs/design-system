"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Repeat, Share, Globe, Lock, User, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export interface SocialPaymentInfo {
    id: string;
    senderName: string;
    senderAvatar?: string;
    receiverName: string;
    receiverAvatar?: string;
    amount?: number; // Might be hidden if private
    currency?: string;
    note: string;
    emoji?: string;
    gifUrl?: string; // Optional embedded media
    timestamp: Date;
    likes: number;
    comments: number;
    privacy: 'public' | 'friends' | 'private';
}

export interface SocialPaymentFeedProps {
    payments: SocialPaymentInfo[];
    className?: string;
    onLike?: (id: string) => void;
    onComment?: (id: string) => void;
}

export const SocialPaymentFeed: React.FC<SocialPaymentFeedProps> = ({
    payments,
    className,
    onLike,
    onComment,
}) => {
    // Basic local state to optimistically update likes
    const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

    const handleLike = (id: string) => {
        setLikedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
        onLike?.(id);
    };

    const formatTimeAgo = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        if (seconds < 60) return `${seconds}s`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h`;
        const days = Math.floor(hours / 24);
        if (days < 7) return `${days}d`;
        return date.toLocaleDateString();
    };

    const getPrivacyIcon = (privacy: SocialPaymentInfo['privacy']) => {
        switch (privacy) {
            case 'public': return <Globe className="w-3 h-3" />;
            case 'friends': return <User className="w-3 h-3" />;
            case 'private': return <Lock className="w-3 h-3" />;
        }
    };

    return (
        <div className={cn("w-full max-w-lg space-y-4", className)}>
            <AnimatePresence>
                {payments.map((payment) => {
                    const isLiked = likedIds.has(payment.id);
                    const likeCount = payment.likes + (isLiked ? 1 : 0);

                    return (
                        <motion.div
                            key={payment.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-surface-primary rounded-[2rem] p-5 shadow-sm border border-border-primary"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start gap-3 mb-3">
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="relative flex">
                                        <Avatar className="w-10 h-10 ring-2 ring-surface-primary z-10">
                                            <AvatarImage src={payment.senderAvatar} alt={payment.senderName} />
                                            <AvatarFallback>{payment.senderName[0]}</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="w-10 h-10 ring-2 ring-surface-primary -ml-4 z-0 opacity-80">
                                            <AvatarImage src={payment.receiverAvatar} alt={payment.receiverName} />
                                            <AvatarFallback>{payment.receiverName[0]}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-text-primary flex items-center gap-1.5 flex-wrap">
                                            <span className="font-bold">{payment.senderName}</span>
                                            <span className="text-text-tertiary font-normal">paid</span>
                                            <span className="font-bold">{payment.receiverName}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5 text-xs text-text-tertiary">
                                            <span className="font-semibold text-text-tertiary dark:text-text-tertiary">
                                                {formatTimeAgo(payment.timestamp)}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-border-primary" />
                                            {getPrivacyIcon(payment.privacy)}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 flex-shrink-0">
                                    {payment.amount !== undefined && (
                                        <span className="font-bold text-lg tracking-tight text-emerald-600 dark:text-emerald-400">
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: payment.currency || 'USD' }).format(payment.amount)}
                                        </span>
                                    )}
                                    <button className="text-text-tertiary hover:text-text-secondary dark:hover:text-text-primary transition-colors"
                                        aria-label="More options">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pl-[3.25rem] pr-2">
                                <div className="bg-background-secondary rounded-2xl p-4 border border-border-primary/50 inline-block group hover:border-border-primary dark:hover:border-zinc-700 transition">
                                    <p className="text-sm text-text-secondary font-medium">
                                        {payment.emoji && <span className="text-xl mr-2 align-middle">{payment.emoji}</span>}
                                        {payment.note}
                                    </p>
                                    {payment.gifUrl && (
                                        <div className="mt-3 rounded-xl overflow-hidden shadow-sm">
                                            <img src={payment.gifUrl} alt="GIF" className="w-full max-h-48 object-cover" loading="lazy" />
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-6 mt-4">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleLike(payment.id)}
                                        className={cn(
                                            "flex items-center gap-1.5 text-xs font-bold transition-colors group cursor-pointer",
                                            isLiked ? "text-pink-600 dark:text-pink-500" : "text-text-tertiary hover:text-pink-500"
                                        )}
                                    >
                                        <Heart className={cn("w-4 h-4 group-hover:scale-110 transition-transform", isLiked ? "fill-current" : "")} />
                                        <span>{likeCount}</span>
                                    </motion.button>

                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => onComment?.(payment.id)}
                                        className="flex items-center gap-1.5 text-xs font-bold text-text-tertiary hover:text-blue-500 transition-colors group cursor-pointer"
                                    >
                                        <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        <span>{payment.comments}</span>
                                    </motion.button>
                                    
                                    <button className="flex items-center gap-1.5 text-xs font-bold text-text-tertiary hover:text-text-secondary dark:hover:text-text-primary ml-auto transition-colors"
                                        aria-label="Share">
                                        <Share className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

SocialPaymentFeed.displayName = 'SocialPaymentFeed';
