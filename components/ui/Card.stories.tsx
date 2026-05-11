import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    subcomponents: { CardHeader, CardTitle, CardDescription, CardContent, CardFooter },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        padding: 'md',
        children: 'This is an elevated card with a subtle shadow.',
    },
};

export const Glass: Story = {
    args: {
        variant: 'glass',
        padding: 'md',
        children: 'This is a glass card with backdrop blur effect.',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        padding: 'md',
        children: 'This is an outlined card with a border.',
    },
};

export const Flat: Story = {
    args: {
        variant: 'flat',
        padding: 'md',
        children: 'This is a flat card with a subtle background.',
    },
};

export const Hoverable: Story = {
    args: {
        variant: 'elevated',
        hoverable: true,
        padding: 'md',
        children: 'Hover over me! I lift up with a nice animation.',
    },
};

export const NoPadding: Story = {
    args: {
        variant: 'outlined',
        padding: 'none',
        children: 'This card has no internal padding.',
    },
};

export const SmallPadding: Story = {
    args: {
        variant: 'elevated',
        padding: 'sm',
        children: 'Compact card with small padding.',
    },
};

export const LargePadding: Story = {
    args: {
        variant: 'elevated',
        padding: 'lg',
        children: 'Spacious card with large padding.',
    },
};

export const WithHeaderContentFooter: Story = {
    render: () => (
        <Card variant="elevated" padding="none">
            <CardHeader>
                <CardTitle>Account Summary</CardTitle>
                <CardDescription>Your checking account overview</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                        $12,450.80
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>
                        Available Balance
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ padding: '8px 16px', borderRadius: '8px', background: 'var(--color-accent-blue)', color: 'white', border: 'none' }}>Transfer</button>
                    <button style={{ padding: '8px 16px', borderRadius: '8px', background: 'var(--color-surface-secondary)', border: '1px solid var(--color-border-primary)' }}>Details</button>
                </div>
            </CardFooter>
        </Card>
    ),
};
