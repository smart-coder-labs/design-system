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
      <div className="flex flex-col items-center gap-4 text-center p-8 bg-surface-primary border border-border-primary rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-text-primary mb-2">Asistente de Voz Inteligente</h3>
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
