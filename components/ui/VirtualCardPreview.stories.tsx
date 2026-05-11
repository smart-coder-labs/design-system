import type { Meta, StoryObj } from '@storybook/react';
import { VirtualCardPreview } from './VirtualCardPreview';

const meta = {
    title: 'Components/VirtualCardPreview',
    component: VirtualCardPreview,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof VirtualCardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisaCard: Story = {
    args: {
        cardholderName: 'Cesar Ruiz',
        cardNumber: '4532 7891 2345 6789',
        expiryDate: '12/27',
        cvv: '***',
        brand: 'visa',
        balance: 12500.00,
        currency: 'USD',
        variant: 'full',
    },
};

export const Mastercard: Story = {
    args: {
        cardholderName: 'Cesar Ruiz',
        cardNumber: '5423 9876 5432 1098',
        expiryDate: '09/28',
        cvv: '***',
        brand: 'mastercard',
        balance: 8500.00,
        currency: 'USD',
        variant: 'full',
        gradient: 'from-yellow-400 via-orange-500 to-red-500',
    },
};

export const Amex: Story = {
    args: {
        cardholderName: 'Cesar Ruiz',
        cardNumber: '3782 934567 89012',
        expiryDate: '03/29',
        cvv: '***',
        brand: 'amex',
        balance: 22000.00,
        currency: 'USD',
        variant: 'full',
        gradient: 'from-blue-600 via-blue-700 to-indigo-900',
    },
};

export const FrozenCard: Story = {
    args: {
        cardholderName: 'Cesar Ruiz',
        cardNumber: '4532 7891 2345 6789',
        expiryDate: '12/27',
        cvv: '***',
        brand: 'visa',
        balance: 12500.00,
        currency: 'USD',
        variant: 'full',
        frozen: true,
    },
};

export const Compact: Story = {
    args: {
        cardholderName: 'Cesar Ruiz',
        cardNumber: '4532 **** **** 6789',
        brand: 'visa',
        variant: 'compact',
        currency: 'USD',
    },
};
