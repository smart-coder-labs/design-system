"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';;
import { Textarea } from './Textarea';
import { Button } from './Button';
import { Paperclip, Send, X, Image, File, Mic } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface ChatAttachment {
    id: string;
    file: File;
    preview?: string;
    type: 'image' | 'file' | 'audio' | 'video';
}

export interface ChatInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    onSend?: (message: string, attachments?: ChatAttachment[]) => void;
    placeholder?: string;
    attachments?: ChatAttachment[];
    onAttachmentsChange?: (attachments: ChatAttachment[]) => void;
    maxAttachments?: number;
    showAttachmentButton?: boolean;
    showVoiceButton?: boolean;
    disabled?: boolean;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const ChatInput = React.forwardRef<HTMLDivElement, ChatInputProps>(
    (
        {
            value = '',
            onChange,
            onSend,
            placeholder = 'Type a message...',
            attachments = [],
            onAttachmentsChange,
            maxAttachments = 5,
            showAttachmentButton = true,
            showVoiceButton = false,
            disabled = false,
            className,
            ...props
        },
        ref
    ) => {
        const [inputValue, setInputValue] = useState(value);
        const [localAttachments, setLocalAttachments] = useState<ChatAttachment[]>(attachments);
        const fileInputRef = useRef<HTMLInputElement>(null);
        const textareaRef = useRef<HTMLTextAreaElement>(null);

        // Sync attachments from props
        useEffect(() => {
            if (attachments) {
                setLocalAttachments(attachments);
            }
        }, [attachments]);

        const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        };

        const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = Array.from(e.target.files || []);
            if (files.length === 0) return;

            const remainingSlots = maxAttachments - localAttachments.length;
            if (remainingSlots <= 0) {
                alert(`Maximum ${maxAttachments} attachments allowed`);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                return;
            }

            const filesToAdd = files.slice(0, remainingSlots);
            const newAttachments: ChatAttachment[] = [];

            filesToAdd.forEach((file) => {
                const type = file.type.startsWith('image/') ? 'image' as const
                    : file.type.startsWith('video/') ? 'video' as const
                        : file.type.startsWith('audio/') ? 'audio' as const
                            : 'file' as const;

                const attachment: ChatAttachment = {
                    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    file,
                    type,
                };

                if (type === 'image') {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        attachment.preview = e.target?.result as string;
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
                } else {
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

        const handleRemoveAttachment = (id: string) => {
            const newAttachments = localAttachments.filter((a) => a.id !== id);
            setLocalAttachments(newAttachments);
            onAttachmentsChange?.(newAttachments);
        };

        const handleAttachmentClick = () => {
            fileInputRef.current?.click();
        };

        return (
            <div
                ref={ref}
                className={cn("w-full", className)}
                {...props}
            >
                {/* Attachments Preview */}
                {localAttachments.length > 0 && (
                    <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
                        {localAttachments.map((attachment) => (
                            <div
                                key={attachment.id}
                                className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface-secondary border border-border-primary"
                            >
                                {attachment.preview ? (
                                    <img
                                        src={attachment.preview}
                                        alt={attachment.file.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <File className="w-6 h-6 text-text-tertiary" />
                                    </div>
                                )}
                                <button
                                    onClick={() => handleRemoveAttachment(attachment.id)}
                                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Input Container */}
                <div className="flex items-center gap-2 p-3 bg-surface-secondary rounded-2xl border border-border-primary">
                    {/* Attachment Button */}
                    {showAttachmentButton && localAttachments.length < maxAttachments && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleAttachmentClick}
                            disabled={disabled}
                            className="flex-shrink-0"
                            type="button"
                        >
                            <Paperclip className="w-4 h-4" />
                        </Button>
                    )}

                    {/* Text Input */}
                    <Textarea
                        ref={textareaRef}
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        disabled={disabled}
                        rows={1}
                        className="flex-1 min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 py-2"
                        style={{
                            height: 'auto',
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = `${target.scrollHeight}px`;
                        }}
                    />

                    {/* Voice Button */}
                    {showVoiceButton && (
                        <Button
                            variant="ghost"
                            size="sm"
                            disabled={disabled}
                            className="flex-shrink-0"
                            type="button"
                        >
                            <Mic className="w-4 h-4" />
                        </Button>
                    )}

                    {/* Send Button */}
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSend}
                        disabled={disabled || (!inputValue.trim() && localAttachments.length === 0)}
                        className="flex-shrink-0"
                        type="button"
                    >
                        <Send className="w-4 h-4" />
                    </Button>

                    {/* Hidden File Input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                </div>
            </div>
        );
    }
);

ChatInput.displayName = 'ChatInput';

