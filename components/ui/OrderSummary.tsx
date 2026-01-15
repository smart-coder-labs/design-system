import React from 'react';
import { ShoppingBag } from 'lucide-react';

export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
}

export interface OrderSummaryProps {
    items: OrderItem[];
    currency?: string;
    discountAmount?: number;
    shippingCost?: number;
    taxAmount?: number;
    className?: string;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
    currency = '$',
    discountAmount = 0,
    shippingCost = 0,
    taxAmount = 0,
    className = '',
}) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal - discountAmount + shippingCost + taxAmount;

    return (
        <div className={`bg-surface-primary border border-border-primary rounded-2xl overflow-hidden shadow-sm ${className}`}>
            <div className="p-6 border-b border-border-primary bg-background-secondary/30">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-text-primary">Order Summary</h2>
                        <p className="text-sm text-text-secondary">
                            {items.length} {items.length === 1 ? 'item' : 'items'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Items List */}
                <div className="space-y-6 mb-8">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                            <div className="relative overflow-hidden rounded-xl border border-border-primary bg-background-tertiary">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 right-0 bg-surface-primary/90 backdrop-blur-sm px-2 py-0.5 rounded-tl-lg border-t border-l border-border-primary text-xs font-medium text-text-secondary">
                                    x{item.quantity}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0 py-1">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-text-primary text-sm leading-tight">
                                            {item.name}
                                        </h3>
                                        {item.variant && (
                                            <p className="text-xs text-text-tertiary inline-flex items-center px-2 py-0.5 rounded-md bg-background-secondary border border-border-primary">
                                                {item.variant}
                                            </p>
                                        )}
                                    </div>
                                    <p className="font-semibold text-text-primary text-sm whitespace-nowrap">
                                        {currency}
                                        {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                                {item.quantity > 1 && (
                                    <p className="text-xs text-text-tertiary mt-2">
                                        {currency}{item.price.toFixed(2)} each
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 pt-6 border-t border-border-dashed">
                    <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Subtotal</span>
                        <span className="font-medium text-text-primary">
                            {currency}
                            {subtotal.toFixed(2)}
                        </span>
                    </div>

                    {discountAmount > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Discount</span>
                            <span className="font-medium text-status-success bg-status-success/10 px-2 py-0.5 rounded-md">
                                -{currency}
                                {discountAmount.toFixed(2)}
                            </span>
                        </div>
                    )}

                    <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Shipping</span>
                        <span className={`font-medium ${shippingCost === 0 ? 'text-status-success' : 'text-text-primary'}`}>
                            {shippingCost === 0 ? 'Free' : `${currency}${shippingCost.toFixed(2)}`}
                        </span>
                    </div>

                    {taxAmount > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Tax</span>
                            <span className="font-medium text-text-primary">
                                {currency}
                                {taxAmount.toFixed(2)}
                            </span>
                        </div>
                    )}

                    <div className="flex justify-between items-baseline pt-4 mt-4 border-t border-border-primary">
                        <span className="text-base font-semibold text-text-primary">Total</span>
                        <span className="text-2xl font-bold text-text-primary tracking-tight">
                            {currency}
                            {total.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
