import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HolographicCard } from '../components/ui/HolographicCard';

const meta: Meta<typeof HolographicCard> = {
  title: 'Cyberpunk/02 - Micro-Interactions & UI/HolographicCard',
  component: HolographicCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Mainframe Access',
    description: 'Requires elite clearance. Engaging holographic interface for neural verification protocols.',
    icon: <span className="text-5xl">🔐</span>,
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen bg-void-black text-white p-20 flex flex-col items-center justify-center relative overflow-hidden font-[family-name:var(--font-vt323)] perspective-1000">
        
        {/* Helper title */}
        <h2 className="text-acid-green text-3xl mb-12 tracking-widest uppercase">
          Interact with the surface to enable 2.5D tracking
        </h2>

        {/* The actual Story (HolographicCard) */}
        <Story />
        
        {/* Atmospheric grid in the background to give depth context */}
        <div className="absolute inset-0 z-[-1] pointer-events-none bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HolographicCard>;

export const DefaultCard: Story = {};

export const ThreatCard: Story = {
  args: {
    title: 'Fatal Error',
    description: 'Thermonuclear engine unstable. If radiation levels drop below zero, the entire system network will collapse immediately.',
    icon: <h1 className="text-5xl text-electric-orange font-[family-name:var(--font-vt323)]">404</h1>,
  },
};

export const Bare: Story = {
  decorators: [],
  args: {
    title: 'Bare Card',
    description: 'No background decorators.',
    icon: <span>🧊</span>,
  },
};
