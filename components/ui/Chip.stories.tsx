import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Tag, Star, Lock, Zap } from 'lucide-react';

const meta = {
    title: 'Components/Chip',
    component: Chip,
    tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Default Chip',
        variant: 'default',
        size: 'md',
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
        label: 'Approved',
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
        label: 'Rejected',
        variant: 'error',
    },
};

export const Info: Story = {
    args: {
        label: 'New',
        variant: 'info',
    },
};

export const Small: Story = {
    args: {
        label: 'Small',
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        label: 'Large Chip',
        size: 'lg',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Premium',
        variant: 'primary',
        icon: Star,
    },
};

export const Deletable: Story = {
    args: {
        label: 'Filter: Finance',
        variant: 'primary',
        onDelete: () => {},
    },
};

export const Clickable: Story = {
    args: {
        label: 'Click me',
        variant: 'primary',
        onClick: () => {},
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        disabled: true,
    },
};

export const DisabledDeletable: Story = {
    args: {
        label: 'Locked',
        variant: 'info',
        icon: Lock,
        disabled: true,
        onDelete: () => {},
    },
};

export const VariantShowcase: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Chip variant="default" label="Default" />
            <Chip variant="primary" label="Primary" />
            <Chip variant="success" label="Success" />
            <Chip variant="warning" label="Warning" />
            <Chip variant="error" label="Error" />
            <Chip variant="info" label="Info" />
        </div>
    ),
};

export const SizeShowcase: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Chip size="sm" label="Small" />
            <Chip size="md" label="Medium" />
            <Chip size="lg" label="Large" />
        </div>
    ),
};

export const InteractiveChips: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Chip variant="primary" label="React" onDelete={() => {}} />
            <Chip variant="success" label="TypeScript" onDelete={() => {}} />
            <Chip variant="info" label="Tailwind" onDelete={() => {}} />
            <Chip variant="warning" label="Storybook" onDelete={() => {}} />
        </div>
    ),
};
