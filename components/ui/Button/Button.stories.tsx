import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import {
    ArrowRight,
    Check,
    Download,
    Heart,
    Plus,
    Settings,
    Trash2,
} from 'lucide-react';

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
            description: 'Replaces the content with a spinner, disables the button and sets aria-busy.',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables interaction and dims the button.',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Stretches the button to fill the width of its container.',
        },
        children: {
            control: 'text',
            description: 'Label of the button.',
        },
        leftIcon: {
            control: false,
            description: 'Node rendered before the label.',
        },
        rightIcon: {
            control: false,
            description: 'Node rendered after the label.',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler.',
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
        children: 'Delete Account',
        variant: 'destructive',
    },
};

export const AllVariants: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Button',
    },
    render: (args) => (
        <div className="flex flex-wrap items-center gap-3">
            <Button {...args} variant="primary">Primary</Button>
            <Button {...args} variant="secondary">Secondary</Button>
            <Button {...args} variant="ghost">Ghost</Button>
            <Button {...args} variant="subtle">Subtle</Button>
            <Button {...args} variant="outline">Outline</Button>
            <Button {...args} variant="destructive">Destructive</Button>
        </div>
    ),
};

/* ========================================
   SIZES
   ======================================== */

export const AllSizes: Story = {
    args: {
        children: 'Button',
    },
    render: (args) => (
        <div className="flex items-center gap-3">
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="md">Medium</Button>
            <Button {...args} size="lg">Large</Button>
        </div>
    ),
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
    args: {
        children: 'Saving...',
        loading: true,
    },
};

export const LoadingVariants: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Processing',
        loading: true,
    },
    render: (args) => (
        <div className="flex flex-wrap items-center gap-3">
            <Button {...args} variant="primary" />
            <Button {...args} variant="secondary" />
            <Button {...args} variant="outline" />
            <Button {...args} variant="destructive" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        children: 'Unavailable',
        disabled: true,
    },
};

export const DisabledVariants: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Button',
        disabled: true,
    },
    render: (args) => (
        <div className="flex flex-wrap items-center gap-3">
            <Button {...args} variant="primary">Primary</Button>
            <Button {...args} variant="secondary">Secondary</Button>
            <Button {...args} variant="ghost">Ghost</Button>
            <Button {...args} variant="outline">Outline</Button>
            <Button {...args} variant="destructive">Destructive</Button>
        </div>
    ),
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        variant: 'secondary',
        leftIcon: <Download size={16} />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Next Step',
        variant: 'primary',
        rightIcon: <ArrowRight size={16} />,
    },
};

export const WithBothIcons: Story = {
    args: {
        children: 'Add to Favorites',
        variant: 'outline',
        leftIcon: <Heart size={16} />,
        rightIcon: <ArrowRight size={16} />,
    },
};

export const IconOnly: Story = {
    args: {
        variant: 'secondary',
        'aria-label': 'Open settings',
        leftIcon: <Settings size={16} />,
    },
    render: (args) => (
        <div className="flex items-center gap-3">
            <Button {...args} size="sm" aria-label="Add item" leftIcon={<Plus size={14} />} />
            <Button {...args} size="md" aria-label="Open settings" leftIcon={<Settings size={16} />} />
            <Button
                {...args}
                size="lg"
                variant="destructive"
                aria-label="Delete item"
                leftIcon={<Trash2 size={18} />}
            />
        </div>
    ),
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Sign In',
        fullWidth: true,
    },
    render: (args) => (
        <div className="w-[360px] rounded-2xl border border-border-primary bg-surface-primary p-6">
            <Button {...args} />
        </div>
    ),
};

/* ========================================
   REAL-WORLD USE CASE
   ======================================== */

export const DialogActionRow: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Delete Project',
    },
    render: () => (
        <div className="w-[420px] rounded-2xl border border-border-primary bg-surface-primary p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-text-primary">Delete project</h3>
            <p className="mt-2 text-sm text-text-secondary">
                This will permanently delete the project and all of its data. This action cannot be
                undone.
            </p>
            <div className="mt-6 flex justify-end gap-3">
                <Button variant="ghost" onClick={action('cancel')}>
                    Cancel
                </Button>
                <Button
                    variant="destructive"
                    leftIcon={<Trash2 size={16} />}
                    onClick={action('confirm-delete')}
                >
                    Delete Project
                </Button>
            </div>
        </div>
    ),
};

export const FormSubmitRow: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        children: 'Save Changes',
    },
    render: () => (
        <form
            className="w-[420px] rounded-2xl border border-border-primary bg-surface-primary p-6"
            onSubmit={(event) => {
                event.preventDefault();
                action('submit')();
            }}
        >
            <label className="block text-sm font-medium text-text-primary" htmlFor="workspace-name">
                Workspace name
            </label>
            <input
                id="workspace-name"
                defaultValue="Apple Creative"
                className="mt-2 h-10 w-full rounded-xl border border-border-primary bg-surface-secondary px-3 text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            />
            <div className="mt-6 flex items-center justify-between gap-3">
                <Button variant="subtle" type="button" onClick={action('reset')}>
                    Reset
                </Button>
                <div className="flex gap-3">
                    <Button variant="outline" type="button" onClick={action('cancel')}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" leftIcon={<Check size={16} />}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </form>
    ),
};
