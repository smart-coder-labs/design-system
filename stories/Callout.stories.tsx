import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '../components/Callout';
import { Lightbulb } from 'lucide-react';

const meta: Meta<typeof Callout> = {
    title: 'Surfaces/Callout',
    component: Callout,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error', 'neutral'],
        },
        dismissible: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        children: 'This is an informational callout to draw attention to important details.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success',
        children: 'Your changes have been saved successfully.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        children: 'This action cannot be undone. Please proceed with caution.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        children: 'An error occurred while processing your request. Please try again.',
    },
};

export const Neutral: Story = {
    args: {
        variant: 'neutral',
        title: 'Note',
        children: 'This is a neutral callout for general information.',
    },
};

export const WithCustomIcon: Story = {
    args: {
        variant: 'info',
        title: 'Pro Tip',
        icon: Lightbulb,
        children: 'You can use keyboard shortcuts to speed up your workflow.',
    },
};

export const Dismissible: Story = {
    args: {
        variant: 'info',
        title: 'Dismissible Callout',
        dismissible: true,
        onDismiss: () => alert('Callout dismissed'),
        children: 'This callout can be dismissed by clicking the X button.',
    },
};

export const WithoutTitle: Story = {
    args: {
        variant: 'info',
        children: 'This callout has no title, just content.',
    },
};
