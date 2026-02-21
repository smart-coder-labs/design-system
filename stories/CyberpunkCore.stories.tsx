import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KineticMarquee } from '../components/ui/KineticMarquee';
import { PowerMeterTracker } from '../components/ui/PowerMeterTracker';

const meta: Meta = {
  title: 'Cyberpunk/01 - Core & Storytelling',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const CoreIntegrationShowcase: Story = {
  render: () => (
    <div className="bg-white dark:bg-zinc-950 min-h-[400vh] text-zinc-900 dark:text-zinc-50 overflow-x-hidden relative">
      
      {/* Tracker global fijado a la derecha */}
      <PowerMeterTracker />
      
      {/* Sección Hero con las cintas a toda marcha */}
      <section className="h-screen flex flex-col items-center justify-center gap-20 relative z-10 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-400 font-sans tracking-tight">
          CORE ENGAGED
        </h1>
        <div className="w-full space-y-4">
          <KineticMarquee text="SYSTEM OVERRIDE INITIATED" baseVelocity={-2} />
          <KineticMarquee text="DANGER: HIGH VOLTAGE REGION" baseVelocity={3} className="text-blue-500" />
        </div>
      </section>
      
      {/* Textos para dar sentido al recorrido */}
      <section className="relative w-full z-0 pointer-events-none">
        <div className="absolute top-[50vh] left-[20%] text-2xl font-sans tracking-tight text-zinc-500 dark:text-zinc-400">
          Routing energy to main panels...
        </div>
        <div className="absolute top-[180vh] right-[20%] text-2xl font-sans tracking-tight text-blue-500">
          <span className="animate-pulse">NOTICE: Encrypted data node nearby.</span>
        </div>
      </section>
      
      {/* Zona profunda del final */}
      <section className="h-screen w-full flex items-center justify-center relative bg-zinc-100 dark:bg-zinc-900/10 z-10 border-t border-blue-500 mt-[50vh]">
        <h2 className="text-5xl text-blue-500 font-sans tracking-tight">
          Deep Sector Reached
        </h2>
      </section>
    </div>
  ),
};
