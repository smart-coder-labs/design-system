import React from 'react';
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
export declare const ChatInput: React.ForwardRefExoticComponent<ChatInputProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ChatInput.d.ts.map