import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxStoryStage } from '../components/ui/ParallaxStoryStage';
import { InteractiveCursor } from '../components/ui/InteractiveCursor';

const meta: Meta<typeof ParallaxStoryStage> = {
  title: 'Integration/Full Level Experience',
  component: ParallaxStoryStage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ParallaxStoryStage>;

export const TheSparkConcept: Story = {
  render: () => (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans overflow-hidden cursor-none">
      <InteractiveCursor />
      
      {/* Sección Hero estática para dar lugar a que nazca el scroll */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mix-blend-difference z-20">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500 font-sans tracking-tight pl-4">SPARK</span>
        </h1>
        <p className="mt-6 text-2xl text-zinc-500 dark:text-zinc-400 font-sans flex items-center gap-4">
          <span className="animate-bounce">↓</span> INITIATE NEURAL LINK VIA SCROLL <span className="animate-bounce">↓</span>
        </p>
      </section>

      {/* Aquí comienza la magia del marco de 500vh */}
      <ParallaxStoryStage />
      
      {/* Footer que aparece al terminar */}
      <section className="h-[70vh] w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 relative z-50">
        <div className="text-center">
          <h2 className="text-5xl font-sans text-blue-500 mb-8">SYSTEM REBOOT SUCCESSFUL</h2>
          <button className="interactive px-8 py-4 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-2 border-blue-500 text-xl font-sans tracking-[0.2em] hover:bg-blue-500 hover:text-black transition-colors duration-300">
            ENTER THE MAINFRAME
          </button>
        </div>
      </section>
    </div>
  ),
};
