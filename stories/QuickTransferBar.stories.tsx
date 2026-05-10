import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { QuickTransferBar, type QuickContact } from '../components/ui/QuickTransferBar';

const meta: Meta<typeof QuickTransferBar> = {
    title: 'Fintech/Payments/QuickTransferBar',
    component: QuickTransferBar,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof QuickTransferBar>;

const contacts: QuickContact[] = [
    { id: '1', name: 'Ana García', initials: 'AG' },
    { id: '2', name: 'Carlos Medina', initials: 'CM' },
    { id: '3', name: 'Laura Pérez', initials: 'LP' },
    { id: '4', name: 'Miguel Torres', initials: 'MT' },
    { id: '5', name: 'Sofia Ruiz', initials: 'SR' },
    { id: '6', name: 'Diego López', initials: 'DL' },
    { id: '7', name: 'Elena Vega', initials: 'EV' },
    { id: '8', name: 'Roberto Díaz', initials: 'RD' },
];

export const Default: Story = {
    args: { contacts },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const FewContacts: Story = {
    args: { contacts: contacts.slice(0, 3) },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const Playground: Story = {
    name: '🎨 Playground',
    args: { contacts },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};
