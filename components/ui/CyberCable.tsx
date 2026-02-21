import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface CyberCableProps {
  className?: string;
  color?: string; // Por ej: '#39FF14' (Acid Green)
}

export const CyberCable: React.FC<CyberCableProps> = ({ 
  className = '',
  color = 'var(--color-acid-green, #ccff00)'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Rastrear el scroll relativo a este contenedor (que podría tener miles de px de alto)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });
  
  // Usamos useSpring para que al frenar el scroll, el dibujo del cable
  // no se detenga bruscamente, sino que tenga un pequeño "coletazo" fluido
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  
  return (
    <div ref={containerRef} className={`relative w-full h-[300vh] ${className}`}>
      <svg 
        className="sticky top-0 w-full h-screen pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {/* Camino base "apagado" (Gris industrial) */}
        <path
          d="M 50 0 L 50 30 L 20 50 L 20 80 L 80 100"
          fill="none"
          stroke="var(--color-industrial-grey, #2b2b2b)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* La Vena Neón/Energía (Animada) */}
        <motion.path
          d="M 50 0 L 50 30 L 20 50 L 20 80 L 80 100"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{ 
            pathLength, 
            filter: `drop-shadow(0 0 8px ${color})` 
          }}
        />
      </svg>
    </div>
  );
};
