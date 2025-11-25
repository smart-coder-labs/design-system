import React from 'react';
import { cn } from '../lib/utils';

export type PaymentType = 'card' | 'applepay' | 'paypal' | 'bank';

export interface PaymentMethod {
  id: string;
  type: PaymentType;
  label?: string; // e.g. 'Visa •••• 4242'
  details?: string; // additional small text
  disabled?: boolean;
}

export interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  onAdd?: () => void;
  className?: string;
  /** show an Add payment method button */
  showAdd?: boolean;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  value: controlledValue,
  defaultValue,
  onChange,
  onAdd,
  className = '',
  showAdd = true,
}) => {
  const isControlled = typeof controlledValue === 'string';
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
  const selected = isControlled ? controlledValue : internal;

  const handleSelect = (id: string) => {
    const method = methods.find((m) => m.id === id);
    if (!method || method.disabled) return;
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div role="radiogroup" aria-label="Payment methods" className="grid gap-3">
        {methods.map((m) => {
          const isSelected = selected === m.id;
          return (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-disabled={m.disabled}
              onClick={() => handleSelect(m.id)}
              disabled={m.disabled}
              className={cn(
                'w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-colors shadow-sm',
                isSelected
                  ? 'border-accent-blue bg-accent-blue/5 text-accent-blue shadow-[0_1px_2px_rgba(10,132,255,0.08)]'
                  : 'border-border-primary bg-surface-secondary text-text-primary',
                m.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-accent-blue'
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {m.type === 'card' && (
                    <div className="w-10 h-6 flex items-center justify-center bg-white rounded-md text-sm font-medium">●●●●</div>
                  )}
                  {m.type === 'applepay' && (
                    <div className="text-sm font-medium"></div>
                  )}
                  {m.type === 'paypal' && (
                    <div className="text-sm font-medium">PP</div>
                  )}
                  {m.type === 'bank' && (
                    <div className="text-sm font-medium">🏦</div>
                  )}
                </div>

                <div className="text-left">
                  <div className={cn('text-sm font-medium', isSelected ? 'text-accent-blue' : 'text-text-primary')}>{m.label ?? m.type}</div>
                  {m.details && (
                    <div className={cn('text-xs mt-1', isSelected ? 'text-accent-blue/80' : 'text-text-tertiary')}>{m.details}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                {isSelected ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-accent-blue">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <div className="w-4 h-4 rounded-full border border-border-primary" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showAdd && (
        <div>
          <button
            type="button"
            onClick={() => onAdd?.()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent text-accent-blue hover:underline"
          >
            + Add payment method
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
