import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Check, Download, Heart, Plus, Trash2 } from 'lucide-react';

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
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
        },
        loading: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
        children: { control: 'text' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASE
   ======================================== */

export const Default: Story = {
    args: {
        children: 'Continue',
    },
};

/* ========================================
   VARIANTS
   ======================================== */

export const AllVariants: Story = {
    render: () => (
        <div className="flex items-center gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    ),
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

/* ========================================
   SIZES
   ======================================== */

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3 flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        children: 'Medium',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large',
    },
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
    args: {
        loading: true,
        children: 'Processing...',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Unavailable',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'Sign In',
    },
    render: (args) => (
        <div className="w-80">
            <Button {...args} />
        </div>
    ),
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        leftIcon: <Download className="w-4 h-4" />,
        children: 'Download',
    },
};

export const WithRightIcon: Story = {
    args: {
        variant: 'secondary',
        rightIcon: <ArrowRight className="w-4 h-4" />,
        children: 'Next step',
    },
};

export const IconOnly: Story = {
    render: () => (
        <div className="flex items-center gap-3 flex-wrap">
            <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />} aria-label="Add item" />
            <Button variant="secondary" leftIcon={<Check className="w-4 h-4" />} aria-label="Confirm" />
            <Button variant="ghost" leftIcon={<Heart className="w-4 h-4" />} aria-label="Add to favorites" />
            <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} aria-label="Delete item" />
        </div>
    ),
};

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
        disabled: false,
        children: 'Playground',
    },
};
