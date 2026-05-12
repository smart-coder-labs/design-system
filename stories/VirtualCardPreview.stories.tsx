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
        <div className="grid grid-cols-2 gap-6 p-6 w-[860px]">
            <VirtualCardPreview gradient="dark" brand="visa" cardholderName="Carlos M." cardNumber="4242 4242 4242 8421" expiryDate="09/28" cvv="314" />
            <VirtualCardPreview gradient="blue" brand="mastercard" cardholderName="Ana G." cardNumber="5412 7534 1234 9087" expiryDate="11/27" cvv="582" />
            <VirtualCardPreview gradient="purple" brand="visa" cardholderName="Laura P." cardNumber="4111 1111 1111 4321" expiryDate="03/29" cvv="271" />
            <VirtualCardPreview gradient="gold" brand="amex" cardholderName="Premium" cardNumber="3782 822463 10005" expiryDate="12/28" cvv="1234" balance={250000} currency="MXN" />
            <VirtualCardPreview gradient="emerald" brand="visa" cardholderName="Eco Card" cardNumber="4000 0000 0000 0002" expiryDate="06/30" cvv="419" />
        </div>
    ),
};
