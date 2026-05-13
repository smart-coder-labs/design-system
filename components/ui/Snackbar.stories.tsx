import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    message: 'Transaction completed successfully',
  },
};

export const Success: Story = {
  args: {
    open: true,
    message: 'Transfer of 0.5 BTC completed',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    open: true,
    message: 'Transaction failed. Insufficient funds.',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    open: true,
    message: 'Network congestion detected. Fees may be higher.',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    open: true,
    message: '2FA required for this withdrawal.',
    variant: 'info',
  },
};

export const WithAction: Story = {
  args: {
    open: true,
    message: 'Item moved to trash',
    action: { label: 'Undo', onClick: () => alert('Undo clicked') },
  },
};

export const AutoHide: Story = {
  args: {
    open: true,
    message: 'This will auto-dismiss',
    autoHideDuration: 3000,
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
