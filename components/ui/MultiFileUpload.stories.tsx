import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MultiFileUpload } from './MultiFileUpload';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MultiFileUpload> = {
  title: 'Components/MultiFileUpload',
  component: MultiFileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const WithExistingFiles: Story = {
  args: {
    files: [
      { id: '1', name: 'passport.pdf', size: 2450000, status: 'uploaded' },
      { id: '2', name: 'selfie.jpg', size: 1800000, status: 'uploaded' },
    ],
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const WithUploading: Story = {
  args: {
    files: [
      { id: '1', name: 'statement.pdf', size: 3100000, status: 'uploading', progress: 65 },
      { id: '2', name: 'id_card.png', size: 1200000, status: 'uploaded' },
    ],
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const WithError: Story = {
  args: {
    files: [
      { id: '1', name: 'invalid_file.exe', size: 500000, status: 'error', error: 'File type not supported' },
      { id: '2', name: 'receipt.pdf', size: 420000, status: 'uploaded' },
    ],
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const KYCUpload: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <h3 className="text-sm font-bold text-text-primary">Identity Verification</h3>
        <p className="text-xs text-text-tertiary mt-1">Upload your documents for verification</p>
      </div>
      <MultiFileUpload
        files={[
          { id: '1', name: 'passport_us.pdf', size: 2800000, status: 'uploaded' },
          { id: '2', name: 'selfie_photo.jpg', size: 1500000, status: 'uploading', progress: 72 },
        ]}
        accept="image/*,application/pdf"
        maxFiles={3}
        maxSize={5242880}
        onUpload={action('upload')}
        onRemove={action('remove')}
      />
    </div>
  ),
};

export const ReceiptUpload: Story = {
  args: {
    files: [
      { id: '1', name: 'receipt_amazon_apr15.png', size: 890000, status: 'uploaded' },
      { id: '2', name: 'receipt_starbucks.png', size: 450000, status: 'uploaded' },
      { id: '3', name: 'receipt_uber_apr14.png', size: 320000, status: 'uploaded' },
    ],
    maxFiles: 10,
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const LargeFileError: Story = {
  args: {
    files: [
      { id: '1', name: 'large_video.mp4', size: 150000000, status: 'error', error: 'File exceeds 10MB limit' },
    ],
    maxSize: 10485760,
    onUpload: action('upload'),
    onRemove: action('remove'),
  },
};

export const EmptyUploadZone: Story = {
  args: {
    onUpload: action('upload'),
    onRemove: action('remove'),
    accept: '.pdf,.jpg,.png',
    maxSize: 10485760,
  },
};
