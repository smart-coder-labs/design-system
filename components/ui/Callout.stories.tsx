import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta = {
    title: 'Components/Callout',
    component: Callout,
    tags: ['autodocs'],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        children: 'Your transaction limit has been updated to $5,000 daily.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Payment Successful',
        children: 'Your payment of $1,250.00 has been processed successfully.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Low Balance Alert',
        children: 'Your checking account balance is below $100. Consider transferring funds.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Transaction Failed',
        children: 'The transaction could not be completed due to insufficient funds.',
    },
};

export const Neutral: Story = {
    args: {
        variant: 'neutral',
        title: 'Note',
        children: 'This action cannot be undone. Please review before proceeding.',
    },
};

export const WithoutTitle: Story = {
    args: {
        variant: 'info',
        children: 'Your session will expire in 5 minutes.',
    },
};

export const Dismissible: Story = {
    args: {
        variant: 'info',
        title: 'Announcement',
        children: 'New features are available. Check out the updated dashboard.',
        dismissible: true,
        onDismiss: () => {},
    },
};

export const DismissibleWarning: Story = {
    args: {
        variant: 'warning',
        title: 'Update Required',
        children: 'Please update your app to the latest version for improved security.',
        dismissible: true,
        onDismiss: () => {},
    },
};
