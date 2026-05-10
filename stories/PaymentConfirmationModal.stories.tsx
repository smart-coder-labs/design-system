import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PaymentConfirmationModal } from '../components/ui/PaymentConfirmationModal';

const meta: Meta<typeof PaymentConfirmationModal> = {
    title: 'Fintech/Payments/PaymentConfirmationModal',
    component: PaymentConfirmationModal,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof PaymentConfirmationModal>;

const defaultData = {
    recipientName: 'Ana García',
    recipientIdentifier: '•••• •••• •••• 4521',
    amount: 5000,
    currency: 'MXN',
    description: 'Rent payment — March',
    fee: 0,
};

export const Default: Story = {
    args: {
        isOpen: true,
        data: defaultData,
        locale: 'es-MX',
    },
};

export const WithFee: Story = {
    name: '💰 With Fee',
    args: {
        isOpen: true,
        data: { ...defaultData, fee: 25 },
        locale: 'es-MX',
    },
};

export const InternationalTransfer: Story = {
    name: '🌍 International Transfer',
    args: {
        isOpen: true,
        data: {
            recipientName: 'John Smith',
            recipientIdentifier: 'CHASUS33 •••• 9087',
            amount: 1500,
            currency: 'USD',
            description: 'Freelance payment',
            fee: 35,
            total: 1535,
        },
        locale: 'en-US',
    },
};

export const Loading: Story = {
    name: '⏳ Loading State',
    args: {
        isOpen: true,
        data: defaultData,
        locale: 'es-MX',
        loading: true,
        loadingLabel: 'Processing payment...',
    },
};

export const Interactive: Story = {
    name: '🔐 Interactive Confirmation',
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [loading, setLoading] = useState(false);

        const handleConfirm = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setIsOpen(false);
            }, 2000);
        };

        return (
            <div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-3 bg-accent-blue text-white rounded-2xl text-sm font-bold shadow-sm"
                >
                    Send $5,000 MXN
                </button>
                <PaymentConfirmationModal
                    isOpen={isOpen}
                    data={defaultData}
                    locale="es-MX"
                    loading={loading}
                    onConfirm={handleConfirm}
                    onCancel={() => setIsOpen(false)}
                />
            </div>
        );
    },
};
