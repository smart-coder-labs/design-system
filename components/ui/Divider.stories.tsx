import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'or continue with',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Section Break',
    labelPosition: 'left',
  },
};

export const LabelRight: Story = {
  args: {
    label: 'End',
    labelPosition: 'right',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div className="flex items-center h-20 gap-4">
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
  args: {
    orientation: 'vertical',
  },
};
