import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EarlyPaymentDiscount } from './EarlyPaymentDiscount';

const meta: Meta<typeof EarlyPaymentDiscount> = {
  title: 'Components/EarlyPaymentDiscount',
  component: EarlyPaymentDiscount,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalInterestRemaining: 120.50,
    remainingMonths: 6,
    monthlyPayment: 200,
  },
};

export const HighInterest: Story = {
  args: {
    totalInterestRemaining: 840.00,
    remainingMonths: 24,
    monthlyPayment: 350,
    currency: 'USD',
  },
};

export const ShortTerm: Story = {
  args: {
    totalInterestRemaining: 15.00,
    remainingMonths: 2,
    monthlyPayment: 500,
    currency: 'USD',
  },
};

export const LongTerm: Story = {
  args: {
    totalInterestRemaining: 2400,
    remainingMonths: 36,
    monthlyPayment: 180,
    currency: 'USD',
  },
};

export const EURCurrency: Story = {
  args: {
    totalInterestRemaining: 350,
    remainingMonths: 12,
    monthlyPayment: 150,
    currency: 'EUR',
  },
};
