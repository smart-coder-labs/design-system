import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from '../components/FAB';
import { Plus, MessageCircle, Edit3, Share2 } from 'lucide-react';

const meta: Meta<typeof FAB> = {
    title: 'Buttons/FAB',
    component: FAB,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        position: {
            control: 'select',
            options: ['none', 'bottom-right', 'bottom-left', 'top-right', 'top-left'],
        },
        show: {
            control: 'boolean',
        },
    },
    parameters: {
        layout: 'fullscreen', // To show fixed positioning correctly
    },
};

export default meta;
type Story = StoryObj<typeof FAB>;

export const Default: Story = {
    args: {
        icon: Plus,
        position: 'none',
        "aria-label": "Add",
    },
    decorators: [
        (Story) => (
            <div className="p-12 flex justify-center">
                <Story />
            </div>
        ),
    ],
};

export const Extended: Story = {
    args: {
        icon: Edit3,
        label: 'Compose',
        position: 'none',
    },
    decorators: [
        (Story) => (
            <div className="p-12 flex justify-center">
                <Story />
            </div>
        ),
    ],
};

export const Secondary: Story = {
    args: {
        icon: Share2,
        variant: 'secondary',
        position: 'none',
    },
    decorators: [
        (Story) => (
            <div className="p-12 flex justify-center">
                <Story />
            </div>
        ),
    ],
};
