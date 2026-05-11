import type { Meta, StoryObj } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';

const meta = {
    title: 'Components/MarkdownEditor',
    component: MarkdownEditor,
    tags: ['autodocs'],
} satisfies Meta<typeof MarkdownEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabel: Story = {
    args: {
        label: 'Description',
        placeholder: 'Write your description using markdown...',
    },
};

export const WithContent: Story = {
    args: {
        label: 'Transaction Notes',
        value: '## Transaction Summary\n\n- **Amount:** $1,250.00\n- **Date:** January 15, 2026\n- **Status:** `completed`\n\nThis transfer was processed successfully.',
    },
};

export const WithError: Story = {
    args: {
        label: 'Comments',
        value: '',
        error: 'This field is required',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Investment Notes',
        helperText: 'Supports markdown formatting for rich text.',
        value: 'Consider investing in **index funds** for long-term growth.',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Read-only Notes',
        value: '# Archived\nThis note has been archived and cannot be edited.',
        disabled: true,
    },
};

export const CustomHeight: Story = {
    args: {
        label: 'Detailed Analysis',
        placeholder: 'Write a detailed analysis...',
        minHeight: '400px',
    },
};
