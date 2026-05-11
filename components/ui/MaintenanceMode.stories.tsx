import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MaintenanceMode } from './MaintenanceMode';

const meta: Meta<typeof MaintenanceMode> = {
  title: 'Components/MaintenanceMode',
  component: MaintenanceMode,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ScheduledMaintenance: Story = {
  args: {
    title: 'Scheduled Maintenance',
    message: 'We\'ll be performing a system upgrade. Service will resume at 6:00 AM EST.',
    estimatedDuration: '2 hours',
  },
};

export const BankingSystemDown: Story = {
  args: {
    title: 'System Maintenance in Progress',
    message: 'Online banking is temporarily unavailable while we upgrade our systems. Your accounts and transactions are safe.',
    estimatedDuration: '3 hours',
    contactSupport: true,
  },
};

export const TradingHalted: Story = {
  args: {
    title: 'Trading Paused',
    message: 'Trading has been temporarily halted for scheduled maintenance. Open orders will not be affected.',
    estimatedDuration: '1 hour',
  },
};

export const WithContact: Story = {
  args: {
    title: 'Under Maintenance',
    message: 'We\'re improving your experience. Please check back shortly.',
    contactSupport: true,
  },
};

export const ShortMessage: Story = {
  args: {
    title: 'Quick Update',
    message: 'Back in 30 minutes!',
    estimatedDuration: '30 minutes',
  },
};

export const CryptoExchangeDowntime: Story = {
  args: {
    title: 'CryptoVault Maintenance',
    message: 'Spot and futures trading are paused for scheduled maintenance. Withdrawals and deposits will resume automatically.',
    estimatedDuration: '4 hours',
    contactSupport: true,
  },
};

export const BankingMaintenance: Story = {
    args: {
        title: 'Scheduled Maintenance',
        description: 'We are upgrading our core banking systems to provide faster, more secure transactions.',
        estimatedReturnTime: '4:00 AM EST',
        showContactSupport: true,
    },
};

export const ContactSupportDisabled: Story = {
    args: {
        title: 'System Upgrade',
        description: 'Our mobile banking platform is being upgraded with new features.',
        estimatedReturnTime: 'Approximately 2 hours',
        showContactSupport: false,
    },
};

export const InlineWidget: Story = {
    args: {
        title: 'Widget Unavailable',
        description: 'This feature is temporarily unavailable.',
        fullPage: false,
    },
};
