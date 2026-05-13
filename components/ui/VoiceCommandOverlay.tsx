import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Check, ArrowRight, Loader2 } from 'lucide-react';

export interface VoiceCommandOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceCommandOverlay: React.FC<VoiceCommandOverlayProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [phase, setPhase] = useState<'listening' | 'processing' | 'confirming'>('listening');
  const [transcript, setTranscript] = useState('');
  
  // Simulation log
  useEffect(() => {
    if (!isOpen) {
      setPhase('listening');
      setTranscript('');
      return;
    }

    if (phase === 'listening') {
      const texts = ["", "Transfiere", "Transfiere cincuenta", "Transfiere cincuenta pesos a Carlos"];
      let i = 0;
      const t = setInterval(() => {
        setTranscript(texts[i]);
        i++;
        if (i >= texts.length) {
          clearInterval(t);
          setTimeout(() => setPhase('processing'), 500);
        }
      }, 700);
      return () => clearInterval(t);
    }

    if (phase === 'processing') {
      const t = setTimeout(() => {
        setPhase('confirming');
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isOpen, phase]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="relative w-full max-w-sm bg-surface-primary rounded-[2rem] shadow-2xl p-6 border border-border-primary"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-background-secondary text-text-tertiary rounded-full hover:bg-background-secondary transition-colors"
            >
              <X size={16} />
            </button>

            {/* Mic Animation */}
            <div className="flex justify-center mt-4 mb-8 relative h-32 items-center">
              <AnimatePresence mode="wait">
                {phase === 'listening' ? (
                  <motion.div key="listen" className="relative flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-24 h-24 bg-blue-500 rounded-full blur-xl"
                    />
                    <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center shadow-xl shadow-blue-500/30 relative z-10">
                      <Mic size={32} />
                    </div>
                  </motion.div>
                ) : phase === 'processing' ? (
                  <motion.div key="process" className="relative flex items-center justify-center flex-col text-blue-500">
                    <Loader2 size={40} className="animate-spin mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest text-text-tertiary">Procesando AI</span>
                  </motion.div>
                ) : (
                  <motion.div key="confirm" initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="relative flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center shadow-xl shadow-green-500/30 relative z-10">
                      <Check size={32} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content Area */}
            <div className="text-center min-h-[120px]">
              {phase === 'listening' || phase === 'processing' ? (
                <>
                  <h3 className="text-xl font-medium text-text-primary h-14">
                    {transcript || (
                      <span className="text-text-tertiary">Te escucho...</span>
                    )}
                  </h3>
                  <div className="flex justify-center gap-1 mt-6 h-6 items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          height: phase === 'listening' && transcript ? [4, Math.random() * 24 + 4, 4] : 4 
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1.5 bg-blue-500 rounded-full"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-left bg-background-secondary dark:bg-gray-900 rounded-2xl p-5 border border-border-primary">
                  <p className="text-sm font-semibold text-text-tertiary mb-4 uppercase tracking-wider">
                    Entendido, ¿Confirmo la operación?
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-bold text-text-primary relative z-10">Transferencia</h4>
                      <p className="text-2xl font-black text-blue-600 dark:text-blue-400">$50.00 MXN</p>
                    </div>
                    <div className="text-right">
                       <h4 className="font-bold text-text-primary">Para</h4>
                       <p className="text-base font-medium text-text-secondary flex items-center gap-2">
                         Carlos R.
                       </p>
                    </div>
                  </div>

                  <button className="w-full bg-gray-900 text-white dark:bg-surface-primary dark:text-gray-900 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-transform active:scale-95">
                    Ejecutar orden verbal <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
