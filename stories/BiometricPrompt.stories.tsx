import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BiometricPrompt } from '../components/ui/BiometricPrompt';

const meta: Meta<typeof BiometricPrompt> = {
    title: 'Fintech/KYC/BiometricPrompt',
    component: BiometricPrompt,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        type: { control: 'select', options: ['faceId', 'touchId'] },
        status: { control: 'select', options: ['idle', 'scanning', 'success', 'failed'] },
    },
};

export default meta;
type Story = StoryObj<typeof BiometricPrompt>;

export const FaceIdIdle: Story = {
    name: '👤 Face ID — Idle',
    args: { type: 'faceId', status: 'idle', open: true },
};

export const FaceIdScanning: Story = {
    name: '👤 Face ID — Scanning',
    args: { type: 'faceId', status: 'scanning', open: true },
};

export const FaceIdSuccess: Story = {
    name: '👤 Face ID — Success',
    args: { type: 'faceId', status: 'success', open: true },
};

export const TouchIdIdle: Story = {
    name: '👆 Touch ID — Idle',
    args: { type: 'touchId', status: 'idle', open: true },
};

export const InteractiveFaceId: Story = {
    name: '🔐 Caso de Uso: Interactive Face ID',
    render: () => {
        const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
        const [open, setOpen] = useState(true);

        const handleAuth = () => {
            setStatus('scanning');
            setTimeout(() => {
                const success = Math.random() > 0.3;
                setStatus(success ? 'success' : 'failed');
                if (success) setTimeout(() => setOpen(false), 1500);
            }, 2000);
        };

        return (
            <div>
                <button
                    onClick={() => { setOpen(true); setStatus('idle'); }}
                    className="px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold"
                >
                    Open Biometric Prompt
                </button>
                <BiometricPrompt
                    type="faceId"
                    status={status}
                    open={open}
                    onAuthenticate={handleAuth}
                    onCancel={() => setOpen(false)}
                />
            </div>
        );
    },
};
