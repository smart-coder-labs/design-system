import type { Meta, StoryObj } from '@storybook/react';
import { BehavioralAuthSimulator } from './BehavioralAuthSimulator';
import React from 'react';

const meta: Meta<typeof BehavioralAuthSimulator> = {
  title: 'Fintech/KYC/BehavioralAuthSimulator',
  component: BehavioralAuthSimulator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BehavioralAuthSimulator>;

export const Default: Story = {
  args: {
    duration: 4000,
  },
};

export const FastAuth: Story = {
  args: {
    duration: 1500,
    analyzingText: "Verificando identidad...",
    successText: "Acceso autorizado",
  },
};

export const ExtendedAnalysis: Story = {
  args: {
    duration: 8000,
    analyzingText: "Analizando patrones de comportamiento avanzados con machine learning...",
    successText: "Perfil conductual verificado al 100%",
  },
};

export const CustomMessages: Story = {
  args: {
    duration: 3000,
    analyzingText: "🔒 Escaneando huella digital del dispositivo...",
    successText: "✅ Dispositivo confiable confirmado",
  },
};

export const WithCustomCallback: Story = {
  args: {
    duration: 3000,
    onComplete: () => console.log('Behavioral authentication completed successfully'),
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-text-secondary mb-2">Revisa la consola al completar</p>
      <BehavioralAuthSimulator {...args} />
    </div>
  ),
};

export const MinimalMode: Story = {
  args: {
    duration: 2500,
    analyzingText: "Autenticando...",
    successText: "✓ Listo",
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
