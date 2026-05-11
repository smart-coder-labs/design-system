import type { Meta, StoryObj } from '@storybook/react';
import { RotarySelector } from './RotarySelector';

const meta = {
  title: 'Components/RotarySelector',
  component: RotarySelector,
  tags: ['autodocs'],
} satisfies Meta<typeof RotarySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Buy', value: 'buy', icon: 'trending-up' },
      { label: 'Sell', value: 'sell', icon: 'trending-down' },
      { label: 'Swap', value: 'swap', icon: 'refresh-cw' },
    ],
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const WithSelected: Story = {
  args: {
    options: [
      { label: '1D', value: '1d' },
      { label: '1W', value: '1w' },
      { label: '1M', value: '1m' },
      { label: '1Y', value: '1y' },
      { label: 'ALL', value: 'all' },
    ],
    value: '1m',
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const ThreeOptions: Story = {
  args: {
    options: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
    ],
    value: 'medium',
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const WithIcons: Story = {
  args: {
    options: [
      { label: 'BTC', value: 'btc' },
      { label: 'ETH', value: 'eth' },
      { label: 'SOL', value: 'sol' },
      { label: 'ADA', value: 'ada' },
    ],
    value: 'eth',
    onChange: (val: string) => console.log('Selected:', val),
  },
};
