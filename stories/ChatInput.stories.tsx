import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput, type ChatAttachment } from '../components/ChatInput';
import { ChatBubble } from '../components/ChatBubble';

const meta = {
    title: 'Forms/ChatInput',
    component: ChatInput,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Input de chat con soporte para adjuntos, voz y envío de mensajes. Perfecto para aplicaciones de mensajería.',
            },
        },
    },
    tags: [],
    argTypes: {
        showAttachmentButton: {
            control: 'boolean',
        },
        showVoiceButton: {
            control: 'boolean',
        },
        maxAttachments: {
            control: { type: 'number', min: 1, max: 10 },
        },
    },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Type a message...',
        showAttachmentButton: true,
        showVoiceButton: false,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const WithVoice: Story = {
    name: 'Con Botón de Voz',
    args: {
        placeholder: 'Type a message or record...',
        showAttachmentButton: true,
        showVoiceButton: true,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Interactive: Story = {
    name: 'Interactivo',
    render: () => {
        const [messages, setMessages] = useState<Array<{ text: string; attachments?: ChatAttachment[] }>>([]);
        const [value, setValue] = useState('');

        return (
            <div className="max-w-md mx-auto space-y-4">
                <div className="h-96 overflow-y-auto p-4 bg-surface-secondary rounded-xl space-y-2">
                    {messages.length === 0 ? (
                        <p className="text-sm text-text-tertiary text-center">No messages yet</p>
                    ) : (
                        messages.map((msg, i) => (
                            <ChatBubble
                                key={i}
                                message={msg.text}
                                isOwn={true}
                                timestamp="Now"
                            />
                        ))
                    )}
                </div>
                <ChatInput
                    value={value}
                    onChange={setValue}
                    onSend={(text, attachments) => {
                        setMessages([...messages, { text, attachments }]);
                        setValue('');
                    }}
                />
            </div>
        );
    },
};

export const WithAttachments: Story = {
    name: 'Con Adjuntos',
    render: () => {
        const [attachments, setAttachments] = useState<ChatAttachment[]>([]);

        return (
            <div className="max-w-md mx-auto">
                <ChatInput
                    attachments={attachments}
                    onAttachmentsChange={setAttachments}
                    onSend={(text, atts) => {
                        console.log('Send:', text, atts);
                        setAttachments([]);
                    }}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    name: 'Deshabilitado',
    args: {
        disabled: true,
        placeholder: 'Input disabled...',
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

