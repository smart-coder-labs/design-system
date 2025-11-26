import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MessageReactions, ReactionPicker } from '../components/MessageReactions';
import { ChatBubble } from '../components/ChatBubble';
import type { Reaction } from '../components/MessageReactions';

const meta = {
    title: 'Data Display/MessageReactions',
    component: MessageReactions,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Sistema de reacciones para mensajes. Permite a los usuarios reaccionar a mensajes con diferentes emojis y ver quién ha reaccionado.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MessageReactions>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleReactions: Reaction[] = [
    { type: 'like', count: 5, userReacted: true },
    { type: 'love', count: 2 },
    { type: 'laugh', count: 8, userReacted: false },
];

export const Default: Story = {
    args: {
        reactions: sampleReactions,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const WithUsers: Story = {
    name: 'Con Usuarios',
    args: {
        reactions: [
            { type: 'like', count: 5, users: ['Alice', 'Bob', 'Charlie'], userReacted: true },
            { type: 'love', count: 2, users: ['Diana'], userReacted: false },
        ],
        showUsers: true,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const WithoutCount: Story = {
    name: 'Sin Contador',
    args: {
        reactions: sampleReactions,
        showCount: false,
    },
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const OnChatBubble: Story = {
    args: {
        reactions: sampleReactions,
    },
    name: 'En Chat Bubble',
    render: () => (
        <div className="max-w-md mx-auto space-y-4">
            <ChatBubble
                message="Check out this amazing feature!"
                isOwn={true}
                timestamp="10:30 AM"
            >
                <MessageReactions
                    reactions={[
                        { type: 'like', count: 12, userReacted: true },
                        { type: 'love', count: 5 },
                        { type: 'laugh', count: 3 },
                    ]}
                />
            </ChatBubble>
            <ChatBubble
                message="That's really cool! 🎉"
                sender="Alice"
                isOwn={false}
                timestamp="10:31 AM"
            >
                <MessageReactions
                    reactions={[
                        { type: 'like', count: 1 },
                        { type: 'thumbs-up', count: 2 },
                    ]}
                />
            </ChatBubble>
        </div>
    ),
};

export const ReactionPickerStory: Story = {
    args: {
        reactions: sampleReactions,
    },
    name: 'Reaction Picker',
    render: () => {
        const [selected, setSelected] = useState<string | null>(null);

        return (
            <div className="max-w-md mx-auto space-y-4">
                <ReactionPicker
                    onReactionSelect={(type) => {
                        setSelected(type);
                        console.log('Selected:', type);
                    }}
                />
                {selected && (
                    <p className="text-sm text-text-secondary">
                        Selected reaction: <span className="font-semibold">{selected}</span>
                    </p>
                )}
            </div>
        );
    },
};

export const Interactive: Story = {
    args: {
        reactions: sampleReactions,
    },
    name: 'Interactivo',
    render: () => {
        const [reactions, setReactions] = useState<Reaction[]>([
            { type: 'like', count: 0 },
        ]);

        const handleReactionClick = (type: string) => {
            setReactions((prev) => {
                const existing = prev.find((r) => r.type === type);
                if (existing) {
                    return prev.map((r) =>
                        r.type === type
                            ? {
                                  ...r,
                                  count: r.userReacted ? r.count - 1 : r.count + 1,
                                  userReacted: !r.userReacted,
                              }
                            : r
                    );
                }
                return [...prev, { type: type as any, count: 1, userReacted: true }];
            });
        };

        return (
            <div className="max-w-md mx-auto space-y-4">
                <ChatBubble
                    message="Click on reactions to interact!"
                    isOwn={true}
                    timestamp="Now"
                >
                    <MessageReactions
                        reactions={reactions}
                        onReactionClick={handleReactionClick}
                    />
                </ChatBubble>
                <ReactionPicker onReactionSelect={handleReactionClick} />
            </div>
        );
    },
};

