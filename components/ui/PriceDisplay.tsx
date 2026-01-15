import React from 'react';
import { cn } from '../lib/utils';

export type PriceVariant = 'default' | 'muted' | 'accent';

export interface PriceDisplayProps {
  /** Value in smallest currency unit (decimal number). Example: 19.99 */
  amount: number;
  currency?: string;
  locale?: string;
  showCents?: boolean;
  compact?: boolean;
  className?: string;
  /** If provided, shows this as the original price (struck-through) */
  original?: number | null;
  variant?: PriceVariant;
  currencyDisplay?: 'symbol' | 'code' | 'narrowSymbol';
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  amount,
  currency = 'USD',
  locale = 'en-US',
  showCents = true,
  compact = false,
  className = '',
  original = null,
  variant = 'default',
  currencyDisplay = 'symbol',
}) => {
  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0,
      currencyDisplay,
    });
  }, [locale, currency, showCents, currencyDisplay]);

  const parts = formatter.formatToParts(amount);

  const makeSpan = (key: string, children: React.ReactNode, classes = '') => (
    <span key={key} className={classes}>
      {children}
    </span>
  );

  const classMap: Record<PriceVariant, string> = {
    default: 'text-text-primary',
    muted: 'text-text-tertiary',
    accent: 'text-accent-blue',
  };

  const integerClass = `font-semibold ${classMap[variant]} ${compact ? 'text-base' : 'text-2xl'}`;
  const currencyClass = `${compact ? 'text-base' : 'text-2xl'} font-semibold ${classMap[variant]} mr-2`;

  return (
    <div
      className={cn('inline-flex items-baseline gap-3', className)}
      aria-label={`Price ${currency} ${amount}`}
    >
      <div className={cn('inline-flex items-baseline', compact ? 'text-base' : 'text-lg') }>
        {parts.map((p, idx) => {
          const baseSmall = 'text-xs opacity-90';
          const cls =
            p.type === 'fraction'
              ? `align-baseline ${baseSmall} ${classMap[variant]}`
              : p.type === 'decimal'
              ? `${baseSmall} ${classMap[variant]}`
              : p.type === 'currency'
              ? currencyClass
              : '';
          const partClass = p.type === 'integer' ? integerClass : cls;
          return makeSpan(String(idx) + p.type, p.value, partClass);
        })}
      </div>

      {original != null && (
        <div className="text-sm text-text-tertiary line-through">
          {formatter.format(original)}
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;
