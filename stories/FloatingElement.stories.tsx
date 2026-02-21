import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FloatingElement } from '../components/ui/FloatingElement';
import { Settings, Cpu } from 'lucide-react'; 

const meta: Meta<typeof FloatingElement> = {
  title: 'Cyberpunk/FloatingElement',
  component: FloatingElement,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FloatingElement>;

export const EngineScrubbing: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-[300vh] bg-void-black text-white relative flex justify-center overflow-hidden">
        <div className="fixed top-10 left-1/2 -translate-x-1/2 p-4 border border-industrial-grey font-[family-name:var(--font-vt323)] bg-black/50 backdrop-blur z-50 text-xl text-center">
          Haz Scroll hacia abajo para ver cómo roza (scrubs) la rotación de los iconos mientras flotan:
        </div>
        <div className="absolute top-[80vh]">
          <Story />
        </div>
      </div>
    ),
  ],
  render: () => (
    <div className="flex justify-center gap-32 items-center">
      <FloatingElement rotationSpeed={1.5} className="text-acid-green">
        <Settings size={120} strokeWidth={1} />
      </FloatingElement>
      
      <FloatingElement rotationSpeed={-0.8} className="text-electric-orange mt-20">
        <Settings size={200} strokeWidth={0.5} />
      </FloatingElement>

      <FloatingElement rotationSpeed={3} className="text-white mt-10">
        <Cpu size={80} strokeWidth={1.5} />
      </FloatingElement>
    </div>
  )
};

export const Bare: Story = {
  decorators: [],
  args: {
    rotationSpeed: 1,
    children: <div className="p-4 text-black border border-black bg-gray-200">Bare Element</div>
  }
};
