import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog } from './ConfirmDialog';

const meta = {
    title: 'Components/ConfirmDialog',
    component: ConfirmDialog,
    tags: ['autodocs'],
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        title: 'Confirm Action',
        description: 'Are you sure you want to proceed with this action?',
        onConfirm: () => {},
        variant: 'default',
    },
};

export const Destructive: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        title: 'Delete Account',
        description: 'This action cannot be undone. All your data will be permanently deleted.',
        confirmLabel: 'Delete',
        onConfirm: () => {},
        variant: 'destructive',
    },
};

export const Warning: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        title: 'High-Value Transfer',
        description: 'You are about to transfer $50,000 to an external account. This is a large transaction and may require additional verification.',
        confirmLabel: 'Continue Transfer',
        cancelLabel: 'Cancel',
        onConfirm: () => {},
        variant: 'warning',
    },
};

export const Info: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        title: 'Update Available',
        description: 'A new version of the app is available. Would you like to update now?',
        confirmLabel: 'Update',
        cancelLabel: 'Later',
        onConfirm: () => {},
        variant: 'info',
    },
};

export const Loading: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        title: 'Processing',
        description: 'Please wait while we process your request.',
        confirmLabel: 'Processing...',
        onConfirm: () => {},
        variant: 'default',
        isLoading: true,
    },
};

export const Closed: Story = {
    args: {
        open: false,
        onOpenChange: () => {},
        title: 'Confirm Action',
        description: 'This dialog is closed.',
        onConfirm: () => {},
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
