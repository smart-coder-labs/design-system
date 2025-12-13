"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Trash2, X } from 'lucide-react';
import { ConfirmDialog } from './ConfirmDialog';
/* ========================================
   CONSTANTS
   ======================================== */
const DELETE_THRESHOLD = 80; // pixels to swipe before delete is triggered
const CANCEL_THRESHOLD = -80; // pixels to swipe before cancel is triggered
/* ========================================
   MAIN COMPONENT
   ======================================== */
export const SlideToDelete = React.forwardRef(({ children, onDelete, onCancel, deleteLabel = 'Delete', cancelLabel = 'Cancel', deleteIcon: DeleteIcon = Trash2, cancelIcon: CancelIcon = X, threshold = DELETE_THRESHOLD, disabled = false, confirmDelete = false, confirmMessage = 'Are you sure?', variant = 'danger', className, ...props }, ref) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-threshold, 0, threshold], [1, 0, 1]);
    const deleteOpacity = useTransform(x, [0, threshold], [0, 1]);
    const cancelOpacity = useTransform(x, [0, -threshold], [0, 1]);
    const variantStyles = {
        default: 'bg-surface-secondary text-text-primary',
        danger: 'bg-status-error text-white',
        warning: 'bg-status-warning text-white',
    };
    const handleDragEnd = async (event, info) => {
        setIsDragging(false);
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        // Swipe right (delete)
        if (offset > threshold || velocity > 500) {
            if (confirmDelete) {
                setShowConfirmDialog(true);
                x.set(0); // Return to center while showing dialog
                return;
            }
            await handleDelete();
        }
        // Swipe left (cancel)
        else if (offset < -threshold || velocity < -500) {
            if (onCancel) {
                onCancel();
            }
            x.set(0);
        }
        // Return to center
        else {
            x.set(0);
        }
    };
    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await onDelete();
            // Animate out before removing
            x.set(1000);
        }
        catch (error) {
            console.error('Delete error:', error);
            x.set(0);
            setIsDeleting(false);
        }
    };
    const handleConfirmDelete = async () => {
        setShowConfirmDialog(false);
        await handleDelete();
    };
    const handleCancelConfirm = () => {
        setShowConfirmDialog(false);
    };
    if (isDeleting && x.get() > 500) {
        return null; // Component is removed after deletion animation
    }
    return (_jsxs("div", { ref: ref, className: cn("relative overflow-hidden rounded-xl", className), ...props, children: [_jsxs("div", { className: "absolute inset-0 flex", children: [_jsx(motion.div, { className: cn("flex-1 flex items-center justify-end px-6", variantStyles[variant]), style: { opacity: deleteOpacity }, children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-sm font-medium", children: deleteLabel }), _jsx(DeleteIcon, { className: "w-5 h-5" })] }) }), onCancel && (_jsx(motion.div, { className: "flex-1 flex items-center justify-start px-6 bg-surface-secondary text-text-primary", style: { opacity: cancelOpacity }, children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CancelIcon, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm font-medium", children: cancelLabel })] }) }))] }), _jsx(motion.div, { drag: "x", dragConstraints: { left: onCancel ? -threshold : 0, right: threshold }, dragElastic: 0.2, onDragStart: () => setIsDragging(true), onDragEnd: handleDragEnd, style: { x }, className: cn("relative bg-surface-primary border border-border-primary rounded-xl", "cursor-grab active:cursor-grabbing", disabled && "opacity-50 cursor-not-allowed", isDragging && "shadow-lg"), whileTap: disabled ? {} : { scale: 0.98 }, transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                }, children: children }), !disabled && (_jsx(motion.div, { className: "absolute top-1/2 -translate-y-1/2 right-4 w-1 h-8 bg-border-primary rounded-full", style: { opacity }, initial: { opacity: 0 }, animate: { opacity: isDragging ? 0.3 : 0 } })), confirmDelete && (_jsx(ConfirmDialog, { open: showConfirmDialog, onOpenChange: setShowConfirmDialog, title: "Confirm Delete", description: confirmMessage || "Are you sure you want to delete this item? This action cannot be undone.", confirmLabel: "Delete", cancelLabel: "Cancel", onConfirm: handleConfirmDelete, onCancel: handleCancelConfirm, variant: variant === 'danger' ? 'destructive' : variant === 'warning' ? 'warning' : 'default' }))] }));
});
SlideToDelete.displayName = 'SlideToDelete';
export const SlideToDeleteItem = React.forwardRef(({ title, subtitle, avatar, actions, children, className, ...slideProps }, ref) => {
    return (_jsx(SlideToDelete, { ref: ref, className: cn("mb-2", className), ...slideProps, children: _jsxs("div", { className: "flex items-center gap-4 p-4", children: [avatar && (_jsx("div", { className: "flex-shrink-0", children: avatar })), _jsxs("div", { className: "flex-1 min-w-0", children: [title && (_jsx("div", { className: "text-sm font-medium text-text-primary truncate", children: title })), subtitle && (_jsx("div", { className: "text-xs text-text-secondary truncate mt-0.5", children: subtitle })), children] }), actions && (_jsx("div", { className: "flex-shrink-0 flex items-center gap-2", children: actions }))] }) }));
});
SlideToDeleteItem.displayName = 'SlideToDeleteItem';
//# sourceMappingURL=SlideToDelete.js.map