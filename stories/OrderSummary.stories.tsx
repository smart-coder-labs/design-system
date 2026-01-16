import type { Meta, StoryObj } from '@storybook/react';
import { OrderSummary } from '../components/ui/OrderSummary';

const meta: Meta<typeof OrderSummary> = {
    title: 'E-Commerce/OrderSummary',
    component: OrderSummary,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A read-only order summary component displaying items, costs, and totals. Designed to match the CartPreview aesthetic but without interactive actions.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof OrderSummary>;

const sampleItems = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
        variant: 'Black',
    },
    {
        id: '2',
        name: 'Smart Watch Pro',
        price: 349.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
        variant: 'Silver',
    },
    {
        id: '3',
        name: 'Mechanical Keyboard',
        price: 159.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        shippingCost: 10,
        taxAmount: 45.50,
        className: 'w-[400px]',
    },
};

export const WithDiscount: Story = {
    args: {
        items: sampleItems,
        shippingCost: 10,
        taxAmount: 45.50,
        discountAmount: 50,
        className: 'w-[400px]',
    },
};

export const FreeShipping: Story = {
    args: {
        items: sampleItems,
        shippingCost: 0,
        taxAmount: 45.50,
        className: 'w-[400px]',
    },
};

export const SingleItem: Story = {
    args: {
        items: [sampleItems[0]],
        shippingCost: 5,
        taxAmount: 15,
        className: 'w-[400px]',
    },
};
