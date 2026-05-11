import type { Meta, StoryObj } from '@storybook/react';
import { FinancialGoalTracker } from './FinancialGoalTracker';
import React from 'react';
import { Car, Home, Plane, GraduationCap } from 'lucide-react';

const meta: Meta<typeof FinancialGoalTracker> = {
  title: 'Fintech/FinancialGoalTracker',
  component: FinancialGoalTracker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FinancialGoalTracker>;

export const TravelGoal: Story = {
  args: {
    goalName: 'Viaje a Japón',
    targetAmount: 50000,
    currentAmount: 23500,
    color: 'blue'
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const CarGoal: Story = {
  args: {
    goalName: 'Enganche Auto',
    targetAmount: 120000,
    currentAmount: 90000,
    color: 'emerald',
    icon: <Car size={24} />
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const HomeDownPayment: Story = {
  args: {
    goalName: 'Casa Propia',
    targetAmount: 500000,
    currentAmount: 75000,
    color: 'purple',
    icon: <Home size={24} />
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const JustStarted: Story = {
  args: {
    goalName: 'Fondo de Emergencia',
    targetAmount: 30000,
    currentAmount: 1500,
    color: 'yellow',
    icon: <Plane size={24} />
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const AlmostComplete: Story = {
  args: {
    goalName: 'Curso Profesional',
    targetAmount: 15000,
    currentAmount: 14250,
    color: 'blue',
    icon: <GraduationCap size={24} />
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const FullyFunded: Story = {
  args: {
    goalName: 'Vacaciones en Cancún',
    targetAmount: 25000,
    currentAmount: 25000,
    color: 'emerald',
    icon: <Plane size={24} />
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const LongTermGoal: Story = {
  args: {
    goalName: 'Retiro Adelantado',
    targetAmount: 5000000,
    currentAmount: 450000,
    color: 'purple',
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};
