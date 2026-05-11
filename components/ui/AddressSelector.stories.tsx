import type { Meta, StoryObj } from '@storybook/react';
import { AddressSelector } from './AddressSelector';

const meta = {
    title: 'Components/AddressSelector',
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
