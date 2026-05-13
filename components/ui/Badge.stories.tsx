import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Feedback/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
        size: 'md',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: 'Warning',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        children: 'Error',
        variant: 'error',
    },
};

export const Info: Story = {
    args: {
        children: 'Info',
        variant: 'info',
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Badge',
        size: 'lg',
    },
};

export const WithDot: Story = {
    args: {
        children: 'Online',
        variant: 'success',
        dot: true,
    },
};

export const DotWarning: Story = {
    args: {
        children: 'Pending',
        variant: 'warning',
        dot: true,
    },
};

export const DotError: Story = {
    args: {
        children: 'Offline',
        variant: 'error',
        dot: true,
    },
};

export const AllSizesWithDot: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Badge variant="success" size="sm" dot>Active</Badge>
            <Badge variant="success" size="md" dot>Active</Badge>
            <Badge variant="success" size="lg" dot>Active</Badge>
        </div>
    ),
};

export const VariantsOverview: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
};
