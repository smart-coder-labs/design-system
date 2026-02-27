import type { Meta, StoryObj } from '@storybook/react';
import { BehavioralAuthSimulator } from './BehavioralAuthSimulator';

const meta: Meta<typeof BehavioralAuthSimulator> = {
  title: 'Fintech/BehavioralAuthSimulator',
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
