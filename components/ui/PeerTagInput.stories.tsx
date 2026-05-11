import type { Meta, StoryObj } from '@storybook/react';
import { PeerTagInput } from './PeerTagInput';

const meta = {
  title: 'Components/PeerTagInput',
  component: PeerTagInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PeerTagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search peers...',
    onSelect: (peer: any) => console.log('Selected peer:', peer),
  },
};

export const WithRecentPeers: Story = {
  args: {
    placeholder: 'Search or select a peer...',
    recentPeers: [
      { id: '1', name: 'Alice Johnson', handle: '@alice', avatar: '' },
      { id: '2', name: 'Bob Smith', handle: '@bob', avatar: '' },
      { id: '3', name: 'Carol White', handle: '@carol', avatar: '' },
    ],
    onSelect: (peer: any) => console.log('Selected peer:', peer),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Send to',
    placeholder: 'Enter name or handle...',
    onSelect: (peer: any) => console.log('Selected peer:', peer),
  },
};

export const WithError: Story = {
  args: {
    label: 'Recipient',
    placeholder: 'Enter name or handle...',
    error: 'Recipient not found',
    onSelect: (peer: any) => console.log('Selected peer:', peer),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Peer selection unavailable',
    disabled: true,
    onSelect: (peer: any) => console.log('Selected peer:', peer),
  },
};
