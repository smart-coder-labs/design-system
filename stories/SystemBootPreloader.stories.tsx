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
      <div className="h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex items-center justify-center flex-col">
        {completed ? (
           <div className="text-blue-500 text-3xl font-sans tracking-tight animate-pulse border-2 border-blue-500 p-8 bg-black/50">
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
