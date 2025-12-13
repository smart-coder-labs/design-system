import React from 'react';
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
export declare const PriceDisplay: React.FC<PriceDisplayProps>;
export default PriceDisplay;
//# sourceMappingURL=PriceDisplay.d.ts.map