import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Settings, Trash2 } from 'lucide-react';

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
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   VARIANTS
   ======================================== */

export const Default: Story = {
    args: {
        children: 'Button',
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
        children: 'Learn more',
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
        children: 'Delete account',
        variant: 'destructive',
        onClick: action('clicked'),
    },
};

/* ========================================
   SIZES
   ======================================== */

export const Small: Story = {
    args: {
        children: 'Small',
        size: 'sm',
        onClick: action('clicked'),
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium',
        size: 'md',
        onClick: action('clicked'),
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        size: 'lg',
        onClick: action('clicked'),
    },
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
    args: {
        children: 'Processing...',
        loading: true,
        onClick: action('clicked'),
    },
};

export const Disabled: Story = {
    args: {
        children: 'Unavailable',
        disabled: true,
        onClick: action('clicked'),
    },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        leftIcon: <Download className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Next step',
        rightIcon: <ArrowRight className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const IconOnly: Story = {
    args: {
        leftIcon: <Settings className="w-4 h-4" />,
        'aria-label': 'Open settings',
        onClick: action('clicked'),
    },
};

/* ========================================
   COMPOSITES
   ======================================== */

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

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm" onClick={action('sm')}>Small</Button>
            <Button size="md" onClick={action('md')}>Medium</Button>
            <Button size="lg" onClick={action('lg')}>Large</Button>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button onClick={action('default')}>Default</Button>
            <Button loading onClick={action('loading')}>Loading</Button>
            <Button disabled onClick={action('disabled')}>Disabled</Button>
            <Button leftIcon={<Check className="w-4 h-4" />} onClick={action('with-icon')}>With icon</Button>
            <Button
                variant="ghost"
                leftIcon={<Plus className="w-4 h-4" />}
                aria-label="Add item"
                onClick={action('icon-only')}
            />
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80 flex flex-col gap-3 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <Button fullWidth onClick={action('sign-in')}>Sign In</Button>
            <Button fullWidth variant="secondary" onClick={action('create-account')}>Create Account</Button>
        </div>
    ),
};

export const DialogFooter: Story = {
    render: () => (
        <div className="w-96 p-5 bg-surface-primary rounded-xl border border-border-primary">
            <h3 className="text-base font-semibold text-text-primary">Delete workspace?</h3>
            <p className="mt-1 text-sm text-text-secondary">
                This will permanently remove the workspace and all of its data. This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-2">
                <Button variant="ghost" onClick={action('cancel')}>Cancel</Button>
                <Button variant="primary" onClick={action('continue')}>Continue</Button>
            </div>
        </div>
    ),
};

export const DangerZone: Story = {
    render: () => (
        <div className="w-96 flex items-center justify-between gap-4 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <div>
                <p className="text-sm font-semibold text-text-primary">Delete project</p>
                <p className="text-xs text-text-secondary">Removes every file and deployment.</p>
            </div>
            <Button
                variant="destructive"
                size="sm"
                leftIcon={<Trash2 className="w-4 h-4" />}
                onClick={action('delete')}
            >
                Delete
            </Button>
        </div>
    ),
};
