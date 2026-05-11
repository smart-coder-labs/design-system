import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingElement } from './FloatingElement';

const meta: Meta<typeof FloatingElement> = {
  title: 'Components/FloatingElement',
  component: FloatingElement,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-2xl overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="w-24 h-24 bg-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue text-3xl">✦</div>,
  },
};

export const SlowSpeed: Story = {
  args: {
    rotationSpeed: 0.3,
    children: <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 text-2xl">●</div>,
  },
};

export const FastSpeed: Story = {
  args: {
    rotationSpeed: 2,
    children: <div className="w-16 h-16 bg-purple-500/20 rotate-45 flex items-center justify-center text-purple-500 text-xl">◆</div>,
  },
};
