import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '../components/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
    title: 'Data Display/AvatarGroup',
    component: AvatarGroup,
    tags: [],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        max: {
            control: 'number',
        },
        showTooltip: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const sampleUsers = [
    { alt: 'John Doe', src: 'https://i.pravatar.cc/150?img=1' },
    { alt: 'Jane Smith', src: 'https://i.pravatar.cc/150?img=2' },
    { alt: 'Bob Johnson', src: 'https://i.pravatar.cc/150?img=3' },
    { alt: 'Alice Williams', src: 'https://i.pravatar.cc/150?img=4' },
    { alt: 'Charlie Brown', src: 'https://i.pravatar.cc/150?img=5' },
    { alt: 'Diana Prince', src: 'https://i.pravatar.cc/150?img=6' },
    { alt: 'Eve Anderson', src: 'https://i.pravatar.cc/150?img=7' },
    { alt: 'Frank Miller', src: 'https://i.pravatar.cc/150?img=8' },
];

export const Default: Story = {
    args: {
        items: sampleUsers,
    },
};

export const WithMax: Story = {
    args: {
        items: sampleUsers,
        max: 3,
    },
};

export const WithFallbacks: Story = {
    args: {
        items: [
            { alt: 'John Doe' },
            { alt: 'Jane Smith' },
            { alt: 'Bob Johnson' },
            { alt: 'Alice Williams' },
            { alt: 'Charlie Brown' },
        ],
    },
};

export const Small: Story = {
    args: {
        items: sampleUsers.slice(0, 5),
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        items: sampleUsers.slice(0, 5),
        size: 'lg',
    },
};

export const WithoutTooltips: Story = {
    args: {
        items: sampleUsers.slice(0, 5),
        showTooltip: false,
    },
};
