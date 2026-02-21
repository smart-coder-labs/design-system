import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame } from 'framer-motion';

interface KineticMarqueeProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

export const KineticMarquee: React.FC<KineticMarqueeProps> = ({ 
  text, 
  baseVelocity = 2,
  className = ''
}) => {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Suaviza los cambios de velocidad extremos
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Mapeamos la velocidad a un factor multiplicador (Ej: hacer scroll down añade +5, scroll up resta -5)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  
  // Un valor X transformado que utilizaremos para la capa de estilo
  const x = useTransform(() => `${baseX.current}%`);
  
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    
    // ¿El usuario mueve la rueda? Multiplicamos agresivamente
    moveBy += moveBy * velocityFactor.get();
    
    // ¿Hacia arriba o hacia abajo?
    if (velocityFactor.get() < 0) {
      moveBy *= -1; // Invierte dirección
    }
    
    baseX.current += moveBy;
    
    // Reseteamos el bucle cuando supera los límites (loop infinito)
    if (baseX.current <= -50) baseX.current = 0;
    else if (baseX.current > 0) baseX.current = -50;
  });
  
  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap w-full ${className}`}>
      <motion.div className="flex whitespace-nowrap items-center font-[family-name:var(--font-sans)] tracking-[0.2em]" style={{ x }}>
        {/* Repetimos el texto múltiples veces para llenar la pantalla ancha */}
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className={`block mr-12 text-6xl opacity-80  ${!className?.includes('text-') ? 'text-zinc-500' : ''}`}>
            {text} • 
          </span>
        ))}
      </motion.div>
    </div>
  );
};
