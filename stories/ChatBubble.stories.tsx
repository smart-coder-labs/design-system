import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from '../components/ChatBubble';
import { MessageReactions } from '../components/MessageReactions';

const meta = {
    title: 'Data Display/ChatBubble',
    component: ChatBubble,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Burbujas de chat estilo moderno con soporte para mensajes propios, del sistema, y estados de entrega. Perfecto para aplicaciones de mensajería.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isOwn: {
            control: 'boolean',
            description: 'Si el mensaje es del usuario actual',
        },
        variant: {
            control: 'select',
            options: ['default', 'system', 'error'],
        },
        status: {
            control: 'select',
            options: ['sending', 'sent', 'delivered', 'read'],
        },
    },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnMessage: Story = {
    name: 'Mensaje Propio',
    args: {
        message: 'Hey, how are you doing today?',
        isOwn: true,
        timestamp: '10:30 AM',
        status: 'read',
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const OtherMessage: Story = {
    name: 'Mensaje de Otro',
    args: {
        message: 'I\'m doing great! Thanks for asking. How about you?',
        sender: 'Alice',
        avatar: '',
        isOwn: false,
        timestamp: '10:31 AM',
        showAvatar: true,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const SystemMessage: Story = {
    name: 'Mensaje del Sistema',
    args: {
        message: 'Alice joined the conversation',
        variant: 'system',
        showAvatar: false,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const ErrorMessage: Story = {
    name: 'Mensaje de Error',
    args: {
        message: 'Failed to send message. Please try again.',
        variant: 'error',
        isOwn: true,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const WithImage: Story = {
    name: 'Con Imagen',
    render: () => (
        <div className="space-y-4 max-w-md">
            <ChatBubble
                message="Check out this design!"
                timestamp="10:30 AM"
                isOwn={false}
                status="read"
            >
                <div className="mt-2 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
                        alt="Design preview"
                        className="w-full h-48 object-cover"
                    />
                </div>
            </ChatBubble>
        </div>
    ),
    args: {
        message: 'Check out this design!',
        timestamp: '10:30 AM',
        isOwn: false,
        status: 'read'
    }
};

export const WithReactions: Story = {
    args: {
        message: 'Check out this new feature!',
        timestamp: '10:30 AM',
        isOwn: true,
        status: 'read'
    },
    name: 'Con Reacciones',
    render: () => (
        <div className="max-w-md mx-auto space-y-4">
            <ChatBubble
                message="Check out this new feature!"
                isOwn={true}
                timestamp="10:30 AM"
                status="read"
            >
                <MessageReactions
                    reactions={[
                        { type: 'like', count: 5, userReacted: true },
                        { type: 'love', count: 2 },
                    ]}
                />
            </ChatBubble>
            <ChatBubble
                message="That looks amazing! 🎉"
                sender="Alice"
                isOwn={false}
                timestamp="10:31 AM"
            >
                <MessageReactions
                    reactions={[
                        { type: 'like', count: 1 },
                        { type: 'laugh', count: 3 },
                    ]}
                />
            </ChatBubble>
        </div>
    ),
};

export const LongMessage: Story = {
    name: 'Mensaje Largo',
    args: {
        message: 'This is a very long message that demonstrates how the chat bubble handles longer text content. It should wrap properly and maintain good readability while keeping the design clean and modern.',
        isOwn: true,
        timestamp: '10:30 AM',
        status: 'delivered',
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Conversation: Story = {
    args: {
        message: 'Check out this new feature!',
        timestamp: '10:30 AM',
        isOwn: true,
        status: 'read'
    },
    name: 'Conversación Completa',
    render: () => (
        <div className="max-w-md mx-auto space-y-1">
            <ChatBubble
                message="Hey everyone!"
                sender="Bob"
                isOwn={false}
                timestamp="10:00 AM"
            />
            <ChatBubble
                message="Hi Bob! 👋"
                isOwn={true}
                timestamp="10:01 AM"
                status="read"
            />
            <ChatBubble
                message="Welcome to the group!"
                sender="Alice"
                isOwn={false}
                timestamp="10:02 AM"
            />
            <ChatBubble
                message="Thanks! Excited to be here."
                isOwn={true}
                timestamp="10:03 AM"
                status="read"
            />
            <ChatBubble
                message="Bob joined the conversation"
                variant="system"
            />
        </div>
    ),
};

export const StatusStates: Story = {
    name: 'Estados de Entrega',
    render: () => (
        <div className="max-w-md mx-auto space-y-4">
            <ChatBubble
                message="Sending..."
                isOwn={true}
                status="sending"
            />
            <ChatBubble
                message="Sent"
                isOwn={true}
                status="sent"
            />
            <ChatBubble
                message="Delivered"
                isOwn={true}
                status="delivered"
            />
            <ChatBubble
                message="Read"
                isOwn={true}
                status="read"
            />
        </div>
    ),
};

