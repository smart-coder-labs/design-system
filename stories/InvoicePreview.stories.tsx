import type { Meta, StoryObj } from '@storybook/react';
import { InvoicePreview } from '../components/ui/InvoicePreview';

const meta: Meta<typeof InvoicePreview> = {
    title: 'Components/InvoicePreview',
    component: InvoicePreview,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        status: {
            control: 'select',
            options: ['paid', 'pending', 'overdue'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof InvoicePreview>;

const sampleItems = [
    {
        id: '1',
        description: 'Web Design Services - Homepage Redesign',
        quantity: 1,
        price: 1500.00,
        total: 1500.00,
    },
    {
        id: '2',
        description: 'Frontend Development (React/Next.js)',
        quantity: 40,
        price: 85.00,
        total: 3400.00,
    },
    {
        id: '3',
        description: 'UI/UX Consultation',
        quantity: 5,
        price: 120.00,
        total: 600.00,
    },
];

const sampleFrom = {
    name: 'Acme Creative Studio',
    address: '123 Design District',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    country: 'United States',
    email: 'billing@acmecreative.com',
};

const sampleTo = {
    name: 'TechStart Inc.',
    address: '456 Innovation Blvd, Suite 200',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    country: 'United States',
    email: 'accounts@techstart.io',
};

export const Default: Story = {
    args: {
        invoiceNumber: 'INV-2023-001',
        logo: 'logo.jpg',
        dateIssued: 'Oct 24, 2023',
        dueDate: 'Nov 24, 2023',
        status: 'pending',
        from: sampleFrom,
        to: sampleTo,
        items: sampleItems,
        subtotal: 5500.00,
        tax: 440.00,
        taxRate: 8,
        total: 5940.00,
        notes: 'Payment is due within 30 days. Late payments are subject to a 5% monthly fee.',
    },
};

export const Paid: Story = {
    args: {
        ...Default.args,
        status: 'paid',
        invoiceNumber: 'INV-2023-002',
        dateIssued: 'Sep 15, 2023',
        dueDate: 'Oct 15, 2023',
    },
};

export const Overdue: Story = {
    args: {
        ...Default.args,
        status: 'overdue',
        invoiceNumber: 'INV-2023-003',
        dateIssued: 'Aug 01, 2023',
        dueDate: 'Aug 31, 2023',
    },
};

export const WithDiscount: Story = {
    args: {
        ...Default.args,
        discount: 500.00,
        subtotal: 5500.00,
        tax: 400.00, // (5500 - 500) * 0.08
        total: 5400.00,
    },
};
