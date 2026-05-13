import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Download, Heart } from 'lucide-react';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
        size: 'md',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
    },
};

export const Subtle: Story = {
    args: {
        children: 'Subtle',
        variant: 'subtle',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive',
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'lg',
    },
};

export const Loading: Story = {
    args: {
        children: 'Saving...',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
    },
};

export const WithLeftIcon: Story = {
    args: {
        children: 'Download',
        leftIcon: <Download className="w-4 h-4" />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Continue',
        rightIcon: <ArrowRight className="w-4 h-4" />,
    },
};

export const WithBothIcons: Story = {
    args: {
        children: 'Like',
        leftIcon: <Heart className="w-4 h-4" />,
        rightIcon: <ArrowRight className="w-4 h-4" />,
    },
};

export const VariantShowcase: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    ),
};

export const SizeShowcase: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const DisabledVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
            <Button variant="outline" disabled>Outline</Button>
            <Button variant="destructive" disabled>Destructive</Button>
        </div>
    ),
};
