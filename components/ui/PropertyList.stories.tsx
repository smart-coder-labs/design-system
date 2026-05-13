import type { Meta, StoryObj } from '@storybook/react';
import { PropertyList } from './PropertyList';

const meta = {
  title: 'Data Display/PropertyList',
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
    sections: [],
  },
};

export const BorderedVariant: Story = {
  args: {
    sections: [
      {
        id: 'token',
        title: 'Token Details',
        items: [
          { label: 'Market Cap', value: '$8.2B', icon: '💰' },
          { label: '24h Volume', value: '$1.4B', icon: '📊' },
          { label: 'Circulating Supply', value: '19.3M BTC', icon: '🔄' },
          { label: 'All-Time High', value: '$68,789', icon: '🚀' },
          { label: 'Total Supply', value: '21M BTC', icon: '🏦' },
        ],
      },
    ],
    variant: 'bordered',
  },
};

export const InsetVariant: Story = {
  args: {
    sections: [
      {
        id: 'account',
        title: 'Account Info',
        items: [
          { label: 'Balance', value: '$124,532.00', editable: true },
          { label: 'Account Type', value: 'Premium' },
          { label: 'Annual Percentage Yield', value: '4.25% APY' },
          { label: 'Interest Rate', value: '0.01% APR' },
        ],
      },
    ],
    variant: 'inset',
    size: 'sm',
  },
};

export const MultipleSections: Story = {
  args: {
    sections: [
      {
        id: 'personal',
        title: 'Personal Information',
        items: [
          { label: 'Full Name', value: 'Cesar Ruiz' },
          { label: 'Email', value: 'cesar@example.com' },
          { label: 'Phone', value: '+1 (555) 123-4567' },
        ],
      },
      {
        id: 'billing',
        title: 'Billing Address',
        items: [
          { label: 'Street', value: '123 FinTech Ave' },
          { label: 'City', value: 'San Francisco' },
          { label: 'State', value: 'CA' },
          { label: 'ZIP', value: '94105' },
        ],
      },
      {
        id: 'preferences',
        title: 'Preferences',
        defaultExpanded: false,
        items: [
          { label: 'Language', value: 'English' },
          { label: 'Currency', value: 'USD ($)' },
          { label: 'Notifications', value: 'Enabled' },
        ],
      },
    ],
  },
};

export const NoDividers: Story = {
  args: {
    sections: [
      {
        id: 'summary',
        items: [
          { label: 'Daily Change', value: '+$1,230 (2.3%)' },
          { label: 'Weekly Change', value: '+$4,567 (8.1%)' },
          { label: 'Monthly Change', value: '+$12,345 (12.5%)' },
          { label: 'Yearly Change', value: '+$89,012 (45.2%)' },
        ],
      },
    ],
    dividers: false,
  },
};

export const LargeSize: Story = {
  args: {
    sections: [
      {
        id: 'portfolio',
        title: 'Portfolio Summary',
        items: [
          { label: 'Total Value', value: '$1,234,567.89' },
          { label: 'Realized P&L', value: '+$234,567' },
          { label: 'Unrealized P&L', value: '+$98,765' },
          { label: 'Positions Open', value: '12' },
          { label: 'Win Rate', value: '67.8%' },
        ],
      },
    ],
    size: 'lg',
    collapsible: false,
  },
};

export const DarkMode: Story = {
  args: {
    sections: [
      {
        id: 'crypto',
        title: 'Crypto Holdings',
        items: [
          { label: 'Bitcoin (BTC)', value: '0.42 BTC — $28,456', icon: '₿' },
          { label: 'Ethereum (ETH)', value: '5.2 ETH — $16,328', icon: '⟠' },
          { label: 'USDC', value: '10,000 USDC', icon: '💲' },
          { label: 'Solana (SOL)', value: '50 SOL — $8,750', icon: '◎' },
        ],
      },
    ],
    variant: 'bordered',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story: any) => (
      <div className="dark p-6 bg-zinc-900 rounded-xl">
        <Story />
      </div>
    ),
  ],
};
