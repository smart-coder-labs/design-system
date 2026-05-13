import type { Meta, StoryObj } from '@storybook/react';
import { AddressSelector } from './AddressSelector';

const meta = {
    title: 'Forms/AddressSelector',
    component: AddressSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof AddressSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Search address',
        minLength: 3,
        apiKey: 'demo-key',
    },
};

export const CustomPlaceholder: Story = {
    args: {
        placeholder: 'Enter your location...',
        minLength: 2,
        apiKey: 'demo-key',
    },
};

export const LongerMinLength: Story = {
    args: {
        placeholder: 'Type at least 4 characters',
        minLength: 4,
        apiKey: 'demo-key',
    },
};

export const WithoutApiKey: Story = {
    args: {
        placeholder: 'Search address',
        minLength: 3,
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Address search disabled',
        minLength: 3,
        apiKey: 'demo-key',
        disabled: true,
    },
};

export const Mobile: Story = {
    args: {
        placeholder: 'Enter your address',
        minLength: 2,
        apiKey: 'demo-key',
    },
    decorators: [
        (Story) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const TruncatedAddress: Story = {
    args: {
        placeholder: 'Search a very long address with many characters',
        minLength: 10,
        apiKey: 'demo-key',
    },
};

export const WithOnSelect: Story = {
    args: {
        placeholder: 'Type to see selection demo',
        minLength: 3,
        apiKey: 'demo-key',
        onSelect: (place) => console.log('Selected:', place),
    },
};

export const DarkMode: Story = {
    args: {
        placeholder: 'Search address',
        minLength: 3,
        apiKey: 'demo-key',
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>
        ),
    ],
};
