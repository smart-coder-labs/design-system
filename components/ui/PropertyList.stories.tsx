import type { Meta, StoryObj } from '@storybook/react';
import { PropertyList } from './PropertyList';

const meta = {
  title: 'Components/PropertyList',
  component: PropertyList,
  tags: ['autodocs'],
} satisfies Meta<typeof PropertyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Market Cap', value: '$8.2B' },
      { label: '24h Volume', value: '$1.4B' },
      { label: 'Circulating Supply', value: '19.3M BTC' },
      { label: 'All-Time High', value: '$68,789' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Network', value: 'Ethereum', icon: 'ethereum' },
      { label: 'Token Standard', value: 'ERC-20' },
      { label: 'Decimals', value: '18' },
      { label: 'Contract', value: '0x1234...5678', icon: 'code' },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    items: [
      { label: 'APY', value: '12.5%' },
      { label: 'TVL', value: '$45.2M' },
      { label: 'Duration', value: '30 days' },
    ],
    layout: 'horizontal',
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
