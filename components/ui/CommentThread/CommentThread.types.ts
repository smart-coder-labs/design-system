export interface CommentUser {
    id: string;
    name: string;
    avatarSrc?: string;
    initials?: string;
}

export interface CommentData {
    id: string;
    author: CommentUser;
    content: React.ReactNode;
    timestamp: string;
    likes?: number;
    isLiked?: boolean;
    replies?: CommentData[];
    isEdited?: boolean;
}

export interface CommentThreadProps extends React.HTMLAttributes<HTMLDivElement> {
    comments: CommentData[];
    currentUser?: CommentUser;
    onReply?: (commentId: string, content: string) => void;
    onLike?: (commentId: string) => void;
    onEdit?: (commentId: string, newContent: string) => void;
    onDelete?: (commentId: string) => void;
    className?: string;
}

export interface CommentItemProps {
    comment: CommentData;
    currentUser?: CommentUser;
    depth?: number;
    onReply?: (commentId: string, content: string) => void;
    onLike?: (commentId: string) => void;
    onEdit?: (commentId: string, newContent: string) => void;
    onDelete?: (commentId: string) => void;
}