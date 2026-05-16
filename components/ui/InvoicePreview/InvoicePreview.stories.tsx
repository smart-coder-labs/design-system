import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InvoicePreview } from './InvoicePreview';

const meta: Meta<typeof InvoicePreview> = {
  title: 'Fintech/Payments/InvoicePreview',
  component: InvoicePreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoiceNumber: 'INV-2025-4421',
    date: '2025-04-15',
    dueDate: '2025-05-15',
    from: {
      name: 'Cesar Ruiz',
      email: 'cesar@example.com',
      address: '123 Main St, San Francisco, CA 94105',
    },
    to: {
      name: 'Acme Corp',
      email: 'billing@acmecorp.com',
      address: '456 Market St, San Francisco, CA 94105',
    },
    items: [
      { description: 'UI Design Services', quantity: 40, rate: 150 },
      { description: 'Frontend Development', quantity: 60, rate: 175 },
    ],
    taxRate: 8.5,
  },
};

export const FreelanceInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-4430',
    date: '2025-04-01',
    dueDate: '2025-04-30',
    from: {
      name: 'Alice Johnson',
      email: 'alice@designstudio.com',
    },
    to: {
      name: 'TechStartup Inc.',
      email: 'accounting@techstartup.io',
    },
    items: [
      { description: 'Brand Identity Design', quantity: 1, rate: 5000 },
      { description: 'Website Redesign', quantity: 80, rate: 150 },
      { description: 'Icon Set (48 icons)', quantity: 1, rate: 1200 },
    ],
    taxRate: 10,
    currency: 'USD',
    notes: 'Payment due within 30 days. Late payments subject to 1.5% monthly interest.',
  },
};

export const ConsultingInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-4435',
    date: '2025-04-10',
    dueDate: '2025-04-25',
    from: {
      name: 'Strategic Partners LLC',
      email: 'finance@strategicpartners.com',
      address: '100 Pine St, Suite 200, New York, NY 10005',
    },
    to: {
      name: 'Global Bank Corp',
      email: 'ap@globalbank.com',
      address: '500 Park Ave, New York, NY 10022',
    },
    items: [
      { description: 'Financial Consulting — Q1 2025', quantity: 40, rate: 350 },
      { description: 'Risk Assessment Report', quantity: 1, rate: 5000 },
      { description: 'Strategy Workshop (2 days)', quantity: 2, rate: 7500 },
    ],
    taxRate: 8.875,
    currency: 'USD',
    notes: 'Thank you for your continued partnership.',
  },
};

export const EuroInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-1001',
    date: '2025-04-01',
    dueDate: '2025-05-01',
    from: {
      name: 'Maria Schmidt',
      email: 'maria@design.de',
      address: 'Berliner Str. 42, 10115 Berlin',
    },
    to: {
      name: 'Tech GmbH',
      email: 'buchhaltung@techgmbh.de',
      address: 'Alexanderplatz 1, 10178 Berlin',
    },
    items: [
      { description: 'UX Consulting', quantity: 20, rate: 200 },
      { description: 'UI Design System', quantity: 1, rate: 8000 },
    ],
    taxRate: 19,
    currency: 'EUR',
  },
};

export const SimpleInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-1002',
    date: '2025-04-15',
    dueDate: '2025-04-30',
    from: { name: 'Carlos Ruiz', email: 'carlos@email.com' },
    to: { name: 'Client XYZ', email: 'client@xyz.com' },
    items: [{ description: 'Website Maintenance (Monthly)', quantity: 1, rate: 500 }],
    taxRate: 0,
    notes: 'Monthly maintenance retainer.',
  },
};

export const WithDiscount: Story = {
  args: {
    invoiceNumber: 'INV-2025-4440',
    date: '2025-04-01',
    dueDate: '2025-05-01',
    discount: 500,
    from: {
      name: 'Design Studio',
      email: 'hello@designstudio.com',
    },
    to: {
      name: 'Startup Co.',
      email: 'billing@startup.co',
    },
    items: [
      { description: 'Product Design Sprint', quantity: 1, rate: 15000 },
      { description: 'User Testing Sessions', quantity: 3, rate: 1000 },
    ],
    taxRate: 8.5,
    notes: 'Early payment discount of $500 applied.',
  },
};

export const InternationalInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-4450',
    date: '2025-04-12',
    dueDate: '2025-05-12',
    from: {
      name: 'FinFlow Ltd',
      email: 'billing@finflow.io',
      address: '1 Fintech Square, London, EC2N 1HQ',
    },
    to: {
      name: 'Tokyo Financial Inc',
      email: 'ap@tokyofin.co.jp',
      address: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
    },
    items: [
      { description: 'Software Licensing Q2 2025', quantity: 1, rate: 12000 },
      { description: 'Premium Support (Annual)', quantity: 1, rate: 6000 },
    ],
    taxRate: 20,
    currency: 'USD',
    notes: 'VAT reverse charge applies. Payment via SWIFT transfer.',
  },
};

/** Zero tax rate invoice */
export const ZeroTax: Story = {
  args: {
    invoiceNumber: 'INV-2025-4460',
    date: '2025-05-01',
    dueDate: '2025-05-31',
    from: { name: 'NonProfit Org', email: 'billing@nonprofit.org' },
    to: { name: 'Donor Foundation', email: 'finance@donor.org' },
    items: [
      { description: 'Grant Management Services', quantity: 1, rate: 10000 },
    ],
    taxRate: 0,
    notes: 'Tax-exempt under section 501(c)(3).',
  },
};

/** Many line items — edge case */
export const ManyLineItems: Story = {
  args: {
    invoiceNumber: 'INV-2025-4470',
    date: '2025-05-05',
    dueDate: '2025-06-04',
    from: { name: 'Enterprise Solutions Inc', email: 'billing@enterprise.com' },
    to: { name: 'Global Mega Corp', email: 'ap@megacorp.com' },
    items: Array.from({ length: 15 }, (_, i) => ({
      description: `Service Line Item #${i + 1} — Monthly Recurring`,
      quantity: Math.floor(Math.random() * 5) + 1,
      rate: Math.round(Math.random() * 500 + 50),
    })),
    taxRate: 8.5,
  },
};

/** Long text edge case */
export const LongDescription: Story = {
  args: {
    invoiceNumber: 'INV-2025-4480',
    date: '2025-05-10',
    dueDate: '2025-06-09',
    from: { name: 'A Very Long Company Name That Keeps Going And Going For Testing Purposes LLC', email: 'billing@extremely-long-company-name-that-overflows.com' },
    to: { name: 'Another Company With An Incredibly Long Name That Should Test Layout Boundaries Inc', email: 'accounting@longest-company-name-ever-registered.com' },
    items: [
      { description: 'This is an extremely long item description that should absolutely test how well the invoice preview handles text overflow and wrapping in the table cell. Lorem ipsum dolor sit amet consectetur adipiscing elit.', quantity: 1, rate: 9999.99 },
    ],
    taxRate: 10,
    notes: 'This invoice contains unusually long text values to verify layout robustness and text overflow handling across all screen sizes.',
  },
};

/** GBP currency invoice */
export const GbpInvoice: Story = {
  args: {
    invoiceNumber: 'INV-2025-4490',
    date: '2025-05-12',
    dueDate: '2025-06-11',
    from: { name: 'London Fintech Ltd', email: 'finance@londonfintech.co.uk', address: '30 St Mary Axe, London, EC3A 8BF' },
    to: { name: 'Manchester Retail Co', email: 'ap@manchesterretail.co.uk', address: '1 Corporation St, Manchester, M4 4AD' },
    items: [
      { description: 'Payment Processing (Monthly)', quantity: 1, rate: 2999 },
      { description: 'Fraud Detection License', quantity: 1, rate: 1500 },
    ],
    taxRate: 20,
    currency: 'GBP',
  },
};

/** Dark mode */
export const DarkMode: Story = {
  args: {
    invoiceNumber: 'INV-2025-4500',
    date: '2025-05-15',
    dueDate: '2025-06-14',
    from: { name: 'Midnight Studio', email: 'hello@midnight.studio' },
    to: { name: 'Dark Corp', email: 'billing@darkcorp.io' },
    items: [
      { description: 'Dark Theme Design', quantity: 1, rate: 3500 },
      { description: 'Night Mode UI Audit', quantity: 8, rate: 200 },
    ],
    taxRate: 8.5,
    notes: 'Dark mode support included.',
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
