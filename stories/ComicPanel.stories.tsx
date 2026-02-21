import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComicPanel } from '../components/ui/ComicPanel';

const meta: Meta<typeof ComicPanel> = {
  title: 'Cyberpunk/ComicPanel',
  component: ComicPanel,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ComicPanel>;

export const PanelDirectionShowcase: Story = {
  decorators: [
    () => (
      <div className=" bg-white dark:bg-zinc-950 min-h-[300vh] flex flex-col justify-center items-center gap-[50vh] py-[100vh] overflow-x-hidden">
        
        <ComicPanel direction="left" className="w-[600px] border-blue-500 interactive">
          <h3 className="font-sans text-4xl text-zinc-500 mb-4">PANEL 01: ENTRADA IZQUIERDA</h3>
          <p className="text-zinc-600 dark:text-zinc-300 font-sans text-xl">
            Este panel rompe el eje X desde la izquierda. Observa la rigidez de las sombras (hard shadows) y cómo la esquina simula un fondo estilizado.
          </p>
        </ComicPanel>

        <ComicPanel direction="right" className="w-[600px] border-blue-500 translate-x-32 interactive">
          <h3 className="font-sans text-4xl text-blue-500 mb-4">PANEL 02: ENTRADA DERECHA</h3>
          <p className="text-zinc-600 dark:text-zinc-300 font-sans text-xl">
            Al bajar el scroll, este panel entra a modo de colisión desde la derecha. Si regresas el scroll hacia arriba, se volverá a esconder suavemente.
          </p>
        </ComicPanel>
      </div>
    ),
  ],
};

export const Bare: Story = {
  decorators: [],
  args: {
    direction: "left",
    children: (
      <div className="p-8 text-zinc-900 dark:text-zinc-50 font-sans">
        Componente puro The ComicPanel
      </div>
    )
  }
};
