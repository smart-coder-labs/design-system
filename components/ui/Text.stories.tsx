import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
    args: {
        variant: 'body',
        children: 'This is body text. The standard text style used throughout the application for general content.',
    },
};

export const Small: Story = {
    args: {
        variant: 'small',
        children: 'Small text, typically used for metadata, timestamps, and secondary information.',
    },
};

export const Tiny: Story = {
    args: {
        variant: 'tiny',
        children: 'Tiny text for labels, captions, and fine print.',
    },
};

export const Lead: Story = {
    args: {
        variant: 'lead',
        children: 'Lead text used for introductions and prominent paragraphs.',
    },
};

export const Weights: Story = {
    render: () => (
        <div className="space-y-2">
            <Text weight="normal">Normal weight - Standard text</Text>
            <Text weight="medium">Medium weight - Slightly emphasized</Text>
            <Text weight="semibold">Semibold weight - Section headings</Text>
            <Text weight="bold">Bold weight - Strong emphasis</Text>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="space-y-2">
            <Text color="primary">Primary - Main text color</Text>
            <Text color="secondary">Secondary - Less prominent text</Text>
            <Text color="tertiary">Tertiary - Placeholder, disabled</Text>
            <Text color="accent">Accent - Call to action</Text>
            <Text color="success">Success - Positive values</Text>
            <Text color="warning">Warning - Cautionary text</Text>
            <Text color="error">Error - Error messages</Text>
        </div>
    ),
};

export const Alignments: Story = {
    render: () => (
        <div className="space-y-4">
            <Text align="left">Left-aligned text (default)</Text>
            <Text align="center">Center-aligned text</Text>
            <Text align="right">Right-aligned text</Text>
        </div>
    ),
};

export const ItalicUnderline: Story = {
    render: () => (
        <div className="space-y-2">
            <Text italic>Italic text for emphasis or quotes</Text>
            <Text underline>Underlined text for links or emphasis</Text>
            <Text italic underline>Both italic and underlined</Text>
        </div>
    ),
};

export const Truncated: Story = {
    args: {
        truncate: true,
        children: 'This is a very long text that should be truncated with ellipsis when it exceeds the container width limit for demonstration purposes.',
        className: 'max-w-xs',
    },
};

export const LineClamp: Story = {
    args: {
        lineClamp: 2,
        children: 'This text is clamped to two lines. Any additional content will be hidden with an ellipsis. This is useful for card descriptions and previews that should not take up too much space in a layout.',
        className: 'max-w-sm',
    },
};

export const FintechExample: Story = {
    render: () => (
        <div className="space-y-3 border border-border-primary rounded-xl p-4">
            <Text weight="bold" variant="lead">Account Summary</Text>
            <div className="flex justify-between">
                <Text variant="small" color="secondary">Current Balance</Text>
                <Text weight="bold" color="primary">$12,450.80</Text>
            </div>
            <div className="flex justify-between">
                <Text variant="small" color="secondary">Today's Change</Text>
                <Text weight="medium" color="success">+$234.50 (2.3%)</Text>
            </div>
            <div className="flex justify-between">
                <Text variant="small" color="secondary">Monthly Budget</Text>
                <Text weight="medium" color="warning">$3,900 of $5,000</Text>
            </div>
            <Text variant="tiny" color="tertiary" align="center">Updated 2 minutes ago</Text>
        </div>
    ),
};

export const AsSpan: Story = {
    args: {
        as: 'span',
        children: 'This text renders as a <span> element instead of <p>.',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        children: 'Dark mode text with all color variants available.',
    },
};
