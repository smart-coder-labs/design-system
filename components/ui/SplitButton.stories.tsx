import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';

const meta = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Buy Crypto',
    options: [
      { label: 'Bitcoin (BTC)', value: 'btc', onClick: () => alert('Buy BTC') },
      { label: 'Ethereum (ETH)', value: 'eth', onClick: () => alert('Buy ETH') },
      { label: 'Solana (SOL)', value: 'sol', onClick: () => alert('Buy SOL') },
    ],
    onPrimaryClick: () => alert('Primary action'),
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Send',
    options: [
      { label: 'Send to Wallet', value: 'wallet', onClick: () => alert('Send to wallet') },
      { label: 'Send to Email', value: 'email', onClick: () => alert('Send to email') },
      { label: 'Send to Phone', value: 'phone', onClick: () => alert('Send to phone') },
    ],
    onPrimaryClick: () => alert('Send'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Withdraw',
    options: [
      { label: 'Bank Account', value: 'bank', onClick: () => alert('Bank withdraw') },
      { label: 'Crypto Address', value: 'crypto', onClick: () => alert('Crypto withdraw') },
    ],
    disabled: true,
    onPrimaryClick: () => alert('Withdraw'),
  },
};
