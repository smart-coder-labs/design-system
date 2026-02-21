import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KineticMarquee } from '../components/ui/KineticMarquee';

const meta: Meta<typeof KineticMarquee> = {
  title: 'Cyberpunk/01 - Core Components/KineticMarquee',
  component: KineticMarquee,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-zinc-950 min-h-[200vh] py-[50vh] text-zinc-900 dark:text-zinc-50">
        <div className="p-8 text-center text-blue-500 mb-10 border border-blue-500 max-w-lg mx-auto font-sans text-xl tracking-tight">
           Scroll fast up and down to see the Kinetic Marquee deform and accelerate.
        </div>
        <Story />
      </div>
    )
  ]
};
export default meta;

export const Default: StoryObj<typeof KineticMarquee> = {
  args: {
    children: 'WAKE UP NEO // SYSTEM BREACH DETECTED // ',
    velocityMultiplier: 5,
  }
};
