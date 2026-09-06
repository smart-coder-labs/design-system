import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ArrowLeft, ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'The base Button component. Apple-style, animated with Framer Motion, and available in six variants and three sizes. Supports leading/trailing icons, a loading state, and a full-width layout.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
            description: 'Visual style of the button.',
            table: { defaultValue: { summary: 'primary' } },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Height, padding and font size of the button.',
            table: { defaultValue: { summary: 'md' } },
        },
        loading: {
            control: 'boolean',
            description: 'Replaces the content with a spinner and disables interaction.',
            table: { defaultValue: { summary: 'false' } },
        },
        fullWidth: {
            control: 'boolean',
            description: 'Stretches the button to the width of its container.',
            table: { defaultValue: { summary: 'false' } },
        },
        disabled: {
            control: 'boolean',
            description: 'Native disabled state.',
        },
        children: {
            control: 'text',
            description: 'Button label.',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASIC
   ======================================== */

export const Default: Story = {
    args: {
        children: 'Continue',
        onClick: action('clicked'),
    },
};

/* ========================================
   VARIANTS
   ======================================== */

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
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        children: 'Back',
        variant: 'secondary',
        leftIcon: <ArrowLeft className="w-4 h-4" />,
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

export const WithBothIcons: Story = {
    args: {
        children: 'Download',
        variant: 'outline',
        leftIcon: <Download className="w-4 h-4" />,
        rightIcon: <ArrowRight className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const IconOnly: Story = {
    args: {
        variant: 'ghost',
        leftIcon: <Plus className="w-4 h-4" />,
        'aria-label': 'Add item',
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

export const FullWidth: Story = {
    args: {
        children: 'Sign in',
        fullWidth: true,
        onClick: action('clicked'),
    },
    parameters: {
        layout: 'padded',
    },
    render: (args) => (
        <div className="w-80">
            <Button {...args} />
        </div>
    ),
};

/* ========================================
   COMPOSITE
   ======================================== */

export const AllVariants: Story = {
    parameters: {
        layout: 'padded',
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" onClick={action('clicked')}>
                Primary
            </Button>
            <Button variant="secondary" onClick={action('clicked')}>
                Secondary
            </Button>
            <Button variant="ghost" onClick={action('clicked')}>
                Ghost
            </Button>
            <Button variant="subtle" onClick={action('clicked')}>
                Subtle
            </Button>
            <Button variant="outline" onClick={action('clicked')}>
                Outline
            </Button>
            <Button variant="destructive" onClick={action('clicked')}>
                Destructive
            </Button>
        </div>
    ),
};

export const AllSizes: Story = {
    parameters: {
        layout: 'padded',
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" onClick={action('clicked')}>
                Small
            </Button>
            <Button size="md" onClick={action('clicked')}>
                Medium
            </Button>
            <Button size="lg" onClick={action('clicked')}>
                Large
            </Button>
        </div>
    ),
};

export const AllStates: Story = {
    parameters: {
        layout: 'padded',
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button onClick={action('clicked')}>Default</Button>
            <Button loading onClick={action('clicked')}>
                Loading
            </Button>
            <Button disabled onClick={action('clicked')}>
                Disabled
            </Button>
            <Button leftIcon={<Check className="w-4 h-4" />} onClick={action('clicked')}>
                With icon
            </Button>
            <Button
                variant="destructive"
                leftIcon={<Trash2 className="w-4 h-4" />}
                onClick={action('clicked')}
            >
                Delete
            </Button>
        </div>
    ),
};
