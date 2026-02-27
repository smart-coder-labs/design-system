import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PeerTagInput, type PeerTagContact } from '../components/ui/PeerTagInput';

const meta: Meta<typeof PeerTagInput> = {
    title: 'Fintech/Social & P2P/PeerTagInput',
    component: PeerTagInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PeerTagInput>;

const mockContacts: PeerTagContact[] = [
    { id: '1', name: 'John Doe', tag: '$johndoe', avatarUrl: 'https://i.pravatar.cc/150?u=john', isVerified: true },
    { id: '2', name: 'Jane Smith', tag: '$jane', avatarUrl: 'https://i.pravatar.cc/150?u=jane', isVerified: false },
    { id: '3', name: 'Alex Johnson', tag: '$alexj', avatarUrl: 'https://i.pravatar.cc/150?u=alex', isVerified: true },
    { id: '4', name: 'Netflix', tag: '$netflix', avatarUrl: 'https://i.pravatar.cc/150?u=netflix', isVerified: true },
];

export const Default: Story = {
    args: {
        contacts: mockContacts,
        onSelect: (contact) => console.log('Selected contact:', contact),
    },
};
