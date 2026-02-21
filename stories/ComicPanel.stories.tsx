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
      <div className=" bg-void-black min-h-[300vh] flex flex-col justify-center items-center gap-[50vh] py-[100vh] overflow-x-hidden">
        
        <ComicPanel direction="left" className="w-[600px] border-electric-orange interactive">
          <h3 className="font-[family-name:var(--font-vt323)] text-4xl text-electric-orange mb-4">PANEL 01: ENTRADA IZQUIERDA</h3>
          <p className="text-gray-300 font-[family-name:var(--font-sans)] text-xl">
            Este panel rompe el eje X desde la izquierda. Observa la rigidez de las sombras (hard shadows) y cómo la esquina simula un fondo estilizado.
          </p>
        </ComicPanel>

        <ComicPanel direction="right" className="w-[600px] border-acid-green translate-x-32 interactive">
          <h3 className="font-[family-name:var(--font-vt323)] text-4xl text-acid-green mb-4">PANEL 02: ENTRADA DERECHA</h3>
          <p className="text-gray-300 font-[family-name:var(--font-sans)] text-xl">
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
      <div className="p-8 text-white font-[family-name:var(--font-sans)]">
        Componente puro The ComicPanel
      </div>
    )
  }
};
