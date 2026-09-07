import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Settings, Trash2 } from 'lucide-react';

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
            description: 'Visual style variant',
            table: { defaultValue: { summary: 'primary' } },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Button size',
            table: { defaultValue: { summary: 'md' } },
        },
        loading: {
            control: 'boolean',
            description: 'Shows a loading spinner and disables the button',
            table: { defaultValue: { summary: 'false' } },
        },
        fullWidth: {
            control: 'boolean',
            description: 'Stretches the button to fill its container',
            table: { defaultValue: { summary: 'false' } },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
            table: { defaultValue: { summary: 'false' } },
        },
    },
    args: {
        onClick: action('clicked'),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
    args: {
        children: 'Continue',
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
        disabled: false,
    },
};

/* ========================================
   VARIANTS
   ======================================== */

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
    },
};

export const Subtle: Story = {
    args: {
        children: 'Subtle',
        variant: 'subtle',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
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
            <Button variant="primary" onClick={action('primary')}>Primary</Button>
            <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
            <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
            <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
            <Button variant="outline" onClick={action('outline')}>Outline</Button>
            <Button variant="destructive" onClick={action('destructive')}>Destructive</Button>
        </div>
    ),
};

/* ========================================
   SIZES
   ======================================== */

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm" onClick={action('sm')}>Small</Button>
            <Button size="md" onClick={action('md')}>Medium</Button>
            <Button size="lg" onClick={action('lg')}>Large</Button>
        </div>
    ),
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        children: 'Add Item',
        leftIcon: <Plus className="w-4 h-4" />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Download',
        variant: 'secondary',
        rightIcon: <Download className="w-4 h-4" />,
    },
};

export const IconOnly: Story = {
    args: {
        variant: 'ghost',
        'aria-label': 'Settings',
        leftIcon: <Settings className="w-4 h-4" />,
    },
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

export const FullWidth: Story = {
    args: {
        children: 'Sign In',
        fullWidth: true,
    },
    decorators: [(Story) => <div className="w-80"><Story /></div>],
};

/* ========================================
   REAL WORLD
   ======================================== */

export const FormActions: Story = {
    render: () => (
        <div className="w-80 space-y-3">
            <p className="text-sm font-semibold text-text-primary">Delete workspace</p>
            <p className="text-sm text-text-secondary">This action is permanent and cannot be undone.</p>
            <div className="flex items-center justify-end gap-2 pt-2">
                <Button variant="ghost" onClick={action('cancel')}>Cancel</Button>
                <Button
                    variant="destructive"
                    leftIcon={<Trash2 className="w-4 h-4" />}
                    onClick={action('delete')}
                >
                    Delete
                </Button>
            </div>
        </div>
    ),
};

export const CheckoutFlow: Story = {
    render: () => (
        <div className="w-80 space-y-3">
            <Button variant="primary" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />} onClick={action('continue')}>
                Continue to payment
            </Button>
            <Button variant="outline" fullWidth leftIcon={<Check className="w-4 h-4" />} onClick={action('saved')}>
                Use saved card
            </Button>
        </div>
    ),
};
