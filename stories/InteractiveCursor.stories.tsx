import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveCursor } from '../components/ui/InteractiveCursor';

const meta: Meta<typeof InteractiveCursor> = {
  title: 'Cyberpunk/InteractiveCursor',
  component: InteractiveCursor,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white dark:bg-zinc-950 p-10 font-sans cursor-none">
        <Story />
        <div className="mt-20 flex flex-col gap-6 items-start text-zinc-900 dark:text-zinc-50">
          <p>Mueve el ratón por la pantalla para ver el seguidor por defecto.</p>
          <button className="interactive px-6 py-3 bg-blue-500 text-void-black font-bold  tracking-tight hover:scale-105 transition-transform cursor-none">
            Botón Interactivo (Hover me!)
          </button>
          <a href="#" className="interactive text-blue-500 underline underline-offset-4 decoration-dashed cursor-none">
            Enlace de sistema de la matriz
          </a>
          <div className="w-32 h-32 border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center interactive">
            <span className="text-gray-500 text-sm">Caja interactiva</span>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InteractiveCursor>;

export const DefaultIntegration: Story = {};
