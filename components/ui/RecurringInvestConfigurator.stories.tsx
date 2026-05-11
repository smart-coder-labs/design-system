import type { Meta, StoryObj } from '@storybook/react';
import { RecurringInvestConfigurator } from './RecurringInvestConfigurator';

const meta = {
  title: 'Components/RecurringInvestConfigurator',
  component: RecurringInvestConfigurator,
  tags: ['autodocs'],
} satisfies Meta<typeof RecurringInvestConfigurator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', price: 43250 },
      { symbol: 'ETH', name: 'Ethereum', price: 2280 },
      { symbol: 'SOL', name: 'Solana', price: 145 },
    ],
    onSubmit: (config: any) => console.log('Config:', config),
  },
};

export const WithExistingPlan: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', price: 43250 },
      { symbol: 'ETH', name: 'Ethereum', price: 2280 },
    ],
    initialConfig: {
      asset: 'BTC',
      amount: 100,
      frequency: 'weekly',
      dayOfWeek: 1,
    },
    onSubmit: (config: any) => console.log('Config:', config),
  },
};

export const MonthlyPlan: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', price: 43250 },
      { symbol: 'ETH', name: 'Ethereum', price: 2280 },
      { symbol: 'USDC', name: 'USD Coin', price: 1 },
    ],
    initialConfig: {
      asset: 'ETH',
      amount: 500,
      frequency: 'monthly',
      dayOfMonth: 15,
    },
    onSubmit: (config: any) => console.log('Config:', config),
  },
};
