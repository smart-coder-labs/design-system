import type { Meta, StoryObj } from '@storybook/react';
import { BankAccountCard } from './BankAccountCard';

const meta = {
    title: 'Components/BankAccountCard',
    component: BankAccountCard,
    tags: ['autodocs'],
} satisfies Meta<typeof BankAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckingAccount: Story = {
    args: {
        accountName: 'Personal Checking',
        accountType: 'checking',
        accountNumber: '•••• •••• •••• 4829',
        clabeOrIban: '012180001234567891',
        balance: 15250.75,
        currency: 'USD',
    },
};

export const SavingsAccount: Story = {
    args: {
        accountName: 'High-Yield Savings',
        accountType: 'savings',
        accountNumber: '•••• •••• •••• 7391',
        clabeOrIban: '032180005678901234',
        balance: 84750.50,
        currency: 'USD',
    },
};

export const CreditCard: Story = {
    args: {
        accountName: 'Platinum Rewards',
        accountType: 'credit',
        accountNumber: '•••• •••• •••• 5512',
        clabeOrIban: '002180009876543210',
        balance: -3200.00,
        currency: 'USD',
    },
};

export const InvestmentAccount: Story = {
    args: {
        accountName: 'Growth Portfolio',
        accountType: 'investment',
        accountNumber: '•••• •••• •••• 6673',
        clabeOrIban: '048180003456789012',
        balance: 125000.00,
        currency: 'USD',
    },
};

export const HiddenByDefault: Story = {
    args: {
        accountName: 'Private Account',
        accountType: 'checking',
        balance: 50000.00,
        hiddenByDefault: true,
        currency: 'USD',
    },
};

export const EuroAccount: Story = {
    args: {
        accountName: 'Euro Account',
        accountType: 'checking',
        balance: 12500.50,
        currency: 'EUR',
        locale: 'de-DE',
    },
};

export const ZeroBalance: Story = {
    args: {
        accountName: 'Empty Account',
        accountType: 'checking',
        balance: 0,
        currency: 'USD',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
