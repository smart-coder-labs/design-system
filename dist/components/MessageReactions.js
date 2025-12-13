"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Heart, ThumbsUp, ThumbsDown, Laugh, Angry } from 'lucide-react';
const reactionConfig = {
    'like': { icon: _jsx(ThumbsUp, { className: "w-4 h-4" }), label: 'Like', color: 'text-accent-blue' },
    'love': { icon: _jsx(Heart, { className: "w-4 h-4" }), label: 'Love', color: 'text-status-error' },
    'laugh': { icon: _jsx(Laugh, { className: "w-4 h-4" }), label: 'Haha', color: 'text-status-warning' },
    'angry': { icon: _jsx(Angry, { className: "w-4 h-4" }), label: 'Angry', color: 'text-status-error' },
    'thumbs-up': { icon: _jsx(ThumbsUp, { className: "w-4 h-4" }), label: 'Thumbs Up', color: 'text-accent-blue' },
    'thumbs-down': { icon: _jsx(ThumbsDown, { className: "w-4 h-4" }), label: 'Thumbs Down', color: 'text-text-tertiary' },
};
/* ========================================
   COMPONENT
   ======================================== */
export const MessageReactions = React.forwardRef(({ reactions, onReactionClick, showCount = true, showUsers = false, className, ...props }, ref) => {
    const [hoveredReaction, setHoveredReaction] = useState(null);
    if (reactions.length === 0)
        return null;
    return (_jsx("div", { ref: ref, className: cn("flex flex-wrap gap-1.5 mt-2", className), ...props, children: reactions.map((reaction) => {
            const config = reactionConfig[reaction.type];
            const isActive = reaction.userReacted;
            return (_jsxs(motion.button, { onClick: () => onReactionClick?.(reaction.type), onMouseEnter: () => setHoveredReaction(reaction.type), onMouseLeave: () => setHoveredReaction(null), className: cn("flex items-center gap-1.5 px-2 py-1 rounded-full", "bg-surface-secondary border border-border-primary", "hover:bg-surface-tertiary transition-colors", "text-xs font-medium", isActive && "bg-accent-blue/10 border-accent-blue/30", config.color), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx("span", { className: cn("flex-shrink-0", config.color), children: config.icon }), showCount && reaction.count > 0 && (_jsx("span", { className: cn("text-text-secondary", isActive && "text-accent-blue font-semibold"), children: reaction.count })), showUsers && hoveredReaction === reaction.type && reaction.users && reaction.users.length > 0 && (_jsxs(motion.div, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, className: "absolute bottom-full mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50", children: [reaction.users.slice(0, 3).join(', '), reaction.users.length > 3 && ` +${reaction.users.length - 3} more`] }))] }, reaction.type));
        }) }));
});
MessageReactions.displayName = 'MessageReactions';
export const ReactionPicker = ({ onReactionSelect, className, }) => {
    const reactions = ['like', 'love', 'laugh', 'thumbs-up', 'thumbs-down', 'angry'];
    return (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: cn("flex items-center gap-1 p-1 bg-surface-primary border border-border-primary rounded-full shadow-lg", className), children: reactions.map((type) => {
            const config = reactionConfig[type];
            return (_jsx(motion.button, { onClick: () => onReactionSelect(type), className: cn("p-1.5 rounded-full hover:bg-surface-secondary transition-colors", config.color), whileHover: { scale: 1.2 }, whileTap: { scale: 0.9 }, title: config.label, children: config.icon }, type));
        }) }));
};
ReactionPicker.displayName = 'ReactionPicker';
//# sourceMappingURL=MessageReactions.js.map