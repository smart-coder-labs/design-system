import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';

export interface ContextualTrustBadgeProps {
  /** Value to secure/insure, e.g. amount of money */
  amount?: string;
  /** Action being taken */
  actionLabel?: string;
  /** Type of badge protection focus */
  variant?: 'encryption' | 'insurance' | 'fraud-protection';
}

export const ContextualTrustBadge: React.FC<ContextualTrustBadgeProps> = ({
  amount,
  actionLabel = "transacción",
  variant = 'encryption'
}) => {
  const config = {
    encryption: {
      icon: Lock,
      title: "Cifrado de Extremo a Extremo",
      desc: "Tu información viaja segura mediante encriptación bancaria de 256-bits a prueba de intercepciones.",
      color: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900 dark:text-blue-50 dark:border-blue-800",
      iconColor: "text-blue-500"
    },
    insurance: {
      icon: Shield,
      title: "Fondos Asegurados",
      desc: amount 
        ? `Tus fondos por ${amount} están 100% protegidos por el seguro de depósitos nacionales.`
        : "Tus fondos están protegidos por el seguro de depósitos nacionales hasta el límite legal.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900 dark:text-emerald-50 dark:border-emerald-800",
      iconColor: "text-emerald-500"
    },
    'fraud-protection': {
      icon: CheckCircle2,
      title: "Garantía Anti-Fraude",
      desc: `Esta ${actionLabel} está monitoreada. Si no reconoces el cargo, tienes 90 días para cancelar sin costo.`,
      color: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900 dark:text-indigo-50 dark:border-indigo-800",
      iconColor: "text-indigo-500"
    }
  };

  const selectedConfig = config[variant];
  const Icon = selectedConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 flex gap-3 items-start shadow-sm backdrop-blur-sm ${selectedConfig.color}`}
    >
      <div className={`mt-0.5 ${selectedConfig.iconColor}`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-1">{selectedConfig.title}</h4>
        <p className="text-xs opacity-90 leading-relaxed font-medium">
          {selectedConfig.desc}
        </p>
      </div>
    </motion.div>
  );
};
