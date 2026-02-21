import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalAccordionProps {
  question: string;
  answer: string;
}

export const TerminalAccordion: React.FC<TerminalAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full max-w-2xl border-b border-zinc-200 dark:border-zinc-800 overflow-hidden font-[family-name:var(--font-sans)] group">
      
      {/* Cabecera Interactiva */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className={`text-xl transition-colors ${isOpen ? 'text-zinc-500' : 'text-gray-500'}`}>
            {isOpen ? '[-]' : '[+]'}
          </span>
          <span className={`text-2xl tracking-tight ${isOpen ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:text-white'}`}>
            {question}
          </span>
        </div>
        
        {/* Status indicator hack */}
        <span className={`text-sm ${isOpen ? 'text-blue-500' : 'text-gray-600'}`}>
          {isOpen ? 'CONNECTED' : 'ENCRYPTED'}
        </span>
      </button>
      
      {/* Contenido (Respuesta) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-zinc-100 dark:bg-zinc-900/10 border-l-2 border-blue-500 mb-4 relative">
              {/* Scanline en movimiento dentro del panel */}
              {/* Note: animation scanline must be defined in your global CSS or Tailwind config */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[200%] block -top-full animate-[scanline_3s_linear_infinite] pointer-events-none" />
              
              <div className="text-zinc-600 dark:text-zinc-300 font-[family-name:var(--font-sans)] leading-loose relative z-10 flex gap-2">
                <span className="text-blue-500 select-none">{'>'}</span>
                <p>{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
