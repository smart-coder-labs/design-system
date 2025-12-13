import React from 'react';
export interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    currency?: string;
    image: string;
    images?: string[];
    rating?: number;
    reviewCount?: number;
    badge?: {
        text: string;
        variant?: 'new' | 'sale' | 'trending' | 'limited';
    };
    inStock?: boolean;
    stockCount?: number;
    category?: string;
    onAddToCart?: () => void;
    onQuickView?: () => void;
    onFavorite?: () => void;
    isFavorite?: boolean;
    variant?: 'default' | 'compact' | 'featured';
    showQuickActions?: boolean;
    className?: string;
}
export declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
//# sourceMappingURL=ProductCard.d.ts.map