import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search coins...',
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const WithValue: Story = {
  args: {
    value: 'Bitcoin',
    placeholder: 'Search coins...',
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search markets...',
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search transactions...',
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const WithResults: Story = {
  args: {
    placeholder: 'Search...',
    value: 'eth',
    results: [
      { label: 'Ethereum (ETH)', value: '$2,280.50' },
      { label: 'Ethereum Classic (ETC)', value: '$28.40' },
      { label: 'ETH/BTC Pair', value: '0.0523' },
    ],
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const Loading: Story = {
  args: {
    placeholder: 'Search...',
    loading: true,
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search unavailable',
    disabled: true,
    onChange: (val: string) => console.log('Search:', val),
  },
};

export const WithError: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    error: 'No results found',
    onChange: (val: string) => console.log('Search:', val),
  },
};
