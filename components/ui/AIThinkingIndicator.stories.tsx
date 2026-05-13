import type { Meta, StoryObj } from '@storybook/react';
import { AIThinkingIndicator } from './AIThinkingIndicator';

const meta = {
    title: 'Components/AIThinkingIndicator',
    component: AIThinkingIndicator,
    tags: ['autodocs'],
} satisfies Meta<typeof AIThinkingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'dots',
        size: 'md',
        message: '',
    },
};

export const DotsSmall: Story = {
    args: {
        variant: 'dots',
        size: 'sm',
    },
};

export const DotsLarge: Story = {
    args: {
        variant: 'dots',
        size: 'lg',
        message: 'Thinking...',
    },
};

export const PulseVariant: Story = {
    args: {
        variant: 'pulse',
        size: 'md',
    },
};

export const PulseLarge: Story = {
    args: {
        variant: 'pulse',
        size: 'lg',
        message: 'Analyzing your data...',
    },
};

export const WaveVariant: Story = {
    args: {
        variant: 'wave',
        size: 'md',
    },
};

export const WaveSmall: Story = {
    args: {
        variant: 'wave',
        size: 'sm',
    },
};

export const WithCustomColor: Story = {
    args: {
        variant: 'dots',
        size: 'md',
        color: '#34C759',
        message: 'Processing...',
    },
};

export const WithMessage: Story = {
    args: {
        variant: 'wave',
        size: 'lg',
        message: 'Generating your financial report...',
    },
};
