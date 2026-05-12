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
    if (score >= 750) return { label: 'Excelente', color: 'bg-status-success', text: 'text-status-success', bg: 'bg-status-success/10 text-status-success border-status-success/20' };
    if (score >= 680) return { label: 'Bueno', color: 'bg-accent-blue', text: 'text-accent-blue', bg: 'bg-accent-blue-tint text-accent-blue border-accent-blue/20' };
    if (score >= 620) return { label: 'Regular', color: 'bg-status-warning', text: 'text-status-warning', bg: 'bg-status-warning/10 text-status-warning border-status-warning/20' };
    if (score >= 550) return { label: 'Malo', color: 'bg-status-error', text: 'text-status-error', bg: 'bg-status-error/10 text-status-error border-status-error/20' };
    return { label: 'Pobre', color: 'bg-status-error', text: 'text-status-error', bg: 'bg-status-error/10 text-status-error border-status-error/20' };
  };

  const band = getBandInfo(currentScore);
  const diff = currentScore - initialScore;
  
  // Calculate polar angle for gauge chart (300 to 850 range)
  const range = 850 - 300;
  const percentage = Math.max(0, Math.min(100, ((currentScore - 300) / range) * 100));
  const rotation = -90 + (percentage * 1.8); // 180 degrees total span

  return (
    <div className="bg-surface-primary border border-border-primary p-6 rounded-3xl max-w-sm mx-auto shadow-sm">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-text-primary flex items-center gap-2">
          <Gauge className="text-accent-blue" />
          Simulador Crediticio
        </h3>
        {history.length > 0 && (
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-text-tertiary hover:text-text-primary flex items-center gap-1 transition-colors bg-background-secondary px-2 py-1 rounded-md"
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
           <path d="M 20 90 A 70 70 0 0 1 180 90" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" className="text-border-primary" />
           
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
             className="text-4xl font-black text-text-primary tracking-tighter"
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
            className={`text-center font-bold text-sm mb-6 ${diff > 0 ? 'text-status-success' : 'text-status-error'}`}
         >
           El puntaje {diff > 0 ? `subiría` : `bajaría`} {Math.abs(diff)} pt(s).
         </motion.div>
      )}

      {/* Simulator Actions List */}
      <div>
        <p className="text-xs uppercase tracking-wider font-bold text-text-tertiary mb-3 px-1">¿Qué pasaría si...?</p>
        <div className="space-y-2">
          {actions.map((action) => {
             const Icon = action.icon;
             return (
               <button
                 key={action.id}
                 onClick={() => handleSimulate(action.impact)}
                 className={`w-full text-left p-3 rounded-xl border transition-all flex justify-between items-center group
                  ${action.type === 'positive' 
                    ? 'border-border-primary hover:border-status-success/40 bg-surface-primary' 
                    : 'border-border-primary hover:border-status-error/40 bg-surface-primary'}
                 `}
               >
                 <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors 
                     ${action.type === 'positive' ? 'bg-status-success/10 text-status-success group-hover:bg-status-success/20' : 'bg-status-error/10 text-status-error group-hover:bg-status-error/20'}
                   `}>
                     <Icon size={16} />
                   </div>
                   <span className="font-semibold text-sm text-text-primary">{action.title}</span>
                 </div>
                 
                 <span className={`text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${action.type === 'positive' ? 'bg-status-success/15 text-status-success' : 'bg-status-error/15 text-status-error'}`}>
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
