interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
}


interface OrderSummaryProps {
    items: OrderItem[];
    currency?: string;
    discountAmount?: number;
    shippingCost?: number;
    taxAmount?: number;
    className?: string;
}
