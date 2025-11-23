import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HamburgerMenuIcon } from '../components/HamburgerMenuIcon';

const meta: Meta<typeof HamburgerMenuIcon> = {
    title: 'Navigation/HamburgerMenuIcon',
    component: HamburgerMenuIcon,
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the menu is open (shows X) or closed (shows hamburger)',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size variant',
        },
        variant: {
            control: 'select',
            options: ['default', 'primary', 'ghost'],
            description: 'Color variant',
        },
        className: { control: false },
        onClick: { action: 'clicked' },
    },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenuIcon>;

// Interactive wrapper to toggle state
const InteractiveHamburger = (args: any) => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen ?? false);

    React.useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <div className="flex items-center justify-center min-h-[200px] bg-background-secondary p-8">
            <div className="text-center">
                <HamburgerMenuIcon
                    {...args}
                    isOpen={isOpen}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        args.onClick?.();
                    }}
                />
                <p className="mt-4 text-sm text-text-secondary">
                    Click to toggle: {isOpen ? 'Open (X)' : 'Closed (☰)'}
                </p>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <InteractiveHamburger {...args} />,
    args: {
        isOpen: false,
        size: 'md',
        variant: 'default',
    },
};

export const Small: Story = {
    render: (args) => <InteractiveHamburger {...args} />,
    args: {
        isOpen: false,
        size: 'sm',
        variant: 'default',
    },
};

export const Large: Story = {
    render: (args) => <InteractiveHamburger {...args} />,
    args: {
        isOpen: false,
        size: 'lg',
        variant: 'default',
    },
};

export const Primary: Story = {
    render: (args) => <InteractiveHamburger {...args} />,
    args: {
        isOpen: false,
        size: 'md',
        variant: 'primary',
    },
};

export const Ghost: Story = {
    render: (args) => <InteractiveHamburger {...args} />,
    args: {
        isOpen: false,
        size: 'md',
        variant: 'ghost',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-8">All Sizes</h2>
                <div className="grid grid-cols-3 gap-8">
                    {(['sm', 'md', 'lg'] as const).map((size) => {
                        const [isOpen, setIsOpen] = React.useState(false);
                        return (
                            <div key={size} className="text-center p-6 bg-surface-primary rounded-lg">
                                <HamburgerMenuIcon
                                    size={size}
                                    isOpen={isOpen}
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                <p className="mt-4 text-sm font-medium text-text-primary capitalize">
                                    {size}
                                </p>
                                <p className="text-xs text-text-tertiary">
                                    {isOpen ? 'Open' : 'Closed'}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-8">All Variants</h2>
                <div className="grid grid-cols-3 gap-8">
                    {(['default', 'primary', 'ghost'] as const).map((variant) => {
                        const [isOpen, setIsOpen] = React.useState(false);
                        return (
                            <div key={variant} className="text-center p-6 bg-surface-primary rounded-lg">
                                <HamburgerMenuIcon
                                    variant={variant}
                                    isOpen={isOpen}
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                <p className="mt-4 text-sm font-medium text-text-primary capitalize">
                                    {variant}
                                </p>
                                <p className="text-xs text-text-tertiary">
                                    {isOpen ? 'Open' : 'Closed'}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ),
};

export const InNavBar: Story = {
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="min-h-screen bg-background-secondary">
                <div className="h-16 px-4 bg-surface-primary border-b border-border-primary flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HamburgerMenuIcon
                            isOpen={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        <span className="text-lg font-semibold text-text-primary">
                            My App
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary">
                            About
                        </button>
                        <button className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-text-primary mb-4">
                            Hamburger Icon in NavBar
                        </h1>
                        <p className="text-text-secondary">
                            This example shows how the hamburger icon looks when integrated into a navigation bar.
                            Click the icon to see the animation.
                        </p>
                    </div>
                </div>
            </div>
        );
    },
};

export const Playground: Story = {
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
        const [variant, setVariant] = React.useState<'default' | 'primary' | 'ghost'>('default');

        return (
            <div className="min-h-screen bg-background-secondary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-8">Playground</h2>

                    <div className="mb-8 p-6 bg-surface-primary rounded-lg">
                        <div className="flex items-center justify-center mb-8">
                            <HamburgerMenuIcon
                                isOpen={isOpen}
                                size={size}
                                variant={variant}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    Size
                                </label>
                                <div className="flex gap-2">
                                    {(['sm', 'md', 'lg'] as const).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`px-4 py-2 text-sm rounded-md transition-colors ${size === s
                                                    ? 'bg-accent-blue text-white'
                                                    : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                                                }`}
                                        >
                                            {s.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    Variant
                                </label>
                                <div className="flex gap-2">
                                    {(['default', 'primary', 'ghost'] as const).map((v) => (
                                        <button
                                            key={v}
                                            onClick={() => setVariant(v)}
                                            className={`px-4 py-2 text-sm rounded-md transition-colors capitalize ${variant === v
                                                    ? 'bg-accent-blue text-white'
                                                    : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                                                }`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
