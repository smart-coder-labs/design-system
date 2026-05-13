import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LoadingOverlay } from './LoadingOverlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: true,
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Content behind the overlay</div>,
  },
};

export const WithMessage: Story = {
  args: {
    loading: true,
    message: 'Processing your transaction...',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Payment form content</div>,
  },
};

export const PaymentLoading: Story = {
  args: {
    loading: true,
    message: 'Sending $250.00 to Alice Johnson...',
    spinnerSize: 'lg',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Payment details</div>,
  },
};

export const VerifyingID: Story = {
  args: {
    loading: true,
    message: 'Verifying your identity...',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Upload documents here</div>,
  },
};

export const NotLoading: Story = {
  args: {
    loading: false,
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6 flex items-center justify-center"><p className="text-text-primary">Content is visible</p></div>,
  },
};

export const PortfolioLoading: Story = {
  args: {
    loading: true,
    message: 'Loading your portfolio...',
    children: <div className="w-96 h-64 bg-surface-primary rounded-2xl p-6">Portfolio chart would render here</div>,
  },
};

export const FullPageOverlay: Story = {
  decorators: [
    (Story) => <div className="relative h-96 w-full"><Story /></div>,
  ],
  args: {
    loading: true,
    fullPage: true,
    message: 'Loading...',
  },
};

export const SmallSpinner: Story = {
  args: {
    loading: true,
    message: 'Refreshing data...',
    spinnerSize: 'sm',
    children: <div className="w-96 h-32 bg-surface-primary rounded-2xl p-6">Dashboard content</div>,
  },
};
