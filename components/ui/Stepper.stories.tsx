import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { label: 'Select Asset', description: 'Choose cryptocurrency' },
      { label: 'Enter Amount', description: 'Set investment amount' },
      { label: 'Review', description: 'Confirm transaction' },
      { label: 'Complete', description: 'Transaction done' },
    ],
    currentStep: 1,
  },
};

export const FirstStep: Story = {
  args: {
    steps: [
      { label: 'Connect Wallet', description: 'Link your wallet' },
      { label: 'Authorize', description: 'Sign transaction' },
      { label: 'Done', description: 'Process complete' },
    ],
    currentStep: 0,
  },
};

export const MiddleStep: Story = {
  args: {
    steps: [
      { label: 'Deposit', description: 'Add funds' },
      { label: 'Trade', description: 'Execute order' },
      { label: 'Withdraw', description: 'Transfer out' },
      { label: 'Confirm', description: 'Final confirmation' },
    ],
    currentStep: 2,
  },
};

export const Completed: Story = {
  args: {
    steps: [
      { label: 'Register', description: 'Create account' },
      { label: 'Verify', description: 'KYC verification' },
      { label: 'Deposit', description: 'Fund wallet' },
    ],
    currentStep: 3,
  },
};

export const Vertical: Story = {
  args: {
    steps: [
      { label: 'Plan', description: 'Define strategy' },
      { label: 'Execute', description: 'Place orders' },
      { label: 'Monitor', description: 'Track performance' },
    ],
    currentStep: 1,
    orientation: 'vertical',
  },
};
