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
      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
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
            <div className={`p-3 rounded-xl transition-colors ${
              isActive 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}>
              <HandCoins size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-none mb-1">
                Ahorro Automático
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Redondeo en compras
              </p>
            </div>
          </div>
          
          {/* Custom Switch specifically styled for this component */}
          <button
            onClick={handleToggle}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isActive ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'
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

        <div className="bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/50 dark:border-gray-700/50">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Redondeamos tus compras al siguiente dólar y ahorramos la diferencia.
          </p>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                Proyección Mensual
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-gray-400">$</span>
                <motion.span 
                  key={isActive ? 'active' : 'inactive'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-2xl font-black ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}
                >
                  {isActive ? monthlyProjection.toLocaleString('es-MX', { minimumFractionDigits: 2 }) : '0.00'}
                </motion.span>
              </div>
            </div>
            
            {isActive && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 py-1.5 px-2 rounded-lg transition-colors"
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
            <span className="text-gray-500">Próxima inversión: Hoy</span>
            <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer hover:underline">
              Ver detalle <ArrowRight size={12} />
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
