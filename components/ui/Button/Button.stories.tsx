import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
        children: 'Delete',
        variant: 'destructive',
        onClick: action('clicked'),
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

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" onClick={action('sm')}>Small</Button>
            <Button size="md" onClick={action('md')}>Medium</Button>
            <Button size="lg" onClick={action('lg')}>Large</Button>
        </div>
    ),
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

export const IconOnly: Story = {
    args: {
        'aria-label': 'Add item',
        leftIcon: <Plus className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

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

export const FullWidth: Story = {
    render: () => (
        <div className="w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <Button variant="primary" fullWidth onClick={action('sign-in')}>Sign In</Button>
        </div>
    ),
};

export const FormActions: Story = {
    render: () => (
        <div className="w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <p className="text-sm text-text-secondary mb-4">
                Unsaved changes will be lost if you leave this page.
            </p>
            <div className="flex items-center justify-end gap-2">
                <Button variant="ghost" onClick={action('cancel')}>Cancel</Button>
                <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('save')}>
                    Save Changes
                </Button>
            </div>
        </div>
    ),
};

export const DangerZone: Story = {
    render: () => (
        <div className="w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <h3 className="text-base font-semibold text-text-primary mb-1">Delete project</h3>
            <p className="text-sm text-text-secondary mb-4">
                This action is permanent and cannot be undone.
            </p>
            <Button
                variant="destructive"
                fullWidth
                leftIcon={<Trash2 className="w-4 h-4" />}
                onClick={action('delete')}
            >
                Delete Project
            </Button>
        </div>
    ),
};
