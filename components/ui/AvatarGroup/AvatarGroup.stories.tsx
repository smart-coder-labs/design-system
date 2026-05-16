import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const meta = {
    title: 'Data Display/AvatarGroup',
    component: AvatarGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    { src: 'https://i.pravatar.cc/150?u=alice', alt: 'Alice Johnson' },
    { src: 'https://i.pravatar.cc/150?u=bob', alt: 'Bob Smith' },
    { src: 'https://i.pravatar.cc/150?u=carol', alt: 'Carol Davis' },
    { src: 'https://i.pravatar.cc/150?u=david', alt: 'David Lee' },
    { src: 'https://i.pravatar.cc/150?u=eve', alt: 'Eve Martinez' },
    { src: 'https://i.pravatar.cc/150?u=frank', alt: 'Frank Wilson' },
    { src: 'https://i.pravatar.cc/150?u=grace', alt: 'Grace Kim' },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        max: 5,
        size: 'md',
    },
};

export const SmallSize: Story = {
    args: {
        items: sampleItems,
        max: 5,
        size: 'sm',
    },
};

export const LargeSize: Story = {
    args: {
        items: sampleItems,
        max: 5,
        size: 'lg',
    },
};

export const XSmallSize: Story = {
    args: {
        items: sampleItems,
        max: 4,
        size: 'xs',
    },
};

export const XLargeSize: Story = {
    args: {
        items: sampleItems,
        max: 4,
        size: 'xl',
    },
};

export const NoOverflow: Story = {
    args: {
        items: sampleItems.slice(0, 3),
        max: 5,
        size: 'md',
    },
};

export const ManyItems: Story = {
    args: {
        items: sampleItems,
        max: 3,
        size: 'md',
    },
};

export const WithoutTooltips: Story = {
    args: {
        items: sampleItems.slice(0, 4),
        max: 5,
        size: 'md',
        showTooltip: false,
    },
};
