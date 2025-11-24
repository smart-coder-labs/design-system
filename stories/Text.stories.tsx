import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
    title: 'Typography/Text',
    component: Text,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A versatile text component for body copy, small text, and other text content. Supports multiple variants, weights, colors, and text utilities.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Body: Story = {
    args: {
        children: 'This is body text. It uses the default variant and styling for regular paragraph content.',
    },
};

export const Lead: Story = {
    args: {
        variant: 'lead',
        children: "This is lead text. It's larger and used for introductory paragraphs or important content.",
    },
};

export const Small: Story = {
    args: {
        variant: 'small',
        children: 'This is small text. Perfect for captions, labels, or secondary information.',
    },
};

export const Tiny: Story = {
    args: {
        variant: 'tiny',
        children: 'This is tiny text. Used for metadata, timestamps, or fine print.',
    },
};

export const Weights: Story = {
    render: () => (
        <div className="space-y-4">
            <Text weight="normal">Normal weight text</Text>
            <Text weight="medium">Medium weight text</Text>
            <Text weight="semibold">Semibold weight text</Text>
            <Text weight="bold">Bold weight text</Text>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="space-y-4 bg-background-primary p-8 rounded-xl">
            <Text color="primary">Primary color text</Text>
            <Text color="secondary">Secondary color text</Text>
            <Text color="tertiary">Tertiary color text</Text>
            <Text color="quaternary">Quaternary color text</Text>
            <Text color="accent">Accent color text</Text>
            <Text color="success">Success color text</Text>
            <Text color="warning">Warning color text</Text>
            <Text color="error">Error color text</Text>
        </div>
    ),
};

export const Alignment: Story = {
    render: () => (
        <div className="space-y-4 w-96">
            <Text align="left">Left aligned text</Text>
            <Text align="center">Center aligned text</Text>
            <Text align="right">Right aligned text</Text>
            <Text align="justify">
                Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </div>
    ),
};

export const Italic: Story = {
    args: {
        italic: true,
        children: 'This text is italicized for emphasis or quotes.',
    },
};

export const Underline: Story = {
    args: {
        underline: true,
        children: 'This text is underlined.',
    },
};

export const Truncate: Story = {
    render: () => (
        <div className="w-64">
            <Text truncate>
                This is a very long text that will be truncated with an ellipsis when it exceeds the container width
            </Text>
        </div>
    ),
};

export const LineClamp: Story = {
    render: () => (
        <div className="w-96 space-y-6">
            <div>
                <p className="text-sm font-semibold text-text-secondary mb-2">Line Clamp 2:</p>
                <Text lineClamp={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </div>
            <div>
                <p className="text-sm font-semibold text-text-secondary mb-2">Line Clamp 3:</p>
                <Text lineClamp={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </div>
        </div>
    ),
};

export const AsSpan: Story = {
    render: () => (
        <p>
            This is a paragraph with <Text as="span" color="accent" weight="semibold">inline text</Text> that uses the Text component as a span element.
        </p>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-6 max-w-2xl">
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Lead</p>
                <Text variant="lead">
                    The quick brown fox jumps over the lazy dog. This is lead text used for introductions.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Body</p>
                <Text variant="body">
                    The quick brown fox jumps over the lazy dog. This is body text used for regular content.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Small</p>
                <Text variant="small">
                    The quick brown fox jumps over the lazy dog. This is small text used for captions.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Tiny</p>
                <Text variant="tiny">
                    The quick brown fox jumps over the lazy dog. This is tiny text used for metadata.
                </Text>
            </div>
        </div>
    ),
};

export const RealWorldExample: Story = {
    render: () => (
        <div className="max-w-2xl space-y-6 bg-surface-primary p-8 rounded-2xl border border-border-primary">
            <div>
                <Text variant="lead" weight="semibold" color="primary">
                    Welcome to our Design System
                </Text>
            </div>
            <div className="space-y-4">
                <Text variant="body" color="secondary">
                    Our design system provides a comprehensive set of components and guidelines to help you build beautiful, consistent user interfaces. Each component is carefully crafted with attention to detail and follows Apple's design principles.
                </Text>
                <Text variant="body" color="secondary">
                    Whether you're building a web application, mobile app, or desktop software, our components will help you create experiences that users love.
                </Text>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-border-primary">
                <Text variant="small" color="tertiary">
                    Last updated:
                </Text>
                <Text variant="small" color="accent" weight="medium">
                    November 24, 2024
                </Text>
            </div>
        </div>
    ),
};

export const DarkMode: Story = {
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark">
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div className="space-y-4 bg-background-primary p-8 rounded-xl">
            <Text variant="lead" weight="bold">Dark Mode Typography</Text>
            <Text color="primary">Primary text in dark mode</Text>
            <Text color="secondary">Secondary text in dark mode</Text>
            <Text color="tertiary">Tertiary text in dark mode</Text>
            <Text color="accent">Accent text in dark mode</Text>
        </div>
    ),
};
