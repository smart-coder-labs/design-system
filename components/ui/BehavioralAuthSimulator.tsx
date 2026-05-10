import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, MapPin, Smartphone, Fingerprint, Activity, Clock } from 'lucide-react';

export interface BehavioralAuthSimulatorProps {
  /** Text to show during analysis */
  analyzingText?: string;
  /** Text to show on success */
  successText?: string;
  /** Optional callback when the mock authentication completes */
  onComplete?: () => void;
  /** Duration of the simulation in ms */
  duration?: number;
}

export const BehavioralAuthSimulator: React.FC<BehavioralAuthSimulatorProps> = ({
  analyzingText = "Protegiendo tu sesión silenciosamente...",
  successText = "Identidad confirmada por comportamiento",
  onComplete,
  duration = 3000,
}) => {
  const [status, setStatus] = useState<'analyzing' | 'success'>('analyzing');
  const [activeCheck, setActiveCheck] = useState<number>(0);

  const checks = [
    { icon: MapPin, label: "Ubicación Geográfica" },
    { icon: Smartphone, label: "Dispositivo de Confianza" },
    { icon: Fingerprint, label: "Biometría de Tecleo" },
    { icon: Activity, label: "Patrón de Navegación" },
    { icon: Clock, label: "Horario Habitual" },
  ];

  useEffect(() => {
    // Cycle through checks
    const interval = setInterval(() => {
      setActiveCheck((prev) => (prev < checks.length - 1 ? prev + 1 : prev));
    }, duration / checks.length);

    // End simulation
    const timeout = setTimeout(() => {
      setStatus('success');
      clearInterval(interval);
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, checks.length, onComplete]);

  return (
    <div className="bg-surface-primary rounded-2xl border border-border-primary p-6 max-w-sm mx-auto shadow-sm">
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {status === 'analyzing' ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 border-4 border-blue-500/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <ShieldCheck className="w-8 h-8 text-blue-500 animate-pulse" />
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="bg-green-100 dark:bg-green-900 rounded-full p-3"
              >
                <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-50" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-1">
          {status === 'analyzing' ? analyzingText : successText}
        </h3>
        {status === 'analyzing' && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analizando {checks.length} factores de riesgo
          </p>
        )}
      </div>

      <div className="space-y-3">
        {checks.map((check, idx) => {
          const Icon = check.icon;
          const isPassed = status === 'success' || idx < activeCheck;
          const isActive = status === 'analyzing' && idx === activeCheck;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                isPassed 
                  ? 'bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800' 
                  : isActive
                    ? 'bg-blue-50 dark:bg-blue-900 border border-blue-100 dark:border-blue-800'
                    : 'bg-gray-50 dark:bg-gray-800 border border-transparent opacity-50'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${
                isPassed ? 'text-green-600 dark:text-green-50 bg-green-100 dark:bg-green-800' : 
                isActive ? 'text-blue-600 dark:text-blue-50 bg-blue-100 dark:bg-blue-800 animate-pulse' : 
                'text-gray-400 bg-gray-100 dark:bg-gray-700'
              }`}>
                <Icon size={16} />
              </div>
              <span className={`text-sm font-medium ${
                isPassed ? 'text-green-700 dark:text-green-50' : 
                isActive ? 'text-blue-700 dark:text-blue-50' : 
                'text-gray-500 dark:text-gray-300'
              }`}>
                {check.label}
              </span>
              
              {isPassed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </motion.div>
              )}
              {isActive && (
                <div className="ml-auto w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
