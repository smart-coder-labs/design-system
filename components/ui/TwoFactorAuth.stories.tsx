import type { Meta, StoryObj } from '@storybook/react';
import { TwoFactorAuth } from './TwoFactorAuth';

const meta = {
    title: 'Components/TwoFactorAuth',
    component: TwoFactorAuth,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TwoFactorAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
    args: {
        method: 'email',
        recipient: 'john.doe@example.com',
        onVerify: async (code) => {
            console.log('Verifying code:', code);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        onResend: () => console.log('Resend code'),
    },
};

export const SMS: Story = {
    args: {
        method: 'sms',
        recipient: '+1 (555) 123-4567',
        onVerify: async (code) => {
            console.log('Verifying code:', code);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        onResend: () => console.log('Resend code'),
    },
};

export const AuthenticatorApp: Story = {
    args: {
        method: 'app',
        onVerify: async (code) => {
            console.log('Verifying code:', code);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const WithError: Story = {
    args: {
        method: 'email',
        recipient: 'john.doe@example.com',
        error: 'Invalid code. Please try again.',
        onVerify: async (code) => {
            console.log('Verifying code:', code);
        },
        onResend: () => console.log('Resend code'),
    },
};

export const Loading: Story = {
    args: {
        method: 'email',
        recipient: 'john.doe@example.com',
        isLoading: true,
        onVerify: async (code) => {
            console.log('Verifying code:', code);
        },
    },
};

export const Interactive: Story = {
    render: () => {
        const handleVerify = async (code: string) => {
            console.log('Verifying:', code);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate validation
            if (code === '123456') {
                alert('Verification successful!');
            } else {
                throw new Error('Invalid verification code');
            }
        };

        const handleResend = () => {
            alert('Verification code sent!');
        };

        return (
            <TwoFactorAuth
                method="email"
                recipient="john.doe@example.com"
                onVerify={handleVerify}
                onResend={handleResend}
            />
        );
    },
};

export const WithoutResend: Story = {
    args: {
        method: 'app',
        onVerify: async (code) => {
            console.log('Verifying code:', code);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const ValidationError: Story = {
    render: () => {
        const handleVerify = async (code: string) => {
            // Always fail for demo
            await new Promise(resolve => setTimeout(resolve, 500));
            throw new Error('Invalid code. Please check and try again.');
        };

        return (
            <TwoFactorAuth
                method="sms"
                recipient="+1 (555) 123-4567"
                onVerify={handleVerify}
                onResend={() => console.log('Resend')}
            />
        );
    },
};
