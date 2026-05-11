import type { Meta, StoryObj } from '@storybook/react';
import { FinancialGoalTracker } from './FinancialGoalTracker';
import React from 'react';
import { Car, Home, Plane, GraduationCap, PiggyBank, Heart, Building, Laptop } from 'lucide-react';

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

export const WeddingSavings: Story = {
  args: {
    goalName: 'Wedding Fund',
    targetAmount: 350000,
    currentAmount: 285000,
    color: 'rose',
    icon: <Heart size={24} />,
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const BusinessStartup: Story = {
  args: {
    goalName: 'Startup Capital',
    targetAmount: 1000000,
    currentAmount: 350000,
    color: 'indigo',
    icon: <Building size={24} />,
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const NewLaptop: Story = {
  args: {
    goalName: 'MacBook Pro M4',
    targetAmount: 45000,
    currentAmount: 32000,
    color: 'gray',
    icon: <Laptop size={24} />,
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const SavingsDashboard: Story = {
  render: () => (
    <div className="w-full max-w-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-text-primary">My Savings Goals</h2>
        <span className="text-xs text-text-tertiary">4 goals • $132,500 remaining</span>
      </div>
      <div className="space-y-4">
        <FinancialGoalTracker goalName="Emergency Fund" targetAmount={50000} currentAmount={32000} color="yellow" icon={<PiggyBank size={24} />} />
        <FinancialGoalTracker goalName="Home Down Payment" targetAmount={500000} currentAmount={310000} color="purple" icon={<Home size={24} />} />
        <FinancialGoalTracker goalName="New Car" targetAmount={350000} currentAmount={280000} color="emerald" icon={<Car size={24} />} />
        <FinancialGoalTracker goalName="Europe Trip" targetAmount={80000} currentAmount={12500} color="blue" icon={<Plane size={24} />} />
      </div>
    </div>
  ),
};

export const RedColor: Story = {
  args: {
    goalName: 'Debt Payoff',
    targetAmount: 25000,
    currentAmount: 18750,
    color: 'red',
    icon: <PiggyBank size={24} />,
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const PinkColor: Story = {
  args: {
    goalName: 'Dream Wedding Dress',
    targetAmount: 60000,
    currentAmount: 42000,
    color: 'pink',
    icon: <Heart size={24} />,
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};

export const HalfwayPoint: Story = {
  args: {
    goalName: 'Investment Portfolio',
    targetAmount: 200000,
    currentAmount: 100000,
    color: 'blue',
  },
  render: (args) => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
};
