import type { Meta, StoryObj } from '@storybook/react';
import { BiometricPrompt } from './BiometricPrompt';

const meta = {
    title: 'Components/BiometricPrompt',
    component: BiometricPrompt,
    tags: ['autodocs'],
} satisfies Meta<typeof BiometricPrompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaceIdIdle: Story = {
    args: {
        type: 'faceId',
        status: 'idle',
        open: true,
    },
};

export const FaceIdScanning: Story = {
    args: {
        type: 'faceId',
        status: 'scanning',
        open: true,
    },
};

export const FaceIdSuccess: Story = {
    args: {
        type: 'faceId',
        status: 'success',
        open: true,
    },
};

export const FaceIdFailed: Story = {
    args: {
        type: 'faceId',
        status: 'failed',
        open: true,
    },
};

export const TouchIdIdle: Story = {
    args: {
        type: 'touchId',
        status: 'idle',
        open: true,
    },
};

export const TouchIdScanning: Story = {
    args: {
        type: 'touchId',
        status: 'scanning',
        open: true,
    },
};

export const TouchIdSuccess: Story = {
    args: {
        type: 'touchId',
        status: 'success',
        open: true,
    },
};

export const TouchIdFailed: Story = {
    args: {
        type: 'touchId',
        status: 'failed',
        open: true,
    },
};

export const CustomLabels: Story = {
    args: {
        type: 'faceId',
        status: 'idle',
        open: true,
        title: 'Verify Identity',
        subtitle: 'Look at your device to continue with the transaction',
    },
};

export const Closed: Story = {
    args: {
        type: 'faceId',
        status: 'idle',
        open: false,
    },
};
