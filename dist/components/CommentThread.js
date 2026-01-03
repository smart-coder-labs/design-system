import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { MessageSquare, Heart, CornerDownRight } from 'lucide-react';
import { Combobox } from './Combobox';
/* ========================================
   COMPONENTS
   ======================================== */
const CommentItem = ({ comment, currentUser, depth = 0, onReply, onLike, onEdit, onDelete, }) => {
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
    return (_jsxs("div", { className: cn("group relative", depth > 0 && "mt-4"), children: [_jsxs("div", { className: "flex gap-3", children: [_jsxs(Avatar, { className: "w-8 h-8 flex-none border border-border-primary/50", children: [_jsx(AvatarImage, { src: comment.author.avatarSrc, alt: comment.author.name }), _jsx(AvatarFallback, { children: comment.author.initials || comment.author.name.charAt(0) })] }), _jsxs("div", { className: "flex-1 min-w-0 space-y-1.5", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm font-semibold text-text-primary", children: comment.author.name }), _jsx("span", { className: "text-xs text-text-tertiary", children: comment.timestamp }), comment.isEdited && (_jsx("span", { className: "text-[10px] text-text-tertiary italic", children: "(edited)" }))] }), (isAuthor || onReply) && (_jsx("div", { className: "w-32", children: _jsx(Combobox, { items: [
                                                ...(onReply
                                                    ? [{ value: "reply", label: "Reply" }]
                                                    : []),
                                                ...(isAuthor && onEdit
                                                    ? [{ value: "edit", label: "Edit" }]
                                                    : []),
                                                ...(isAuthor && onDelete
                                                    ? [{ value: "delete", label: "Delete" }]
                                                    : []),
                                            ], value: undefined, onChange: (val) => {
                                                if (val === "reply" && onReply)
                                                    setIsReplying(!isReplying);
                                                if (val === "edit" && onEdit)
                                                    setIsEditing(true);
                                                if (val === "delete" && onDelete)
                                                    onDelete(comment.id);
                                            }, placeholder: "Actions", className: "h-6 text-xs" }) }))] }), isEditing ? (_jsxs("div", { className: "space-y-2", children: [_jsx(Textarea, { value: editContent, onChange: (e) => setEditContent(e.target.value), className: "min-h-[80px] text-sm", autoFocus: true }), _jsxs("div", { className: "flex gap-2 justify-end", children: [_jsx(Button, { size: "sm", variant: "ghost", onClick: () => setIsEditing(false), children: "Cancel" }), _jsx(Button, { size: "sm", variant: "primary", onClick: handleEditSubmit, children: "Save" })] })] })) : (_jsx("div", { className: "text-sm text-text-secondary leading-relaxed break-words", children: comment.content })), !isEditing && (_jsxs("div", { className: "flex items-center gap-4 pt-1", children: [onLike && (_jsxs("button", { onClick: () => onLike(comment.id), className: cn("flex items-center gap-1.5 text-xs font-medium transition-colors", comment.isLiked
                                            ? "text-status-error"
                                            : "text-text-tertiary hover:text-text-secondary"), children: [_jsx(Heart, { className: cn("w-3.5 h-3.5", comment.isLiked && "fill-current") }), comment.likes || 0] })), onReply && (_jsxs("button", { onClick: () => setIsReplying(!isReplying), className: "flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors", children: [_jsx(MessageSquare, { className: "w-3.5 h-3.5" }), "Reply"] }))] })), isReplying && (_jsxs("div", { className: "mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200", children: [_jsx("div", { className: "relative", children: _jsx(CornerDownRight, { className: "w-4 h-4 text-text-tertiary absolute -left-2 top-2" }) }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx(Textarea, { placeholder: `Reply to ${comment.author.name}...`, value: replyContent, onChange: (e) => setReplyContent(e.target.value), className: "min-h-[80px] text-sm", autoFocus: true }), _jsxs("div", { className: "flex gap-2 justify-end", children: [_jsx(Button, { size: "sm", variant: "ghost", onClick: () => setIsReplying(false), children: "Cancel" }), _jsx(Button, { size: "sm", variant: "primary", onClick: handleReplySubmit, children: "Reply" })] })] })] }))] })] }), comment.replies && comment.replies.length > 0 && (_jsx("div", { className: cn("pl-4 border-l-2 border-border-primary/30 ml-4", depth >= maxDepth && "border-l-0 pl-0 ml-0"), children: comment.replies.map((reply) => (_jsx(CommentItem, { comment: reply, currentUser: currentUser, depth: depth + 1, onReply: onReply, onLike: onLike, onEdit: onEdit, onDelete: onDelete }, reply.id))) }))] }));
};
export const CommentThread = React.forwardRef(({ comments, currentUser, onReply, onLike, onEdit, onDelete, className, ...props }, ref) => {
    const [newComment, setNewComment] = useState('');
    const handleNewComment = () => {
        if (newComment.trim() && onReply) {
            // Use a special ID or null to indicate a root comment
            onReply('root', newComment);
            setNewComment('');
        }
    };
    return (_jsxs("div", { ref: ref, className: cn("space-y-8", className), ...props, children: [currentUser && onReply && (_jsxs("div", { className: "flex gap-4", children: [_jsxs(Avatar, { className: "w-10 h-10 flex-none", children: [_jsx(AvatarImage, { src: currentUser.avatarSrc, alt: currentUser.name }), _jsx(AvatarFallback, { children: currentUser.initials || currentUser.name.charAt(0) })] }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx(Textarea, { placeholder: "Write a comment...", value: newComment, onChange: (e) => setNewComment(e.target.value), className: "min-h-[100px]" }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { variant: "primary", onClick: handleNewComment, disabled: !newComment.trim(), children: "Post Comment" }) })] })] })), _jsx("div", { className: "space-y-6", children: comments.map((comment) => (_jsx(CommentItem, { comment: comment, currentUser: currentUser, onReply: onReply, onLike: onLike, onEdit: onEdit, onDelete: onDelete }, comment.id))) })] }));
});
CommentThread.displayName = 'CommentThread';
//# sourceMappingURL=CommentThread.js.map