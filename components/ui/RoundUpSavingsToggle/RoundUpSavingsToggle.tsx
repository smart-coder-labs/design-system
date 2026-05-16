import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, HandCoins, ArrowRight, Settings } from 'lucide-react';

export interface RoundUpSavingsToggleProps {
  initialState?: boolean;
  onToggle?: (active: boolean) => void;
  monthlyProjection?: number;
}

export const RoundUpSavingsToggle: React.FC<RoundUpSavingsToggleProps> = ({
  initialState = false,
  onToggle,
  monthlyProjection = 1250.50
}) => {
  const [isActive, setIsActive] = useState(initialState);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
      isActive 
      ? 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-indigo-200 dark:border-indigo-800 shadow-sm'
      : 'bg-surface-primary border-border-primary'
    }`}>
      
      {/* Decorative background elements when active */}
      {isActive && (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            className="absolute -top-10 -right-10 text-indigo-500 rotate-12"
          >
            <Coins size={120} strokeWidth={1} />
          </motion.div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
        </>
      )}

      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl transition-apple ${
              isActive 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50' 
              : 'bg-background-secondary text-text-tertiary'
            }`}>
              <HandCoins size={24} />
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg leading-none mb-1">
                Ahorro Automático
              </h3>
              <p className="text-sm font-medium text-text-tertiary">
                Redondeo en compras
              </p>
            </div>
          </div>
          
          {/* Custom Switch specifically styled for this component */}
          <button
            onClick={handleToggle}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isActive ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-zinc-600'
            }`}
            role="switch"
            aria-checked={isActive}
          >
            <motion.div
              animate={{ x: isActive ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center"
            >
              {isActive && <span className="block w-2.5 h-2.5 bg-indigo-600 rounded-full" />}
            </motion.div>
          </button>
        </div>

        <div className="bg-white/80 dark:bg-black/20 backdrop-blur-md rounded-xl p-4 border border-gray-200/80 dark:border-gray-700/50">
          <p className="text-sm text-text-primary mb-2 font-medium">
            Redondeamos tus compras al siguiente dólar y ahorramos la diferencia.
          </p>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-1">
                Proyección Mensual
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-text-tertiary">$</span>
                <motion.span 
                  key={isActive ? 'active' : 'inactive'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-2xl font-black ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-text-primary'}`}
                >
                  {isActive ? monthlyProjection.toLocaleString('es-MX', { minimumFractionDigits: 2 }) : '0.00'}
                </motion.span>
              </div>
            </div>
            
            {isActive && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-semibold text-accent-blue flex items-center gap-1 hover:bg-accent-blue-tint py-1.5 px-2 rounded-lg transition-colors"
              >
                Ajustar factor <Settings size={12} />
              </motion.button>
            )}
          </div>
        </div>

        {isActive && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 flex items-center justify-between text-xs font-semibold px-2"
          >
            <span className="text-text-tertiary">Próxima inversión: Hoy</span>
            <span className="text-accent-blue flex items-center gap-1 cursor-pointer hover:underline">
              Ver detalle <ArrowRight size={12} />
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
