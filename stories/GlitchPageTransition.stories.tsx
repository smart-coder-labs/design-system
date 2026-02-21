import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';
import { GlitchPageTransition } from '../components/ui/GlitchPageTransition';

const meta: Meta<typeof GlitchPageTransition> = {
  title: 'Cyberpunk/04 - Global Aesthetics/GlitchPageTransition',
  component: GlitchPageTransition,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen bg-black font-sans overflow-hidden flex flex-col items-center">
         <div className="absolute top-4 left-4 z-[100] bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 p-2 text-sm pointer-events-none ring-1 ring-industrial-grey">
            Toggle the pages using the buttons in the scene to observe the "Mode: wait" Framer Motion exit/enter destructive glitch sequences.
         </div>
         <Story />
      </div>
    ),
  ],
};

export default meta;

// A custom interactive story to demonstrate the route changing
const RouteSimulator = () => {
    const [page, setPage] = useState<'A' | 'B'>('A');

    return (
        <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
                {page === 'A' ? (
                    <GlitchPageTransition pageKey="PageA">
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-20">
                            <h1 className="text-8xl text-blue-500 mb-8 tracking-tight ">
                                SECTOR // 01
                            </h1>
                            <p className="text-2xl font-sans text-zinc-500 dark:text-zinc-400 max-w-2xl text-center mb-12">
                                Stable connection established. No anomalies detected in the current grid sector.
                            </p>
                            <button 
                                onClick={() => setPage('B')}
                                className="px-10 py-5 border-2 border-blue-500 text-zinc-500 text-3xl hover:bg-blue-500 hover:text-black transition-colors"
                            >
                                JUMP TO SECTOR // 02
                            </button>
                        </div>
                    </GlitchPageTransition>
                ) : (
                    <GlitchPageTransition pageKey="PageB">
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#050000] text-zinc-500 p-20">
                            <h1 className="text-9xl mb-8 tracking-[0.2em]  font-bold animate-pulse">
                                ANOMALY // 02
                            </h1>
                            <p className="text-2xl font-sans text-zinc-500 dark:text-zinc-400 max-w-2xl text-center mb-12 bg-black/50 p-6 border border-red-900/50">
                                Warning: Grid destabilization upon entry. Unknown protocols overriding visual cortex.
                            </p>
                            <button 
                                onClick={() => setPage('A')}
                                className="px-10 py-5 border-2 border-blue-500 text-blue-500 text-3xl hover:bg-blue-500 hover:text-black transition-colors"
                            >
                                EMERGENCY RETURN
                            </button>
                        </div>
                    </GlitchPageTransition>
                )}
            </AnimatePresence>
        </div>
    );
};

export const InteractiveRouteGlitch: StoryObj<typeof GlitchPageTransition> = {
  render: () => <RouteSimulator />,
};

