import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SocialPaymentFeed, type SocialPaymentInfo } from '../components/ui/SocialPaymentFeed';

const meta: Meta<typeof SocialPaymentFeed> = {
    title: 'Fintech/Social & P2P/SocialPaymentFeed',
    component: SocialPaymentFeed,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialPaymentFeed>;

const mockPayments: SocialPaymentInfo[] = [
    {
        id: 'p1',
        senderName: 'Sarah Jenkins',
        receiverName: 'Mike Ross',
        senderAvatar: 'https://i.pravatar.cc/150?u=sarah',
        receiverAvatar: 'https://i.pravatar.cc/150?u=mike',
        amount: 25.50,
        currency: 'USD',
        note: 'Pizza and beers last night 🍕🍻',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        privacy: 'public',
        likes: 3,
        comments: 1,
    },
    {
        id: 'p2',
        senderName: 'Alex River',
        receiverName: 'You',
        senderAvatar: 'https://i.pravatar.cc/150?u=alex',
        amount: 150.00,
        currency: 'USD',
        note: 'Rent for the cabin getaway 🌲',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        privacy: 'friends',
        likes: 12,
        comments: 4,
    },
    {
        id: 'p3',
        senderName: 'You',
        receiverName: 'Unknown',
        receiverAvatar: 'https://i.pravatar.cc/150?u=unknown',
        amount: 5.00,
        currency: 'USD',
        note: 'Coffee ☕',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        privacy: 'private',
        likes: 0,
        comments: 0,
    }
];

export const Default: Story = {
    args: {
        payments: mockPayments,
        onLike: (id: string) => console.log('Liked:', id),
        onComment: (id: string) => console.log('Comment on:', id),
    },
};
