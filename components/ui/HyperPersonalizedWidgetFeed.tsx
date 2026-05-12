import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GripVertical, Plus, Minus, Settings, BarChart2, CreditCard, PieChart } from 'lucide-react';

export interface WidgetData {
  id: string;
  title: string;
  type: 'balance' | 'crypto' | 'spending' | 'savings';
  visible: boolean;
  order: number;
}

export interface HyperPersonalizedWidgetFeedProps {
  initialWidgets?: WidgetData[];
}

export const HyperPersonalizedWidgetFeed: React.FC<HyperPersonalizedWidgetFeedProps> = ({
  initialWidgets = [
    { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: true, order: 1 },
    { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: true, order: 2 },
    { id: 'w3', title: 'Portafolio Cripto', type: 'crypto', visible: false, order: 3 },
    { id: 'w4', title: 'Metas de Ahorro', type: 'savings', visible: true, order: 4 },
  ]
}) => {
  const [widgets, setWidgets] = useState<WidgetData[]>(initialWidgets);
  const [isEditing, setIsEditing] = useState(false);

  const toggleVisibility = (id: string) => {
    setWidgets(widgets.map(w => w.id === id ? { ...w, visible: !w.visible } : w));
  };

  const visibleWidgets = widgets.filter(w => w.visible).sort((a, b) => a.order - b.order);
  const hiddenWidgets = widgets.filter(w => !w.visible).sort((a, b) => a.order - b.order);

  // Render mock widget content based on type
  const renderWidgetContent = (type: string) => {
    switch (type) {
      case 'balance':
        return (
          <div className="flex justify-between items-end p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white shadow-lg">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1">Cuentas</p>
              <h3 className="text-3xl font-black tracking-tight">$45,200.00</h3>
            </div>
            <CreditCard size={32} className="opacity-30" />
          </div>
        );
      case 'spending':
        return (
          <div className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm text-gray-900 dark:text-white">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-sm">Gastos del mes</h4>
              <PieChart size={16} className="text-gray-400" />
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[70%]" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Has gastado el 70% de tu presupuesto.</p>
          </div>
        );
      case 'crypto':
        return (
          <div className="p-4 bg-black rounded-xl text-white shadow-sm border border-gray-800">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-sm">Criptomonedas</h4>
              <BarChart2 size={16} className="text-emerald-400" />
            </div>
            <p className="text-xl font-bold font-mono">0.054 BTC</p>
            <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">+2.4% hoy</p>
          </div>
        );
      case 'savings':
      default:
        return (
           <div className="p-4 bg-emerald-50 dark:bg-emerald-900 border border-emerald-100 dark:border-emerald-800 rounded-xl shadow-sm text-emerald-900 dark:text-emerald-300">
            <h4 className="font-semibold text-sm mb-1">Ahorro Automático</h4>
            <p className="text-2xl font-bold">$1,250.50</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto relative rounded-3xl bg-gray-50 dark:bg-black p-4 min-h-[500px] border border-gray-200 dark:border-gray-800 overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-2">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Resumen</h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`p-2 rounded-full transition-colors ${
            isEditing 
            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-50' 
            : 'bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-gray-200 dark:border-gray-800'
          }`}
        >
          <Settings size={18} />
        </button>
      </div>

      {/* Grid */}
      <div className="space-y-4 relative">
        {visibleWidgets.map((widget, i) => (
          <motion.div
            key={widget.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2"
          >
            {isEditing && (
              <div className="flex gap-1 items-center shrink-0">
                <div className="cursor-grab active:cursor-grabbing text-gray-400 p-1 hover:text-gray-600 dark:hover:text-gray-300">
                  <GripVertical size={16} />
                </div>
                <button
                  onClick={() => toggleVisibility(widget.id)}
                  className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
                >
                  <Minus size={14} />
                </button>
              </div>
            )}
            <div className="flex-1 min-w-0">
              {renderWidgetContent(widget.type)}
            </div>
          </motion.div>
        ))}

        {isEditing && hiddenWidgets.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 pt-6 border-t border-dashed border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">
              Widgets Inactivos
            </h3>
            <div className="space-y-3">
              {hiddenWidgets.map(widget => (
                <div key={widget.id} className="flex justify-between items-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{widget.title}</span>
                  <button 
                    onClick={() => toggleVisibility(widget.id)}
                    className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

    </div>
  );
};
