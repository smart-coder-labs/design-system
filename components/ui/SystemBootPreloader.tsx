import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  'INITIALIZING KERNEL 7.4.2...',
  'MOUNTING VIRTUAL FILE SYSTEMS: [OK]',
  'STARTING NEURAL NETWORK LINK...',
  'WARNING: UNKNOWN ENTITY DETECTED ON PORT 8080.',
  'BYPASSING FIREWALL: [SUCCESS]',
  'ESTABLISHING VISUAL CONNECTION...',
];

interface BootPreloaderProps {
  onComplete: () => void;
}

export const SystemBootPreloader: React.FC<BootPreloaderProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev, BOOT_LOGS[currentLog]]);
      currentLog++;
      
      if (currentLog >= BOOT_LOGS.length) {
        clearInterval(interval);
        setTimeout(() => setIsReady(true), 500); // Pequeña pausa dramática antes de mostrar el botón
      }
    }, 400); // Velocidad de aparición de las líneas de código
    
    return () => clearInterval(interval);
  }, []);
  
  const handleStart = () => {
    setIsDismissed(true);
    setTimeout(onComplete, 800); // Esperar a que termine la animación de salida
  };
  
  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: 'easeInOut' } 
          }}
          className="fixed inset-0 z-[99999] bg-void-black flex flex-col justify-end p-10 font-[family-name:var(--font-vt323)] text-acid-green select-none"
        >
          {/* Logs de la terminal (Crecen hacia arriba) */}
          <div className="flex flex-col gap-2 mb-8 text-xl tracking-widest">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {'>'} {log}
              </motion.div>
            ))}
          </div>
          
          {/* Botón de Entrada Interactiva (Actionable) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isReady ? 1 : 0 }}
            className="w-full border-t border-industrial-grey pt-8"
          >
            {isReady && (
              <button 
                onClick={handleStart}
                className="group relative px-8 py-4 bg-transparent border-2 border-electric-orange text-electric-orange hover:bg-electric-orange hover:text-void-black text-2xl uppercase tracking-[0.3em] font-bold outline-none flex items-center gap-4 transition-colors"
              >
                <span className="animate-pulse">_</span> INICIAR CONEXIÓN NEURAL
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
