import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from './Sparkline';

const meta = {
    title: 'Components/Sparkline',
    component: Sparkline,
    tags: ['autodocs'],
} satisfies Meta<typeof Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpTrend: Story = {
    args: {
        data: [10, 20, 35, 30, 45, 55, 60, 75, 80, 95, 100, 120],
        width: 200,
        height: 40,
        showArea: true,
    },
};

export const DownTrend: Story = {
    args: {
        data: [120, 110, 105, 95, 90, 85, 80, 75, 70, 65, 60, 55],
        width: 200,
        height: 40,
        showArea: true,
    },
};

export const VolatileTrend: Story = {
    args: {
        data: [50, 80, 30, 90, 45, 85, 35, 95, 40, 70, 55, 100],
        width: 200,
        height: 40,
    },
};

export const WithDotsAndArea: Story = {
    args: {
        data: [10, 30, 25, 50, 45, 70, 65, 90, 85, 100],
        width: 250,
        height: 50,
        showDots: true,
        showArea: true,
    },
};

export const StockPrice: Story = {
    args: {
        data: [187.50, 189.20, 188.10, 190.50, 192.30, 191.80, 193.50, 195.00, 194.20, 196.80],
        width: 300,
        height: 60,
        color: '#22C55E',
        showArea: true,
        showLastDot: true,
    },
};

export const CryptoChart: Story = {
    args: {
        data: [43000, 42500, 44800, 44200, 45100, 43900, 45800, 46100, 45500, 46800],
        width: 300,
        height: 60,
        color: '#F59E0B',
        showArea: true,
        showDots: true,
    },
};

export const SmallInline: Story = {
    args: {
        data: [15, 22, 18, 25, 30, 28, 35, 40],
        width: 80,
        height: 24,
        strokeWidth: 1.5,
    },
};

export const DownTrendRed: Story = {
    args: {
        data: [100, 95, 88, 92, 85, 80, 78, 75],
        width: 200,
        height: 40,
        color: '#EF4444',
        showArea: true,
        trend: 'down',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        data: [10, 30, 50, 45, 60, 75, 70, 90],
        width: 200,
        height: 40,
        showArea: true,
    },
};
