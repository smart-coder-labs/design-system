import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MagneticButton } from '../components/ui/MagneticButton';

const meta: Meta<typeof MagneticButton> = {
  title: 'Cyberpunk/02 - Micro-Interactions & UI/MagneticButton',
  component: MagneticButton,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-zinc-950 p-20 flex flex-col items-center justify-center text-zinc-900 dark:text-zinc-50 min-h-[40vh] w-full font-sans tracking-tight">
         <p className="text-gray-500 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">Hover to engage magnetic fields</p>
         <Story />
      </div>
    )
  ]
};
export default meta;

export const Default: StoryObj<typeof MagneticButton> = {
  args: {
    children: 'Infiltrate Grid',
  }
};

export const Bare: StoryObj<typeof MagneticButton> = {
  decorators: [],
  args: {
    children: 'Bare Button',
  }
};
