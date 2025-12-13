import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export interface ChatBubbleBaseProps {
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
    children?: React.ReactNode;
}
type ChatBubbleProps = ChatBubbleBaseProps & Omit<HTMLMotionProps<'div'>, keyof ChatBubbleBaseProps>;
export declare const ChatBubble: React.ForwardRefExoticComponent<Omit<ChatBubbleProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=ChatBubble.d.ts.map