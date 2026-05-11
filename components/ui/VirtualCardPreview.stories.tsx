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

export const PremiumBlack: Story = {
    args: {
        cardholderName: 'CESAR RUIZ',
        cardNumber: '5412 7500 3829 1745',
        expiryDate: '12/27',
        cvv: '***',
        brand: 'mastercard',
        gradient: 'from-gray-900 to-black',
        balance: 45230.00,
        currency: 'USD',
    },
};

export const BusinessCard: Story = {
    args: {
        cardholderName: 'ACME CORP',
        cardNumber: '4520 1200 3491 8832',
        expiryDate: '03/28',
        cvv: '***',
        brand: 'visa',
        gradient: 'from-blue-800 to-indigo-900',
        balance: 125000.00,
        currency: 'USD',
    },
};

export const VirtualOnly: Story = {
    args: {
        cardholderName: 'CESAR RUIZ',
        cardNumber: '4916 8032 2567 4410',
        expiryDate: '09/27',
        cvv: '***',
        brand: 'visa',
        gradient: 'from-teal-500 to-cyan-600',
        balance: 5000.00,
        currency: 'USD',
        frozen: false,
    },
};

export const FrozenCard: Story = {
    args: {
        cardholderName: 'CESAR RUIZ',
        cardNumber: '4532 1002 8876 5432',
        expiryDate: '06/28',
        cvv: '***',
        brand: 'visa',
        gradient: 'from-gray-400 to-gray-500',
        balance: 2400.00,
        currency: 'USD',
        frozen: true,
    },
};

export const CompactView: Story = {
    args: {
        cardholderName: 'CESAR RUIZ',
        cardNumber: '5412 7500 3829 1745',
        expiryDate: '12/27',
        brand: 'mastercard',
        balance: 15200.00,
        currency: 'USD',
        variant: 'compact',
    },
};
