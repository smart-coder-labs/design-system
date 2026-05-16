import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { TagIcon, Star } from 'lucide-react';
import { useState } from 'react';

const meta = {
    title: 'Data Display/Tag',
    component: Tag,
    tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Default Tag',
    },
};

export const Primary: Story = {
    args: {
        label: 'Primary',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        label: 'Active',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        label: 'Pending',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        label: 'Suspended',
        variant: 'error',
    },
};

export const Info: Story = {
    args: {
        label: 'New Feature',
        variant: 'info',
    },
};

export const Outline: Story = {
    args: {
        label: 'Draft',
        variant: 'outline',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Premium',
        variant: 'primary',
        icon: Star,
    },
};

export const Removable: Story = {
    args: {
        label: 'investment',
        variant: 'default',
        onRemove: () => alert('Removed tag'),
    },
};

export const Clickable: Story = {
    args: {
        label: 'View Details',
        variant: 'info',
        onClick: () => alert('Tag clicked!'),
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Tag label="Small" size="sm" />
            <Tag label="Medium" size="md" />
            <Tag label="Large" size="lg" />
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag label="Default" variant="default" />
            <Tag label="Primary" variant="primary" />
            <Tag label="Success" variant="success" />
            <Tag label="Warning" variant="warning" />
            <Tag label="Error" variant="error" />
            <Tag label="Info" variant="info" />
            <Tag label="Outline" variant="outline" />
        </div>
    ),
};

export const FintechTags: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag label="AAPL" variant="primary" size="sm" />
            <Tag label="Active" variant="success" size="sm" />
            <Tag label="Pending" variant="warning" size="sm" />
            <Tag label="Failed" variant="error" size="sm" />
            <Tag label="Verified" variant="success" size="sm" />
            <Tag label="Premium Account" variant="primary" icon={Star} size="md" />
            <Tag label="savings" variant="default" size="sm" onRemove={() => {}} />
            <Tag label="investment" variant="default" size="sm" onRemove={() => {}} />
            <Tag label="crypto" variant="outline" size="sm" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Tag',
        disabled: true,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        label: 'Dark Mode',
        variant: 'primary',
    },
};
