import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Download, Plus } from 'lucide-react';
import { Button } from './Button';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Continue',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
};

export const Subtle: Story = {
    args: {
        variant: 'subtle',
        children: 'Subtle',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Delete',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const WithLeftIcon: Story = {
    args: {
        leftIcon: <Download className="h-4 w-4" />,
        children: 'Download',
    },
};

export const WithRightIcon: Story = {
    args: {
        variant: 'secondary',
        rightIcon: <ArrowRight className="h-4 w-4" />,
        children: 'Next step',
    },
};

export const IconOnly: Story = {
    args: {
        'aria-label': 'Add item',
        leftIcon: <Plus className="h-4 w-4" />,
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        children: 'Processing',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled',
    },
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80">
            <Button fullWidth>Sign In</Button>
        </div>
    ),
};
