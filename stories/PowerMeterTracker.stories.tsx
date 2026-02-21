import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PowerMeterTracker } from '../components/ui/PowerMeterTracker';

const meta: Meta<typeof PowerMeterTracker> = {
  title: 'Cyberpunk/01 - Core Components/PowerMeterTracker',
  component: PowerMeterTracker,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-zinc-950 min-h-[300vh] w-full text-zinc-900 dark:text-zinc-50 relative">
         <div className="p-20 text-xl font-sans text-blue-500 text-center">
            Scroll down the page to fill the power meter on the left.
         </div>
         <Story />
      </div>
    )
  ]
};
export default meta;

export const Default: StoryObj<typeof PowerMeterTracker> = {};
