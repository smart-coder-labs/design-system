import React from 'react';

// You can save a small grain noise image as '/noise-overlay.webp' in your public folder for this.
// For now we'll rely on the CSS gradients mainly.
const NOISE_URL = '/noise-overlay.webp'; 

export const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none">
      
      {/* 1. Ruido Granulado en bucle (Film Grain) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url(${NOISE_URL})`, backgroundSize: '150px' }}
      />
      
      {/* 2. Scanlines Horizontales de Tubo de Rayos Catódicos (CRT) usando CSS Gradients puros */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 4px, 6px 100%'
        }}
      />
      
      {/* 3. Escaneo Láser Gigante que viaja de arriba a abajo cíclicamente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acid-green/10 to-transparent h-[50px] animate-[globalScanline_8s_linear_infinite]" />
      
      {/* 4. Viñeta en los bordes para simular curvatura de pantalla vieja */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />
    </div>
  );
};
