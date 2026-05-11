import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveBillSplitter, SplitContact } from './InteractiveBillSplitter';
import { action } from '@storybook/addon-actions';

const friends: SplitContact[] = [
    { id: 'me', name: 'You', isUser: true },
    { id: 'ana', name: 'Ana García' },
    { id: 'carlos', name: 'Carlos Medina' },
    { id: 'laura', name: 'Laura Pérez' },
    { id: 'miguel', name: 'Miguel Torres' },
    { id: 'sofia', name: 'Sofia Ruiz' },
];

const largeGroup: SplitContact[] = [
    { id: 'me', name: 'You', isUser: true },
    { id: 'ana', name: 'Ana García' },
    { id: 'carlos', name: 'Carlos Medina' },
    { id: 'laura', name: 'Laura Pérez' },
    { id: 'miguel', name: 'Miguel Torres' },
    { id: 'sofia', name: 'Sofia Ruiz' },
    { id: 'diego', name: 'Diego López' },
    { id: 'valeria', name: 'Valeria Martínez' },
    { id: 'jorge', name: 'Jorge Hernández' },
    { id: 'paula', name: 'Paula Fernández' },
    { id: 'luis', name: 'Luis Ramírez' },
    { id: 'mariana', name: 'Mariana Castro' },
];

const meta: Meta<typeof InteractiveBillSplitter> = {
    title: 'Components/InteractiveBillSplitter',
    component: InteractiveBillSplitter,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        billAmount: 150.75,
        friends,
        onSplitComplete: action('split-complete'),
    },
};

export const LargeBill: Story = {
    args: {
        billAmount: 480.00,
        friends,
        onSplitComplete: action('split-complete'),
    },
};

export const EuroCurrency: Story = {
    args: {
        billAmount: 89.50,
        currency: 'EUR',
        friends: friends.slice(0, 3),
        onSplitComplete: action('split-complete'),
    },
};

export const LargeGroupDinner: Story = {
    args: {
        billAmount: 1250.00,
        currency: 'MXN',
        friends: largeGroup,
        onSplitComplete: action('split-complete-large'),
    },
};

export const SmallBillNoTip: Story = {
    args: {
        billAmount: 12.50,
        friends: friends.slice(0, 2),
        onSplitComplete: action('split-complete-small'),
    },
};

export const RoundBillAmount: Story = {
    args: {
        billAmount: 100,
        friends: [  { id: 'me', name: 'You', isUser: true }, { id: 'ana', name: 'Ana García' }, { id: 'carlos', name: 'Carlos Medina' }],
        onSplitComplete: action('split-complete-round'),
    },
};

export const PesosArgentinos: Story = {
    args: {
        billAmount: 15420.50,
        currency: 'ARS',
        friends: friends.slice(0, 4),
        onSplitComplete: action('split-complete-ars'),
    },
};

export const JustTwoPeople: Story = {
    args: {
        billAmount: 67.30,
        friends: [{ id: 'me', name: 'You', isUser: true }, { id: 'ana', name: 'Ana García' }],
        onSplitComplete: action('split-complete-two'),
    },
};
