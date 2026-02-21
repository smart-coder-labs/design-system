import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SystemBootPreloader } from '../components/ui/SystemBootPreloader';

const meta: Meta<typeof SystemBootPreloader> = {
  title: 'Cyberpunk/04 - Global Aesthetics/SystemBootPreloader',
  component: SystemBootPreloader,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj<typeof SystemBootPreloader> = {
  render: () => {
    const [completed, setCompleted] = useState(false);
    return (
      <div className="h-screen w-full bg-void-black text-white flex items-center justify-center flex-col">
        {completed ? (
           <div className="text-acid-green text-3xl font-[family-name:var(--font-vt323)] tracking-widest animate-pulse border-2 border-acid-green p-8 bg-black/50">
             SYSTEM ONLINE. (Refresh frame to see boot again)
           </div>
        ) : (
           <SystemBootPreloader onComplete={() => setCompleted(true)} />
        )}
      </div>
    )
  }
};

export const Bare: StoryObj<typeof SystemBootPreloader> = {
  decorators: [],
  render: () => <SystemBootPreloader onComplete={() => {}} />
};
