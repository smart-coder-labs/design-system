import React from 'react';
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
export declare const CartPreview: React.FC<CartPreviewProps>;
export default CartPreview;
//# sourceMappingURL=CartPreview.d.ts.map