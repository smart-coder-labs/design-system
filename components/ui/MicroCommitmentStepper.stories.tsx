import type { Meta, StoryObj } from '@storybook/react';
import { MicroCommitmentStepper } from './MicroCommitmentStepper';

const meta: Meta<typeof MicroCommitmentStepper> = {
  title: 'Fintech/MicroCommitmentStepper',
  component: MicroCommitmentStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MicroCommitmentStepper>;

export const Default: Story = {
  args: {},
  render: () => <div className="w-full max-w-lg"><MicroCommitmentStepper /></div>
};
