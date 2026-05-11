import type { Meta, StoryObj } from '@storybook/react';
import { MultiFileUpload } from './MultiFileUpload';

const meta = {
    title: 'Components/MultiFileUpload',
    component: MultiFileUpload,
    tags: ['autodocs'],
} satisfies Meta<typeof MultiFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Upload Documents',
    },
};

export const WithAcceptedTypes: Story = {
    args: {
        label: 'Upload Statements',
        accept: '.pdf,.csv,.xlsx',
        helperText: 'Accepted formats: PDF, CSV, Excel',
    },
};

export const WithSizeLimit: Story = {
    args: {
        label: 'Upload Receipts',
        accept: 'image/*',
        maxSize: 5 * 1024 * 1024, // 5MB
        helperText: 'Max file size: 5MB',
    },
};

export const WithMaxFiles: Story = {
    args: {
        label: 'Upload KYC Documents',
        accept: 'image/*,.pdf',
        maxFiles: 3,
        helperText: 'Maximum 3 files allowed',
    },
};

export const WithError: Story = {
    args: {
        label: 'Upload Documents',
        error: 'File size exceeds the maximum limit',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload Documents',
        disabled: true,
        helperText: 'File upload is currently disabled',
    },
};

export const AllConstraints: Story = {
    args: {
        label: 'Investment Documents',
        accept: '.pdf',
        maxSize: 10 * 1024 * 1024,
        maxFiles: 5,
        helperText: 'PDF files only, max 10MB each, up to 5 files',
    },
};
