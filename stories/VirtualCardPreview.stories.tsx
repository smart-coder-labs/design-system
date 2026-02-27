import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { VirtualCardPreview } from '../components/ui/VirtualCardPreview';

const meta: Meta<typeof VirtualCardPreview> = {
    title: 'Fintech/Cards/VirtualCardPreview',
    component: VirtualCardPreview,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        brand: { control: 'select', options: ['visa', 'mastercard', 'amex'] },
        gradient: { control: 'select', options: ['dark', 'blue', 'purple', 'gold', 'emerald'] },
    },
};

export default meta;
type Story = StoryObj<typeof VirtualCardPreview>;

export const Default: Story = {
    args: {
        cardholderName: 'Carlos Medina',
        cardNumber: '4242 4242 4242 8421',
        expiryDate: '09/28',
        cvv: '314',
        brand: 'visa',
        gradient: 'dark',
    },
};

export const Mastercard: Story = {
    args: {
        ...Default.args,
        brand: 'mastercard',
        gradient: 'blue',
        cardNumber: '5412 7534 1234 9087',
    },
};

export const Gold: Story = {
    name: '🏆 Gold Card',
    args: {
        ...Default.args,
        gradient: 'gold',
        brand: 'amex',
        cardholderName: 'Premium Member',
        balance: 125000,
        currency: 'MXN',
    },
};

export const Frozen: Story = {
    name: '❄️ Frozen Card',
    args: {
        ...Default.args,
        frozen: true,
        balance: 46800,
        currency: 'MXN',
    },
};

export const AllVariants: Story = {
    name: '💳 Caso de Uso: All Card Variants',
    render: () => (
        <div className="grid grid-cols-1 gap-6 max-w-[400px]">
            <VirtualCardPreview gradient="dark" brand="visa" cardholderName="Carlos M." />
            <VirtualCardPreview gradient="blue" brand="mastercard" cardholderName="Ana G." />
            <VirtualCardPreview gradient="purple" brand="visa" cardholderName="Laura P." />
            <VirtualCardPreview gradient="gold" brand="amex" cardholderName="Premium" balance={250000} currency="MXN" />
            <VirtualCardPreview gradient="emerald" brand="visa" cardholderName="Eco Card" />
        </div>
    ),
};
