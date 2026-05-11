import type { Meta, StoryObj } from '@storybook/react';
import { RoundUpSavingsToggle } from './RoundUpSavingsToggle';
import React, { useState } from 'react';

const meta: Meta<typeof RoundUpSavingsToggle> = {
  title: 'Fintech/RoundUpSavingsToggle',
  component: RoundUpSavingsToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RoundUpSavingsToggle>;

export const Inactive: Story = {
  args: {
    initialState: false,
    monthlyProjection: 850.25
  },
  render: (args) => <div className="w-full max-w-[340px]"><RoundUpSavingsToggle {...args} /></div>
};

export const Active: Story = {
  args: {
    initialState: true,
    monthlyProjection: 1250.50
  },
  render: (args) => <div className="w-full max-w-[340px]"><RoundUpSavingsToggle {...args} /></div>
};

export const HighProjection: Story = {
  args: {
    initialState: true,
    monthlyProjection: 3450.80
  },
  render: (args) => <div className="w-full max-w-[340px]"><RoundUpSavingsToggle {...args} /></div>
};

export const LowProjection: Story = {
  args: {
    initialState: true,
    monthlyProjection: 120.35
  },
  render: (args) => <div className="w-full max-w-[340px]"><RoundUpSavingsToggle {...args} /></div>
};

export const Interactive: Story = {
  render: () => {
    const [isActive, setIsActive] = useState(false);
    const [log, setLog] = useState<string[]>([]);

    const handleToggle = (active: boolean) => {
      setIsActive(active);
      setLog(prev => [...prev, `Redondeo ${active ? 'activado' : 'desactivado'} — ${new Date().toLocaleTimeString()}`]);
    };

    return (
      <div className="w-full max-w-[340px] space-y-4">
        <RoundUpSavingsToggle
          initialState={isActive}
          onToggle={handleToggle}
          monthlyProjection={850.25}
        />
        {log.length > 0 && (
          <div className="bg-background-secondary p-3 rounded-xl border border-border-primary">
            <p className="text-xs font-medium mb-2 text-text-secondary">Registro de cambios:</p>
            <ul className="space-y-1">
              {log.map((entry, i) => (
                <li key={i} className="text-xs text-text-secondary">{entry}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

export const InSavingsDashboard: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-6 bg-background-primary rounded-2xl border border-border-primary">
      <div>
        <h2 className="text-lg font-bold">Ahorro Automático</h2>
        <p className="text-sm text-text-secondary">Redondea tus compras y ahorra la diferencia</p>
      </div>
      <div className="bg-background-secondary p-4 rounded-xl space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Ahorrado este mes</span>
          <span className="font-bold text-green-600">$356.75</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Total acumulado</span>
          <span className="font-bold">$2,450.30</span>
        </div>
      </div>
      <RoundUpSavingsToggle
        initialState={true}
        monthlyProjection={850.25}
      />
    </div>
  ),
};
