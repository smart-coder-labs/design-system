import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Download, Heart, Plus, Trash2 } from 'lucide-react';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        children: { control: 'text' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Continue',
        variant: 'primary',
        size: 'md',
    },
};

export const Primary: Story = {
    args: {
        children: 'Continue',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Back',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Cancel',
        variant: 'ghost',
    },
};

export const Subtle: Story = {
    args: {
        children: 'Learn More',
        variant: 'subtle',
    },
};

export const Outline: Story = {
    args: {
        children: 'View Details',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete Account',
        variant: 'destructive',
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

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" leftIcon={<Download className="w-4 h-4" />}>
                Download
            </Button>
            <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Next
            </Button>
            <Button
                variant="outline"
                leftIcon={<Heart className="w-4 h-4" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
            >
                Favorite
            </Button>
        </div>
    ),
};

export const IconOnly: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button variant="primary" aria-label="Add item" leftIcon={<Plus className="w-4 h-4" />} />
            <Button variant="ghost" aria-label="Add to favorites" leftIcon={<Heart className="w-4 h-4" />} />
            <Button variant="destructive" aria-label="Delete item" leftIcon={<Trash2 className="w-4 h-4" />} />
        </div>
    ),
};

export const Loading: Story = {
    args: {
        children: 'Processing...',
        variant: 'primary',
        loading: true,
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" disabled>
                Primary
            </Button>
            <Button variant="secondary" disabled>
                Secondary
            </Button>
            <Button variant="destructive" disabled>
                Destructive
            </Button>
        </div>
    ),
};

export const FullWidth: Story = {
    args: {
        children: 'Sign In',
        variant: 'primary',
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div className="w-80">
                <Story />
            </div>
        ),
    ],
};

export const Playground: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
        loading: false,
        disabled: false,
        fullWidth: false,
    },
};
