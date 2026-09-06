import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Download, ArrowRight, Plus } from 'lucide-react';

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
        children: 'Preview',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete',
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

/* ========================================
   SIZES
   ======================================== */

export const Small: Story = {
    args: {
        children: 'Small',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        size: 'lg',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
    args: {
        children: 'Processing...',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Unavailable',
        disabled: true,
    },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        leftIcon: <Download className="w-4 h-4" />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Continue',
        rightIcon: <ArrowRight className="w-4 h-4" />,
    },
};

export const IconOnly: Story = {
    args: {
        'aria-label': 'Add item',
        leftIcon: <Plus className="w-4 h-4" />,
    },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
    args: {
        children: 'Sign In',
        fullWidth: true,
    },
    render: (args) => (
        <div className="w-80">
            <Button {...args} />
        </div>
    ),
};

/* ========================================
   DARK MODE
   ======================================== */

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
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
