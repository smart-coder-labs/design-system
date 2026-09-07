import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ArrowLeft, ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

import { Button } from './Button';
import type { ButtonSize, ButtonVariant } from './Button.types';

const variants: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

const meta: Meta<typeof Button> = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: variants,
            description: 'Visual style of the button.',
            table: { defaultValue: { summary: 'primary' } },
        },
        size: {
            control: 'select',
            options: sizes,
            description: 'Height, padding and font size of the button.',
            table: { defaultValue: { summary: 'md' } },
        },
        loading: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
        children: { control: 'text' },
        leftIcon: { control: false },
        rightIcon: { control: false },
    },
    args: {
        children: 'Continue',
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
        disabled: false,
        onClick: action('clicked'),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3 p-4 bg-surface-primary rounded-xl border border-border-primary">
            {variants.map((variant) => (
                <Button key={variant} variant={variant} onClick={action(variant)}>
                    {variant}
                </Button>
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            {sizes.map((size) => (
                <Button key={size} size={size} onClick={action(size)}>
                    Size {size}
                </Button>
            ))}
        </div>
    ),
};

export const Loading: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                {sizes.map((size) => (
                    <Button key={size} size={size} loading>
                        Loading
                    </Button>
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
                {variants.map((variant) => (
                    <Button key={variant} variant={variant} loading>
                        {variant}
                    </Button>
                ))}
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            {variants.map((variant) => (
                <Button key={variant} variant={variant} disabled>
                    {variant}
                </Button>
            ))}
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button leftIcon={<ArrowLeft className="w-4 h-4" />} variant="secondary" onClick={action('back')}>
                Back
            </Button>
            <Button rightIcon={<ArrowRight className="w-4 h-4" />} onClick={action('next')}>
                Next
            </Button>
            <Button
                leftIcon={<Download className="w-4 h-4" />}
                rightIcon={<Check className="w-4 h-4" />}
                variant="outline"
                onClick={action('download')}
            >
                Download
            </Button>
            <Button leftIcon={<Trash2 className="w-4 h-4" />} variant="destructive" onClick={action('delete')}>
                Delete
            </Button>
            <Button leftIcon={<Plus className="w-4 h-4" />} variant="ghost" onClick={action('add')}>
                Add item
            </Button>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80 flex flex-col gap-3 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <span className="text-sm font-semibold text-text-primary">Sign in to continue</span>
            <Button fullWidth onClick={action('sign-in')}>
                Sign In
            </Button>
            <Button fullWidth variant="subtle" onClick={action('create-account')}>
                Create Account
            </Button>
        </div>
    ),
};

export const Playground: Story = {
    args: {
        children: 'Playground',
        variant: 'primary',
        size: 'md',
    },
};
