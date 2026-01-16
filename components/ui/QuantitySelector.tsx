import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../lib/utils';;

export interface QuantitySelectorProps {
  value?: number;
  defaultValue?: number;
  onChange?: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  compact?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value: controlledValue,
  defaultValue = 1,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  disabled = false,
  compact = false,
  className = '',
  ['aria-label']: ariaLabel = 'Quantity',
}) => {
  const isControlled = typeof controlledValue === 'number';
  const [internal, setInternal] = useState<number>(defaultValue);
  const value = isControlled ? (controlledValue as number) : internal;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isControlled) return;
    // when controlled, keep internal in sync for the input value
    setInternal(controlledValue as number);
  }, [controlledValue, isControlled]);

  const clamp = (v: number) => Math.min(max, Math.max(min, v));

  const handleChange = (v: number) => {
    const next = clamp(Math.round(v / step) * step);
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const inc = () => {
    if (disabled) return;
    handleChange((value ?? 0) + step);
  };

  const dec = () => {
    if (disabled) return;
    handleChange((value ?? 0) - step);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      inc();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      dec();
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleChange(min);
    } else if (e.key === 'End') {
      e.preventDefault();
      handleChange(max === Infinity ? value : max);
    }
  };

  return (
    <div
      role="spinbutton"
      aria-label={ariaLabel}
      aria-valuenow={Number.isFinite(value) ? value : undefined}
      aria-valuemin={min}
      aria-valuemax={Number.isFinite(max) ? max : undefined}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn('inline-flex items-center gap-2', className)}
    >
      <button
        type="button"
        aria-label="Decrease"
        onClick={dec}
        disabled={disabled || value <= min}
        className={cn(
          'w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary',
          'hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
          compact ? 'w-7 h-7' : ''
        )}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <input
        ref={inputRef}
        type="number"
        value={Number.isFinite(value) ? String(value) : ''}
        onChange={(e) => handleChange(Number(e.target.value || 0))}
        disabled={disabled}
        className={cn(
          'w-16 text-center bg-transparent outline-none text-text-primary',
          compact ? 'text-sm' : 'text-base'
        )}
        aria-label={ariaLabel}
        min={min}
        max={Number.isFinite(max) ? max : undefined}
        step={step}
      />

      <button
        type="button"
        aria-label="Increase"
        onClick={inc}
        disabled={disabled || value >= max}
        className={cn(
          'w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary',
          'hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
          compact ? 'w-7 h-7' : ''
        )}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;
