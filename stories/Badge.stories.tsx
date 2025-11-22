import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        dot: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
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

export const WithDot: Story = {
    args: {
        children: 'Active',
        variant: 'success',
        dot: true,
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
        children: 'Large',
        size: 'lg',
    },
};
