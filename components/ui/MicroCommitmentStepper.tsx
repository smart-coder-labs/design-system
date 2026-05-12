import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, Home, CreditCard, ChevronRight, Lock } from 'lucide-react';

export interface MicroCommitmentStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accessLevel: string;
  required: boolean;
  isComplete?: boolean;
}

export const MicroCommitmentStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: MicroCommitmentStep[] = [
    {
      id: 'contact',
      title: 'Datos Básicos',
      description: 'Crea tu perfil y accede al modo explorador.',
      icon: Mail,
      accessLevel: 'Ver Catálogo',
      required: true,
      isComplete: true,
    },
    {
      id: 'identity',
      title: 'Verifica tu Identidad',
      description: 'Por ley, necesitamos saber que eres tú para iniciar transacciones.',
      icon: Shield,
      accessLevel: 'Recibir Dinero (Límite 3,000 MXN)',
      required: true,
      isComplete: false,
    },
    {
      id: 'address',
      title: 'Domicilio Legal',
      description: 'Sube un comprobante para habilitar el envío de tu tarjeta física.',
      icon: Home,
      accessLevel: 'Tarjeta Física & Sin Límites',
      required: false,
      isComplete: false,
    }
  ];

  return (
    <div className="bg-surface-primary rounded-2xl border border-border-primary p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">Desbloqueo Progresivo</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          En lugar de pedirte todo a la vez, solo pedimos lo que necesitas según cómo uses la app.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-background-secondary" />
        
        <div className="space-y-6 relative">
          {steps.map((step, index) => {
            const isCurrent = index === activeStep;
            const isPast = index < activeStep || step.isComplete;
            const isLocked = index > activeStep;
            const Icon = step.icon;

            return (
              <div 
                key={step.id} 
                className={`relative flex gap-5 group cursor-pointer ${
                  isLocked ? 'opacity-60 grayscale' : ''
                }`}
                onClick={() => !isLocked && setActiveStep(index)}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full border-4 ${
                  isPast 
                    ? 'bg-green-500 border-green-100 dark:border-green-800 text-white' 
                    : isCurrent 
                      ? 'bg-blue-600 border-blue-100 dark:border-blue-800 text-white'
                      : 'bg-surface-primary border-border-primary text-gray-400'
                } flex items-center justify-center shrink-0 transition-colors`}>
                  {isPast ? <CheckIcon className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>

                <div className="flex-1 pb-4">
                  <div className={`p-4 rounded-xl border transition-all ${
                    isCurrent 
                      ? 'bg-blue-50/50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 shadow-md ring-1 ring-blue-500/20' 
                      : 'bg-surface-primary border-border-primary hover:border-gray-300 dark:hover:border-gray-700'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-semibold ${
                        isCurrent ? 'text-blue-900 dark:text-blue-50' : 'text-text-primary'
                      }`}>
                        {step.title}
                      </h4>
                      {step.required ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-50 px-2 py-0.5 rounded-full">
                          Obligatorio
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 px-2 py-0.5 rounded-full">
                          Opcional
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-2.5 rounded-lg border border-border-primary">
                      {isLocked ? (
                        <Lock className="w-4 h-4 text-gray-400" />
                      ) : (
                        <CreditCard className={`w-4 h-4 ${isCurrent ? 'text-blue-500' : 'text-green-500'}`} />
                      )}
                      
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex-1">
                        Desbloquea: <span className={isLocked ? 'opacity-60' : 'font-semibold'}>{step.accessLevel}</span>
                      </span>
                      
                      {isCurrent && (
                        <button className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md flex items-center gap-1">
                          Completar
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
