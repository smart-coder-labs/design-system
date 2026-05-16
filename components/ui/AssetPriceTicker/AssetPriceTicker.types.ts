/* ========================================
   ASSET PRICE TICKER - TYPES
   ======================================== */

export type AssetType = 'crypto' | 'stock' | 'forex';

export interface AssetPrice {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
    type?: AssetType;
    icon?: string;
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