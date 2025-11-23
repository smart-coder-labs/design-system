import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../components/FileUpload';
import { useState } from 'react';

const meta: Meta<typeof FileUpload> = {
    title: 'Forms/FileUpload',
    component: FileUpload,
    tags: ['autodocs'],
    argTypes: {
        accept: {
            control: 'text',
        },
        maxSize: {
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
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
    render: (args) => {
        const [file, setFile] = useState<File | null>(null);
        return (
            <div className="max-w-xl">
                <FileUpload
                    {...args}
                    onChange={(f) => {
                        setFile(f);
                        console.log('File selected:', f);
                    }}
                />
            </div>
        );
    },
    args: {
        label: 'Upload Document',
    },
};

export const ImagesOnly: Story = {
    render: (args) => (
        <div className="max-w-xl">
            <FileUpload
                {...args}
                accept="image/*"
                helperText="Supports: JPG, PNG, GIF"
            />
        </div>
    ),
    args: {
        label: 'Profile Picture',
    },
};

export const WithSizeLimit: Story = {
    render: (args) => (
        <div className="max-w-xl">
            <FileUpload
                {...args}
                maxSize={1024 * 1024 * 2} // 2MB
                accept=".pdf,.doc,.docx"
            />
        </div>
    ),
    args: {
        label: 'Resume',
        helperText: 'Max file size: 2MB',
    },
};

export const WithError: Story = {
    args: {
        label: 'Upload Failed',
        error: 'File upload failed. Please try again.',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload Disabled',
        disabled: true,
    },
};
