import type { Meta, StoryObj } from '@storybook/react';
import { JargonTooltip } from './JargonTooltip';
import React from 'react';

const meta: Meta<typeof JargonTooltip> = {
  title: 'Fintech/JargonTooltip',
  component: JargonTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JargonTooltip>;

export const Default: Story = {
  render: () => (
    <div className="text-gray-900 dark:text-white max-w-md text-lg leading-relaxed">
      Acepto transferir los fondos a mi cuenta de inversión con un <JargonTooltip
        term="Rendimiento Anual Porcentual (APY)"
        definition="El APY es la tasa real de rendimiento ganada en una cuenta de ahorros o inversión, considerando el efecto del interés compuesto a lo largo de un año."
        example="Si inviertes $1,000 con un APY del 5%, al final del año tendrás $1,050 sin hacer nada adicional."
      /> asegurado para el próximo plazo.
    </div>
  ),
};
