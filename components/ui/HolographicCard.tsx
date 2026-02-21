import React, { useRef, MouseEvent, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HolographicCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Valores nativos de Framer motion para animaciones de 60fps
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Suavizamos la rotación usando físicas
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  // Convertimos la posición del ratón en grados de rotación (aprox de -15deg a +15deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  
  // Controla el deslumbramiento o brillo interno (Glare)
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalizamos el mouse de -0.5 a 0.5 respecto al centro de la tarjeta
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    
    // Glare position (en porcentajes)
    setGlarePosition({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Vuelve al centro lentamente
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d', // IMPORTANTE para que los hijos tengan Z depth
      }}
      className="relative w-80 h-96 p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 backdrop-blur-xl bg-white/50 dark:bg-zinc-900/50 cursor-pointer rounded-sm group perspective-1000"
    >
      {/* Glare/Reflejo que sigue al ratón */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-sm z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 150px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 80%)` // Acid green approx
        }}
      />
      
      {/* Contenido empujado en eje Z */}
      <div style={{ transform: 'translateZ(50px)' }} className="relative z-20 flex flex-col h-full pointer-events-none">
        <div className="text-blue-500 mb-6">{icon}</div>
        <h3 className="font-[family-name:var(--font-sans)] text-3xl text-zinc-900 dark:text-white mb-2 tracking-wide ">{title}</h3>
        <p className="font-[family-name:var(--font-sans)] text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 mt-auto">
          {description}
        </p>
      </div>
      
      {/* Grid background estético */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" style={{ transform: 'translateZ(-10px)' }}/>
    </motion.div>
  );
};
