import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveBillSplitter } from '../components/ui/InteractiveBillSplitter';

const meta: Meta<typeof InteractiveBillSplitter> = {
    title: 'Fintech/Social & P2P/InteractiveBillSplitter',
    component: InteractiveBillSplitter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InteractiveBillSplitter>;

export const Default: Story = {
    args: {
        billAmount: 125.50,
        currency: 'USD',
        friends: [
            { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
            { id: '2', name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
            { id: '3', name: 'Charlie', avatarUrl: 'https://i.pravatar.cc/150?u=3' },
            { id: '4', name: 'Diana', avatarUrl: 'https://i.pravatar.cc/150?u=4' },
        ],
        onSplitComplete: (finalSplits) => console.log('Split completed:', finalSplits),
    },
};
