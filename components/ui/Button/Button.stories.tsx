import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Continue',
        onClick: action('clicked'),
    },
};

export const Primary: Story = {
    args: {
        children: 'Continue',
        variant: 'primary',
        onClick: action('clicked'),
    },
};

export const Secondary: Story = {
    args: {
        children: 'Back',
        variant: 'secondary',
        onClick: action('clicked'),
    },
};

export const Ghost: Story = {
    args: {
        children: 'Cancel',
        variant: 'ghost',
        onClick: action('clicked'),
    },
};

export const Subtle: Story = {
    args: {
        children: 'Learn More',
        variant: 'subtle',
        onClick: action('clicked'),
    },
};

export const Outline: Story = {
    args: {
        children: 'Preview',
        variant: 'outline',
        onClick: action('clicked'),
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete Account',
        variant: 'destructive',
        onClick: action('clicked'),
    },
};

export const Small: Story = {
    args: {
        children: 'Continue',
        size: 'sm',
        onClick: action('clicked'),
    },
};

export const Medium: Story = {
    args: {
        children: 'Continue',
        size: 'md',
        onClick: action('clicked'),
    },
};

export const Large: Story = {
    args: {
        children: 'Continue',
        size: 'lg',
        onClick: action('clicked'),
    },
};

export const Loading: Story = {
    args: {
        children: 'Processing...',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Continue',
        disabled: true,
        onClick: action('clicked'),
    },
};

export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        leftIcon: <Download className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Next',
        rightIcon: <ArrowRight className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80">
            <Button variant="primary" fullWidth onClick={action('clicked')}>
                Sign In
            </Button>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex gap-3">
            <Button variant="primary" onClick={action('primary')}>Primary</Button>
            <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
            <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
            <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
            <Button variant="outline" onClick={action('outline')}>Outline</Button>
            <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('destructive')}>
                Delete
            </Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={action('sm')}>Small</Button>
            <Button size="md" leftIcon={<Plus className="w-4 h-4" />} onClick={action('md')}>Medium</Button>
            <Button size="lg" leftIcon={<Plus className="w-4 h-4" />} onClick={action('lg')}>Large</Button>
        </div>
    ),
};
