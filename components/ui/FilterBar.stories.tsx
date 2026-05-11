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
