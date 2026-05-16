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

export type ChatBubbleProps = ChatBubbleBaseProps & Omit<HTMLMotionProps<'div'>, keyof ChatBubbleBaseProps>;