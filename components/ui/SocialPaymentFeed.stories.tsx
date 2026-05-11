import type { Meta, StoryObj } from '@storybook/react';
import { SocialPaymentFeed } from './SocialPaymentFeed';
import { useState } from 'react';

const meta = {
    title: 'Components/SocialPaymentFeed',
    component: SocialPaymentFeed,
    tags: ['autodocs'],
} satisfies Meta<typeof SocialPaymentFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        payments: [
            {
                id: '1', senderName: 'Alice Johnson', receiverName: 'Bob Smith', note: 'Dinner split 🍕', amount: 45.00,
                timestamp: new Date(Date.now() - 1000 * 60 * 30), likes: 12, comments: 3, privacy: 'friends',
            },
            {
                id: '2', senderName: 'Carol White', receiverName: 'David Brown', note: 'Birthday gift 🎂 🎉', amount: 100,
                timestamp: new Date(Date.now() - 1000 * 60 * 120), likes: 24, comments: 7, privacy: 'public',
            },
            {
                id: '3', senderName: 'Eve Davis', receiverName: 'Frank Green', note: 'Rent for May 🏠', amount: 1500,
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), likes: 5, comments: 2, privacy: 'private',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
        onComment: (id) => console.log('Comment:', id),
    },
};

export const WithAvatars: Story = {
    args: {
        payments: [
            {
                id: '1', senderName: 'Alice Johnson', senderAvatar: 'https://i.pravatar.cc/150?u=alice', receiverName: 'Bob Smith', receiverAvatar: 'https://i.pravatar.cc/150?u=bob',
                note: 'Thanks for the coffee! ☕', amount: 5.50, timestamp: new Date(Date.now() - 1000 * 60 * 15), likes: 8, comments: 1, privacy: 'public',
            },
            {
                id: '2', senderName: 'Carol White', senderAvatar: 'https://i.pravatar.cc/150?u=carol', receiverName: 'David Brown', receiverAvatar: 'https://i.pravatar.cc/150?u=david',
                note: 'Weekend trip expenses 🌴', amount: 250.00, timestamp: new Date(Date.now() - 1000 * 60 * 180), likes: 15, comments: 4, privacy: 'friends',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
    },
};

export const WithEmojisAndMedia: Story = {
    args: {
        payments: [
            {
                id: '1', senderName: 'Grace Hall', receiverName: 'Henry Lee',
                note: 'Concert tickets! 🎵🎸', amount: 180.00, emoji: '🎵',
                timestamp: new Date(Date.now() - 1000 * 60 * 5), likes: 34, comments: 12, privacy: 'public',
            },
            {
                id: '2', senderName: 'Iris Wang', receiverName: 'Jack Miller',
                note: 'Check out my new setup!', amount: 2999.99, emoji: '💻',
                timestamp: new Date(Date.now() - 1000 * 60 * 60), likes: 56, comments: 23, privacy: 'public',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
    },
};

export const InteractiveFeed: Story = {
    render: () => {
        const [payments, setPayments] = useState([
            { id: '1', senderName: 'Alice', receiverName: 'Bob', note: 'Dinner 🍕', amount: 45.00, timestamp: new Date(), likes: 3, comments: 0, privacy: 'public' as const },
            { id: '2', senderName: 'Carol', receiverName: 'Dave', note: 'Gas ⛽', amount: 35.50, timestamp: new Date(), likes: 1, comments: 0, privacy: 'friends' as const },
        ]);
        return (
            <div className="space-y-3">
                <SocialPaymentFeed
                    payments={payments}
                    onLike={(id) => console.log('Liked:', id)}
                />
                <button
                    onClick={() => setPayments(prev => [...prev, {
                        id: String(Date.now()),
                        senderName: 'New User',
                        receiverName: 'Friend',
                        note: `Payment #${prev.length + 1} 🎉`,
                        amount: Math.floor(Math.random() * 200) + 10,
                        timestamp: new Date(),
                        likes: 0,
                        comments: 0,
                        privacy: 'public' as const,
                    }])}
                    className="w-full px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary"
                >
                    + New Payment Activity
                </button>
            </div>
        );
    },
};

export const EmptyFeed: Story = {
    args: {
        payments: [],
        onLike: (id) => console.log('Liked:', id),
    },
};

export const SinglePayment: Story = {
    args: {
        payments: [
            {
                id: '1', senderName: 'QuickTransfer', receiverName: 'You',
                note: 'Instant refund ✅', amount: 35.00,
                timestamp: new Date(), likes: 0, comments: 0, privacy: 'private',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
    },
};

export const ManyPayments: Story = {
    args: {
        payments: Array.from({ length: 8 }, (_, i) => ({
            id: String(i + 1),
            senderName: ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry'][i],
            receiverName: ['Zoe', 'Yara', 'Xander', 'Wendy', 'Victor', 'Uma', 'Tom', 'Sara'][i],
            note: ['Coffee ☕', 'Lunch 🥪', 'Gift 🎁', 'Rent 🏠', 'Uber 🚗', 'Groceries 🛒', 'Drinks 🍻', 'Concert 🎵'][i],
            amount: Math.floor(Math.random() * 200) + 5,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * (i + 1)),
            likes: Math.floor(Math.random() * 30),
            comments: Math.floor(Math.random() * 10),
            privacy: (['public', 'friends', 'private'] as const)[i % 3],
        })),
        onLike: (id) => console.log('Liked:', id),
    },
};

export const MobileView: Story = {
    args: {
        payments: [
            {
                id: '1', senderName: 'MobileUser', receiverName: 'Contact',
                note: 'Quick payment 📱', amount: 25.00,
                timestamp: new Date(Date.now() - 1000 * 60 * 2), likes: 2, comments: 0, privacy: 'friends',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
    },
    decorators: [
        (Story: any) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        payments: [
            {
                id: '1', senderName: 'Alice Johnson', receiverName: 'Bob Smith',
                note: 'Late night snack run 🍔🌙', amount: 28.50,
                timestamp: new Date(Date.now() - 1000 * 60 * 10), likes: 18, comments: 5, privacy: 'public',
            },
            {
                id: '2', senderName: 'Carol White', receiverName: 'David Brown',
                note: 'Game night contribution 🎲', amount: 15.00,
                timestamp: new Date(Date.now() - 1000 * 60 * 45), likes: 9, comments: 2, privacy: 'friends',
            },
        ],
        onLike: (id) => console.log('Liked:', id),
    },
};
