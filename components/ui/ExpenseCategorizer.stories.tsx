import type { Meta, StoryObj } from '@storybook/react';
import { ExpenseCategorizer } from './ExpenseCategorizer';

const meta: Meta<typeof ExpenseCategorizer> = {
  title: 'Fintech/ExpenseCategorizer',
  component: ExpenseCategorizer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpenseCategorizer>;

export const Default: Story = {
  args: {},
};
