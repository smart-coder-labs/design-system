import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FileUpload } from './FileUpload';
import { action } from 'storybook/actions';

const meta: Meta<typeof FileUpload> = {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Upload document',
    onChange: action('file-changed'),
  },
};

export const ImageOnly: Story = {
  args: {
    label: 'Upload profile picture',
    accept: 'image/*',
    onChange: action('file-changed'),
  },
};

export const WithSizeLimit: Story = {
  args: {
    label: 'Upload file (max 5MB)',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    onChange: action('file-changed'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Upload (disabled)',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Upload file',
    error: 'Invalid file type. Only PDF files are allowed.',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Upload ID document',
    helperText: 'Accepted formats: PDF, JPG, PNG. Max 10MB.',
    accept: '.pdf,.jpg,.png',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
