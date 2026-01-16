import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/Button';

const meta: Meta<typeof Button> = {
    title: 'Buttons/Button',
    component: Button,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'subtle'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        loading: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Button',
        variant: 'ghost',
    },
};

export const Subtle: Story = {
    args: {
        children: 'Button',
        variant: 'subtle',
    },
};

export const Loading: Story = {
    args: {
        children: 'Button',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Button',
        fullWidth: true,
    },
};
