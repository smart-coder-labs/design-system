import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string; // Para forzar el re-render de Framer Motion (ej. router.asPath)
}

// Keyframes manuales masivos para simular un desgarro de matriz
const glitchVariants: any = {
  initial: {
    opacity: 0,
    x: -50,
    filter: 'hue-rotate(-90deg) contrast(200%) grayscale(100%)',
    scaleY: 0.1, // Completamente aplastado
  },
  animate: {
    opacity: 1,
    x: [20, -20, 10, -10, 0], // Vibración violenta horizontal (Glitch)
    filter: 'hue-rotate(0deg) contrast(100%) grayscale(0%)',
    scaleY: [2, 0.5, 1.2, 0.9, 1], // Rebotes caóticos en la escala vertical
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1], // Timing exacto de cada golpe
      ease: 'backOut',
    },
  },
  exit: {
    opacity: 0,
    x: 50, // Sale violentamente a la derecha fallando
    filter: 'invert(100%) blur(5px)',
    transition: { ease: 'easeIn', duration: 0.3 }
  }
};

export const GlitchPageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  return (
    <motion.div
      key={pageKey}
      variants={glitchVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen origin-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white"
    >
      {/* Divisor de ruido rápido al entrar */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500 z-50 mix-blend-normal"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'circOut' }}
      />
      {children}
    </motion.div>
  );
};
