import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SecurityOTPInput } from '../components/ui/SecurityOTPInput';

const meta: Meta<typeof SecurityOTPInput> = {
    title: 'Fintech/KYC/SecurityOTPInput',
    component: SecurityOTPInput,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        status: { control: 'select', options: ['idle', 'loading', 'success', 'error'] },
        length: { control: { type: 'number', min: 4, max: 8, step: 1 } },
    },
};

export default meta;
type Story = StoryObj<typeof SecurityOTPInput>;

export const Default: Story = {
    args: {
        length: 6,
        status: 'idle',
        label: 'Verification Code',
        description: 'Enter the 6-digit code sent to your device',
    },
};

export const Loading: Story = {
    args: { ...Default.args, status: 'loading' },
};

export const Success: Story = {
    args: { ...Default.args, status: 'success' },
};

export const Error: Story = {
    args: { ...Default.args, status: 'error', errorMessage: 'Invalid code. Please try again.' },
};

export const FourDigit: Story = {
    args: { length: 4, status: 'idle', label: 'PIN', description: 'Enter your 4-digit PIN' },
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const TwoFactorLogin: Story = {
    name: '🔐 Caso de Uso: Login 2FA',
    render: () => {
        const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

        const handleComplete = (code: string) => {
            setStatus('loading');
            setTimeout(() => {
                setStatus(code === '123456' ? 'success' : 'error');
                if (code !== '123456') {
                    setTimeout(() => setStatus('idle'), 2000);
                }
            }, 1500);
        };

        return (
            <div className="w-[400px] bg-surface-primary rounded-2xl border border-border-primary p-8">
                <SecurityOTPInput
                    status={status}
                    onComplete={handleComplete}
                    description='Enter 123456 to succeed, any other to fail'
                />
            </div>
        );
    },
};

export const Playground: Story = {
    name: '🎨 Playground',
    args: { ...Default.args },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};
