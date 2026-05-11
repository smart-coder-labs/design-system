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
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      Acepto transferir los fondos a mi cuenta de inversión con un <JargonTooltip
        term="Rendimiento Anual Porcentual (APY)"
        definition="El APY es la tasa real de rendimiento ganada en una cuenta de ahorros o inversión, considerando el efecto del interés compuesto a lo largo de un año."
        example="Si inviertes $1,000 con un APY del 5%, al final del año tendrás $1,050 sin hacer nada adicional."
      /> asegurado para el próximo plazo.
    </div>
  ),
};

export const APR: Story = {
  render: () => (
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      La tasa de interés de tu tarjeta de crédito es del 36% <JargonTooltip
        term="Tasa de Interés Anual (APR)"
        definition="El APR es el costo anual del crédito expresado como porcentaje. Incluye la tasa de interés más comisiones y cargos obligatorios."
        example="Un APR del 36% en un saldo de $10,000 significa que pagarías aproximadamente $3,600 en intereses al año."
      /> aplicable a tu línea de crédito actual.
    </div>
  ),
};

export const CompoundInterest: Story = {
  render: () => (
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      Tu inversión crecerá gracias al <JargonTooltip
        term="Interés Compuesto"
        definition="El interés compuesto es la capacidad de generar intereses sobre intereses previamente acumulados. Es el motor del crecimiento exponencial del dinero a largo plazo."
        example="Si inviertes $10,000 al 8% anual compuesto, en 30 años tendrás más de $100,000 — sin agregar un solo peso adicional."
      /> de los rendimientos generados mes con mes.
    </div>
  ),
};

export const Diversification: Story = {
  render: () => (
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      Recomendamos mantener una <JargonTooltip
        term="Diversificación"
        definition="La diversificación es una estrategia de inversión que distribuye el capital entre diferentes activos para reducir el riesgo general del portafolio."
        example="En lugar de invertir $100,000 en una sola acción, diversificar sería repartirlos entre acciones, bonos, bienes raíces y efectivo."
      /> adecuada de tu portafolio para minimizar riesgos.
    </div>
  ),
};

export const Inflation: Story = {
  render: () => (
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      Es importante considerar el impacto de la <JargonTooltip
        term="Inflación"
        definition="La inflación mide el aumento generalizado de los precios de bienes y servicios en una economía durante un período de tiempo, reduciendo el poder adquisitivo del dinero."
        example="Con una inflación del 7% anual, lo que hoy compras con $1,000 costará $1,070 el próximo año."
      /> en tus metas de ahorro a largo plazo.
    </div>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <div className="text-text-primary max-w-md text-lg leading-relaxed">
      <p className="mb-2">Haz clic en el ícono <span className="inline-flex items-center">📊</span> para entender mejor:</p>
      <p>
        El <JargonTooltip
          term="Price-to-Earnings (P/E) Ratio"
          definition="La relación Precio-Ganancias (P/E) compara el precio actual de una acción contra sus ganancias por acción. Indica cuánto están dispuestos a pagar los inversores por cada dólar de ganancia."
          example="Un P/E de 20 significa que los inversores pagan $20 por cada $1 de ganancias anuales de la empresa."
        /> de esta acción es de 22.5x.
      </p>
    </div>
  ),
};

export const FinancialTermsDashboard: Story = {
  render: () => (
    <div className="text-text-primary max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">Dashboard de Términos Financieros</h2>
      <div className="space-y-4 p-4 bg-background-secondary rounded-xl">
        <p>Tu <JargonTooltip
          term="Liquidez"
          definition="La liquidez mide la facilidad con la que un activo puede convertirse en efectivo sin perder valor significativo."
          example="El efectivo es el activo más líquido; un bien raíz es mucho menos líquido porque toma tiempo venderlo."
        /> actual es suficiente para cubrir 6 meses de gastos.</p>
        <p>El <JargonTooltip
          term="EBITDA"
          definition="El EBITDA mide la rentabilidad operativa de una empresa antes de intereses, impuestos, depreciación y amortización."
          example="Una empresa con EBITDA de $5M genera $5 millones en ganancias operativas antes de costos financieros y contables."
        /> de tu portafolio muestra tendencia positiva.</p>
        <p>La <JargonTooltip
          term="Tasa Interna de Retorno (TIR)"
          definition="La TIR es la tasa de rendimiento anualizada que iguala el valor presente de los flujos de efectivo futuros con la inversión inicial."
          example="Si inviertes $10,000 y recibes $3,000 anuales por 5 años, la TIR sería aproximadamente 15.2%."
        /> proyectada supera el 12% anual.</p>
      </div>
    </div>
  ),
};
