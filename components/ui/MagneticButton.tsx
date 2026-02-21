import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticProps> = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    // Obtenemos las dimensiones y posición del botón en la pantalla
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    
    // Calculamos el centro del botón
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Reducimos el valor para que el imán no sea incontrolable (ej. multiplicador de 0.2)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  
  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      // La magia está aquí: físicas de resorte para un retorno elástico y pesado
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-[family-name:var(--font-sans)] text-2xl tracking-tight  transition-colors duration-300
                 bg-white dark:bg-zinc-950 text-zinc-500 border-2 border-blue-500
                 hover:bg-blue-500 hover:text-void-black hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                 interactive ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
