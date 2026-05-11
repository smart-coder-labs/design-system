import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FilterBar, FilterGroup, ActiveFilter } from './FilterBar';
import { action } from '@storybook/addon-actions';

const groups: FilterGroup[] = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { id: 'active', label: 'Active', value: 'active', count: 42 },
      { id: 'inactive', label: 'Inactive', value: 'inactive', count: 8 },
      { id: 'pending', label: 'Pending', value: 'pending', count: 3 },
    ],
  },
  {
    id: 'category',
    label: 'Category',
    type: 'multiselect',
    options: [
      { id: 'transfers', label: 'Transfers', value: 'transfers', count: 120 },
      { id: 'payments', label: 'Payments', value: 'payments', count: 85 },
      { id: 'deposits', label: 'Deposits', value: 'deposits', count: 63 },
      { id: 'withdrawals', label: 'Withdrawals', value: 'withdrawals', count: 34 },
    ],
  },
  {
    id: 'date',
    label: 'Date',
    type: 'date',
    placeholder: 'Select range',
  },
];

const activeFilters: ActiveFilter[] = [
  { groupId: 'status', optionId: 'active', label: 'Status: Active', value: 'active' },
  { groupId: 'category', optionId: 'payments', label: 'Category: Payments', value: 'payments' },
];

const transactionGroups: FilterGroup[] = [
  {
    id: 'type',
    label: 'Transaction Type',
    type: 'select',
    options: [
      { id: 'all', label: 'All Types', value: 'all', count: 342 },
      { id: 'incoming', label: 'Incoming', value: 'incoming', count: 156 },
      { id: 'outgoing', label: 'Outgoing', value: 'outgoing', count: 186 },
    ],
  },
  {
    id: 'amount',
    label: 'Amount Range',
    type: 'multiselect',
    options: [
      { id: 'under50', label: 'Under $50', value: 'under50', count: 89 },
      { id: '50to500', label: '$50 - $500', value: '50to500', count: 145 },
      { id: '500to5000', label: '$500 - $5,000', value: '500to5000', count: 78 },
      { id: 'over5000', label: 'Over $5,000', value: 'over5000', count: 30 },
    ],
  },
  {
    id: 'date',
    label: 'Date Range',
    type: 'date',
    placeholder: 'Pick dates',
  },
  {
    id: 'currency',
    label: 'Currency',
    type: 'multiselect',
    options: [
      { id: 'usd', label: 'USD', value: 'usd', count: 210 },
      { id: 'eur', label: 'EUR', value: 'eur', count: 72 },
      { id: 'btc', label: 'BTC', value: 'btc', count: 45 },
      { id: 'usdc', label: 'USDC', value: 'usdc', count: 15 },
    ],
  },
];

const meta: Meta<typeof FilterBar> = {
  title: 'Components/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groups,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all'),
  },
};

export const WithActiveFilters: Story = {
  args: {
    groups,
    activeFilters,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all'),
  },
};

export const WithoutSearch: Story = {
  args: {
    groups: [groups[0], groups[1]],
    showSearch: false,
  },
};

export const WithoutFilterCount: Story = {
  args: {
    groups,
    showFilterCount: false,
  },
};

export const TransactionHistoryFilters: Story = {
  args: {
    groups: transactionGroups,
    activeFilters: [
      { groupId: 'type', optionId: 'incoming', label: 'Type: Incoming', value: 'incoming' },
      { groupId: 'currency', optionId: 'usd', label: 'Currency: USD', value: 'usd' },
    ],
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all'),
  },
};

export const FullAccountFilters: Story = {
  args: {
    groups: [
      ...transactionGroups,
      {
        id: 'status',
        label: 'Account Status',
        type: 'multiselect',
        options: [
          { id: 'verified', label: 'Verified', value: 'verified', count: 28 },
          { id: 'pending_verify', label: 'Pending Verification', value: 'pending_verify', count: 6 },
          { id: 'restricted', label: 'Restricted', value: 'restricted', count: 2 },
        ],
      },
    ],
    activeFilters,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all'),
  },
};

export const MinimalFilters: Story = {
  args: {
    groups: [groups[0]],
    showSearch: false,
    onFilterChange: action('filter-change'),
  },
};

export const WithSearchOnly: Story = {
  args: {
    groups: [],
    searchPlaceholder: 'Search transactions, accounts, or users...',
    onSearch: action('search'),
  },
};

export const InteractiveFilterDemo: Story = {
  render: () => {
    const [active, setActive] = React.useState<ActiveFilter[]>([]);

    return (
      <div className="w-full space-y-4">
        <FilterBar
          groups={transactionGroups}
          activeFilters={active}
          onFilterChange={(filter) => {
            setActive((prev) => {
              const exists = prev.find(f => f.groupId === filter.groupId && f.optionId === filter.optionId);
              if (exists) return prev.filter(f => f !== exists);
              return [...prev, filter];
            });
          }}
          onClearAll={() => setActive([])}
          showFilterCount
        />
        <div className="text-xs text-text-tertiary px-1">
          {active.length > 0
            ? `Active filters: ${active.map(a => a.label).join(', ')}`
            : 'No active filters — showing all 342 transactions'}
        </div>
      </div>
    );
  },
};
