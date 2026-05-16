import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Coffee, ShoppingBag, Utensils, Zap, Inbox } from 'lucide-react';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: string | null;
}

const CheckCircle = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const ExpenseCategorizer: React.FC = () => {
  const [uncategorized, setUncategorized] = useState<Transaction[]>([
    { id: '1', name: 'Starbucks Center', amount: 85.00, category: null },
    { id: '2', name: 'Uber Eats', amount: 320.50, category: null },
    { id: '3', name: 'Telcel Recarga', amount: 200.00, category: null },
    { id: '4', name: 'Zara Paseo', amount: 1450.00, category: null },
  ]);

  const [categories, setCategories] = useState<{id: string, name: string, icon: React.ElementType, total: number, color: string}[]>([
    { id: 'food', name: 'Alimentos', icon: Utensils, total: 1200, color: 'bg-orange-500' },
    { id: 'coffee', name: 'Café', icon: Coffee, total: 450, color: 'bg-amber-600' },
    { id: 'shopping', name: 'Compras', icon: ShoppingBag, total: 3200, color: 'bg-pink-500' },
    { id: 'services', name: 'Servicios', icon: Zap, total: 900, color: 'bg-blue-500' },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, txId: string) => {
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.offset.y) > 50) {
      const targetCategory = categories[Math.floor(Math.random() * categories.length)];
      
      const item = uncategorized.find(i => i.id === txId);
      if (item) {
        setUncategorized(prev => prev.filter(i => i.id !== txId));
        setCategories(prev => prev.map(c => 
          c.id === targetCategory.id 
          ? { ...c, total: c.total + item.amount } 
          : c
        ));
      }
    }
    setDraggedItem(null);
  };

  return (
    <div className="bg-surface-primary border border-border-primary rounded-3xl p-6 shadow-sm overflow-hidden select-none">
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-text-primary">Ordena tus Gastos</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Arrastra los gastos sin categorizar a sus cubetas correspondientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border-2 border-dashed border-border-primary min-h-[300px]">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2 px-2">
            <Inbox size={14} /> Bandeja de Entrada ({uncategorized.length})
          </h3>
          
          <div className="space-y-3 relative z-10 w-full h-full">
            {uncategorized.length === 0 ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 opacity-50">
                 <CheckCircle size={48} className="mb-2" />
                 <span className="font-semibold text-sm">Todo ordenado</span>
               </div>
            ) : (
                uncategorized.map(tx => (
                  <motion.div
                    key={tx.id}
                    drag
                    dragSnapToOrigin={true}
                    onDragStart={() => setDraggedItem(tx.id)}
                    onDragEnd={(e, info) => handleDragEnd(e, info, tx.id)}
                    whileDrag={{ scale: 1.05, opacity: 0.9, zIndex: 50, cursor: 'grabbing' }}
                    className={`bg-surface-primary border border-border-primary p-4 rounded-xl shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow flex justify-between items-center ${
                      draggedItem === tx.id ? 'shadow-2xl ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-sm text-text-primary">{tx.name}</p>
                      <p className="text-xs font-medium text-gray-400 mt-0.5">Sin Categoría</p>
                    </div>
                    <div className="font-black text-text-primary">
                      ${tx.amount.toFixed(2)}
                    </div>
                  </motion.div>
                ))
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                className={`flex flex-col items-center justify-center p-6 border-2 border-border-primary rounded-2xl bg-white dark:bg-black transition-all ${
                  draggedItem ? 'border-dashed border-gray-300 dark:border-gray-600 opacity-80 scale-95' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md mb-3 ${cat.color}`}>
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">{cat.name}</h4>
                <p className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 bg-background-secondary px-2 py-0.5 rounded-full">
                  ${cat.total.toLocaleString('es-MX')}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ExpenseCategorizer;