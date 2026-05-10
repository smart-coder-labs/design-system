import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IdentityVerificationStep, type DocumentSlot } from '../components/ui/IdentityVerificationStep';

const meta: Meta<typeof IdentityVerificationStep> = {
    title: 'Fintech/KYC/IdentityVerificationStep',
    component: IdentityVerificationStep,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof IdentityVerificationStep>;

const allIdle: DocumentSlot[] = [
    { type: 'id_front', label: 'ID Card — Front', description: 'Take a clear photo of the front of your ID', status: 'idle' },
    { type: 'id_back', label: 'ID Card — Back', description: 'Take a clear photo of the back of your ID', status: 'idle' },
    { type: 'selfie', label: 'Selfie', description: 'Take a selfie matching your ID photo', status: 'idle' },
];

const mixedStatuses: DocumentSlot[] = [
    { type: 'id_front', label: 'ID Card — Front', status: 'success', fileName: 'id_front.jpg' },
    { type: 'id_back', label: 'ID Card — Back', status: 'verifying' },
    { type: 'selfie', label: 'Selfie', status: 'idle', description: 'Take a selfie matching your ID photo' },
    { type: 'proof_of_address', label: 'Proof of Address', status: 'failed', errorMessage: 'Document is expired. Please upload a recent one.', fileName: 'utility_bill.pdf' },
];

export const Default: Story = {
    args: {
        documents: allIdle,
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const MixedStates: Story = {
    name: '📋 Mixed Verification States',
    args: {
        documents: mixedStatuses,
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const AllVerified: Story = {
    name: '✅ All Documents Verified',
    args: {
        documents: allIdle.map(d => ({ ...d, status: 'success' as const, fileName: `${d.type}.jpg` })),
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const KYCOnboarding: Story = {
    name: '🏦 Caso de Uso: KYC Onboarding',
    args: {
        documents: [
            { type: 'passport', label: 'Passport', description: 'Upload your passport photo page', status: 'idle' },
            { type: 'selfie', label: 'Selfie Verification', description: 'Take a live selfie for face matching', status: 'idle' },
            { type: 'proof_of_address', label: 'Proof of Address', description: 'Utility bill or bank statement (last 3 months)', status: 'idle' },
        ],
        title: 'Complete Your Verification',
        subtitle: 'We need to verify your identity to comply with regulations',
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};
