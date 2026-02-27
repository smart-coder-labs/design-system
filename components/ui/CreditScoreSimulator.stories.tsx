import type { Meta, StoryObj } from '@storybook/react';
import { CreditScoreSimulator } from './CreditScoreSimulator';
import React from 'react';

const meta: Meta<typeof CreditScoreSimulator> = {
  title: 'Fintech/CreditScoreSimulator',
  component: CreditScoreSimulator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreditScoreSimulator>;

export const Default: Story = {
  args: {
    initialScore: 650
  },
  render: (args) => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
};
