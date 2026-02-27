import type { Meta, StoryObj } from '@storybook/react';
import { FinancialGoalTracker } from './FinancialGoalTracker';
import React from 'react';
import { Car } from 'lucide-react';

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
