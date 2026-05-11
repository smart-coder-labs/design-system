import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOverlay } from './LoadingOverlay';

const meta = {
    title: 'Components/LoadingOverlay',
    component: LoadingOverlay,
    tags: ['autodocs'],
} satisfies Meta<typeof LoadingOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLoading: true,
    },
};

export const WithMessage: Story = {
    args: {
        isLoading: true,
        message: 'Loading your portfolio...',
    },
};

export const FullPage: Story = {
    args: {
        isLoading: true,
        fullPage: true,
        message: 'Preparing your account...',
    },
};

export const WithoutBlur: Story = {
    args: {
        isLoading: true,
        blur: false,
        message: 'Processing transaction',
    },
};

export const SmallSpinner: Story = {
    args: {
        isLoading: true,
        spinnerSize: 'sm',
        message: 'Syncing...',
    },
};

export const Hidden: Story = {
    args: {
        isLoading: false,
    },
};
