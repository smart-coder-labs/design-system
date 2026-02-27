import type { Meta, StoryObj } from '@storybook/react';
import { ProgressiveDisclosurePanel } from './ProgressiveDisclosurePanel';
import React from 'react';
import { Wallet, Info } from 'lucide-react';

const meta: Meta<typeof ProgressiveDisclosurePanel> = {
  title: 'Fintech/ProgressiveDisclosurePanel',
  component: ProgressiveDisclosurePanel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressiveDisclosurePanel>;

export const TransactionDetails: Story = {
  args: {
    title: 'Detalle de Operación',
    defaultExpanded: false,
    summary: (
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <Wallet className="text-gray-500" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">Pago a Amazon</h4>
          <p className="text-sm text-gray-500">Ayer, 14:30 hrs</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-gray-900 dark:text-white">-$1,250.00 MXN</p>
          <p className="text-xs text-green-500">Completado</p>
        </div>
      </div>
    ),
    details: (
      <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <span className="text-gray-500">Tarjeta Usada</span>
          <span className="font-medium">Débito Física **** 4589</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <span className="text-gray-500">Categoría</span>
          <span className="font-medium">Compras en Línea</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <span className="text-gray-500">No. de Autorización</span>
          <span className="font-medium">0928347A</span>
        </div>
      </div>
    ),
    deepDive: (
      <pre>
{`{
  "id": "tx_2M8c...",
  "status": "cleared",
  "cleared_at": "2023-11-14T14:32:00Z",
  "merchant": {
    "name": "Amazon MX",
    "mcc": "5399",
    "city": "CDMX",
    "country": "MX"
  },
  "network": "Visa",
  "auth_method": "emv_contactless"
}`}
      </pre>
    ),
  },
};
