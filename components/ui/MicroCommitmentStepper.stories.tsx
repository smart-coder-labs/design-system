import type { Meta, StoryObj } from '@storybook/react';
import { MicroCommitmentStepper } from './MicroCommitmentStepper';
import React from 'react';

const meta: Meta<typeof MicroCommitmentStepper> = {
  title: 'Fintech/MicroCommitmentStepper',
  component: MicroCommitmentStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MicroCommitmentStepper>;

export const Default: Story = {
  args: {},
  render: () => <div className="w-full max-w-lg"><MicroCommitmentStepper /></div>
};

export const InContainer: Story = {
  render: () => (
    <div className="max-w-xl mx-auto p-6 bg-background-primary rounded-2xl border border-border-primary">
      <h2 className="text-lg font-bold mb-4">Verificación de Identidad</h2>
      <p className="text-sm text-text-secondary mb-6">
        Completa los siguientes pasos para desbloquear todas las funciones de tu cuenta.
      </p>
      <MicroCommitmentStepper />
    </div>
  ),
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <div className="w-full max-w-sm"><MicroCommitmentStepper /></div>,
};

export const DarkMode: Story = {
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: () => (
    <div className="dark max-w-lg">
      <MicroCommitmentStepper />
    </div>
  ),
};

export const InOnboardingFlow: Story = {
  render: () => (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">¡Bienvenido a FinTech!</h2>
        <p className="text-sm text-text-secondary">
          Completa estos pasos rápidos para comenzar a usar tu cuenta
        </p>
      </div>
      <MicroCommitmentStepper />
    </div>
  ),
};
