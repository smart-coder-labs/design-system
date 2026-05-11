import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Default',
        variant: 'default',
        size: 'md',
    },
};

export const Variants: Story = {
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

export const Removable: Story = {
    args: {
        label: 'Investment',
        variant: 'primary',
        size: 'md',
        onRemove: () => alert('Tag removed'),
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Tag label="Small" size="sm" variant="primary" />
            <Tag label="Medium" size="md" variant="primary" />
            <Tag label="Large" size="lg" variant="primary" />
        </div>
    ),
};

export const Clickable: Story = {
    args: {
        label: 'Click me',
        variant: 'info',
        onClick: () => alert('Tag clicked'),
    },
};

export const FintechTags: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag label="Verified" variant="success" />
            <Tag label="Pending" variant="warning" />
            <Tag label="Suspended" variant="error" />
            <Tag label="Premium" variant="primary" />
            <Tag label="Promotion" variant="info" size="sm" />
            <Tag label="New" variant="outline" size="sm" />
        </div>
    ),
};
