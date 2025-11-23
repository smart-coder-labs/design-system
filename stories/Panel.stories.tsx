import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../components/Panel';
import { Button } from '../components/Button';
import { Settings } from 'lucide-react';

const meta: Meta<typeof Panel> = {
    title: 'Surfaces/Panel',
    component: Panel,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'outlined', 'glass'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        collapsible: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
    args: {
        title: 'Panel Title',
        children: (
            <div>
                <p className="text-text-secondary">
                    This is a basic panel with some content inside. Panels are versatile containers
                    that can hold any type of content.
                </p>
            </div>
        ),
    },
};

export const WithSubtitle: Story = {
    args: {
        title: 'User Settings',
        subtitle: 'Manage your account preferences',
        children: (
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-text-primary">Email notifications</span>
                    <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-text-primary">Push notifications</span>
                    <input type="checkbox" />
                </div>
            </div>
        ),
    },
};

export const WithHeaderActions: Story = {
    args: {
        title: 'Dashboard',
        headerActions: (
            <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
            </Button>
        ),
        children: (
            <div>
                <p className="text-text-secondary">Panel with action buttons in the header.</p>
            </div>
        ),
    },
};

export const Collapsible: Story = {
    args: {
        title: 'Collapsible Panel',
        subtitle: 'Click the arrow to expand/collapse',
        collapsible: true,
        children: (
            <div>
                <p className="text-text-secondary mb-2">
                    This panel can be collapsed to save space.
                </p>
                <p className="text-text-secondary">
                    The content will smoothly animate when toggling.
                </p>
            </div>
        ),
    },
};

export const WithFooter: Story = {
    args: {
        title: 'Confirmation',
        children: (
            <div>
                <p className="text-text-secondary">
                    Are you sure you want to proceed with this action?
                </p>
            </div>
        ),
        footer: (
            <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Confirm</Button>
            </div>
        ),
    },
};

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        title: 'Elevated Panel',
        children: (
            <div>
                <p className="text-text-secondary">
                    This panel has a shadow to appear elevated from the background.
                </p>
            </div>
        ),
    },
};

export const Glass: Story = {
    args: {
        variant: 'glass',
        title: 'Glass Panel',
        children: (
            <div>
                <p className="text-text-secondary">
                    This panel has a glassmorphism effect with backdrop blur.
                </p>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600">
                <Story />
            </div>
        ),
    ],
};
