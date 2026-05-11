import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveCursor } from './InteractiveCursor';

const meta: Meta<typeof InteractiveCursor> = {
  title: 'Components/InteractiveCursor',
  component: InteractiveCursor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-12">
        <div className="text-center max-w-lg">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Move your cursor</h2>
          <p className="text-text-secondary">
            The interactive cursor follows your mouse with a smooth spring animation.
          </p>
          <div className="mt-8 interactive p-6 bg-accent-blue/10 rounded-2xl border border-accent-blue/30">
            <p className="text-sm font-semibold text-accent-blue">Hover over this area</p>
            <p className="text-xs text-text-secondary mt-1">The cursor scales up when hovering interactive elements</p>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};
