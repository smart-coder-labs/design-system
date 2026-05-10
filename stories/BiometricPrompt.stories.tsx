import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BiometricPrompt } from '../components/ui/BiometricPrompt';

const meta: Meta<typeof BiometricPrompt> = {
    title: 'Fintech/KYC/BiometricPrompt',
    component: BiometricPrompt,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        type: { control: 'select', options: ['faceid', 'touchid'] },
        status: { control: 'select', options: ['idle', 'scanning', 'success', 'error'] },
    },
};

export default meta;
type Story = StoryObj<typeof BiometricPrompt>;

export const FaceIdIdle: Story = {
    name: '👤 Face ID — Idle',
    args: { type: 'faceid', status: 'idle' },
};

export const FaceIdScanning: Story = {
    name: '👤 Face ID — Scanning',
    args: { type: 'faceid', status: 'scanning' },
};

export const FaceIdSuccess: Story = {
    name: '👤 Face ID — Success',
    args: { type: 'faceid', status: 'success' },
};

export const FaceIdError: Story = {
    name: '👤 Face ID — Error',
    args: { type: 'faceid', status: 'error' },
};

export const TouchIdIdle: Story = {
    name: '👆 Touch ID — Idle',
    args: { type: 'touchid', status: 'idle' },
};

export const InteractiveFaceId: Story = {
    name: '🔐 Interactive Face ID',
    render: () => {
        const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

        const handleStart = () => {
            setStatus('scanning');
            setTimeout(() => {
                const success = Math.random() > 0.3;
                setStatus(success ? 'success' : 'error');
            }, 2000);
        };

        const handleCancel = () => {
            setStatus('idle');
        };

        return (
            <div>
                {status === 'idle' && (
                    <button
                        onClick={handleStart}
                        className="px-5 py-3 bg-accent-blue text-white rounded-2xl text-sm font-bold shadow-sm mb-4"
                    >
                        Start Biometric Auth
                    </button>
                )}
                <BiometricPrompt
                    type="faceid"
                    status={status}
                    onStart={handleStart}
                    onCancel={handleCancel}
                    successMessage="Identity verified!"
                    errorMessage="Authentication failed"
                />
            </div>
        );
    },
};
