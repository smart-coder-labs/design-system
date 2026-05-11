import type { Meta, StoryObj } from '@storybook/react';
import { VoiceCommandOverlay } from './VoiceCommandOverlay';
import React, { useState } from 'react';

const meta: Meta<typeof VoiceCommandOverlay> = {
  title: 'Fintech/VoiceCommandOverlay',
  component: VoiceCommandOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VoiceCommandOverlay>;

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4 text-center p-8 bg-gray-50 border border-gray-200 rounded-3xl dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xl font-bold dark:text-white mb-2">Asistente de Voz Inteligente</h3>
        <p className="text-sm text-gray-500 max-w-sm">Pulsa explorar el componente VoiceCommandOverlay que simula confirmación iterativa con el usuario.</p>
        <button 
          onClick={() => setIsOpen(true)}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
        >
          Iniciar Simulación
        </button>
        <VoiceCommandOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }
};

export const OpenOnLoad: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="flex flex-col items-center gap-4 text-center p-8">
        <p className="text-sm text-text-secondary">El overlay se muestra automáticamente al cargar</p>
        <VoiceCommandOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }
};

export const WithDarkBackground: Story = {
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="dark flex flex-col items-center gap-4 text-center p-8">
        <h3 className="text-xl font-bold text-white mb-2">Asistente de Voz (Modo Oscuro)</h3>
        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
        >
          Iniciar Simulación
        </button>
        <VoiceCommandOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }
};

export const QuickTransferFlow: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4 text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl">
        <h3 className="text-xl font-bold dark:text-white">Transferencia por Voz</h3>
        <p className="text-sm text-gray-500 max-w-md">
          Simula una transferencia usando comandos de voz. El asistente escuchará, procesará y confirmará la transacción.
        </p>
        <button 
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl font-semibold transition shadow-lg"
        >
          🎤 Iniciar Transferencia por Voz
        </button>
        <VoiceCommandOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }
};

export const PaymentConfirmationFlow: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4 text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-amber-200 dark:border-amber-800">
        <h3 className="text-xl font-bold dark:text-white">Confirmación de Pago</h3>
        <p className="text-sm text-gray-500 max-w-md">
          El asistente leerá en voz alta los detalles del pago y esperará tu confirmación verbal.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm w-full max-w-xs text-left space-y-2">
          <p className="text-sm font-medium">Detalles del Pago:</p>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Destino</span>
            <span>Carlos Mendoza</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Monto</span>
            <span className="font-bold text-green-600">$2,500.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Concepto</span>
            <span>Pago mensual</span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition"
        >
          🗣️ Confirmar con Voz
        </button>
        <VoiceCommandOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }
};
