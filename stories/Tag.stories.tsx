import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag';
import { Hash, Star, Zap, Code } from 'lucide-react';

const meta: Meta<typeof Tag> = {
    title: 'Data Display/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'outline'],
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
type Story = StoryObj<typeof Tag>;

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
        label: 'Success',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        label: 'Warning',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        label: 'Error',
        variant: 'error',
    },
};

export const Outline: Story = {
    args: {
        label: 'Outline',
        variant: 'outline',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Featured',
        icon: Star,
        variant: 'primary',
    },
};

export const WithRemove: Story = {
    args: {
        label: 'Removable',
        variant: 'default',
        onRemove: () => alert('Tag removed'),
    },
};

export const Clickable: Story = {
    args: {
        label: 'Clickable',
        variant: 'primary',
        onClick: () => alert('Tag clicked'),
    },
};

export const Small: Story = {
    args: {
        label: 'Small',
        size: 'sm',
        variant: 'primary',
    },
};

export const Large: Story = {
    args: {
        label: 'Large',
        size: 'lg',
        variant: 'primary',
    },
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

export const CategoryTags: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag label="javascript" variant="primary" icon={Code} />
            <Tag label="typescript" variant="info" icon={Code} />
            <Tag label="react" variant="success" icon={Zap} />
            <Tag label="featured" variant="warning" icon={Star} />
            <Tag label="trending" variant="error" icon={Hash} />
        </div>
    ),
};

export const RemovableTags: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag label="Design" variant="primary" onRemove={() => { }} />
            <Tag label="Development" variant="success" onRemove={() => { }} />
            <Tag label="Marketing" variant="warning" onRemove={() => { }} />
            <Tag label="Sales" variant="error" onRemove={() => { }} />
        </div>
    ),
};
