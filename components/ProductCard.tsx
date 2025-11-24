import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, TrendingUp, Zap } from 'lucide-react';

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

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    description,
    price,
    originalPrice,
    currency = '$',
    image,
    images = [],
    rating,
    reviewCount,
    badge,
    inStock = true,
    stockCount,
    category,
    onAddToCart,
    onQuickView,
    onFavorite,
    isFavorite = false,
    variant = 'default',
    showQuickActions = true,
    className = '',
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorited, setIsFavorited] = useState(isFavorite);

    const allImages = [image, ...images];
    const hasDiscount = originalPrice && originalPrice > price;
    const discountPercentage = hasDiscount
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorited(!isFavorited);
        onFavorite?.();
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCart?.();
    };

    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onQuickView?.();
    };

    const getBadgeStyles = (badgeVariant?: 'new' | 'sale' | 'trending' | 'limited') => {
        switch (badgeVariant) {
            case 'new':
                return 'bg-accent-blue text-white';
            case 'sale':
                return 'bg-status-error text-white';
            case 'trending':
                return 'bg-status-warning text-white';
            case 'limited':
                return 'bg-purple-600 text-white';
            default:
                return 'bg-text-primary text-text-inverse';
        }
    };

    const getBadgeIcon = (badgeVariant?: 'new' | 'sale' | 'trending' | 'limited') => {
        switch (badgeVariant) {
            case 'trending':
                return <TrendingUp className="w-3 h-3" />;
            case 'limited':
                return <Zap className="w-3 h-3" />;
            default:
                return null;
        }
    };

    const variantClasses = {
        default: 'max-w-sm',
        compact: 'max-w-xs',
        featured: 'max-w-md',
    };

    return (
        <div
            className={`product-card group ${variantClasses[variant]} bg-surface-primary rounded-2xl border border-border-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border-focus ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-background-secondary">
                {/* Product Image */}
                <img
                    src={allImages[currentImageIndex]}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {badge && (
                        <div
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyles(
                                badge.variant
                            )} shadow-sm`}
                        >
                            {getBadgeIcon(badge.variant)}
                            <span>{badge.text}</span>
                        </div>
                    )}
                    {hasDiscount && (
                        <div className="bg-status-error text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                            -{discountPercentage}%
                        </div>
                    )}
                </div>

                {/* Favorite Button */}
                <button
                    onClick={handleFavoriteClick}
                    className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${isFavorited
                            ? 'bg-status-error text-white'
                            : 'bg-white/90 backdrop-blur-sm text-text-secondary hover:text-status-error'
                        } shadow-sm hover:scale-110`}
                    aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Heart
                        className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`}
                    />
                </button>

                {/* Quick Actions */}
                {showQuickActions && (
                    <div
                        className={`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                    >
                        {onQuickView && (
                            <button
                                onClick={handleQuickView}
                                className="flex-1 bg-white/95 backdrop-blur-sm text-text-primary px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            >
                                <Eye className="w-4 h-4" />
                                <span>Quick View</span>
                            </button>
                        )}
                    </div>
                )}

                {/* Image Dots */}
                {allImages.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {allImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${index === currentImageIndex
                                        ? 'bg-white w-4'
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Out of Stock Overlay */}
                {!inStock && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-white text-text-primary px-6 py-3 rounded-xl font-semibold text-sm">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={`p-4 ${variant === 'featured' ? 'p-5' : ''}`}>
                {/* Category */}
                {category && (
                    <p className="text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2">
                        {category}
                    </p>
                )}

                {/* Title */}
                <h3
                    className={`font-semibold text-text-primary mb-2 line-clamp-2 ${variant === 'featured' ? 'text-lg' : 'text-base'
                        }`}
                >
                    {name}
                </h3>

                {/* Description */}
                {description && variant === 'featured' && (
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Rating */}
                {rating !== undefined && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(rating)
                                            ? 'fill-status-warning text-status-warning'
                                            : 'text-border-primary'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-text-secondary">
                            {rating.toFixed(1)}
                            {reviewCount && ` (${reviewCount})`}
                        </span>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span
                        className={`font-bold text-text-primary ${variant === 'featured' ? 'text-2xl' : 'text-xl'
                            }`}
                    >
                        {currency}
                        {price.toFixed(2)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-text-tertiary line-through">
                            {currency}
                            {originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Stock Info */}
                {inStock && stockCount !== undefined && stockCount < 10 && (
                    <p className="text-xs text-status-warning mb-3">
                        Only {stockCount} left in stock
                    </p>
                )}

                {/* Add to Cart Button */}
                {onAddToCart && (
                    <button
                        onClick={handleAddToCart}
                        disabled={!inStock}
                        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${inStock
                                ? 'bg-accent-blue text-white hover:bg-accent-blue-hover active:scale-95'
                                : 'bg-background-tertiary text-text-quaternary cursor-not-allowed'
                            }`}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span>{inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
