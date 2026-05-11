import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InvoicePreview, InvoiceItem, InvoiceParty } from './InvoicePreview';
import { action } from '@storybook/addon-actions';

const from: InvoiceParty = {
  name: 'FinTechApp Studios',
  address: '123 Innovation Drive',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
  country: 'USA',
  email: 'billing@fintechapp.io',
};

const to: InvoiceParty = {
  name: 'Acme Corporation',
  address: '456 Market Street',
  city: 'San Francisco',
  state: 'CA',
  zip: '94107',
  country: 'USA',
  email: 'accounts@acme.com',
};

const items: InvoiceItem[] = [
  { id: '1', description: 'Dashboard Pro License (Annual)', quantity: 1, price: 1200, total: 1200 },
  { id: '2', description: 'API Access - Premium Tier', quantity: 3, price: 250, total: 750 },
  { id: '3', description: 'Cloud Storage (100GB)', quantity: 1, price: 50, total: 50 },
];

const meta: Meta<typeof InvoicePreview> = {
  title: 'Components/InvoicePreview',
  component: InvoicePreview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
  args: {
    invoiceNumber: 'INV-2026-0042',
    dateIssued: 'May 1, 2026',
    dueDate: 'May 30, 2026',
    status: 'paid',
    from,
    to,
    items,
    subtotal: 2000,
    tax: 320,
    taxRate: 16,
    total: 2320,
    onDownload: action('download'),
    onPrint: action('print'),
    onShare: action('share'),
  },
};

export const Pending: Story = {
  args: {
    invoiceNumber: 'INV-2026-0043',
    dateIssued: 'May 10, 2026',
    dueDate: 'June 10, 2026',
    status: 'pending',
    from,
    to: { ...to, name: 'StartUp Labs' },
    items: [
      { id: '1', description: 'UI Kit License', quantity: 2, price: 300, total: 600 },
      { id: '2', description: 'Design Consultation', quantity: 5, price: 150, total: 750 },
    ],
    subtotal: 1350,
    tax: 216,
    taxRate: 16,
    total: 1566,
    notes: 'Payment via wire transfer to account ending in 4823.',
    onDownload: action('download'),
  },
};

export const Overdue: Story = {
  args: {
    invoiceNumber: 'INV-2026-0038',
    dateIssued: 'April 1, 2026',
    dueDate: 'April 30, 2026',
    status: 'overdue',
    from,
    to: { ...to, name: 'Beta Corp' },
    items: [
      { id: '1', description: 'Enterprise Support - Q2', quantity: 1, price: 5000, total: 5000 },
    ],
    subtotal: 5000,
    tax: 800,
    taxRate: 16,
    discount: 500,
    total: 5300,
    onDownload: action('download'),
    onPrint: action('print'),
  },
};

export const WithDiscount: Story = {
  args: {
    invoiceNumber: 'INV-2026-0044',
    dateIssued: 'May 15, 2026',
    dueDate: 'June 14, 2026',
    status: 'pending',
    from,
    to: { ...to, name: 'TechStart Inc.' },
    items,
    subtotal: 2000,
    tax: 320,
    taxRate: 16,
    discount: 200,
    total: 2120,
    notes: 'Early payment discount of 10% applied.',
  },
};
