import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KineticMarquee } from '../components/ui/KineticMarquee';

const meta: Meta<typeof KineticMarquee> = {
  title: 'Cyberpunk/01 - Core Components/KineticMarquee',
  component: KineticMarquee,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="bg-void-black min-h-[200vh] py-[50vh] text-white">
        <div className="p-8 text-center text-acid-green mb-10 border border-acid-green max-w-lg mx-auto font-[family-name:var(--font-vt323)] text-xl tracking-widest">
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
