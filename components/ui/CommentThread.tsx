import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { Button } from './Button';
import { Textarea } from './Textarea';
import {
    MessageSquare,
    Heart,
    MoreHorizontal,
    Reply,
    Trash2,
    Edit2,
    CornerDownRight
} from 'lucide-react';
import { Combobox } from './Combobox';

/* ========================================
   TYPES
   ======================================== */

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

interface CommentItemProps {
    comment: CommentData;
    currentUser?: CommentUser;
    depth?: number;
    onReply?: (commentId: string, content: string) => void;
    onLike?: (commentId: string) => void;
    onEdit?: (commentId: string, newContent: string) => void;
    onDelete?: (commentId: string) => void;
}

/* ========================================
   COMPONENTS
   ======================================== */

const CommentItem: React.FC<CommentItemProps> = ({
    comment,
    currentUser,
    depth = 0,
    onReply,
    onLike,
    onEdit,
    onDelete,
}) => {
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [editContent, setEditContent] = useState(typeof comment.content === 'string' ? comment.content : '');

    const handleReplySubmit = () => {
        if (replyContent.trim() && onReply) {
            onReply(comment.id, replyContent);
            setIsReplying(false);
            setReplyContent('');
        }
    };

    const handleEditSubmit = () => {
        if (editContent.trim() && onEdit) {
            onEdit(comment.id, editContent);
            setIsEditing(false);
        }
    };

    const isAuthor = currentUser?.id === comment.author.id;
    const maxDepth = 3; // Stop indenting after this depth to prevent squishing
    const effectiveDepth = Math.min(depth, maxDepth);

    return (
        <div className={cn("group relative", depth > 0 && "mt-4")}>
            <div className="flex gap-3">
                <Avatar className="w-8 h-8 flex-none border border-border-primary/50">
                    <AvatarImage src={comment.author.avatarSrc} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.initials || comment.author.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0 space-y-1.5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-text-primary">
                                {comment.author.name}
                            </span>
                            <span className="text-xs text-text-tertiary">
                                {comment.timestamp}
                            </span>
                            {comment.isEdited && (
                                <span className="text-[10px] text-text-tertiary italic">(edited)</span>
                            )}
                        </div>

                        {/* Actions Dropdown */}
                        {(isAuthor || onReply) && (
                            <div className="w-32">
                                <Combobox
                                    items={[
                                        ...(onReply
                                            ? [{ value: "reply", label: "Reply" }]
                                            : []),
                                        ...(isAuthor && onEdit
                                            ? [{ value: "edit", label: "Edit" }]
                                            : []),
                                        ...(isAuthor && onDelete
                                            ? [{ value: "delete", label: "Delete" }]
                                            : []),
                                    ]}
                                    value={undefined}
                                    onChange={(val) => {
                                        if (val === "reply" && onReply) setIsReplying(!isReplying);
                                        if (val === "edit" && onEdit) setIsEditing(true);
                                        if (val === "delete" && onDelete) onDelete(comment.id);
                                    }}
                                    placeholder="Actions"
                                    className="h-6 text-xs"
                                />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    {isEditing ? (
                        <div className="space-y-2">
                            <Textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="min-h-[80px] text-sm"
                                autoFocus
                            />
                            <div className="flex gap-2 justify-end">
                                <Button size="sm" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button size="sm" variant="primary" onClick={handleEditSubmit}>Save</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-sm text-text-secondary leading-relaxed break-words">
                            {comment.content}
                        </div>
                    )}

                    {/* Footer Actions */}
                    {!isEditing && (
                        <div className="flex items-center gap-4 pt-1">
                            {onLike && (
                                <button
                                    onClick={() => onLike(comment.id)}
                                    className={cn(
                                        "flex items-center gap-1.5 text-xs font-medium transition-colors",
                                        comment.isLiked
                                            ? "text-status-error"
                                            : "text-text-tertiary hover:text-text-secondary"
                                    )}
                                >
                                    <Heart className={cn("w-3.5 h-3.5", comment.isLiked && "fill-current")} />
                                    {comment.likes || 0}
                                </button>
                            )}

                            {onReply && (
                                <button
                                    onClick={() => setIsReplying(!isReplying)}
                                    className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors"
                                >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    Reply
                                </button>
                            )}
                        </div>
                    )}

                    {/* Reply Input */}
                    {isReplying && (
                        <div className="mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="relative">
                                <CornerDownRight className="w-4 h-4 text-text-tertiary absolute -left-2 top-2" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <Textarea
                                    placeholder={`Reply to ${comment.author.name}...`}
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    className="min-h-[80px] text-sm"
                                    autoFocus
                                />
                                <div className="flex gap-2 justify-end">
                                    <Button size="sm" variant="ghost" onClick={() => setIsReplying(false)}>Cancel</Button>
                                    <Button size="sm" variant="primary" onClick={handleReplySubmit}>Reply</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className={cn("pl-4 border-l-2 border-border-primary/30 ml-4", depth >= maxDepth && "border-l-0 pl-0 ml-0")}>
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            currentUser={currentUser}
                            depth={depth + 1}
                            onReply={onReply}
                            onLike={onLike}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const CommentThread = React.forwardRef<HTMLDivElement, CommentThreadProps>(
    ({ comments, currentUser, onReply, onLike, onEdit, onDelete, className, ...props }, ref) => {
        const [newComment, setNewComment] = useState('');

        const handleNewComment = () => {
            if (newComment.trim() && onReply) {
                // Use a special ID or null to indicate a root comment
                onReply('root', newComment);
                setNewComment('');
            }
        };

        return (
            <div ref={ref} className={cn("space-y-8", className)} {...props}>
                {/* New Comment Input */}
                {currentUser && onReply && (
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 flex-none">
                            <AvatarImage src={currentUser.avatarSrc} alt={currentUser.name} />
                            <AvatarFallback>{currentUser.initials || currentUser.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                            <Textarea
                                placeholder="Write a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="min-h-[100px]"
                            />
                            <div className="flex justify-end">
                                <Button
                                    variant="primary"
                                    onClick={handleNewComment}
                                    disabled={!newComment.trim()}
                                >
                                    Post Comment
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            currentUser={currentUser}
                            onReply={onReply}
                            onLike={onLike}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>
        );
    }
);

CommentThread.displayName = 'CommentThread';
