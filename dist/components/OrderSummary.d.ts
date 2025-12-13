import React from 'react';
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
export declare const OrderSummary: React.FC<OrderSummaryProps>;
//# sourceMappingURL=OrderSummary.d.ts.map