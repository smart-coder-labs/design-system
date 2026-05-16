interface SocialPaymentInfo {
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


interface SocialPaymentFeedProps {
    payments: SocialPaymentInfo[];
    className?: string;
    onLike?: (id: string) => void;
    onComment?: (id: string) => void;
}
