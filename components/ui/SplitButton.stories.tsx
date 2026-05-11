import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';
import { Download, Share2, Eye, Printer, Edit3, Trash2, Archive } from 'lucide-react';

const meta = {
    title: 'Components/SplitButton',
    component: SplitButton,
    tags: ['autodocs'],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Export',
        onClick: () => alert('Exporting...'),
        actions: [
            { label: 'Export as PDF', icon: Download, onClick: () => alert('Exporting as PDF') },
            { label: 'Export as CSV', icon: Download, onClick: () => alert('Exporting as CSV') },
            { label: 'Print', icon: Printer, onClick: () => alert('Printing...') },
        ],
    },
};

export const Primary: Story = {
    args: {
        label: 'Share Report',
        onClick: () => alert('Sharing...'),
        actions: [
            { label: 'Share via Email', icon: Share2, onClick: () => alert('Email share') },
            { label: 'Share via Link', icon: Share2, onClick: () => alert('Link share') },
            { label: 'Preview', icon: Eye, onClick: () => alert('Preview') },
        ],
        variant: 'primary',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Export',
        onClick: () => alert('Exporting...'),
        actions: [
            { label: 'PDF', icon: Download, onClick: () => alert('PDF') },
            { label: 'CSV', icon: Download, onClick: () => alert('CSV') },
        ],
        disabled: true,
    },
};

export const WithDisabledAction: Story = {
    args: {
        label: 'Manage Document',
        onClick: () => alert('Opening...'),
        actions: [
            { label: 'Edit', icon: Edit3, onClick: () => alert('Editing') },
            { label: 'Archive', icon: Archive, onClick: () => alert('Archiving'), disabled: true },
            { label: 'Delete', icon: Trash2, onClick: () => alert('Deleting'), disabled: true },
        ],
    },
};

export const Secondary: Story = {
    args: {
        label: 'More Options',
        onClick: () => alert('Default action'),
        actions: [
            { label: 'View Details', icon: Eye, onClick: () => alert('Viewing details') },
            { label: 'Duplicate', onClick: () => alert('Duplicating') },
        ],
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        label: 'Actions',
        onClick: () => alert('Default action'),
        actions: [
            { label: 'Option 1', onClick: () => alert('Option 1') },
            { label: 'Option 2', onClick: () => alert('Option 2') },
        ],
        variant: 'tertiary',
    },
};

export const Small: Story = {
    args: {
        label: 'Export',
        onClick: () => alert('Exporting...'),
        actions: [
            { label: 'PDF', icon: Download, onClick: () => alert('PDF') },
            { label: 'CSV', icon: Download, onClick: () => alert('CSV') },
        ],
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        label: 'Share Report',
        onClick: () => alert('Sharing...'),
        actions: [
            { label: 'Email', icon: Share2, onClick: () => alert('Email') },
            { label: 'Link', icon: Share2, onClick: () => alert('Link') },
        ],
        size: 'lg',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        label: 'Export',
        onClick: () => alert('Exporting...'),
        actions: [
            { label: 'PDF', icon: Download, onClick: () => alert('PDF') },
            { label: 'CSV', icon: Download, onClick: () => alert('CSV') },
        ],
    },
};
