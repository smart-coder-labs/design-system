import type { Meta, StoryObj } from '@storybook/react';
import { MultiFileUpload } from '../components/MultiFileUpload';
import { useState } from 'react';

const meta: Meta<typeof MultiFileUpload> = {
    title: 'Forms/MultiFileUpload',
    component: MultiFileUpload,
    tags: ['autodocs'],
    argTypes: {
        accept: {
            control: 'text',
        },
        maxSize: {
            control: 'number',
        },
        maxFiles: {
            control: 'number',
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'text',
        },
        helperText: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MultiFileUpload>;

export const Default: Story = {
    render: (args) => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="max-w-xl">
                <MultiFileUpload
                    {...args}
                    value={files}
                    onChange={setFiles}
                />
            </div>
        );
    },
    args: {
        label: 'Upload Documents',
    },
};

export const WithFileLimit: Story = {
    render: (args) => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="max-w-xl">
                <MultiFileUpload
                    {...args}
                    value={files}
                    onChange={setFiles}
                    maxFiles={3}
                    helperText="Upload up to 3 files"
                />
            </div>
        );
    },
    args: {
        label: 'Portfolio Items',
    },
};

export const ImagesOnly: Story = {
    render: (args) => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="max-w-xl">
                <MultiFileUpload
                    {...args}
                    value={files}
                    onChange={setFiles}
                    accept="image/*"
                    helperText="Supports: JPG, PNG, GIF"
                />
            </div>
        );
    },
    args: {
        label: 'Gallery Images',
    },
};

export const WithSizeLimit: Story = {
    render: (args) => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="max-w-xl">
                <MultiFileUpload
                    {...args}
                    value={files}
                    onChange={setFiles}
                    maxSize={1024 * 1024} // 1MB
                    helperText="Max size per file: 1MB"
                />
            </div>
        );
    },
    args: {
        label: 'Attachments',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload Disabled',
        disabled: true,
        value: [
            new File([''], 'document.pdf', { type: 'application/pdf' }),
            new File([''], 'image.png', { type: 'image/png' }),
        ],
    },
};
