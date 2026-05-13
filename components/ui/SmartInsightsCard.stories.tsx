import type { Meta, StoryObj } from '@storybook/react';
import { SmartInsightsCard } from './SmartInsightsCard';
import React from 'react';

const meta: Meta<typeof SmartInsightsCard> = {
  title: 'Fintech/SmartInsightsCard',
  component: SmartInsightsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SmartInsightsCard>;

export const AlertInsight: Story = {
  args: {
    title: 'Análisis de Gastos de IA',
    summary: 'Has gastado un 20% más en restaurantes este mes comparado con el mes anterior. Considera ajustar tu presupuesto de fin de semana para mantener tus metas de ahorro alineadas.',
    type: 'alert',
    actions: [
      { label: 'Ajustar Presupuesto', onClick: () => console.log('Aceptar'), primary: true },
      { label: 'Ignorar', onClick: () => console.log('Ignorar') }
    ],
    details: (
      <div className="text-sm text-gray-600 dark:text-gray-300">
        <p className="mb-2"><strong>Desglose de categorías destacadas:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Starbucks: $850.00 MXN (+15%)</li>
          <li>Uber Eats: $1,200.00 MXN (+30%)</li>
          <li>Restaurantes Locales: $950.00 MXN (+5%)</li>
        </ul>
      </div>
    )
  },
};

export const PositiveInsight: Story = {
  args: {
    title: 'Ahorro Semanal Logrado',
    summary: '¡Felicidades! Lograste transferir exitosamente a tu cuenta de inversión el 10% de tus ingresos sin afectar tus pagos recurrentes.',
    type: 'positive',
    actions: [
      { label: 'Ver Portafolio', onClick: () => console.log('Portafolio'), primary: true }
    ]
  },
};

export const NegativeInsight: Story = {
  args: {
    title: 'Gasto Excesivo en Entretenimiento',
    summary: 'Has superado tu presupuesto de entretenimiento en un 45% este mes. Este patrón de gasto podría afectar tu capacidad de ahorro si continúa.',
    type: 'negative',
    actions: [
      { label: 'Establecer Límite', onClick: () => console.log('Set limit'), primary: true },
      { label: 'Ver Detalle', onClick: () => console.log('View detail') }
    ],
    details: (
      <div className="text-sm text-gray-600 dark:text-gray-300">
        <p className="mb-2"><strong>Gastos de entretenimiento este mes:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>NetStream: $299.00</li>
          <li>AudioMax: $149.00</li>
          <li>FitPlus: $599.00</li>
          <li>Total: $1,047.00 vs presupuesto $720.00</li>
        </ul>
      </div>
    )
  },
};

export const NeutralInsight: Story = {
  args: {
    title: 'Patrón de Gasto Detectado',
    summary: 'Notamos que realizas la mayoría de tus compras en línea entre las 10:00 y 14:00 hrs. Tus categorías principales son: supermercado, transporte y suscripciones digitales.',
    type: 'neutral',
    actions: [
      { label: 'Ver Reporte Completo', onClick: () => console.log('View report'), primary: true }
    ]
  },
};

export const InsightWithoutActions: Story = {
  args: {
    title: 'Recordatorio de Meta',
    summary: 'Tu meta "Viaje a Japón" está al 47% de completitud. Para alcanzarla en los próximos 6 meses, considera aumentar tu ahorro semanal en $350.',
    type: 'neutral',
  },
};

export const InsightWithExpandedDetails: Story = {
  args: {
    title: 'Análisis de Suscripciones',
    summary: 'Tienes 4 suscripciones activas por un total de $1,246.00/mes. Cancelar las que no usas frecuentemente podría ahorrarte hasta $448.00/mes.',
    type: 'alert',
    actions: [
      { label: 'Revisar Suscripciones', onClick: () => console.log('Review'), primary: true },
      { label: 'Recordar después', onClick: () => console.log('Remind later') }
    ],
    details: (
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <p><strong>Suscripciones activas:</strong></p>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>NetStream Premium</span>
            <span>$299.00/mes</span>
          </div>
          <div className="flex justify-between">
            <span>AudioMax</span>
            <span>$149.00/mes</span>
          </div>
          <div className="flex justify-between">
            <span>FitPlus</span>
            <span>$599.00/mes</span>
          </div>
          <div className="flex justify-between">
            <span>CloudStore 2TB</span>
            <span>$199.00/mes</span>
          </div>
        </div>
        <p className="pt-2 border-t border-border-primary">
          <strong>Sugerencia:</strong> AudioMax y CloudStore no han sido usados en los últimos 30 días.
        </p>
      </div>
    )
  },
};

export const InCardGrid: Story = {
  render: () => (
    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
      <SmartInsightsCard
        title="Gastos de Fin de Semana"
        summary="Tus gastos de fin de semana representan el 35% de tus gastos totales. Identificamos oportunidades de ahorro en salidas a restaurantes."
        type="alert"
        actions={[
          { label: 'Ver Más', onClick: () => console.log('View'), primary: true }
        ]}
      />
      <SmartInsightsCard
        title="Meta de Ahorro Cerca"
        summary="¡Tu fondo de emergencia está al 82%! Sigue así y lo completarás en aproximadamente 2 meses al ritmo actual."
        type="positive"
        actions={[
          { label: 'Aumentar Ahorro', onClick: () => console.log('Increase'), primary: true }
        ]}
      />
      <SmartInsightsCard
        title="Cambio en Ingresos"
        summary=" Detectamos un incremento del 8% en tus ingresos promedio respecto al trimestre anterior."
        type="neutral"
      />
      <SmartInsightsCard
        title="Comisiones Detectadas"
        summary="Se identificaron $450.00 en comisiones por manejo de cuenta que podrían evitarse con el plan Premium."
        type="negative"
        actions={[
          { label: 'Cambiar Plan', onClick: () => console.log('Change plan'), primary: true },
          { label: 'Más Info', onClick: () => console.log('More info') }
        ]}
      />
    </div>
  ),
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
