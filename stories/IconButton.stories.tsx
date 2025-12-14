import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../components/IconButton';
import { Plus, Trash2, Settings, Bell, Search } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
    title: 'Buttons/IconButton',
    component: IconButton,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
    args: {
        icon: Plus,
        variant: 'primary',
        "aria-label": "Add item",
    },
};

export const Secondary: Story = {
    args: {
        icon: Settings,
        variant: 'secondary',
        "aria-label": "Settings",
    },
};

export const Ghost: Story = {
    args: {
        icon: Bell,
        variant: 'ghost',
        "aria-label": "Notifications",
    },
};

export const Danger: Story = {
    args: {
        icon: Trash2,
        variant: 'danger',
        "aria-label": "Delete",
    },
};

export const WithTooltip: Story = {
    args: {
        icon: Search,
        variant: 'secondary',
        tooltip: 'Search database',
        "aria-label": "Search",
    },
};

export const Loading: Story = {
    args: {
        icon: Plus,
        variant: 'primary',
        isLoading: true,
        "aria-label": "Loading",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <IconButton icon={Plus} size="xs" aria-label="Extra Small" />
            <IconButton icon={Plus} size="sm" aria-label="Small" />
            <IconButton icon={Plus} size="md" aria-label="Medium" />
            <IconButton icon={Plus} size="lg" aria-label="Large" />
            <IconButton icon={Plus} size="xl" aria-label="Extra Large" />
        </div>
    ),
};
