import type { Meta, StoryObj } from '@storybook/react';
import { ButtonWithDropdown } from './ButtonWithDropdown';
import { Download, Share2, Edit, Trash2, Copy } from 'lucide-react';

const meta = {
    title: 'Buttons/ButtonWithDropdown',
    component: ButtonWithDropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonWithDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultActions = [
    { label: 'Download', onClick: () => {}, icon: Download },
    { label: 'Share', onClick: () => {}, icon: Share2 },
    { label: 'Edit', onClick: () => {}, icon: Edit },
];

export const Primary: Story = {
    args: {
        label: 'Actions',
        actions: defaultActions,
        variant: 'primary',
        size: 'md',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Actions',
        actions: defaultActions,
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        label: 'More',
        actions: defaultActions,
        variant: 'tertiary',
    },
};

export const Small: Story = {
    args: {
        label: 'Actions',
        actions: defaultActions,
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        label: 'Actions',
        actions: defaultActions,
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Actions',
        actions: defaultActions,
        disabled: true,
    },
};

export const WithDisabledAction: Story = {
    args: {
        label: 'Actions',
        actions: [
            { label: 'Copy', onClick: () => {}, icon: Copy },
            { label: 'Edit', onClick: () => {}, icon: Edit },
            { label: 'Delete', onClick: () => {}, icon: Trash2, disabled: true },
        ],
    },
};

export const ManyActions: Story = {
    args: {
        label: 'More Actions',
        actions: [
            { label: 'Download', onClick: () => {}, icon: Download },
            { label: 'Share', onClick: () => {}, icon: Share2 },
            { label: 'Edit', onClick: () => {}, icon: Edit },
            { label: 'Duplicate', onClick: () => {}, icon: Copy },
            { label: 'Delete', onClick: () => {}, icon: Trash2 },
        ],
    },
};
