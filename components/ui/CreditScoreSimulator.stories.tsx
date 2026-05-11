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

export const ExcellentScore: Story = {
  args: {
    initialScore: 780
  },
  render: (args) => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
};

export const PoorScore: Story = {
  args: {
    initialScore: 520
  },
  render: (args) => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
};

export const NearPerfectScore: Story = {
  args: {
    initialScore: 830
  },
  render: (args) => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
};

export const MinimumScore: Story = {
  args: {
    initialScore: 300
  },
  render: (args) => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4 w-full min-w-[320px]">
      <p className="text-xs text-text-secondary text-center max-w-xs">
        Simula acciones financieras para ver cómo afectan tu puntaje crediticio en tiempo real
      </p>
      <CreditScoreSimulator initialScore={680} />
    </div>
  ),
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
