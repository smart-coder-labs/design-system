import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IdentityVerificationStep, DocumentSlot } from './IdentityVerificationStep';

const documents: DocumentSlot[] = [
  { type: 'id_front', label: 'ID Front', status: 'success', fileName: 'id_front.jpg' },
  { type: 'id_back', label: 'ID Back', status: 'uploading', progress: 60 },
  { type: 'selfie', label: 'Selfie', status: 'idle', description: 'Take a photo of yourself' },
  { type: 'proof_of_address', label: 'Proof of Address', status: 'failed', errorMessage: 'File too large. Max 5MB.' },
];

const meta: Meta<typeof IdentityVerificationStep> = {
  title: 'Components/IdentityVerificationStep',
  component: IdentityVerificationStep,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    documents,
  },
};

export const AllIdle: Story = {
  args: {
    documents: [
      { type: 'id_front', label: 'ID Front', status: 'idle' },
      { type: 'id_back', label: 'ID Back', status: 'idle' },
      { type: 'selfie', label: 'Selfie', status: 'idle' },
    ],
  },
};

export const AllVerified: Story = {
  args: {
    title: 'Verification Complete',
    subtitle: 'Your identity has been verified successfully',
    documents: [
      { type: 'id_front', label: 'ID Front', status: 'success', fileName: 'front.jpg' },
      { type: 'id_back', label: 'ID Back', status: 'success', fileName: 'back.jpg' },
      { type: 'selfie', label: 'Selfie', status: 'success', fileName: 'selfie.jpg' },
    ],
  },
};

export const VerifyingState: Story = {
  args: {
    title: 'Verifying your documents',
    subtitle: 'Please wait while we verify your identity',
    documents: [
      { type: 'id_front', label: 'ID Front', status: 'verifying', fileName: 'front.jpg' },
      { type: 'id_back', label: 'ID Back', status: 'verifying', fileName: 'back.jpg' },
      { type: 'selfie', label: 'Selfie', status: 'success', fileName: 'selfie.jpg' },
    ],
  },
};
