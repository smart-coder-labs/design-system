import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WebGLHologram } from '../components/ui/WebGLHologram';
import { WebGLDistortionImage } from '../components/ui/WebGLDistortionImage';
import { WebGLTunnel } from '../components/ui/WebGLTunnel';

const meta: Meta = {
  title: 'Cyberpunk/03 - WebGL & Three.js',
  parameters: {
    layout: 'fullscreen', // Fundamental para Canvas
  },
};

export default meta;

export const ThreeJS_Showcase: StoryObj = {
  render: () => (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500 selection:text-black">
      
      {/* Historia 1: Ensamblaje de Partículas Magnéticas */}
      <section className="relative w-full h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex">
          {/* El canvas se encarga de leer su propio contenedor ScrollControls */}
          <div className="w-1/2 h-full absolute right-0">
             <WebGLHologram />
          </div>
          
          <div className="w-1/2 h-full flex flex-col justify-center pl-20 z-10 pointer-events-none">
              <h2 className="text-blue-500 font-sans text-5xl mb-4">ASIMILACIÓN 01:</h2>
              <p className="font-sans text-zinc-500 dark:text-zinc-400 text-xl w-3/4">
                El caos de datos no estructurados detecta tu presencia (Scroll). 
                Lentamente, la gravedad cuántica de tu scroll agrupa los píxeles 
                para formar la esfera de contención.
              </p>
          </div>
        </div>
      </section>
      
      {/* Historia 2: Imágenes Corruptas Habilitadas por WebGL */}
      <section className="min-h-screen py-32 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900/10 border-y border-gray-800">
         <h2 className="text-center font-sans text-4xl mb-10 text-zinc-500 tracking-tight ">
            Sujetos Corruptos (Pasa el cursor)
         </h2>
         <div className="flex gap-20">
             {/* Componente WebGL para distorsión de la imagen */}
             <WebGLDistortionImage />
         </div>
         <p className="mt-8 text-gray-500 font-sans text-sm">
           Impulsado por MeshDistortionMaterial y renderizado de Vértices GPU.
         </p>
      </section>
      
      {/* Historia 3: Túnel de Escape (Inmersión Total) */}
      {/* 
        This acts as a scroll wrapper to trigger the Tunnel effect. 
      */}
      <section className="relative w-full border-t-[4px] border-blue-500">
         <WebGLTunnel />
         <div className="h-screen flex items-center justify-center bg-black">
            <h1 className="text-blue-500 text-3xl font-sans">END OF LINE.</h1>
         </div>
      </section>
      
    </div>
  ),
};
