import type { Meta, StoryObj } from '@storybook/react';
import { ContextualTrustBadge } from './ContextualTrustBadge';
import React from 'react';

const meta: Meta<typeof ContextualTrustBadge> = {
  title: 'Fintech/ContextualTrustBadge',
  component: ContextualTrustBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextualTrustBadge>;

export const Encryption: Story = {
  args: {
    variant: 'encryption',
  },
};

export const Insurance: Story = {
  args: {
    variant: 'insurance',
    amount: '$3,000.00 MXN',
  },
};

export const FraudProtection: Story = {
  args: {
    variant: 'fraud-protection',
    actionLabel: 'transferencia internacional'
  },
};

export const InsuranceWithoutAmount: Story = {
  args: {
    variant: 'insurance',
  },
};

export const FraudProtectionDefaultAction: Story = {
  args: {
    variant: 'fraud-protection',
  },
};

export const LargeAmount: Story = {
  args: {
    variant: 'insurance',
    amount: '$250,000.00 MXN',
  },
};

export const PaymentFlow: Story = {
  render: () => (
    <div className="max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-bold">Confirmar Pago</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Destino</span>
          <span className="font-medium">Amazon MX</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Monto</span>
          <span className="font-bold">$1,250.00 MXN</span>
        </div>
      </div>
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="compra" />
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Confirmar Pago
      </button>
    </div>
  ),
};

export const TransferFlow: Story = {
  render: () => (
    <div className="max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-bold">Transferencia Internacional</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Beneficiario</span>
          <span className="font-medium">Carlos Mendoza</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Monto</span>
          <span className="font-bold">$3,000.00 MXN</span>
        </div>
      </div>
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="insurance" amount="$3,000.00 MXN" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="transferencia internacional" />
      <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
        Enviar Transferencia
      </button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="max-w-md space-y-3">
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="insurance" amount="$50,000.00 MXN" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="pago" />
    </div>
  ),
};
