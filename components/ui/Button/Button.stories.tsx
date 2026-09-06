import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

import { Button } from './Button';

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
            description: 'Visual style of the button.',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Height, padding and type scale of the button.',
        },
        loading: {
            control: 'boolean',
            description: 'Swaps the content for a spinner and disables interaction.',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Stretches the button to fill its container.',
        },
        disabled: {
            control: 'boolean',
        },
        leftIcon: { control: false },
        rightIcon: { control: false },
        children: { control: 'text' },
    },
    args: {
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
        disabled: false,
        children: 'Continue',
        onClick: action('clicked'),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASICS
   ======================================== */

export const Default: Story = {};

export const Playground: Story = {
    args: {
        children: 'Playground',
    },
};

/* ========================================
   VARIANTS
   ======================================== */

export const Variants: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" onClick={action('primary')}>Primary</Button>
            <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
            <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
            <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
            <Button variant="outline" onClick={action('outline')}>Outline</Button>
            <Button variant="destructive" onClick={action('destructive')}>Destructive</Button>
        </div>
    ),
};

export const Primary: Story = {
    args: { variant: 'primary', children: 'Primary' },
};

export const Secondary: Story = {
    args: { variant: 'secondary', children: 'Secondary' },
};

export const Ghost: Story = {
    args: { variant: 'ghost', children: 'Ghost' },
};

export const Subtle: Story = {
    args: { variant: 'subtle', children: 'Subtle' },
};

export const Outline: Story = {
    args: { variant: 'outline', children: 'Outline' },
};

export const Destructive: Story = {
    args: { variant: 'destructive', children: 'Delete account' },
};

/* ========================================
   SIZES
   ======================================== */

export const Sizes: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" onClick={action('sm')}>Small</Button>
            <Button size="md" onClick={action('md')}>Medium</Button>
            <Button size="lg" onClick={action('lg')}>Large</Button>
        </div>
    ),
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

export const LoadingStates: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button loading size="sm">Small</Button>
            <Button loading size="md">Medium</Button>
            <Button loading size="lg">Large</Button>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Unavailable',
    },
};

export const DisabledVariants: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button disabled variant="primary">Primary</Button>
            <Button disabled variant="secondary">Secondary</Button>
            <Button disabled variant="ghost">Ghost</Button>
            <Button disabled variant="outline">Outline</Button>
            <Button disabled variant="destructive">Destructive</Button>
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
        rightIcon: <ArrowRight className="w-4 h-4" />,
        children: 'Next step',
    },
};

export const WithBothIcons: Story = {
    args: {
        variant: 'secondary',
        leftIcon: <Check className="w-4 h-4" />,
        rightIcon: <ArrowRight className="w-4 h-4" />,
        children: 'Confirm and continue',
    },
};

export const IconOnly: Story = {
    args: {
        'aria-label': 'Add item',
        leftIcon: <Plus className="w-4 h-4" />,
        children: undefined,
    },
};

export const IconOnlyDestructive: Story = {
    args: {
        variant: 'destructive',
        'aria-label': 'Delete item',
        leftIcon: <Trash2 className="w-4 h-4" />,
        children: undefined,
    },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        fullWidth: true,
        children: 'Sign In',
    },
    render: (args) => (
        <div className="w-80 max-w-full">
            <Button {...args} />
        </div>
    ),
};

export const StackedFullWidth: Story = {
    parameters: {
        layout: 'padded',
        controls: { disable: true },
    },
    render: () => (
        <div className="flex w-80 max-w-full flex-col gap-3">
            <Button fullWidth variant="primary" onClick={action('sign-in')}>Sign In</Button>
            <Button fullWidth variant="secondary" onClick={action('create-account')}>Create Account</Button>
            <Button fullWidth variant="ghost" onClick={action('forgot-password')}>Forgot password?</Button>
        </div>
    ),
};
