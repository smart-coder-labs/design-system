import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'The base Button: an Apple-style, motion-aware button with six variants, three sizes, loading and icon support. Icon-only buttons must receive an `aria-label`.',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
            description: 'Visual style of the button.',
            table: { defaultValue: { summary: 'primary' } },
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Height, padding and font size of the button.',
            table: { defaultValue: { summary: 'md' } },
        },
        loading: {
            control: { type: 'boolean' },
            description: 'Replaces the content with a spinner and disables interaction.',
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: 'Stretches the button to the full width of its container.',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the button and removes pointer events.',
        },
        children: {
            control: { type: 'text' },
            description: 'Button label.',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Continue',
    },
};

export const Variants: Story = {
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

export const Loading: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button loading>Processing</Button>
            <Button variant="secondary" loading>
                Processing
            </Button>
            <Button variant="destructive" loading>
                Deleting
            </Button>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button disabled>Primary</Button>
            <Button variant="secondary" disabled>
                Secondary
            </Button>
            <Button variant="outline" disabled>
                Outline
            </Button>
        </div>
    ),
};

export const WithLeftIcon: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button leftIcon={<Download className="w-4 h-4" />}>Download</Button>
            <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
                Delete
            </Button>
        </div>
    ),
};

export const WithRightIcon: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button rightIcon={<ArrowRight className="w-4 h-4" />}>Continue</Button>
            <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Learn more
            </Button>
        </div>
    ),
};

export const IconOnly: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button aria-label="Add item" leftIcon={<Plus className="w-4 h-4" />} />
            <Button
                variant="secondary"
                aria-label="Download file"
                leftIcon={<Download className="w-4 h-4" />}
            />
            <Button
                variant="destructive"
                aria-label="Delete item"
                leftIcon={<Trash2 className="w-4 h-4" />}
            />
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80 flex flex-col gap-3">
            <Button fullWidth>Sign In</Button>
            <Button variant="secondary" fullWidth>
                Create account
            </Button>
        </div>
    ),
};

export const Playground: Story = {
    args: {
        children: 'Playground',
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
        disabled: false,
    },
};
