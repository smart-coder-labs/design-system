import type { Meta, StoryObj } from '@storybook/react';
import { MasonryLayout } from './MasonryLayout';

const meta = {
    title: 'Components/MasonryLayout',
    component: MasonryLayout,
    tags: ['autodocs'],
} satisfies Meta<typeof MasonryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    <div key="1" style={{ background: '#007AFF', color: 'white', padding: '32px 16px', borderRadius: '12px', fontWeight: 600 }}>Portfolio Summary</div>,
    <div key="2" style={{ background: '#34C759', color: 'white', padding: '64px 16px', borderRadius: '12px', fontWeight: 600 }}>Transaction History</div>,
    <div key="3" style={{ background: '#FF9500', color: 'white', padding: '48px 16px', borderRadius: '12px', fontWeight: 600 }}>Investment Goals</div>,
    <div key="4" style={{ background: '#FF3B30', color: 'white', padding: '80px 16px', borderRadius: '12px', fontWeight: 600 }}>Market Trends</div>,
    <div key="5" style={{ background: '#5856D6', color: 'white', padding: '40px 16px', borderRadius: '12px', fontWeight: 600 }}>Payment Methods</div>,
    <div key="6" style={{ background: '#FF2D55', color: 'white', padding: '56px 16px', borderRadius: '12px', fontWeight: 600 }}>Recent Activity</div>,
];

export const Default: Story = {
    args: {
        children: sampleItems,
    },
};

export const TwoColumns: Story = {
    args: {
        children: sampleItems,
        columns: 2,
        gap: 12,
    },
};

export const FourColumns: Story = {
    args: {
        children: sampleItems,
        columns: 4,
        gap: 8,
    },
};

export const WideGap: Story = {
    args: {
        children: sampleItems,
        columns: 3,
        gap: 32,
    },
};

export const SingleColumn: Story = {
    args: {
        children: sampleItems,
        columns: 1,
        gap: 12,
    },
};
