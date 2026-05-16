import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from './ChatBubble';

const meta = {
    title: 'Data Display/ChatBubble',
    component: ChatBubble,
    tags: ['autodocs'],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReceivedMessage: Story = {
    args: {
        message: 'Hey, can you review the latest design mockups?',
        sender: 'Alice',
        timestamp: '10:42 AM',
        isOwn: false,
    },
};

export const SentMessage: Story = {
    args: {
        message: 'Sure, I\'ll take a look right now.',
        sender: 'You',
        timestamp: '10:43 AM',
        isOwn: true,
    },
};

export const WithAvatar: Story = {
    args: {
        message: 'The new dashboard looks great!',
        sender: 'Bob Smith',
        avatar: 'https://i.pravatar.cc/150?u=bob-chat',
        timestamp: '11:15 AM',
        isOwn: false,
        showAvatar: true,
    },
};

export const SystemMessage: Story = {
    args: {
        message: 'Alice has joined the conversation',
        variant: 'system',
        showTimestamp: true,
    },
};

export const ErrorMessage: Story = {
    args: {
        message: 'Failed to send message. Tap to retry.',
        variant: 'error',
        isOwn: true,
        timestamp: '11:20 AM',
    },
};

export const WithStatus: Story = {
    args: {
        message: 'The payment has been processed.',
        sender: 'You',
        timestamp: '11:30 AM',
        isOwn: true,
        status: 'read',
        showTimestamp: true,
    },
};

export const SendingStatus: Story = {
    args: {
        message: 'Transferring funds...',
        sender: 'You',
        timestamp: '11:31 AM',
        isOwn: true,
        status: 'sending',
    },
};

export const LongMessage: Story = {
    args: {
        message: 'Here is the detailed breakdown of the Q4 investment portfolio performance. We saw a 12.5% increase in equities, 3.2% in bonds, and crypto remained volatile. Overall portfolio return was 8.7%.',
        sender: 'Analyst Bot',
        timestamp: '2:00 PM',
        isOwn: false,
    },
};
