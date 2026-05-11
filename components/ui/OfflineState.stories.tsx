import type { Meta, StoryObj } from '@storybook/react';
import { OfflineState } from './OfflineState';

const meta = {
  title: 'Components/OfflineState',
  component: OfflineState,
  tags: ['autodocs'],
} satisfies Meta<typeof OfflineState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'You are currently offline. Some features may be unavailable.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'No Internet Connection',
    message: 'Please check your connection and try again.',
  },
};

export const CustomIcon: Story = {
  args: {
    title: 'Connection Lost',
    message: 'We could not reach our servers.',
    icon: 'wifi',
  },
};

export const WithRetry: Story = {
  args: {
    title: 'Connection Error',
    message: 'Unable to connect to the server.',
    onRetry: () => alert('Retrying...'),
    retryLabel: 'Try Again',
  },
};

export const Minimal: Story = {
  args: {
    message: 'Offline',
  },
};
