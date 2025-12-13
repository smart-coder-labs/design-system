"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Textarea } from './Textarea';
import { Button } from './Button';
import { Paperclip, Send, X, File, Mic } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const ChatInput = React.forwardRef(({ value = '', onChange, onSend, placeholder = 'Type a message...', attachments = [], onAttachmentsChange, maxAttachments = 5, showAttachmentButton = true, showVoiceButton = false, disabled = false, className, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value);
    const [localAttachments, setLocalAttachments] = useState(attachments);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);
    // Sync attachments from props
    useEffect(() => {
        if (attachments) {
            setLocalAttachments(attachments);
        }
    }, [attachments]);
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange?.(newValue);
    };
    const handleSend = () => {
        if ((inputValue.trim() || localAttachments.length > 0) && !disabled) {
            onSend?.(inputValue, localAttachments);
            setInputValue('');
            setLocalAttachments([]);
            onAttachmentsChange?.([]);
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0)
            return;
        const remainingSlots = maxAttachments - localAttachments.length;
        if (remainingSlots <= 0) {
            alert(`Maximum ${maxAttachments} attachments allowed`);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            return;
        }
        const filesToAdd = files.slice(0, remainingSlots);
        const newAttachments = [];
        filesToAdd.forEach((file) => {
            const type = file.type.startsWith('image/') ? 'image'
                : file.type.startsWith('video/') ? 'video'
                    : file.type.startsWith('audio/') ? 'audio'
                        : 'file';
            const attachment = {
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                file,
                type,
            };
            if (type === 'image') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    attachment.preview = e.target?.result;
                    setLocalAttachments((prev) => {
                        const updated = [...prev, attachment];
                        onAttachmentsChange?.(updated);
                        return updated;
                    });
                };
                reader.onerror = () => {
                    console.error('Error reading image file');
                };
                reader.readAsDataURL(file);
            }
            else {
                newAttachments.push(attachment);
            }
        });
        if (newAttachments.length > 0) {
            setLocalAttachments((prev) => {
                const updated = [...prev, ...newAttachments];
                onAttachmentsChange?.(updated);
                return updated;
            });
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleRemoveAttachment = (id) => {
        const newAttachments = localAttachments.filter((a) => a.id !== id);
        setLocalAttachments(newAttachments);
        onAttachmentsChange?.(newAttachments);
    };
    const handleAttachmentClick = () => {
        fileInputRef.current?.click();
    };
    return (_jsxs("div", { ref: ref, className: cn("w-full", className), ...props, children: [localAttachments.length > 0 && (_jsx("div", { className: "flex gap-2 mb-2 overflow-x-auto pb-2", children: localAttachments.map((attachment) => (_jsxs("div", { className: "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface-secondary border border-border-primary", children: [attachment.preview ? (_jsx("img", { src: attachment.preview, alt: attachment.file.name, className: "w-full h-full object-cover" })) : (_jsx("div", { className: "w-full h-full flex items-center justify-center", children: _jsx(File, { className: "w-6 h-6 text-text-tertiary" }) })), _jsx("button", { onClick: () => handleRemoveAttachment(attachment.id), className: "absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors", children: _jsx(X, { className: "w-3 h-3" }) })] }, attachment.id))) })), _jsxs("div", { className: "flex items-center gap-2 p-3 bg-surface-secondary rounded-2xl border border-border-primary", children: [showAttachmentButton && localAttachments.length < maxAttachments && (_jsx(Button, { variant: "ghost", size: "sm", onClick: handleAttachmentClick, disabled: disabled, className: "flex-shrink-0", type: "button", children: _jsx(Paperclip, { className: "w-4 h-4" }) })), _jsx(Textarea, { ref: textareaRef, value: inputValue, onChange: handleInputChange, onKeyDown: handleKeyDown, placeholder: placeholder, disabled: disabled, rows: 1, className: "flex-1 min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 py-2", style: {
                            height: 'auto',
                        }, onInput: (e) => {
                            const target = e.target;
                            target.style.height = 'auto';
                            target.style.height = `${target.scrollHeight}px`;
                        } }), showVoiceButton && (_jsx(Button, { variant: "ghost", size: "sm", disabled: disabled, className: "flex-shrink-0", type: "button", children: _jsx(Mic, { className: "w-4 h-4" }) })), _jsx(Button, { variant: "primary", size: "sm", onClick: handleSend, disabled: disabled || (!inputValue.trim() && localAttachments.length === 0), className: "flex-shrink-0", type: "button", children: _jsx(Send, { className: "w-4 h-4" }) }), _jsx("input", { ref: fileInputRef, type: "file", multiple: true, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx", onChange: handleFileSelect, className: "hidden" })] })] }));
});
ChatInput.displayName = 'ChatInput';
//# sourceMappingURL=ChatInput.js.map