import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../components/Title';

const meta: Meta<typeof Title> = {
    title: 'Typography/Title',
    component: Title,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A flexible heading component for titles and headings. Supports 6 levels (h1-h6), multiple weights, colors, gradient text, and responsive sizing.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
    args: {
        level: 1,
        children: 'Heading Level 1',
    },
};

export const H2: Story = {
    args: {
        level: 2,
        children: 'Heading Level 2',
    },
};

export const H3: Story = {
    args: {
        level: 3,
        children: 'Heading Level 3',
    },
};

export const H4: Story = {
    args: {
        level: 4,
        children: 'Heading Level 4',
    },
};

export const H5: Story = {
    args: {
        level: 5,
        children: 'Heading Level 5',
    },
};

export const H6: Story = {
    args: {
        level: 6,
        children: 'Heading Level 6',
    },
};

export const AllLevels: Story = {
    render: () => (
        <div className="space-y-6 max-w-4xl">
            <Title level={1}>Heading Level 1 - The largest heading</Title>
            <Title level={2}>Heading Level 2 - Section heading</Title>
            <Title level={3}>Heading Level 3 - Subsection heading</Title>
            <Title level={4}>Heading Level 4 - Article heading</Title>
            <Title level={5}>Heading Level 5 - Smaller heading</Title>
            <Title level={6}>Heading Level 6 - The smallest heading</Title>
        </div>
    ),
};

export const Weights: Story = {
    render: () => (
        <div className="space-y-4">
            <Title level={3} weight="normal">Normal weight heading</Title>
            <Title level={3} weight="medium">Medium weight heading</Title>
            <Title level={3} weight="semibold">Semibold weight heading</Title>
            <Title level={3} weight="bold">Bold weight heading</Title>
            <Title level={3} weight="black">Black weight heading</Title>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="space-y-4 bg-background-primary p-8 rounded-xl">
            <Title level={3} color="primary">Primary color heading</Title>
            <Title level={3} color="secondary">Secondary color heading</Title>
            <Title level={3} color="tertiary">Tertiary color heading</Title>
            <Title level={3} color="accent">Accent color heading</Title>
            <Title level={3} color="success">Success color heading</Title>
            <Title level={3} color="warning">Warning color heading</Title>
            <Title level={3} color="error">Error color heading</Title>
        </div>
    ),
};

export const Alignment: Story = {
    render: () => (
        <div className="space-y-6 w-full max-w-2xl">
            <Title level={3} align="left">Left aligned heading</Title>
            <Title level={3} align="center">Center aligned heading</Title>
            <Title level={3} align="right">Right aligned heading</Title>
        </div>
    ),
};

export const Gradient: Story = {
    args: {
        level: 1,
        gradient: true,
        children: 'Beautiful Gradient Heading',
    },
};

export const GradientExamples: Story = {
    render: () => (
        <div className="space-y-6 max-w-4xl">
            <Title level={1} gradient>
                Create Amazing Experiences
            </Title>
            <Title level={2} gradient>
                Design System Components
            </Title>
            <Title level={3} gradient>
                Beautiful Typography
            </Title>
        </div>
    ),
};

export const Truncate: Story = {
    render: () => (
        <div className="w-64">
            <Title level={3} truncate>
                This is a very long heading that will be truncated with an ellipsis
            </Title>
        </div>
    ),
};

export const HeroSection: Story = {
    render: () => (
        <div className="max-w-4xl space-y-6 text-center">
            <Title level={1} gradient>
                Build Better Products Faster
            </Title>
            <p className="text-xl text-text-secondary">
                A comprehensive design system with beautiful components and thoughtful design patterns.
            </p>
        </div>
    ),
};

export const ArticleHeader: Story = {
    render: () => (
        <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
                <span>Design Systems</span>
                <span>•</span>
                <span>5 min read</span>
            </div>
            <Title level={1}>
                The Complete Guide to Building Design Systems
            </Title>
            <p className="text-lg text-text-secondary">
                Learn how to create a scalable, maintainable design system that empowers your team to build consistent user experiences.
            </p>
            <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10" />
                <div>
                    <p className="font-medium text-text-primary">John Doe</p>
                    <p className="text-sm text-text-tertiary">November 24, 2024</p>
                </div>
            </div>
        </div>
    ),
};

export const SectionHeadings: Story = {
    render: () => (
        <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
                <Title level={2}>Introduction</Title>
                <p className="text-text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="space-y-4">
                <Title level={2}>Getting Started</Title>
                <p className="text-text-secondary">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="space-y-3 pl-4">
                    <Title level={3}>Installation</Title>
                    <p className="text-text-secondary">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <Title level={2}>Advanced Usage</Title>
                <p className="text-text-secondary">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    ),
};

export const FeatureSection: Story = {
    render: () => (
        <div className="max-w-6xl space-y-12">
            <div className="text-center space-y-4">
                <Title level={2} gradient>
                    Powerful Features
                </Title>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Everything you need to build modern, accessible, and beautiful user interfaces.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Fast', 'Accessible', 'Beautiful'].map((feature) => (
                    <div key={feature} className="space-y-3 text-center">
                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 mx-auto" />
                        <Title level={4}>{feature}</Title>
                        <p className="text-text-secondary text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                ))}
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
        <div className="space-y-6 bg-background-primary p-8 rounded-xl max-w-4xl">
            <Title level={1} gradient>Dark Mode Typography</Title>
            <Title level={2} color="primary">Beautiful Headings</Title>
            <Title level={3} color="secondary">In Dark Mode</Title>
            <Title level={4} color="accent">With Perfect Contrast</Title>
        </div>
    ),
};
