import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Info, ChevronUp, ChevronDown, CheckCircle2, RotateCcw } from 'lucide-react';

export interface CreditScoreSimulatorProps {
  initialScore?: number;
}

export const CreditScoreSimulator: React.FC<CreditScoreSimulatorProps> = ({
  initialScore = 650
}) => {
  const [currentScore, setCurrentScore] = useState(initialScore);
  const [history, setHistory] = useState<number[]>([]);

  const actions = [
    { id: '1', title: 'Pagar a tiempo (3 meses)', impact: 15, icon: CheckCircle2, type: 'positive' },
    { id: '2', title: 'Aumentar Límite (+20%)', impact: 8, icon: ChevronUp, type: 'positive' },
    { id: '3', title: 'Nuevo Préstamo Auto', impact: -12, icon: Info, type: 'negative' },
    { id: '4', title: 'Atraso de 30 días', impact: -45, icon: ChevronDown, type: 'negative' },
  ];

  const handleSimulate = (impact: number) => {
    setHistory([...history, currentScore]);
    setCurrentScore(Math.min(850, Math.max(300, currentScore + impact)));
  };

  const handleReset = () => {
    setCurrentScore(initialScore);
    setHistory([]);
  };

  // Calculate score band
  const getBandInfo = (score: number) => {
    if (score >= 750) return { label: 'Excelente', color: 'bg-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-50 text-emerald-900 border-emerald-200' };
    if (score >= 680) return { label: 'Bueno', color: 'bg-blue-500', text: 'text-blue-500', bg: 'bg-blue-50 text-blue-900 border-blue-200' };
    if (score >= 620) return { label: 'Regular', color: 'bg-yellow-500', text: 'text-yellow-600', bg: 'bg-yellow-50 text-yellow-900 border-yellow-200' };
    if (score >= 550) return { label: 'Malo', color: 'bg-orange-500', text: 'text-orange-500', bg: 'bg-orange-50 text-orange-900 border-orange-200' };
    return { label: 'Pobre', color: 'bg-red-500', text: 'text-red-500', bg: 'bg-red-50 text-red-900 border-red-200' };
  };

  const band = getBandInfo(currentScore);
  const diff = currentScore - initialScore;
  
  // Calculate polar angle for gauge chart (300 to 850 range)
  const range = 850 - 300;
  const percentage = Math.max(0, Math.min(100, ((currentScore - 300) / range) * 100));
  const rotation = -90 + (percentage * 1.8); // 180 degrees total span

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-3xl max-w-sm mx-auto shadow-sm">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Gauge className="text-blue-500" />
          Simulador Crediticio
        </h3>
        {history.length > 0 && (
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"
          >
            <RotateCcw size={12} /> Reiniciar
          </button>
        )}
      </div>

      {/* Visual Gauge Component */}
      <div className="relative flex justify-center mb-8 h-40 overflow-hidden">
        {/* Semi-circle track */}
        <svg viewBox="0 0 200 100" className="w-56 overflow-visible absolute inset-x-0 mx-auto mt-4">
           {/* Background Track */}
           <path d="M 20 90 A 70 70 0 0 1 180 90" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" className="text-gray-100 dark:text-gray-800" />
           
           {/* Dynamic Colored Track */}
           <motion.path 
             d="M 20 90 A 70 70 0 0 1 180 90" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="16" 
             strokeLinecap="round" 
             strokeDasharray="220"
             initial={{ strokeDashoffset: 220 }}
             animate={{ strokeDashoffset: 220 - (220 * percentage / 100) }}
             transition={{ type: "spring", stiffness: 40, damping: 10 }}
             className={band.text} 
           />
        </svg>
        
        {/* Score Value inside Gauge */}
        <div className="absolute bottom-2 flex flex-col items-center">
          <motion.div 
             key={currentScore}
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            {currentScore}
          </motion.div>
          <div className={`mt-1 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${band.bg}`}>
            {band.label}
          </div>
        </div>
      </div>
      
      {/* Change diff */}
      {diff !== 0 && (
         <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`text-center font-bold text-sm mb-6 ${diff > 0 ? 'text-emerald-500' : 'text-red-500'}`}
         >
           El puntaje {diff > 0 ? `subiría` : `bajaría`} {Math.abs(diff)} pt(s).
         </motion.div>
      )}

      {/* Simulator Actions List */}
      <div>
        <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 px-1">¿Qué pasaría si...?</p>
        <div className="space-y-2">
          {actions.map((action) => {
             const Icon = action.icon;
             return (
               <button
                 key={action.id}
                 onClick={() => handleSimulate(action.impact)}
                 className={`w-full text-left p-3 rounded-xl border transition-all flex justify-between items-center group
                  ${action.type === 'positive' 
                    ? 'border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 bg-white dark:bg-black' 
                    : 'border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-800 bg-white dark:bg-black'}
                 `}
               >
                 <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors 
                     ${action.type === 'positive' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-50 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800' : 'bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-50 group-hover:bg-red-100 dark:group-hover:bg-red-800'}
                   `}>
                     <Icon size={16} />
                   </div>
                   <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">{action.title}</span>
                 </div>
                 
                 <span className={`text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${action.type === 'positive' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-50' : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-50'}`}>
                   {action.impact > 0 ? '+' : ''}{action.impact} pts
                 </span>
               </button>
             );
          })}
        </div>
      </div>

    </div>
  );
};
