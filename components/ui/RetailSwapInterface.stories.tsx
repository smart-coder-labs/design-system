import type { Meta, StoryObj } from '@storybook/react';
import { RetailSwapInterface } from './RetailSwapInterface';

const meta = {
  title: 'Components/RetailSwapInterface',
  component: RetailSwapInterface,
  tags: ['autodocs'],
} satisfies Meta<typeof RetailSwapInterface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSwap: (data: any) => console.log('Swap:', data),
  },
};

export const WithTokens: Story = {
  args: {
    tokens: [
      { symbol: 'ETH', name: 'Ethereum', balance: '2.5', price: 2280 },
      { symbol: 'USDC', name: 'USD Coin', balance: '15000', price: 1 },
      { symbol: 'BTC', name: 'Bitcoin', balance: '0.1', price: 43250 },
    ],
    onSwap: (data: any) => console.log('Swap:', data),
  },
};

export const WithDefaults: Story = {
  args: {
    tokens: [
      { symbol: 'ETH', name: 'Ethereum', balance: '5.0', price: 2280 },
      { symbol: 'USDC', name: 'USD Coin', balance: '10000', price: 1 },
    ],
    defaultFrom: 'ETH',
    defaultTo: 'USDC',
    onSwap: (data: any) => console.log('Swap:', data),
  },
};

export const NoBalance: Story = {
  args: {
    tokens: [
      { symbol: 'ETH', name: 'Ethereum', balance: '0', price: 2280 },
      { symbol: 'SOL', name: 'Solana', balance: '0', price: 145 },
    ],
    onSwap: (data: any) => console.log('Swap:', data),
  },
};
