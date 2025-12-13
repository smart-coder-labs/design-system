import React from 'react';
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
export declare const MessageReactions: React.ForwardRefExoticComponent<MessageReactionsProps & React.RefAttributes<HTMLDivElement>>;
export interface ReactionPickerProps {
    onReactionSelect: (type: ReactionType) => void;
    className?: string;
}
export declare const ReactionPicker: React.FC<ReactionPickerProps>;
//# sourceMappingURL=MessageReactions.d.ts.map