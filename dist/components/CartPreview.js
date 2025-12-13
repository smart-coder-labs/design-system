import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
export const CartPreview = ({ items, currency = '$', onUpdateQuantity, onRemoveItem, onCheckout, onClose, discountCode, discountAmount = 0, shippingCost = 0, freeShippingThreshold, isOpen = true, variant = 'sidebar', className = '', }) => {
    const [promoCode, setPromoCode] = useState(discountCode || '');
    const [isApplyingPromo, setIsApplyingPromo] = useState(false);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = discountAmount;
    const shipping = freeShippingThreshold && subtotal >= freeShippingThreshold ? 0 : shippingCost;
    const total = subtotal - discount + shipping;
    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1)
            return;
        onUpdateQuantity?.(itemId, newQuantity);
    };
    const handleRemoveItem = (itemId) => {
        onRemoveItem?.(itemId);
    };
    const handleApplyPromo = () => {
        setIsApplyingPromo(true);
        // Simulate API call
        setTimeout(() => {
            setIsApplyingPromo(false);
            console.log('Promo code applied:', promoCode);
        }, 500);
    };
    const progressToFreeShipping = freeShippingThreshold
        ? Math.min((subtotal / freeShippingThreshold) * 100, 100)
        : 0;
    const amountToFreeShipping = freeShippingThreshold
        ? Math.max(freeShippingThreshold - subtotal, 0)
        : 0;
    if (!isOpen)
        return null;
    const variantClasses = {
        sidebar: 'fixed right-0 top-0 h-full w-full max-w-md shadow-2xl',
        dropdown: 'absolute right-0 top-full mt-2 w-96 shadow-xl rounded-2xl',
        modal: 'fixed inset-0 flex items-center justify-center p-4',
    };
    const containerClasses = {
        sidebar: 'h-full',
        dropdown: 'max-h-[600px]',
        modal: 'w-full max-w-lg max-h-[90vh]',
    };
    return (_jsxs(_Fragment, { children: [variant === 'modal' && (_jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in", onClick: onClose })), _jsxs("div", { className: `cart-preview ${variantClasses[variant]} bg-surface-primary border-l border-border-primary z-50 animate-slide-in-right ${className}`, children: [_jsxs("div", { className: `flex flex-col ${containerClasses[variant]}`, children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border-primary", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ShoppingBag, { className: "w-6 h-6 text-text-primary" }), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold text-text-primary", children: "Shopping Cart" }), _jsxs("p", { className: "text-sm text-text-secondary", children: [items.length, " ", items.length === 1 ? 'item' : 'items'] })] })] }), onClose && (_jsx("button", { onClick: onClose, className: "w-10 h-10 rounded-xl flex items-center justify-center hover:bg-background-tertiary/50 transition-colors", "aria-label": "Close cart", children: _jsx(X, { className: "w-5 h-5 text-text-secondary" }) }))] }), freeShippingThreshold && subtotal < freeShippingThreshold && (_jsxs("div", { className: "p-4 bg-accent-blue/5 border-b border-border-primary", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("p", { className: "text-sm text-text-secondary", children: ["Add", ' ', _jsxs("span", { className: "font-semibold text-accent-blue", children: [currency, amountToFreeShipping.toFixed(2)] }), ' ', "for free shipping"] }), _jsxs("span", { className: "text-xs text-text-tertiary", children: [progressToFreeShipping.toFixed(0), "%"] })] }), _jsx("div", { className: "h-2 bg-background-tertiary rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-accent-blue transition-all duration-500", style: { width: `${progressToFreeShipping}%` } }) })] })), _jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: items.length === 0 ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-12", children: [_jsx(ShoppingBag, { className: "w-16 h-16 text-text-quaternary mb-4" }), _jsx("p", { className: "text-text-secondary text-center", children: "Your cart is empty" })] })) : (items.map((item) => (_jsxs("div", { className: "flex gap-4 p-3 rounded-xl hover:bg-background-secondary transition-colors", children: [_jsx("img", { src: item.image, alt: item.name, className: "w-20 h-20 object-cover rounded-lg bg-background-tertiary flex-shrink-0" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold text-text-primary text-sm mb-1 truncate", children: item.name }), item.variant && (_jsx("p", { className: "text-xs text-text-tertiary mb-2", children: item.variant })), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => handleQuantityChange(item.id, item.quantity - 1), disabled: item.quantity <= 1, className: "w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors", "aria-label": "Decrease quantity", children: _jsx(Minus, { className: "w-4 h-4 text-text-primary" }) }), _jsx("span", { className: "text-base font-medium text-text-primary min-w-[2rem] text-center", children: item.quantity }), _jsx("button", { onClick: () => handleQuantityChange(item.id, item.quantity + 1), disabled: item.maxQuantity ? item.quantity >= item.maxQuantity : false, className: "w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors", "aria-label": "Increase quantity", children: _jsx(Plus, { className: "w-4 h-4 text-text-primary" }) })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "font-semibold text-text-primary", children: [currency, (item.price * item.quantity).toFixed(2)] }), item.quantity > 1 && (_jsxs("p", { className: "text-xs text-text-tertiary", children: [currency, item.price.toFixed(2), " each"] }))] })] })] }), _jsx("button", { onClick: () => handleRemoveItem(item.id), className: "w-9 h-9 rounded-lg flex items-center justify-center hover:bg-status-error/10 text-text-tertiary hover:text-status-error transition-colors flex-shrink-0", "aria-label": "Remove item", children: _jsx(Trash2, { className: "w-5 h-5" }) })] }, item.id)))) }), items.length > 0 && (_jsx("div", { className: "p-4 border-t border-border-primary", children: _jsxs("div", { className: "flex gap-2 items-end", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { type: "text", value: promoCode, onChange: (e) => setPromoCode(e.target.value), placeholder: "Promo code", leftIcon: _jsx(Tag, { className: "w-4 h-4" }) }) }), _jsx(Button, { onClick: handleApplyPromo, disabled: !promoCode || isApplyingPromo, variant: "subtle", children: isApplyingPromo ? 'Applying...' : 'Apply' })] }) })), items.length > 0 && (_jsxs("div", { className: "p-6 border-t border-border-primary bg-background-secondary/50", children: [_jsxs("div", { className: "space-y-3 mb-4", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Subtotal" }), _jsxs("span", { className: "font-medium text-text-primary", children: [currency, subtotal.toFixed(2)] })] }), discount > 0 && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Discount" }), _jsxs("span", { className: "font-medium text-status-success", children: ["-", currency, discount.toFixed(2)] })] })), shipping > 0 && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Shipping" }), _jsxs("span", { className: "font-medium text-text-primary", children: [currency, shipping.toFixed(2)] })] })), shipping === 0 && freeShippingThreshold && subtotal >= freeShippingThreshold && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Shipping" }), _jsx("span", { className: "font-medium text-status-success", children: "Free" })] }))] }), _jsxs("div", { className: "flex justify-between items-baseline pt-3 border-t border-border-primary mb-4", children: [_jsx("span", { className: "text-lg font-semibold text-text-primary", children: "Total" }), _jsxs("span", { className: "text-2xl font-bold text-text-primary", children: [currency, total.toFixed(2)] })] }), _jsx(Button, { onClick: onCheckout, variant: "primary", size: "lg", fullWidth: true, rightIcon: _jsx(ArrowRight, { className: "w-5 h-5" }), children: "Proceed to Checkout" })] }))] }), _jsx("style", { dangerouslySetInnerHTML: {
                            __html: `
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-right {
            animation: slideInRight 300ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .animate-fade-in {
            animation: fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `,
                        } })] })] }));
};
export default CartPreview;
//# sourceMappingURL=CartPreview.js.map