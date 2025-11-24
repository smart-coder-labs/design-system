import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
    maxQuantity?: number;
}

export interface CartPreviewProps {
    items: CartItem[];
    currency?: string;
    onUpdateQuantity?: (itemId: string, quantity: number) => void;
    onRemoveItem?: (itemId: string) => void;
    onCheckout?: () => void;
    onClose?: () => void;
    discountCode?: string;
    discountAmount?: number;
    shippingCost?: number;
    freeShippingThreshold?: number;
    isOpen?: boolean;
    variant?: 'sidebar' | 'dropdown' | 'modal';
    className?: string;
}

export const CartPreview: React.FC<CartPreviewProps> = ({
    items,
    currency = '$',
    onUpdateQuantity,
    onRemoveItem,
    onCheckout,
    onClose,
    discountCode,
    discountAmount = 0,
    shippingCost = 0,
    freeShippingThreshold,
    isOpen = true,
    variant = 'sidebar',
    className = '',
}) => {
    const [promoCode, setPromoCode] = useState(discountCode || '');
    const [isApplyingPromo, setIsApplyingPromo] = useState(false);

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = discountAmount;
    const shipping = freeShippingThreshold && subtotal >= freeShippingThreshold ? 0 : shippingCost;
    const total = subtotal - discount + shipping;

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        onUpdateQuantity?.(itemId, newQuantity);
    };

    const handleRemoveItem = (itemId: string) => {
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

    if (!isOpen) return null;

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

    return (
        <>
            {/* Backdrop for modal variant */}
            {variant === 'modal' && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
                    onClick={onClose}
                />
            )}

            <div
                className={`cart-preview ${variantClasses[variant]} bg-surface-primary border-l border-border-primary z-50 animate-slide-in-right ${className}`}
            >
                <div className={`flex flex-col ${containerClasses[variant]}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border-primary">
                        <div className="flex items-center gap-3">
                            <ShoppingBag className="w-6 h-6 text-text-primary" />
                            <div>
                                <h2 className="text-xl font-bold text-text-primary">Shopping Cart</h2>
                                <p className="text-sm text-text-secondary">
                                    {items.length} {items.length === 1 ? 'item' : 'items'}
                                </p>
                            </div>
                        </div>
                        {onClose && (
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-background-tertiary/50 transition-colors"
                                aria-label="Close cart"
                            >
                                <X className="w-5 h-5 text-text-secondary" />
                            </button>
                        )}
                    </div>

                    {/* Free Shipping Progress */}
                    {freeShippingThreshold && subtotal < freeShippingThreshold && (
                        <div className="p-4 bg-accent-blue/5 border-b border-border-primary">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-text-secondary">
                                    Add{' '}
                                    <span className="font-semibold text-accent-blue">
                                        {currency}
                                        {amountToFreeShipping.toFixed(2)}
                                    </span>{' '}
                                    for free shipping
                                </p>
                                <span className="text-xs text-text-tertiary">
                                    {progressToFreeShipping.toFixed(0)}%
                                </span>
                            </div>
                            <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent-blue transition-all duration-500"
                                    style={{ width: `${progressToFreeShipping}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Items List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <ShoppingBag className="w-16 h-16 text-text-quaternary mb-4" />
                                <p className="text-text-secondary text-center">Your cart is empty</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 p-3 rounded-xl hover:bg-background-secondary transition-colors"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg bg-background-tertiary flex-shrink-0"
                                    />

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-text-primary text-sm mb-1 truncate">
                                            {item.name}
                                        </h3>
                                        {item.variant && (
                                            <p className="text-xs text-text-tertiary mb-2">{item.variant}</p>
                                        )}

                                        <div className="flex items-center justify-between">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-4 h-4 text-text-primary" />
                                                </button>
                                                <span className="text-base font-medium text-text-primary min-w-[2rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                    disabled={item.maxQuantity ? item.quantity >= item.maxQuantity : false}
                                                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-4 h-4 text-text-primary" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="font-semibold text-text-primary">
                                                    {currency}
                                                    {(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                {item.quantity > 1 && (
                                                    <p className="text-xs text-text-tertiary">
                                                        {currency}
                                                        {item.price.toFixed(2)} each
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-status-error/10 text-text-tertiary hover:text-status-error transition-colors flex-shrink-0"
                                        aria-label="Remove item"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Promo Code */}
                    {items.length > 0 && (
                        <div className="p-4 border-t border-border-primary">
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder="Promo code"
                                        className="w-full pl-10 pr-4 py-2.5 bg-background-secondary border border-border-primary rounded-xl text-sm text-text-primary placeholder:text-text-quaternary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                                    />
                                </div>
                                <button
                                    onClick={handleApplyPromo}
                                    disabled={!promoCode || isApplyingPromo}
                                    className="px-4 py-2.5 bg-background-tertiary hover:bg-background-tertiary/70 text-text-primary font-medium text-sm rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isApplyingPromo ? 'Applying...' : 'Apply'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Summary */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-border-primary bg-background-secondary/50">
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">Subtotal</span>
                                    <span className="font-medium text-text-primary">
                                        {currency}
                                        {subtotal.toFixed(2)}
                                    </span>
                                </div>

                                {discount > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Discount</span>
                                        <span className="font-medium text-status-success">
                                            -{currency}
                                            {discount.toFixed(2)}
                                        </span>
                                    </div>
                                )}

                                {shipping > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Shipping</span>
                                        <span className="font-medium text-text-primary">
                                            {currency}
                                            {shipping.toFixed(2)}
                                        </span>
                                    </div>
                                )}

                                {shipping === 0 && freeShippingThreshold && subtotal >= freeShippingThreshold && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Shipping</span>
                                        <span className="font-medium text-status-success">Free</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-baseline pt-3 border-t border-border-primary mb-4">
                                <span className="text-lg font-semibold text-text-primary">Total</span>
                                <span className="text-2xl font-bold text-text-primary">
                                    {currency}
                                    {total.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={onCheckout}
                                className="w-full py-3.5 bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                <style
                    dangerouslySetInnerHTML={{
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
                    }}
                />
            </div>
        </>
    );
};

export default CartPreview;
