import type { Meta, StoryObj } from '@storybook/react';
import { QuickTransferBar } from './QuickTransferBar';

const meta = {
  title: 'Components/QuickTransferBar',
  component: QuickTransferBar,
  tags: ['autodocs'],
} satisfies Meta<typeof QuickTransferBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onTransfer: (data: any) => console.log('Transfer:', data),
  },
};

export const WithRecentContacts: Story = {
  args: {
    recentContacts: [
      { id: '1', name: 'Alice', avatar: '', handle: '@alice' },
      { id: '2', name: 'Bob', avatar: '', handle: '@bob' },
      { id: '3', name: 'Carol', avatar: '', handle: '@carol' },
      { id: '4', name: 'Dave', avatar: '', handle: '@dave' },
    ],
    onTransfer: (data: any) => console.log('Transfer:', data),
  },
};

export const WithPresetAmounts: Story = {
  args: {
    recentContacts: [
      { id: '1', name: 'Alice', avatar: '', handle: '@alice' },
      { id: '2', name: 'Bob', avatar: '', handle: '@bob' },
    ],
    presetAmounts: [10, 25, 50, 100, 250],
    onTransfer: (data: any) => console.log('Transfer:', data),
  },
};
