import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

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
        children: 'Primary',
        variant: 'primary',
        onClick: action('clicked'),
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
        onClick: action('clicked'),
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
        onClick: action('clicked'),
    },
};

export const Subtle: Story = {
    args: {
        children: 'Subtle',
        variant: 'subtle',
        onClick: action('clicked'),
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
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

export const Loading: Story = {
    args: {
        children: 'Processing...',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
        onClick: action('clicked'),
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Sign In',
        fullWidth: true,
        onClick: action('clicked'),
    },
    render: (args) => (
        <div className="w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <Button {...args} />
        </div>
    ),
};

export const WithLeftIcon: Story = {
    args: {
        children: 'Add item',
        leftIcon: <Plus className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Continue',
        rightIcon: <ArrowRight className="w-4 h-4" />,
        onClick: action('clicked'),
    },
};

export const IconOnly: Story = {
    args: {
        variant: 'ghost',
        leftIcon: <Trash2 className="w-4 h-4" />,
        'aria-label': 'Delete item',
        onClick: action('clicked'),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="grid grid-cols-3 gap-4 p-4 bg-surface-primary rounded-xl border border-border-primary">
            {(['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'] as const).map((variant) => (
                <div key={variant} className="flex flex-col items-center gap-2">
                    <Button variant={variant} onClick={action(variant)}>
                        Button
                    </Button>
                    <span className="text-xs text-text-secondary">{variant}</span>
                </div>
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-end gap-4 p-4 bg-surface-primary rounded-xl border border-border-primary">
            {(['sm', 'md', 'lg'] as const).map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                    <Button size={size} onClick={action(size)}>
                        Button
                    </Button>
                    <span className="text-xs text-text-secondary">{size}</span>
                </div>
            ))}
        </div>
    ),
};

export const FormActions: Story = {
    render: () => (
        <div className="w-96 p-4 bg-surface-primary rounded-xl border border-border-primary">
            <p className="mb-4 text-sm text-text-primary">Update your profile details before saving.</p>
            <div className="flex items-center justify-end gap-3">
                <Button variant="ghost" onClick={action('cancel')}>
                    Cancel
                </Button>
                <Button variant="primary" leftIcon={<Download className="w-4 h-4" />} onClick={action('save')}>
                    Save changes
                </Button>
            </div>
        </div>
    ),
};
