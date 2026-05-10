"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface AssetPrice {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change: number; // percentage
    type?: 'crypto' | 'stock' | 'forex';
    icon?: string; // emoji or image
}

export interface AssetPriceTickerProps {
    assets: AssetPrice[];
    currency?: string;
    locale?: string;
    layout?: 'horizontal' | 'vertical';
    compact?: boolean;
    onSelect?: (asset: AssetPrice) => void;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

const typeIcons: Record<string, string> = {
    crypto: '₿',
    stock: '📈',
    forex: '💱',
};

export const AssetPriceTicker: React.FC<AssetPriceTickerProps> = ({
    assets,
    currency = 'USD',
    locale = 'en-US',
    layout = 'horizontal',
    compact = false,
    onSelect,
    className = '',
}) => {
    const formatPrice = (v: number) =>
        new Intl.NumberFormat(locale, {
            style: 'currency', currency,
            minimumFractionDigits: v < 1 ? 4 : 2,
            maximumFractionDigits: v < 1 ? 6 : 2,
        }).format(v);

    const isHorizontal = layout === 'horizontal';

    return (
        <motion.div
            className={cn(
                isHorizontal
                    ? 'flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide'
                    : 'flex flex-col gap-1',
                className,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {assets.map((asset, i) => {
                const isUp = asset.change > 0;
                const isNeutral = asset.change === 0;

                return (
                    <motion.button
                        key={asset.id}
                        onClick={() => onSelect?.(asset)}
                        className={cn(
                            'flex items-center gap-3 rounded-xl transition-apple shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
                            'hover:bg-surface-secondary/60 active:bg-surface-secondary',
                            compact
                                ? 'gap-2 px-3 py-2'
                                : 'px-4 py-3',
                            isHorizontal ? '' : 'w-full',
                        )}
                        initial={{ opacity: 0, x: isHorizontal ? -10 : 0, y: isHorizontal ? 0 : -6 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Icon */}
                        <span className="text-base shrink-0">
                            {asset.icon || typeIcons[asset.type || 'stock']}
                        </span>

                        {/* Symbol & name */}
                        <div className={cn('text-left', compact ? 'min-w-0' : 'min-w-[60px]')}>
                            <p className={cn('font-bold text-text-primary', compact ? 'text-xs' : 'text-sm')}>
                                {asset.symbol}
                            </p>
                            {!compact && (
                                <p className="text-[10px] text-text-tertiary truncate max-w-[80px]">{asset.name}</p>
                            )}
                        </div>

                        {/* Price */}
                        <p className={cn(
                            'font-bold text-text-primary tabular-nums',
                            compact ? 'text-xs' : 'text-sm',
                        )}>
                            {formatPrice(asset.price)}
                        </p>

                        {/* Change badge */}
                        <span className={cn(
                            'flex items-center gap-0.5 font-bold tabular-nums rounded-full',
                            compact ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1',
                            isNeutral
                                ? 'bg-surface-secondary text-text-tertiary'
                                : isUp
                                    ? 'bg-status-success/10 text-status-success'
                                    : 'bg-status-error/10 text-status-error',
                        )}>
                            {isNeutral
                                ? <Minus className="w-2.5 h-2.5" />
                                : isUp
                                    ? <TrendingUp className="w-2.5 h-2.5" />
                                    : <TrendingDown className="w-2.5 h-2.5" />
                            }
                            {isUp ? '+' : ''}{asset.change.toFixed(2)}%
                        </span>
                    </motion.button>
                );
            })}
        </motion.div>
    );
};

AssetPriceTicker.displayName = 'AssetPriceTicker';
export default AssetPriceTicker;
