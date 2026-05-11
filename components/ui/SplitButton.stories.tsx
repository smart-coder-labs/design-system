import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton, type SplitButtonAction } from './SplitButton';
import { Send, Download, CreditCard, ArrowUpRight, Coins, Wallet, Banknote, RefreshCw, QrCode, Zap, Users, DollarSign } from 'lucide-react';

const meta = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A macOS/iOS-style split button with a primary action and a dropdown of secondary actions. Supports variants, sizes, and disabled states.',
      },
    },
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultActions: SplitButtonAction[] = [
  { label: 'Bitcoin (BTC)', onClick: () => {}, icon: Coins },
  { label: 'Ethereum (ETH)', onClick: () => {}, icon: Coins },
  { label: 'Solana (SOL)', onClick: () => {}, icon: Zap },
];

export const Default: Story = {
  args: {
    label: 'Buy Crypto',
    onClick: () => {},
    actions: defaultActions,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Send Money',
    onClick: () => {},
    actions: [
      { label: 'To Wallet', onClick: () => {}, icon: Wallet },
      { label: 'To Email', onClick: () => {}, icon: Send },
      { label: 'To Phone', onClick: () => {}, icon: QrCode },
      { label: 'To Bank', onClick: () => {}, icon: Banknote },
    ],
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'More Actions',
    onClick: () => {},
    actions: [
      { label: 'Download Report', onClick: () => {}, icon: Download },
      { label: 'Refresh Data', onClick: () => {}, icon: RefreshCw },
      { label: 'Share', onClick: () => {}, icon: ArrowUpRight },
    ],
    variant: 'tertiary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Withdraw',
    onClick: () => {},
    actions: [
      { label: 'Bank Account', onClick: () => {} },
      { label: 'Crypto Address', onClick: () => {} },
    ],
    disabled: true,
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    label: 'Deposit',
    onClick: () => {},
    actions: [
      { label: 'USDC', onClick: () => {}, icon: DollarSign },
      { label: 'USDT', onClick: () => {}, icon: DollarSign },
      { label: 'DAI', onClick: () => {}, icon: DollarSign },
    ],
    size: 'sm',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    label: 'Transfer',
    onClick: () => {},
    actions: [
      { label: 'Same Bank', onClick: () => {}, icon: CreditCard },
      { label: 'International', onClick: () => {}, icon: ArrowUpRight },
      { label: 'To Savings', onClick: () => {}, icon: Wallet },
    ],
    size: 'lg',
    variant: 'primary',
  },
};

export const WithDisabledAction: Story = {
  args: {
    label: 'Pay',
    onClick: () => {},
    actions: [
      { label: 'Credit Card', onClick: () => {}, icon: CreditCard },
      { label: 'Debit Card', onClick: () => {}, icon: CreditCard, disabled: true },
      { label: 'Crypto', onClick: () => {}, icon: Coins },
    ],
    variant: 'primary',
  },
};

export const WithIconsOnlyActions: Story = {
  args: {
    label: 'Actions',
    onClick: () => {},
    actions: [
      { label: 'Request Payment', onClick: () => {}, icon: Users },
      { label: 'Split Bill', onClick: () => {}, icon: Users },
      { label: 'Rewards', onClick: () => {}, icon: Coins },
    ],
    variant: 'secondary',
    size: 'md',
  },
};

export const LoadingInteraction: Story = {
  args: {
    label: 'Confirm Payment',
    onClick: () => {},
    actions: [
      { label: 'Card (Visa ***1234)', onClick: () => {}, icon: CreditCard },
      { label: 'Balance ($5,230.00)', onClick: () => {}, icon: Wallet },
      { label: 'Add Payment Method', onClick: () => {}, icon: CreditCard },
    ],
    variant: 'primary',
    size: 'lg',
  },
};

export const MobileSize: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    label: 'Send',
    onClick: () => {},
    actions: [
      { label: 'To Contact', onClick: () => {}, icon: Users },
      { label: 'To Account', onClick: () => {}, icon: CreditCard },
    ],
    variant: 'primary',
    size: 'sm',
  },
};
