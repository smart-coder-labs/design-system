import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  CheckCircle, 
  X, 
  AlertCircle, 
  RefreshCcw,
  Zap
} from 'lucide-react';
import { DocScanOverlayProps } from './DocScanOverlay.types';

export const DocScanOverlay: React.FC<DocScanOverlayProps> = ({
  scanState = 'scanning',
  instructionMessage = 'Alinea tu identificación dentro del recuadro',
  documentType = 'ID',
  onCapture,
  onRetake,
  onCancel,
}) => {
  const [internalState, setInternalState] = useState(scanState);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setInternalState(scanState);
  }, [scanState]);

  const handleSimulateCapture = () => {
    setInternalState('detecting');
    setTimeout(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
      
      setTimeout(() => {
        setInternalState(Math.random() > 0.2 ? 'success' : 'error');
        if (onCapture) onCapture();
      }, 1500);
    }, 1000);
  };

  const isPortrait = documentType === 'SELFIE';
  const overlayClass = isPortrait
    ? 'w-[55%] aspect-[3/4] rounded-full'
    : 'w-[85%] aspect-[16/10] rounded-xl';

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden bg-gray-950 rounded-3xl aspect-[9/16] flex flex-col items-center justify-between shadow-2xl ring-1 ring-white/10" style={{ colorScheme: 'dark' }}>
      <div className="absolute inset-0 bg-gray-900 pointer-events-none opacity-50" />

      {flash && (
        <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-300 pointer-events-none" />
      )}

      <div className="relative z-10 w-full p-4 flex justify-between items-center text-white">
        <button onClick={onCancel} className="p-2 bg-black/40 rounded-full hover:bg-black/60 transition">
          <X size={20} />
        </button>
        <div className="flex bg-black/40 rounded-full px-3 py-1 gap-2 border border-white/10 items-center">
          <Zap size={14} className="text-yellow-400" />
          <span className="text-xs font-medium">Auto-captura</span>
        </div>
        <div className="w-9" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1 gap-4">
        <div className="px-6 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center min-w-44 text-center">
          <AnimatePresence mode="wait">
            {internalState === 'idle' || internalState === 'scanning' ? (
              <motion.p key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-white">
                {instructionMessage}
              </motion.p>
            ) : internalState === 'detecting' ? (
              <motion.p key="detect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-blue-400 flex items-center gap-2">
                <RefreshCcw size={14} className="animate-spin" /> Procesando bordes...
              </motion.p>
            ) : internalState === 'success' ? (
              <motion.p key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-green-400 flex items-center gap-2">
                <CheckCircle size={14} /> ¡Escaneo Perfecto!
              </motion.p>
            ) : (
              <motion.p key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-red-400 flex items-center gap-2">
                <AlertCircle size={14} /> Imagen borrosa, intenta de nuevo
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.div
            animate={{
              borderColor: 
                internalState === 'success' ? 'rgba(74, 222, 128, 0.8)' : 
                internalState === 'error' ? 'rgba(248, 113, 113, 0.8)' :
                internalState === 'detecting' ? 'rgba(96, 165, 250, 0.8)' :
                'rgba(255, 255, 255, 0.4)'
            }}
            className={`border-2 ${overlayClass} relative`}
            style={{
              boxShadow: '0 0 0 9999px rgba(0,0,0,0.6)'
            }}
          >
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => {
              const borderStyles = 
                pos === 'top-left' ? 'border-t-4 border-l-4 rounded-tl-xl' :
                pos === 'top-right' ? 'border-t-4 border-r-4 rounded-tr-xl' :
                pos === 'bottom-left' ? 'border-b-4 border-l-4 rounded-bl-xl' :
                'border-b-4 border-r-4 rounded-br-xl';
              
              const posClasses = 
                pos === 'top-left' ? '-top-1 -left-1' :
                pos === 'top-right' ? '-top-1 -right-1' :
                pos === 'bottom-left' ? '-bottom-1 -left-1' :
                '-bottom-1 -right-1';

              return (
                <div key={pos} className={`absolute w-8 h-8 ${borderStyles} ${posClasses} ${
                  internalState === 'success' ? 'border-green-400' :
                  internalState === 'error' ? 'border-red-400' :
                  internalState === 'detecting' ? 'border-blue-400' :
                  'border-white'
                }`} />
              );
            })}

            {(internalState === 'scanning' || internalState === 'detecting') && (
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                className="absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] z-20"
              />
            )}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full p-5 flex justify-center items-center bg-gradient-to-t from-black via-black/80 to-transparent">
        {internalState === 'idle' || internalState === 'scanning' ? (
          <button 
            onClick={handleSimulateCapture}
            className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shrink-0 active:scale-95 transition"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
               <Camera className="text-black" size={24} />
            </div>
          </button>
        ) : internalState === 'success' ? (
          <button 
            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition"
          >
            Continuar <CheckCircle size={18} />
          </button>
        ) : internalState === 'error' ? (
           <button 
            onClick={() => setInternalState('idle')}
            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition"
          >
            Reintentar <RefreshCcw size={18} />
          </button>
        ) : (
          <div className="w-16 h-16 rounded-full border-4 border-gray-600 animate-pulse" />
        )}
      </div>
    </div>
  );
};

