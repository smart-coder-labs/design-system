import type { Meta, StoryObj } from '@storybook/react';
import { ProgressiveDisclosurePanel } from './ProgressiveDisclosurePanel';
import React from 'react';
import { Wallet, Info, ShoppingBag, CreditCard, Home, TrendingUp } from 'lucide-react';

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
        <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
          <Wallet className="text-gray-500" />
        </div>
        <div>
          <h4 className="font-bold text-text-primary">Pago a Amazon</h4>
          <p className="text-sm text-gray-500">Ayer, 14:30 hrs</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-text-primary">-$1,250.00 MXN</p>
          <p className="text-xs text-green-500">Completado</p>
        </div>
      </div>
    ),
    details: (
      <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Tarjeta Usada</span>
          <span className="font-medium">Débito Física **** 4589</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Categoría</span>
          <span className="font-medium">Compras en Línea</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
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

export const SubscriptionDetail: Story = {
  args: {
    title: 'NetStream Premium',
    summary: (
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <ShoppingBag className="text-red-500" />
        </div>
        <div>
          <h4 className="font-bold text-text-primary">Suscripción Streaming</h4>
          <p className="text-sm text-gray-500">Próximo cobro: 15 de marzo</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-text-primary">$299.00/mes</p>
          <p className="text-xs text-blue-500">Activo</p>
        </div>
      </div>
    ),
    details: (
      <div className="space-y-4 text-sm">
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Plan</span>
          <span className="font-medium">Premium 4K + HDR</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Membresía desde</span>
          <span className="font-medium">Enero 2023</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Forma de pago</span>
          <span className="font-medium">Visa **** 4589</span>
        </div>
      </div>
    ),
  },
};

export const InvestmentSummary: Story = {
  args: {
    title: 'Resumen de Inversión',
    summary: (
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <TrendingUp className="text-green-500" />
        </div>
        <div>
          <h4 className="font-bold text-text-primary">Portafolio Balanceado</h4>
          <p className="text-sm text-gray-500">Rendimiento: +12.5% YTD</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-green-600">$145,230.00</p>
          <p className="text-xs text-green-500">+$16,150.00</p>
        </div>
      </div>
    ),
    details: (
      <div className="space-y-4 text-sm">
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Renta Variable</span>
          <span className="font-medium">$85,000.00 (58.5%)</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Renta Fija</span>
          <span className="font-medium">$42,000.00 (28.9%)</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Efectivo</span>
          <span className="font-medium">$18,230.00 (12.6%)</span>
        </div>
      </div>
    ),
    deepDive: (
      <div className="space-y-2 text-sm">
        <p className="font-medium">Desglose por activo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IVV (S&P 500): $45,000.00</li>
          <li>VWO (Emergentes): $25,000.00</li>
          <li>AGG (Bonos): $42,000.00</li>
          <li>BTC (Cripto): $15,000.00</li>
        </ul>
      </div>
    ),
  },
};

export const LoanDetail: Story = {
  args: {
    title: 'Detalle de Crédito Hipotecario',
    summary: (
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Home className="text-blue-500" />
        </div>
        <div>
          <h4 className="font-bold text-text-primary">Hipoteca Banorte</h4>
          <p className="text-sm text-gray-500">Contrato: HIP-2023-45821</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-text-primary">$1,850,000.00</p>
          <p className="text-xs text-orange-500">Saldo pendiente</p>
        </div>
      </div>
    ),
    details: (
      <div className="space-y-4 text-sm">
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Tasa de Interés</span>
          <span className="font-medium">10.5% anual fija</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Plazo</span>
          <span className="font-medium">20 años (2043)</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Pago Mensual</span>
          <span className="font-medium">$18,450.00</span>
        </div>
      </div>
    ),
    deepDive: (
      <div className="space-y-3 text-sm">
        <p className="font-medium">Historial de Pagos (Últimos 6 meses):</p>
        <div className="space-y-2">
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map((mes, i) => (
            <div key={mes} className="flex justify-between border-b border-border-primary pb-1">
              <span className="text-gray-500">{mes} 2026</span>
              <span className="text-green-600 font-medium">$18,450.00 ✓</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const DefaultExpanded: Story = {
  args: {
    title: 'Resumen Rápido',
    defaultExpanded: true,
    summary: (
      <div className="flex items-center gap-3 cursor-pointer">
        <Info className="text-blue-500 w-5 h-5" />
        <span className="font-medium">Resumen de tu cuenta — 3 cuentas activas</span>
      </div>
    ),
    details: (
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Cuenta de Débito</span>
          <span className="font-medium">$12,450.00</span>
        </div>
        <div className="flex justify-between">
          <span>Cuenta de Ahorro</span>
          <span className="font-medium">$45,800.00</span>
        </div>
        <div className="flex justify-between">
          <span>Inversión</span>
          <span className="font-medium">$120,000.00</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-border-primary">
          <span className="font-bold">Total</span>
          <span className="font-bold">$178,250.00</span>
        </div>
      </div>
    ),
  },
};

export const SimpleSummaryOnly: Story = {
  args: {
    title: 'Aviso Importante',
    summary: (
      <div className="flex items-center gap-3 cursor-pointer text-sm">
        <CreditCard className="text-amber-500 w-5 h-5" />
        <span>Tu tarjeta **** 4589 vencerá en 30 días. ¿Deseas solicitar una reposición?</span>
      </div>
    ),
    details: (
      <div className="text-sm mt-2">
        <p>Puedes solicitar una tarjeta de reemplazo desde la app. El proceso toma 5-7 días hábiles.</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
          Solicitar Reposición
        </button>
      </div>
    ),
  },
};
