import type { Meta, StoryObj } from '@storybook/react';
import { OfflineState } from '../components/ui/OfflineState';
import { CloudOff } from 'lucide-react';

const meta: Meta<typeof OfflineState> = {
    title: 'Surfaces/OfflineState',
    component: OfflineState,
    tags: [],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        isRetrying: { control: 'boolean' },
        fullPage: { control: 'boolean' },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof OfflineState>;

export const Default: Story = {
    args: {
        onRetry: () => console.log('Retrying...'),
    },
};

export const Retrying: Story = {
    args: {
        isRetrying: true,
        onRetry: () => { },
    },
};

export const FullPage: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        fullPage: true,
        onRetry: () => console.log('Retrying...'),
    },
};

export const CustomIcon: Story = {
    args: {
        icon: <CloudOff className="w-10 h-10 text-text-secondary" />,
        title: "Server Unreachable",
        description: "We can't connect to our servers right now. The issue might be on our end.",
        onRetry: () => console.log('Retrying...'),
    },
};

export const NoAction: Story = {
    args: {
        title: "You are offline",
        description: "Content will be available once you are back online.",
    },
};
