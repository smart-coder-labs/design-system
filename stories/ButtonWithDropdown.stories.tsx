import type { Meta, StoryObj } from '@storybook/react';
import { ButtonWithDropdown } from '../components/ButtonWithDropdown';
import { Download, FileText, Image, Video } from 'lucide-react';

const meta: Meta<typeof ButtonWithDropdown> = {
    title: 'Buttons/ButtonWithDropdown',
    component: ButtonWithDropdown,
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
type Story = StoryObj<typeof ButtonWithDropdown>;

export const Default: Story = {
    args: {
        label: 'Download',
        actions: [
            {
                label: 'Download as PDF',
                onClick: () => alert('Download as PDF'),
                icon: FileText,
            },
            {
                label: 'Download as Image',
                onClick: () => alert('Download as Image'),
                icon: Image,
            },
            {
                label: 'Download as Video',
                onClick: () => alert('Download as Video'),
                icon: Video,
            },
        ],
    },
};

export const Secondary: Story = {
    args: {
        label: 'Actions',
        variant: 'secondary',
        actions: [
            {
                label: 'Edit',
                onClick: () => alert('Edit'),
            },
            {
                label: 'Duplicate',
                onClick: () => alert('Duplicate'),
            },
            {
                label: 'Delete',
                onClick: () => alert('Delete'),
            },
        ],
    },
};

export const WithDisabledAction: Story = {
    args: {
        label: 'Export',
        actions: [
            {
                label: 'Export as CSV',
                onClick: () => alert('Export as CSV'),
            },
            {
                label: 'Export as Excel',
                onClick: () => alert('Export as Excel'),
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
        label: 'Options',
        size: 'sm',
        variant: 'secondary',
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
