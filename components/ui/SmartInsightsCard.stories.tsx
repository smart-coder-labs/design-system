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

export const Default: Story = {
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

export const PositiveWeekly: Story = {
  args: {
    title: 'Ahorro Semanal Logrado',
    summary: '¡Felicidades! Lograste transferir exitosamente a tu cuenta de inversión el 10% de tus ingresos sin afectar tus pagos recurrentes.',
    type: 'positive',
    actions: [
      { label: 'Ver Portafolio', onClick: () => console.log('Portafolio'), primary: true }
    ]
  },
};
