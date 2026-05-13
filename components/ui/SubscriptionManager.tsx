import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlaySquare, 
  Music, 
  Dumbbell, 
  Cloud,
  ChevronRight,
  ShieldAlert,
  CalendarClock
} from 'lucide-react';

export interface SubscriptionItem {
  id: string;
  name: string;
  category: string;
  cost: number;
  status: 'active' | 'canceling' | 'canceled';
  icon: React.ElementType;
  nextBilling: string;
  color: string;
  warning?: boolean;
}

export const SubscriptionManager: React.FC = () => {
  const [subs, setSubs] = useState<SubscriptionItem[]>([
    { id: '1', name: 'NetStream', category: 'Entretenimiento', cost: 299, status: 'active', icon: PlaySquare, nextBilling: '12 Nov', color: 'bg-red-500 text-white' },
    { id: '2', name: 'AudioMax', category: 'Música', cost: 149, status: 'active', icon: Music, nextBilling: '15 Nov', color: 'bg-green-500 text-white', warning: true },
    { id: '3', name: 'FitPlus', category: 'Salud', cost: 599, status: 'active', icon: Dumbbell, nextBilling: '22 Nov', color: 'bg-orange-500 text-white' },
    { id: '4', name: 'CloudStore 2TB', category: 'Productividad', cost: 199, status: 'active', icon: Cloud, nextBilling: '28 Nov', color: 'bg-blue-500 text-white' },
  ]);

  const [selected, setSelected] = useState<string | null>(null);

  const handleCancel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSubs(subs.map(s => s.id === id ? { ...s, status: 'canceling' } : s));
    
    // Simulate API Call to cancel
    setTimeout(() => {
      setSubs(prev => prev.map(s => s.id === id ? { ...s, status: 'canceled' } : s));
      setSelected(null);
    }, 2000);
  };

  const totalActive = subs.filter(s => s.status === 'active').reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="bg-surface-primary rounded-3xl border border-border-primary overflow-hidden max-w-md mx-auto shadow-sm">
      
      {/* Header */}
      <div className="p-6 bg-background-secondary dark:bg-gray-900 border-b border-border-primary">
        <h2 className="text-xl font-bold text-text-primary flex items-center gap-2 mb-1">
          <CalendarClock className="text-blue-500" />
          Suscripciones
        </h2>
        <p className="text-sm text-text-tertiary mb-4">Gasto mensual proyectado</p>
        <div className="text-4xl font-black text-text-primary tracking-tight">
          ${totalActive.toLocaleString('es-MX')}
          <span className="text-sm font-medium text-text-tertiary ml-1">/ mes</span>
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {subs.map(sub => {
          const isSelected = selected === sub.id;
          const Icon = sub.icon;
          
          if (sub.status === 'canceled') return null; // Hide canceled

          return (
            <motion.div 
              layout
              key={sub.id}
              onClick={() => setSelected(isSelected ? null : sub.id)}
              className={`relative border rounded-2xl p-4 cursor-pointer overflow-hidden transition-all ${
                isSelected 
                ? 'bg-accent-blue-tint border-accent-blue/20 shadow-md ring-1 ring-accent-blue/10' 
                : 'bg-surface-primary border-border-primary hover:border-border-primary hover:shadow-sm'
              }`}
            >
              {sub.warning && !isSelected && (
                <div className="absolute top-0 right-0 p-2 text-amber-500">
                  <ShieldAlert size={16} />
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${sub.color} shadow-sm shrink-0`}>
                  <Icon size={20} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary text-base truncate">
                    {sub.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-tertiary mt-0.5">
                    <span>{sub.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span>Renueva el {sub.nextBilling}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-text-primary">
                    ${sub.cost}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {isSelected && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, marginTop: 16 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-blue-100 dark:border-blue-900/30 flex gap-2">
                      <button 
                        disabled={sub.status === 'canceling'}
                        onClick={(e) => handleCancel(sub.id, e)}
                        className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                          sub.status === 'canceling' 
                          ? 'bg-background-secondary text-text-tertiary dark:bg-gray-900 cursor-not-allowed'
                          : 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800 border border-red-100 dark:border-red-900/30'
                        }`}
                      >
                        {sub.status === 'canceling' ? 'Procesando...' : 'Cancelar Suscripción'}
                      </button>
                      <button 
                        className="flex-1 bg-surface-primary text-text-secondary hover:bg-background-secondary border border-border-primary dark:bg-gray-900 dark:text-text-primary dark:border-gray-700 font-semibold text-sm rounded-xl py-2 transition-all flex items-center justify-center gap-1"
                      >
                        Pausar <ChevronRight size={14} />
                      </button>
                    </div>

                    {sub.warning && (
                      <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900 rounded-lg flex gap-2 border border-amber-100 dark:border-amber-900/30">
                        <ShieldAlert size={16} className="text-amber-500 shrink-0" />
                        <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                          Este servicio aumentó de precio un 10% el mes pasado. Considera revisarlo.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {subs.filter(s => s.status === 'canceled').length > 0 && (
          <p className="text-center text-xs font-semibold text-green-600 dark:text-green-50 mt-6 bg-green-50 dark:bg-green-900 py-2 rounded-lg border border-green-100 dark:border-green-800">
            Has cancelado {subs.filter(s => s.status === 'canceled').length} suscripción(es) exitosamente.
          </p>
        )}
      </div>

    </div>
  );
};
