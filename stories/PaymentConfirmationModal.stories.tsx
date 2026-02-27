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
    recipientBank: 'BBVA México',
    recipientAccount: '•••• •••• •••• 4521',
    amount: 5000,
    currency: 'MXN',
    concept: 'Rent payment — March',
    fee: 0,
    estimatedArrival: 'Instant (SPEI)',
};

export const Default: Story = {
    args: {
        open: true,
        data: defaultData,
        locale: 'es-MX',
    },
};

export const WithFee: Story = {
    name: '💰 With Fee',
    args: {
        open: true,
        data: { ...defaultData, fee: 25, estimatedArrival: '1-2 business days' },
        locale: 'es-MX',
    },
};

export const InternationalTransfer: Story = {
    name: '🌍 International Transfer',
    args: {
        open: true,
        data: {
            recipientName: 'John Smith',
            recipientBank: 'Chase Bank',
            recipientAccount: '•••• •••• •••• 9087',
            amount: 1500,
            currency: 'USD',
            concept: 'Freelance payment',
            fee: 35,
            estimatedArrival: '2-3 business days',
        },
        locale: 'en-US',
    },
};

export const Interactive: Story = {
    name: '🔐 Caso de Uso: Interactive Confirmation',
    render: () => {
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(false);

        const handleConfirm = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setOpen(false);
                alert('Payment sent successfully!');
            }, 2000);
        };

        return (
            <div>
                <button
                    onClick={() => setOpen(true)}
                    className="px-6 py-3 bg-accent-blue text-white rounded-xl text-sm font-bold"
                >
                    Send $5,000 MXN
                </button>
                <PaymentConfirmationModal
                    open={open}
                    data={defaultData}
                    locale="es-MX"
                    loading={loading}
                    onConfirm={handleConfirm}
                    onCancel={() => setOpen(false)}
                />
            </div>
        );
    },
};
