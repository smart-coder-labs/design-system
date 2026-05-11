import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InstallmentSimulator } from './InstallmentSimulator';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof InstallmentSimulator> = {
  title: 'Components/InstallmentSimulator',
  component: InstallmentSimulator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    purchaseAmount: 1200,
    maxMonths: 12,
    interestRate: 18,
    onConfirm: action('confirmed'),
  },
};

export const LargePurchase: Story = {
  args: {
    purchaseAmount: 25000,
    maxMonths: 24,
    interestRate: 12,
    onConfirm: action('confirmed'),
  },
};

export const SmallPurchase: Story = {
  args: {
    purchaseAmount: 200,
    maxMonths: 6,
    interestRate: 24,
    onConfirm: action('confirmed'),
  },
};

export const MexicanPesos: Story = {
  args: {
    purchaseAmount: 25000,
    currency: 'MXN',
    maxMonths: 12,
    interestRate: 36,
    onConfirm: action('confirmed'),
  },
};

export const ZeroInterest: Story = {
  args: {
    purchaseAmount: 1500,
    maxMonths: 12,
    interestRate: 0,
    onConfirm: action('confirmed'),
  },
};
