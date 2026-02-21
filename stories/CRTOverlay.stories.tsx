import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CRTOverlay } from '../components/ui/CRTOverlay';

const meta: Meta<typeof CRTOverlay> = {
  title: 'Cyberpunk/04 - Global Aesthetics/CRTOverlay',
  component: CRTOverlay,
  parameters: {
    layout: 'fullscreen', // The overlay is designed to cover the entire screen
  },
  decorators: [
    (Story) => (
      <div className="relative w-full h-screen bg-void-black text-electric-orange font-[family-name:var(--font-vt323)] flex items-center justify-center overflow-hidden">
        {/* Background content to showcase the overlay effect */}
        <div className="relative z-0 text-center flex flex-col items-center gap-6 p-10">
          <h1 className="text-8xl tracking-widest font-bold mix-blend-screen animate-pulse">
            SYSTEM MAINFRAME
          </h1>
          <p className="text-2xl text-acid-green max-w-2xl bg-black/50 p-6 border border-acid-green/30 backdrop-blur-sm">
            This content is underneath the CRTOverlay. The overlay adds continuous scanlines, noisy film grain, a slow passing laser effect, and a dark vignette, creating an immersive retro-futuristic CRT monitor aesthetic.
          </p>
        </div>
        
        {/* Decorative background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,100,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,100,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* The Story itself (CRTOverlay) which will be placed on top due to its fixed/absolute positioning */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CRTOverlay>;

export const Default: Story = {
  args: {
    noiseUrl: "https://www.transparenttextures.com/patterns/stardust.png",
    noiseOpacity: 0.8, // Hacemos que sea más visible aquí en el Storybook para probar
  },
};

export const Bare: Story = {
  decorators: [],
  args: {
    noiseUrl: "https://www.transparenttextures.com/patterns/stardust.png",
    noiseOpacity: 0.8,
  },
};
