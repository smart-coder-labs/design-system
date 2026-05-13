import type { Meta, StoryObj } from '@storybook/react';
import { PeerTagInput } from './PeerTagInput';

const meta = {
  title: 'Fintech/Social & P2P/PeerTagInput',
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

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PeerTagInput used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
