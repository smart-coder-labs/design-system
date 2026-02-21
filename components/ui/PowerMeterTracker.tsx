import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PowerMeterTracker: React.FC = () => {
  // `scrollYProgress` va de 0 a 1 midiendo todo el cuerpo de la página automáticamente
  const { scrollYProgress } = useScroll();
  
  // Transformamos el 0-1 a altura en porcentajes para rellenar la barra
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Transformamos el progreso en números digitales al vuelo usando renderizado condicional inteligente
  const percentage = useTransform(scrollYProgress, v => Math.floor(v * 100));
  
  return (
    <div className="fixed top-1/2 right-8 -translate-y-1/2 h-[60vh] flex flex-col items-center gap-4 z-50 pointer-events-none mix-blend-normal">
      
      {/* Texto SUPERIOR del medidor */}
      <span className="font-[family-name:var(--font-sans)] text-blue-500 text-sm tracking-tight rotate-180" style={{ writingMode: 'vertical-rl' }}>
        SYSTEM LOAD
      </span>
      
      {/* Cubierta exterior (Vidrio roto / Metal) */}
      <div className="relative w-4 h-full border-2 border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden bg-white dark:bg-zinc-950/80">
        
        {/* Rejilla de división (marcas de nivel del medidor) */}
        <div className="absolute inset-0 z-10 opacity-70" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 8px,#1f1f1f 8px,#1f1f1f 10px)' }} />
        
        {/* El relleno de poder real que sube desde ABAJO */}
        <motion.div 
          className="absolute bottom-0 w-full bg-blue-500 z-0 origin-bottom"
          style={{ scaleY, boxShadow: '0 0 15px rgba(0,0,0,0.05)' }}
        />
      </div>
      
      {/* Pantalla LED de porcentaje */}
      <div className="h-8 flex items-center justify-center font-[family-name:var(--font-sans)] text-blue-500 bg-zinc-100 dark:bg-zinc-900/30 border border-blue-500 px-2 min-w-[3rem]">
        <motion.span>{percentage}</motion.span>%
      </div>
      
    </div>
  );
};
