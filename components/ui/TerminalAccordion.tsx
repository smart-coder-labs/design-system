import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalAccordionProps {
  question: string;
  answer: string;
}

export const TerminalAccordion: React.FC<TerminalAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full max-w-2xl border-b border-industrial-grey overflow-hidden font-[family-name:var(--font-vt323)] group">
      
      {/* Cabecera Interactiva */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className={`text-xl transition-colors ${isOpen ? 'text-electric-orange' : 'text-gray-500'}`}>
            {isOpen ? '[-]' : '[+]'}
          </span>
          <span className={`text-2xl tracking-widest ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
            {question}
          </span>
        </div>
        
        {/* Status indicator hack */}
        <span className={`text-sm ${isOpen ? 'text-acid-green' : 'text-gray-600'}`}>
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
            <div className="p-6 bg-industrial-grey/10 border-l-2 border-acid-green mb-4 relative">
              {/* Scanline en movimiento dentro del panel */}
              {/* Note: animation scanline must be defined in your global CSS or Tailwind config */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acid-green/10 to-transparent h-[200%] block -top-full animate-[scanline_3s_linear_infinite] pointer-events-none" />
              
              <div className="text-gray-300 font-[family-name:var(--font-sans)] leading-loose relative z-10 flex gap-2">
                <span className="text-acid-green select-none">{'>'}</span>
                <p>{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
