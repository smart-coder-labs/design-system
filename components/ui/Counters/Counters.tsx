import React from 'react';
import { cn } from '../../../lib/utils';
import { CountersProps } from './Counters.types';

export const Counters: React.FC<CountersProps> = ({ items, className, compact = false }) => {
  return (
    <section
      aria-label="Counters"
      className={cn(
        'w-full rounded-2xl overflow-hidden',
        'bg-accent-blue',
        className
      )}
    >
      <div className={cn('flex items-stretch', compact ? 'py-4' : 'py-8 px-6')}>
        {items.map((it, idx) => (
          <div
            key={idx}
            className={cn(
              'flex-1 flex flex-col items-center justify-center text-center',
              idx < items.length - 1 ? 'border-r border-white/12' : ''
            )}
            tabIndex={0}
            role="group"
            aria-label={`${it.label} ${it.value}`}
          >
            <div className={cn('text-3xl md:text-4xl lg:text-5xl font-extrabold text-white')}>{it.value}</div>
            <div className="mt-2 text-sm text-white/90">{it.label}</div>
            {it.subtitle && <div className="mt-1 text-xs text-white/80">{it.subtitle}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counters;