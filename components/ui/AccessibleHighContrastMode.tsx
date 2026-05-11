import React, { useState } from 'react';
import { Eye, Type, Contrast, Search } from 'lucide-react';

export interface AccessibleHighContrastModeProps {
  children?: React.ReactNode;
}

export const AccessibleHighContrastMode: React.FC<AccessibleHighContrastModeProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  // Apply classes based on states
  const containerClasses = `relative transition-all duration-300 ${
    highContrast ? 'grayscale-0 bg-black border-4 border-yellow-400' : 'bg-background-secondary border dark:bg-gray-900 border-border-primary'
  } rounded-2xl p-6`;

  const textClasses = `
    ${highContrast ? 'text-yellow-400 font-extrabold tracking-wide' : 'text-gray-800 dark:text-gray-200 font-normal tracking-normal'}
    ${largeText ? 'text-xl' : 'text-sm'}
    ${dyslexicFont ? 'font-serif tracking-widest leading-loose' : 'font-sans leading-normal'}
  `;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      
      {/* Controls */}
      <div className="bg-background-secondary p-2 rounded-xl flex flex-wrap gap-2 items-center justify-center">
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            highContrast ? 'bg-black text-yellow-400 shadow-md ring-2 ring-yellow-400' : 'bg-surface-primary text-text-primary shadow-sm'
          }`}
        >
          <Contrast size={16} />
          Alto Contraste
        </button>
        
        <button
          onClick={() => setLargeText(!largeText)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            largeText ? 'bg-blue-600 text-white shadow-md' : 'bg-surface-primary text-text-primary shadow-sm'
          }`}
        >
          <Type size={16} />
          Texto Grande
        </button>

        <button
          onClick={() => setDyslexicFont(!dyslexicFont)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            dyslexicFont ? 'bg-green-600 text-white shadow-md' : 'bg-surface-primary text-text-primary shadow-sm'
          }`}
        >
          <Eye size={16} />
          Fuente Legible
        </button>
      </div>

      {/* Content Preview Container */}
      <div className={containerClasses}>
        
        {highContrast && (
          <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 font-black uppercase text-xs tracking-widest rounded-md z-10 border-2 border-black">
            Modo Accesibilidad
          </div>
        )}

        {children ? (
          <div className={textClasses}>{children}</div>
        ) : (
          <div className="space-y-6">
            <div className={`flex justify-between items-center pb-4 border-b ${highContrast ? 'border-yellow-400 border-b-4' : 'border-border-primary'}`}>
               <h2 className={`font-bold ${largeText ? 'text-3xl' : 'text-xl'} ${highContrast ? 'text-white' : 'text-text-primary'} ${dyslexicFont ? 'font-serif' : ''}`}>
                 Estado de Cuenta
               </h2>
               <div className={`font-black ${largeText ? 'text-4xl' : 'text-2xl'} ${highContrast ? 'text-yellow-400' : 'text-text-primary'}`}>
                 -$1,490.00
               </div>
            </div>

            <div className="space-y-4">
              {[
                { date: '12 Nov', desc: 'Pago de Servicio Eléctrico Nacional', amount: '-$450.00', id: 'tx-1' },
                { date: '14 Nov', desc: 'Supermercado Central Local', amount: '-$1,040.00', id: 'tx-2' }
              ].map(tx => (
                <div key={tx.id} className={`flex justify-between items-start gap-4 p-4 rounded-xl ${highContrast ? 'border-2 border-yellow-400/50 hover:border-yellow-400 bg-black' : 'bg-surface-primary'}`}>
                  <div>
                    <p className={`font-bold ${highContrast ? 'text-yellow-400' : 'text-text-tertiary'} ${largeText ? 'text-base' : 'text-xs'}`}>
                      {tx.date}
                    </p>
                    <p className={`mt-1 ${textClasses} font-bold`}>
                      {tx.desc}
                    </p>
                  </div>
                  <div className={`font-black ${highContrast ? 'text-white' : 'text-text-primary'} ${largeText ? 'text-2xl' : 'text-base'}`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>

            {highContrast && (
              <button className={`w-full py-4 mt-6 border-4 border-yellow-400 text-yellow-400 font-black uppercase tracking-widest text-center hover:bg-yellow-400 hover:text-black transition-colors ${largeText ? 'text-xl' : 'text-sm'}`}>
                Descargar PDF Simplificado
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
