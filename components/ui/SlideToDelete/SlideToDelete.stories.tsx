import type { Meta, StoryObj } from '@storybook/react';
import { SlideToDelete } from './SlideToDelete';
import { fn } from 'storybook/test';

const meta = {
  title: 'Gestures/SlideToDelete',
  component: SlideToDelete,
  tags: ['autodocs'],
} satisfies Meta<typeof SlideToDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onDelete: fn(),
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Swipe right to delete this item</p>
        <p className="text-text-tertiary text-sm mt-1">Slide to reveal the delete action</p>
      </div>
    ),
  },
};

export const WithCustomLabel: Story = {
  args: {
    onDelete: fn(),
    deleteLabel: 'Remove',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Transaction #12345</p>
        <p className="text-text-tertiary text-sm mt-1">$250.00 • May 10, 2026</p>
      </div>
    ),
  },
};

export const SmallContent: Story = {
  args: {
    onDelete: fn(),
    children: (
      <div className="p-3 bg-surface-primary rounded-lg border border-border-primary text-sm text-text-primary">
        Small item
      </div>
    ),
  },
};

export const NotificationCard: Story = {
  args: {
    onDelete: fn(),
    deleteLabel: 'Dismiss',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <div className="flex items-start gap-3">
          <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#007AFF20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 16 }}>🔔</span>
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">Payment Received</p>
            <p className="text-text-tertiary text-xs mt-0.5">You received $320 from Alice Johnson</p>
            <p className="text-text-tertiary text-xs mt-0.5">2 min ago</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const TransactionRow: Story = {
  args: {
    onDelete: fn(),
    deleteLabel: 'Delete',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#FF950020', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 18 }}>💳</span>
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">Uber Ride</p>
            <p className="text-text-tertiary text-xs">May 10, 2026</p>
          </div>
        </div>
        <p className="text-text-primary font-semibold">-$24.50</p>
      </div>
    ),
  },
};

export const ContactCard: Story = {
  args: {
    onDelete: fn(),
    deleteLabel: 'Remove',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#007AFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: 16 }}>
          AJ
        </div>
        <div>
          <p className="text-text-primary font-medium">Alice Johnson</p>
          <p className="text-text-tertiary text-xs">@alicej • Last transfer 2h ago</p>
        </div>
      </div>
    ),
  },
};

export const WithCancel: Story = {
  args: {
    onDelete: fn(),
    onCancel: fn(),
    cancelLabel: 'Cancel',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Swipe left to cancel, right to delete</p>
        <p className="text-text-tertiary text-sm mt-1">Bi-directional swipe demo</p>
      </div>
    ),
  },
};

export const Disabled: Story = {
  args: {
    onDelete: fn(),
    disabled: true,
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary opacity-60">
        <p className="text-text-primary font-medium">Cannot be deleted</p>
        <p className="text-text-tertiary text-sm mt-1">Swipe is disabled for this item</p>
      </div>
    ),
  },
};

export const WithConfirmDialog: Story = {
  args: {
    onDelete: fn(),
    confirmDelete: true,
    confirmMessage: 'Delete this transaction permanently?',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Large Transfer</p>
        <p className="text-text-tertiary text-sm mt-1">$5,000.00 to Savings Account</p>
        <p className="text-text-tertiary text-xs mt-0.5">Requires confirmation before deletion</p>
      </div>
    ),
  },
};

export const WarningVariant: Story = {
  args: {
    onDelete: fn(),
    variant: 'warning',
    deleteLabel: 'Archive',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Old statement</p>
        <p className="text-text-tertiary text-sm mt-1">March 2026 — Archive instead of delete</p>
      </div>
    ),
  },
};

export const CustomThreshold: Story = {
  args: {
    onDelete: fn(),
    threshold: 40,
    deleteLabel: 'Delete (easy)',
    children: (
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Easier to delete</p>
        <p className="text-text-tertiary text-sm mt-1">Lower swipe threshold (40px)</p>
      </div>
    ),
  },
};
