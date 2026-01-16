import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/ui/Chip';
import { Tag, Star, CheckCircle } from 'lucide-react';

const meta: Meta<typeof Chip> = {
    title: 'Data Display/Chip',
    component: Chip,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
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
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        label: 'Default Chip',
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

export const WithIcon: Story = {
    args: {
        label: 'Tagged',
        icon: Tag,
        variant: 'primary',
    },
};

export const WithDelete: Story = {
    args: {
        label: 'Deletable',
        variant: 'default',
        onDelete: () => alert('Chip deleted'),
    },
};

export const Clickable: Story = {
    args: {
        label: 'Clickable',
        variant: 'primary',
        onClick: () => alert('Chip clicked'),
    },
};

export const Small: Story = {
    args: {
        label: 'Small Chip',
        size: 'sm',
        variant: 'primary',
    },
};

export const Large: Story = {
    args: {
        label: 'Large Chip',
        size: 'lg',
        variant: 'primary',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip label="Default" variant="default" />
            <Chip label="Primary" variant="primary" />
            <Chip label="Success" variant="success" icon={CheckCircle} />
            <Chip label="Warning" variant="warning" />
            <Chip label="Error" variant="error" />
            <Chip label="Info" variant="info" />
        </div>
    ),
};

export const WithIconsAndDelete: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip label="React" variant="primary" icon={Star} onDelete={() => { }} />
            <Chip label="TypeScript" variant="info" icon={Tag} onDelete={() => { }} />
            <Chip label="Tailwind" variant="success" icon={CheckCircle} onDelete={() => { }} />
        </div>
    ),
};
