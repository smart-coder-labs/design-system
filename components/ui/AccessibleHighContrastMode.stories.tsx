import type { Meta, StoryObj } from '@storybook/react';
import { AccessibleHighContrastMode } from './AccessibleHighContrastMode';
import React from 'react';

const meta: Meta<typeof AccessibleHighContrastMode> = {
  title: 'Fintech/AccessibleHighContrastMode',
  component: AccessibleHighContrastMode,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccessibleHighContrastMode>;

export const Default: Story = {
  args: {},
};

export const WithContent: Story = {
  args: {
    children: (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-xl font-bold">Dashboard Financiero</h2>
        <p className="text-sm">Bienvenido a tu resumen financiero personalizado. Aquí encontrarás todas tus cuentas, transacciones recientes y recomendaciones inteligentes.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background-secondary p-4 rounded-xl">
            <p className="text-xs text-text-secondary">Saldo Total</p>
            <p className="text-2xl font-bold text-green-600">$45,230.00</p>
          </div>
          <div className="bg-background-secondary p-4 rounded-xl">
            <p className="text-xs text-text-secondary">Gastos del Mes</p>
            <p className="text-2xl font-bold text-red-500">$12,450.00</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <div className="p-6 max-w-2xl space-y-6">
        <div className="bg-background-secondary p-4 rounded-xl">
          <h3 className="text-sm font-medium text-text-secondary">TÉRMINOS Y CONDICIONES</h3>
        </div>
        <div className="space-y-4 text-sm">
          <p>1. El usuario acepta los términos y condiciones establecidos en el presente documento para el uso de los servicios financieros proporcionados.</p>
          <p>2. La institución financiera se reserva el derecho de modificar estos términos en cualquier momento, notificando al usuario con 30 días de anticipación.</p>
          <p>3. El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y notificar inmediatamente cualquier uso no autorizado.</p>
          <p>4. Las transacciones realizadas a través de la plataforma están sujetas a los límites y condiciones establecidos en el contrato de servicios.</p>
          <p>5. La protección de datos personales se rige por la legislación aplicable en materia de privacidad y protección de datos financieros.</p>
        </div>
      </div>
    ),
  },
};

export const WithNestedInteractiveElements: Story = {
  args: {
    children: (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-xl font-bold">Configuración de Accesibilidad</h2>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 bg-background-secondary rounded-xl cursor-pointer">
            <span className="text-sm font-medium">Alto Contraste</span>
            <span className="text-xs text-text-secondary">Recomendado para baja visión</span>
          </label>
          <label className="flex items-center justify-between p-3 bg-background-secondary rounded-xl cursor-pointer">
            <span className="text-sm font-medium">Texto Grande</span>
            <span className="text-xs text-text-secondary">Aumenta tamaño de fuente al 150%</span>
          </label>
          <label className="flex items-center justify-between p-3 bg-background-secondary rounded-xl cursor-pointer">
            <span className="text-sm font-medium">Fuente Disléxica</span>
            <span className="text-xs text-text-secondary">OpenDyslexic para mejor legibilidad</span>
          </label>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          Guardar Preferencias
        </button>
      </div>
    ),
  },
};

export const WithFormContent: Story = {
  args: {
    children: (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-xl font-bold">Contacto</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre Completo</label>
            <input type="text" className="w-full p-2.5 border border-border-primary rounded-lg bg-background-primary" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
            <input type="email" className="w-full p-2.5 border border-border-primary rounded-lg bg-background-primary" placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea className="w-full p-2.5 border border-border-primary rounded-lg bg-background-primary min-h-[100px]" placeholder="Escribe tu mensaje..." />
          </div>
        </div>
      </div>
    ),
  },
};

export const DarkModeDefault: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 p-6 max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-xl font-bold text-white">High Contrast Mode</h2>
        <p className="text-sm text-gray-300">Dark mode with high contrast ensures readability for users with visual impairments while maintaining the fintech brand identity.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-secondary p-4 rounded-xl border border-border-primary">
            <p className="text-xs text-text-secondary">Portfolio Value</p>
            <p className="text-2xl font-bold text-white">$128,450.00</p>
          </div>
          <div className="bg-surface-secondary p-4 rounded-xl border border-border-primary">
            <p className="text-xs text-text-secondary">Today Gain</p>
            <p className="text-2xl font-bold text-green-400">+$2,340.00</p>
          </div>
        </div>
      </div>
    ),
  },
};
