import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CyberCable } from '../components/ui/CyberCable';
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
    <div className="bg-void-black min-h-[400vh] text-white overflow-x-hidden relative">
      
      {/* Tracker global fijado a la derecha */}
      <PowerMeterTracker />
      
      {/* Sección Hero con las cintas a toda marcha */}
      <section className="h-screen flex flex-col items-center justify-center gap-20 relative z-10 border-b-2 border-industrial-grey">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 font-[family-name:var(--font-sans)] tracking-tighter mix-blend-difference">
          CORE ENGAGED
        </h1>
        <div className="w-full space-y-4">
          <KineticMarquee text="SYSTEM OVERRIDE INITIATED" baseVelocity={-2} />
          <KineticMarquee text="DANGER: HIGH VOLTAGE REGION" baseVelocity={3} className="text-acid-green" />
        </div>
      </section>
      
      {/* El cable SVG trazando el camino del usuario hacia las profundidades de la página */}
      <section className="relative w-full z-0 pointer-events-none">
        {/* Aquí la "cámara" pasará largo tiempo gracias a los 300vh de altura del CyberCable */}
        <CyberCable color="var(--color-electric-orange)" className="opacity-80 absolute top-[-50vh]" />
        
        {/* Textos para dar sentido al recorrido */}
        <div className="absolute top-[50vh] left-[20%] text-2xl font-[family-name:var(--font-vt323)] text-gray-400">
          Enrutando energía a los paneles principales...
        </div>
        <div className="absolute top-[180vh] right-[20%] text-2xl font-[family-name:var(--font-vt323)] text-electric-orange">
          <span className="animate-pulse">ATENCIÓN: Nódulo de datos encriptados cerca.</span>
        </div>
      </section>
      
      {/* Zona profunda del final */}
      <section className="h-screen w-full flex items-center justify-center relative bg-industrial-grey/10 z-10 border-t border-acid-green mt-[50vh]">
        <h2 className="text-5xl text-acid-green font-[family-name:var(--font-vt323)] uppercase">
          Sector Profundo Alcanzado
        </h2>
      </section>
    </div>
  ),
};
