import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { action } from 'storybook/actions';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Confirm Transfer',
    children: <p className="text-text-secondary">This will transfer $250.00 to Alice Johnson.</p>,
  },
};

export const WithActions: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Confirm Payment',
    children: <p className="text-text-secondary">Are you sure you want to send $250.00 to Alice Johnson?</p>,
    footer: (
      <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition">Confirm</button>
      </div>
    ),
  },
};

export const LargeContent: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Transaction Details',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">Amount</p>
            <p className="text-lg font-bold text-text-primary">$1,200.00</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">Status</p>
            <p className="text-sm font-semibold text-status-success">Completed</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">From</p>
            <p className="text-sm font-medium text-text-primary">Checking •••• 4821</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">To</p>
            <p className="text-sm font-medium text-text-primary">Acme Corp</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const SmallModal: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Success',
    size: 'sm',
    children: (
      <div className="text-center py-4">
        <p className="text-4xl mb-3">✓</p>
        <p className="text-lg font-bold text-text-primary">Payment Sent!</p>
        <p className="text-sm text-text-tertiary mt-1">$250.00 to Alice Johnson</p>
      </div>
    ),
  },
};

export const PaymentConfirmation: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Payment Confirmation',
    children: (
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Recipient</span>
          <span className="text-sm font-semibold text-text-primary">Alice Johnson</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Amount</span>
          <span className="text-sm font-bold text-text-primary">$250.00</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Fee</span>
          <span className="text-sm font-semibold text-text-primary">$0.00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-text-secondary">Total</span>
          <span className="text-base font-bold text-accent-blue">$250.00</span>
        </div>
      </div>
    ),
    footer: (
      <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition">Confirm Payment</button>
      </div>
    ),
  },
};

export const CryptoSwapModal: Story = {
  args: {
    open: true,
    onClose: action('close'),
    title: 'Swap Confirmation',
    children: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-xl">
          <div>
            <p className="text-xs text-text-tertiary">From</p>
            <p className="text-sm font-bold text-text-primary">0.025 BTC</p>
          </div>
          <span className="text-lg text-text-tertiary">→</span>
          <div className="text-right">
            <p className="text-xs text-text-tertiary">To</p>
            <p className="text-sm font-bold text-text-primary">0.42 ETH</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Rate: 1 BTC = 16.8 ETH</span>
          <span>Fee: 0.1%</span>
        </div>
      </div>
    ),
    footer: (
      <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition">Confirm Swap</button>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    open: true,
    onClose: action('close'),
    children: <p className="text-text-secondary py-4">A modal without a title header.</p>,
  },
};

export const InteractiveModal: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-4 p-12">
        <button onClick={() => setOpen(true)} className="px-6 py-3 bg-accent-blue text-white rounded-xl font-semibold hover:bg-accent-blue-hover transition">
          Send $250
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Send Money">
          <p className="text-text-secondary mb-4">This will send $250.00 to Alice Johnson from your checking account.</p>
          <div className="flex gap-3 justify-end">
            <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition">Cancel</button>
            <button onClick={() => { alert('Sent!'); setOpen(false); }} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition">Send</button>
          </div>
        </Modal>
      </div>
    );
  },
};
