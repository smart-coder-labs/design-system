import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { VirtualCardPreview } from '../components/ui/VirtualCardPreview';

const meta: Meta<typeof VirtualCardPreview> = {
    title: 'Fintech/Cards/VirtualCardPreview',
    component: VirtualCardPreview,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        brand: { control: 'select', options: ['visa', 'mastercard', 'amex', 'discover'] },
        isFrozen: { control: 'boolean' },
        isActive: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof VirtualCardPreview>;

export const Default: Story = {
    args: {
        cardholderName: 'CARLOS MEDINA',
        cardNumber: '4242 4242 4242 8421',
        expiry: '09/28',
        cvv: '314',
        brand: 'visa',
        issuer: 'Platinum Card',
        isActive: true,
        isFrozen: false,
    },
};

export const Mastercard: Story = {
    args: {
        ...Default.args,
        brand: 'mastercard',
        cardNumber: '5412 7534 1234 9087',
        issuer: 'Business Card',
    },
};

export const Frozen: Story = {
    name: '❄️ Frozen Card',
    args: {
        ...Default.args,
        isFrozen: true,
    },
};

export const HiddenNumber: Story = {
    name: '👁️ Hidden Number',
    args: {
        ...Default.args,
        hidden: true,
    },
};

export const AllVariants: Story = {
    name: '💳 All Card Variants',
    render: () => (
        <div className="flex flex-col gap-6 max-w-[340px]">
            <VirtualCardPreview brand="visa" cardholderName="CARLOS M." cardNumber="4242 4242 4242 8421" expiry="09/28" />
            <VirtualCardPreview brand="mastercard" cardholderName="ANA G." cardNumber="5412 7534 1234 9087" expiry="11/27" />
            <VirtualCardPreview brand="amex" cardholderName="LAURA P." cardNumber="3782 8224 6310 005" expiry="03/29" />
            <VirtualCardPreview brand="visa" cardholderName="PREMIUM" isFrozen cardNumber="4929 1234 5678 0001" expiry="12/28" />
        </div>
    ),
};
