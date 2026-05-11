import type { Meta, StoryObj } from '@storybook/react';
import { QuickTransferBar } from './QuickTransferBar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/QuickTransferBar',
  component: QuickTransferBar,
  tags: ['autodocs'],
} satisfies Meta<typeof QuickTransferBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContacts = [
  { id: '1', name: 'Alice Johnson', initials: 'AJ', lastTransfer: '2h ago' },
  { id: '2', name: 'Bob Martinez', initials: 'BM', lastTransfer: 'Yesterday' },
  { id: '3', name: 'Carol Smith', initials: 'CS', lastTransfer: '3d ago' },
  { id: '4', name: 'Dave Wilson', initials: 'DW', lastTransfer: '1w ago' },
  { id: '5', name: 'Eve Davis', initials: 'ED', lastTransfer: '2w ago' },
  { id: '6', name: 'Frank Lee', initials: 'FL', lastTransfer: '3w ago' },
  { id: '7', name: 'Grace Kim', initials: 'GK', lastTransfer: '1mo ago' },
];

export const Default: Story = {
  args: {
    contacts: sampleContacts.slice(0, 5),
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const Minimal: Story = {
  args: {
    contacts: [
      { id: '1', name: 'Alice Johnson', initials: 'AJ' },
    ],
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const ManyContacts: Story = {
  args: {
    contacts: sampleContacts,
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const CustomTitle: Story = {
  args: {
    contacts: sampleContacts.slice(0, 4),
    title: 'Send to',
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const WithAvatars: Story = {
  args: {
    contacts: [
      { id: '1', name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=alice', initials: 'AJ' },
      { id: '2', name: 'Bob Martinez', avatarUrl: 'https://i.pravatar.cc/150?u=bob', initials: 'BM' },
      { id: '3', name: 'Carol Smith', avatarUrl: 'https://i.pravatar.cc/150?u=carol', initials: 'CS' },
    ],
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const NoContacts: Story = {
  args: {
    contacts: [],
    onSelect: fn(),
    onAddNew: fn(),
  },
};

export const WithLastTransfer: Story = {
  args: {
    contacts: sampleContacts.slice(0, 4).map(c => ({ ...c, lastTransfer: c.lastTransfer })),
    onSelect: fn(),
    onAddNew: fn(),
    title: 'Recent transfers',
  },
};

export const EmptyNoAddNew: Story = {
  args: {
    contacts: [],
    title: 'Quick Transfer',
  },
};
