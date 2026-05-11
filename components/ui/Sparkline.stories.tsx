import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from './Sparkline';

const meta = {
  title: 'Components/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
} satisfies Meta<typeof Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [10, 25, 18, 32, 28, 45, 50, 48, 55, 62],
  },
};

export const Positive: Story = {
  args: {
    data: [10, 15, 22, 30, 38, 45, 48, 55, 60, 72],
    color: '#22c55e',
  },
};

export const Negative: Story = {
  args: {
    data: [80, 72, 65, 58, 52, 48, 42, 38, 35, 30],
    color: '#ef4444',
  },
};

export const Volatile: Story = {
  args: {
    data: [50, 48, 55, 42, 58, 45, 52, 60, 48, 55],
    color: '#f59e0b',
  },
};

export const Small: Story = {
  args: {
    data: [12, 19, 15, 22, 18, 25],
    width: 80,
    height: 24,
  },
};

export const Large: Story = {
  args: {
    data: Array.from({ length: 100 }, () => Math.random() * 100),
    width: 300,
    height: 80,
  },
};

export const Flat: Story = {
  args: {
    data: [50, 50, 50, 50, 50, 50, 50],
    color: '#6b7280',
  },
};
