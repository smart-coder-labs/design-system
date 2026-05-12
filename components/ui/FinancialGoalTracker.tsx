import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Car, Home, TrendingUp, Plus, Settings2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface FinancialGoalTrackerProps {
  goalName?: string;
  targetAmount?: number;
  currentAmount?: number;
  icon?: React.ReactNode;
  color?: string;
}

export const FinancialGoalTracker: React.FC<FinancialGoalTrackerProps> = ({
  goalName = "Viaje a Japón",
  targetAmount = 50000,
  currentAmount = 23500,
  icon = <Plane size={24} />,
  color = "blue",
}) => {
  const [balance, setBalance] = useState(currentAmount);
  const progress = Math.min(100, Math.max(0, (balance / targetAmount) * 100));
  
  const handleDeposit = () => {
    const depositAmt = 1500;
    const newBalance = Math.min(balance + depositAmt, targetAmount);
    setBalance(newBalance);
    
    // Check if goal met to trigger confetti
    if (newBalance >= targetAmount && balance < targetAmount) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b']
      });
    }
  };

  const getThemeClasses = () => {
    const themes: Record<string, any> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-900', text: 'text-blue-600 dark:text-blue-50', progress: 'bg-blue-500' },
      emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900', text: 'text-emerald-600 dark:text-emerald-50', progress: 'bg-emerald-500' },
      violet: { bg: 'bg-violet-50 dark:bg-violet-900', text: 'text-violet-600 dark:text-violet-50', progress: 'bg-violet-500' },
    };
    return themes[color] || themes.blue;
  };
  
  const theme = getThemeClasses();

  return (
    <div className="bg-surface-primary rounded-3xl border border-border-primary p-6 overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
      
      {/* Decorative Background Blob */}
      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-20 ${theme.progress}`} />

      <div className="flex justify-between items-start mb-6 align-top">
        <div className="flex gap-4 items-center">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.bg} ${theme.text} shrink-0`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-text-primary leading-tight">
              {goalName}
            </h3>
            <p className="text-sm font-medium text-text-tertiary mt-0.5 flex gap-2">
              <span>{Math.floor(progress)}% completado</span>
            </p>
          </div>
        </div>
        <button className="text-text-tertiary hover:text-text-secondary transition-colors p-2 -mr-2 -mt-2">
          <Settings2 size={20} />
        </button>
      </div>

      <div className="mb-6 relative pt-4">
        {/* Progress Value Tooltip */}
        <motion.div 
          initial={false}
          animate={{ x: `${progress}%`, opacity: balance > 0 ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute -top-3 -translate-x-1/2 flex flex-col items-center"
          style={{ width: 'max-content' }}
        >
          <div className={`px-2 py-1 rounded bg-gray-900 dark:bg-surface-primary text-white dark:text-gray-900 text-[10px] font-bold tracking-wider relative`}>
            ${balance.toLocaleString('es-MX')}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-white w-0 h-0" />
          </div>
        </motion.div>

        {/* Progress Track */}
        <div className="h-4 w-full bg-background-secondary rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className={`h-full rounded-full ${theme.progress} relative`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-full" style={{
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
            }} />
          </motion.div>
        </div>
        
        <div className="flex justify-between mt-2 text-xs font-semibold text-text-tertiary">
          <span>$0</span>
          <span>Meta: ${targetAmount.toLocaleString('es-MX')}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <button 
          onClick={handleDeposit}
          disabled={balance >= targetAmount}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all ${
            balance >= targetAmount 
            ? 'bg-background-secondary text-text-tertiary cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 hover:-translate-y-0.5 shadow-md active:scale-95'
          }`}
        >
          <Plus size={18} />
          Abonar
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 bg-background-secondary text-text-primary rounded-xl font-semibold hover:bg-border-primary/30 transition relative">
          <TrendingUp size={18} className={theme.text} />
          Auto-ahorro
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide">
            Activo
          </span>
        </button>
      </div>

    </div>
  );
};
