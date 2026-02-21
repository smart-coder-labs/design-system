import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';
import { SystemBootPreloader } from '../components/ui/SystemBootPreloader';
import { CRTOverlay } from '../components/ui/CRTOverlay';
import { GlitchPageTransition } from '../components/ui/GlitchPageTransition';

const meta: Meta = {
  title: 'Cyberpunk/04 - Global Aesthetics',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Componente interactivo completo para Storybook
const GlobalExperienceApp = () => {
  const [hasBooted, setHasBooted] = useState(false);
  const [currentPage, setCurrentPage] = useState<'HOME' | 'MAINFRAME'>('HOME');
  
  return (
    <div className="w-full h-screen relative bg-void-black overflow-hidden font-[family-name:var(--font-vt323)]">
      
      {/* 1. El revestimiento permanente asqueroso pero estético */}
      <CRTOverlay />
      
      {/* 2. Pantalla de Carga (Oculta todo hasta que pulsan iniciar) */}
      {!hasBooted && (
        <SystemBootPreloader onComplete={() => setHasBooted(true)} />
      )}
      
      {/* 3. Aplicación Principal con Transiciones Violentas de Página */}
      {hasBooted && (
        <AnimatePresence mode="wait">
          {currentPage === 'HOME' ? (
            <GlitchPageTransition pageKey="HOME">
              <div className="h-screen w-full flex flex-col items-center justify-center p-20 relative z-10 text-acid-green">
                <h1 className="text-8xl tracking-widest bg-void-black px-4 border-l-4 border-acid-green mb-10">THE SPARK CORE</h1>
                <button 
                  onClick={() => setCurrentPage('MAINFRAME')}
                  className="px-6 py-3 border-2 border-industrial-grey text-gray-400 hover:border-electric-orange hover:text-electric-orange text-2xl transition-all relative z-50 cursor-pointer"
                >
                  [ ACELERAR SALTO A MAINFRAME ]
                </button>
              </div>
            </GlitchPageTransition>
          ) : (
            <GlitchPageTransition pageKey="MAINFRAME">
              <div className="h-screen w-full flex flex-col items-center justify-center p-20 relative z-10 bg-[#0a0200] text-electric-orange">
                <h1 className="text-9xl font-black mix-blend-difference mb-10 tracking-[0.2em] animate-pulse">
                  CRITICAL ZONE!
                </h1>
                <p className="font-[family-name:var(--font-sans)] text-gray-400 text-2xl max-w-xl text-center mb-8 bg-black/50 p-6 border border-red-900/50">
                  Transición abrupta completada. La estructura de red ha sido penetrada.
                </p>
                <button 
                  onClick={() => setCurrentPage('HOME')}
                  className="px-6 py-3 border border-acid-green/50 text-acid-green text-xl hover:bg-acid-green hover:text-black transition-all relative z-50 cursor-pointer"
                >
                  [ RETROCEDER ABORTAR ]
                </button>
              </div>
            </GlitchPageTransition>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const FullAtmosphereDemo: StoryObj = {
  render: () => <GlobalExperienceApp />,
};
