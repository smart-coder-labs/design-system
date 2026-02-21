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
    <div className="bg-void-black text-white font-[family-name:var(--font-sans)] overflow-hidden cursor-none">
      <InteractiveCursor />
      
      {/* Sección Hero estática para dar lugar a que nazca el scroll */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mix-blend-difference z-20">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-orange to-acid-green font-[family-name:var(--font-vt323)] tracking-widest pl-4">SPARK</span>
        </h1>
        <p className="mt-6 text-2xl text-gray-400 font-[family-name:var(--font-vt323)] flex items-center gap-4">
          <span className="animate-bounce">↓</span> INITIATE NEURAL LINK VIA SCROLL <span className="animate-bounce">↓</span>
        </p>
      </section>

      {/* Aquí comienza la magia del marco de 500vh */}
      <ParallaxStoryStage />
      
      {/* Footer que aparece al terminar */}
      <section className="h-[70vh] w-full flex items-center justify-center bg-industrial-grey relative z-50">
        <div className="text-center">
          <h2 className="text-5xl font-[family-name:var(--font-vt323)] text-acid-green mb-8">SYSTEM REBOOT SUCCESSFUL</h2>
          <button className="interactive px-8 py-4 bg-void-black text-white border-2 border-electric-orange text-xl font-[family-name:var(--font-vt323)] tracking-[0.2em] hover:bg-electric-orange hover:text-black transition-colors duration-300">
            ENTER THE MAINFRAME
          </button>
        </div>
      </section>
    </div>
  ),
};
