import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';

const meta = {
    title: 'Forms/Combobox',
    component: Combobox,
    tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const currencies = [
    { value: 'usd', label: 'US Dollar (USD)' },
    { value: 'eur', label: 'Euro (EUR)' },
    { value: 'gbp', label: 'British Pound (GBP)' },
    { value: 'jpy', label: 'Japanese Yen (JPY)' },
    { value: 'mxn', label: 'Mexican Peso (MXN)' },
    { value: 'brl', label: 'Brazilian Real (BRL)' },
    { value: 'cad', label: 'Canadian Dollar (CAD)' },
    { value: 'aud', label: 'Australian Dollar (AUD)' },
    { value: 'chf', label: 'Swiss Franc (CHF)' },
    { value: 'cny', label: 'Chinese Yuan (CNY)' },
];

export const Default: Story = {
    args: {
        items: currencies,
        placeholder: 'Select a currency...',
    },
};

export const WithValue: Story = {
    args: {
        items: currencies,
        value: 'eur',
        placeholder: 'Select a currency...',
    },
};

export const Disabled: Story = {
    args: {
        items: currencies.slice(0, 3),
        placeholder: 'Select a currency...',
        disabled: true,
    },
};

export const CustomPlaceholder: Story = {
    args: {
        items: currencies.slice(0, 5),
        placeholder: 'Choose your currency...',
    },
};

export const CustomSearchPlaceholder: Story = {
    args: {
        items: currencies,
        placeholder: 'Select a currency...',
        searchPlaceholder: 'Search currencies...',
    },
};

export const FewOptions: Story = {
    args: {
        items: [
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' },
            { value: 'pending', label: 'Pending' },
        ],
        placeholder: 'Select status...',
    },
};

export const CustomEmptyMessage: Story = {
    args: {
        items: [],
        placeholder: 'Select an item...',
        emptyMessage: 'No matching options found.',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
