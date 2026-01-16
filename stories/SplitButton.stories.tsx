import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from '../components/ui/SplitButton';
import { Save, Download, Share2, Copy } from 'lucide-react';

const meta: Meta<typeof SplitButton> = {
    title: 'Buttons/SplitButton',
    component: SplitButton,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
    args: {
        label: 'Save',
        onClick: () => alert('Primary action: Save'),
        actions: [
            {
                label: 'Save as Draft',
                onClick: () => alert('Save as Draft'),
                icon: Save,
            },
            {
                label: 'Save as Template',
                onClick: () => alert('Save as Template'),
                icon: Copy,
            },
            {
                label: 'Download',
                onClick: () => alert('Download'),
                icon: Download,
            },
        ],
    },
};

export const Secondary: Story = {
    args: {
        label: 'Share',
        variant: 'secondary',
        onClick: () => alert('Primary action: Share'),
        actions: [
            {
                label: 'Share via Email',
                onClick: () => alert('Share via Email'),
            },
            {
                label: 'Share via Link',
                onClick: () => alert('Share via Link'),
            },
            {
                label: 'Copy Link',
                onClick: () => alert('Copy Link'),
                icon: Copy,
            },
        ],
    },
};

export const WithDisabledAction: Story = {
    args: {
        label: 'Export',
        onClick: () => alert('Primary action: Export'),
        actions: [
            {
                label: 'Export as PDF',
                onClick: () => alert('Export as PDF'),
            },
            {
                label: 'Export as CSV',
                onClick: () => alert('Export as CSV'),
                disabled: true,
            },
            {
                label: 'Export as JSON',
                onClick: () => alert('Export as JSON'),
            },
        ],
    },
};

export const Small: Story = {
    args: {
        label: 'Actions',
        size: 'sm',
        onClick: () => alert('Primary action'),
        actions: [
            {
                label: 'Option 1',
                onClick: () => alert('Option 1'),
            },
            {
                label: 'Option 2',
                onClick: () => alert('Option 2'),
            },
        ],
    },
};
