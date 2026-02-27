import type { Meta, StoryObj } from '@storybook/react';
import { RoundUpSavingsToggle } from './RoundUpSavingsToggle';
import React from 'react';

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
