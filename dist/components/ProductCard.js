import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, TrendingUp, Zap } from 'lucide-react';
export const ProductCard = ({ id, name, description, price, originalPrice, currency = '$', image, images = [], rating, reviewCount, badge, inStock = true, stockCount, category, onAddToCart, onQuickView, onFavorite, isFavorite = false, variant = 'default', showQuickActions = true, className = '', }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorited, setIsFavorited] = useState(isFavorite);
    const allImages = [image, ...images];
    const hasDiscount = originalPrice && originalPrice > price;
    const discountPercentage = hasDiscount
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorited(!isFavorited);
        onFavorite?.();
    };
    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCart?.();
    };
    const handleQuickView = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onQuickView?.();
    };
    const getBadgeStyles = (badgeVariant) => {
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
    const getBadgeIcon = (badgeVariant) => {
        switch (badgeVariant) {
            case 'trending':
                return _jsx(TrendingUp, { className: "w-3 h-3" });
            case 'limited':
                return _jsx(Zap, { className: "w-3 h-3" });
            default:
                return null;
        }
    };
    const variantClasses = {
        default: 'max-w-sm',
        compact: 'max-w-xs',
        featured: 'max-w-md',
    };
    return (_jsxs("div", { className: `product-card group ${variantClasses[variant]} bg-surface-primary rounded-2xl border border-border-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border-focus ${className}`, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsxs("div", { className: "relative aspect-square overflow-hidden bg-background-secondary", children: [_jsx("img", { src: allImages[currentImageIndex], alt: name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }), _jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [badge && (_jsxs("div", { className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyles(badge.variant)} shadow-sm`, children: [getBadgeIcon(badge.variant), _jsx("span", { children: badge.text })] })), hasDiscount && (_jsxs("div", { className: "bg-status-error text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm", children: ["-", discountPercentage, "%"] }))] }), _jsx("button", { onClick: handleFavoriteClick, className: `absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${isFavorited
                            ? 'bg-status-error text-white'
                            : 'bg-white/90 backdrop-blur-sm text-text-secondary hover:text-status-error'} shadow-sm hover:scale-110`, "aria-label": isFavorited ? 'Remove from favorites' : 'Add to favorites', children: _jsx(Heart, { className: `w-5 h-5 ${isFavorited ? 'fill-current' : ''}` }) }), showQuickActions && (_jsx("div", { className: `absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`, children: onQuickView && (_jsxs("button", { onClick: handleQuickView, className: "flex-1 bg-white/95 backdrop-blur-sm text-text-primary px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: "Quick View" })] })) })), allImages.length > 1 && (_jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5", children: allImages.map((_, index) => (_jsx("button", { onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                            }, className: `w-1.5 h-1.5 rounded-full transition-all duration-200 ${index === currentImageIndex
                                ? 'bg-white w-4'
                                : 'bg-white/50 hover:bg-white/75'}`, "aria-label": `View image ${index + 1}` }, index))) })), !inStock && (_jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center", children: _jsx("span", { className: "bg-white text-text-primary px-6 py-3 rounded-xl font-semibold text-sm", children: "Out of Stock" }) }))] }), _jsxs("div", { className: `p-4 ${variant === 'featured' ? 'p-5' : ''}`, children: [category && (_jsx("p", { className: "text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2", children: category })), _jsx("h3", { className: `font-semibold text-text-primary mb-2 line-clamp-2 ${variant === 'featured' ? 'text-lg' : 'text-base'}`, children: name }), description && variant === 'featured' && (_jsx("p", { className: "text-sm text-text-secondary mb-3 line-clamp-2", children: description })), rating !== undefined && (_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `w-4 h-4 ${i < Math.floor(rating)
                                        ? 'fill-status-warning text-status-warning'
                                        : 'text-border-primary'}` }, i))) }), _jsxs("span", { className: "text-sm text-text-secondary", children: [rating.toFixed(1), reviewCount && ` (${reviewCount})`] })] })), _jsxs("div", { className: "flex items-baseline gap-2 mb-4", children: [_jsxs("span", { className: `font-bold text-text-primary ${variant === 'featured' ? 'text-2xl' : 'text-xl'}`, children: [currency, price.toFixed(2)] }), hasDiscount && (_jsxs("span", { className: "text-sm text-text-tertiary line-through", children: [currency, originalPrice.toFixed(2)] }))] }), inStock && stockCount !== undefined && stockCount < 10 && (_jsxs("p", { className: "text-xs text-status-warning mb-3", children: ["Only ", stockCount, " left in stock"] })), onAddToCart && (_jsxs("button", { onClick: handleAddToCart, disabled: !inStock, className: `w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${inStock
                            ? 'bg-accent-blue text-white hover:bg-accent-blue-hover active:scale-95'
                            : 'bg-background-tertiary text-text-quaternary cursor-not-allowed'}`, children: [_jsx(ShoppingCart, { className: "w-4 h-4" }), _jsx("span", { children: inStock ? 'Add to Cart' : 'Out of Stock' })] }))] })] }));
};
export default ProductCard;
//# sourceMappingURL=ProductCard.js.map