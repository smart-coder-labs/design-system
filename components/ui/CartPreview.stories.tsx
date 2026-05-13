import type { Meta, StoryObj } from '@storybook/react';
import { CartPreview } from './CartPreview';

const meta = {
    title: 'E-Commerce/CartPreview',
    component: CartPreview,
    tags: ['autodocs'],
} satisfies Meta<typeof CartPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    { id: '1', name: 'Wireless Headphones', price: 299.99, quantity: 1, image: 'https://picsum.photos/seed/headphones/80/80', variant: 'Black' },
    { id: '2', name: 'USB-C Hub', price: 79.99, quantity: 2, image: 'https://picsum.photos/seed/usbhub/80/80' },
    { id: '3', name: 'Phone Case', price: 39.99, quantity: 1, image: 'https://picsum.photos/seed/case/80/80', variant: 'Midnight Blue' },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        currency: '$',
        isOpen: true,
        variant: 'sidebar',
    },
};

export const DropdownVariant: Story = {
    args: {
        items: sampleItems.slice(0, 2),
        currency: '$',
        isOpen: true,
        variant: 'dropdown',
    },
};

export const ModalVariant: Story = {
    args: {
        items: sampleItems,
        currency: '$',
        isOpen: true,
        variant: 'modal',
    },
};

export const WithDiscount: Story = {
    args: {
        items: sampleItems.slice(0, 2),
        currency: '$',
        isOpen: true,
        variant: 'sidebar',
        discountCode: 'SAVE20',
        discountAmount: 75.99,
        shippingCost: 0,
    },
};

export const WithFreeShipping: Story = {
    args: {
        items: sampleItems,
        currency: '$',
        isOpen: true,
        variant: 'sidebar',
        shippingCost: 9.99,
        freeShippingThreshold: 100,
    },
};

export const Closed: Story = {
    args: {
        items: sampleItems,
        currency: '$',
        isOpen: false,
    },
};

export const EmptyCart: Story = {
    args: {
        items: [],
        currency: '$',
        isOpen: true,
        variant: 'dropdown',
    },
};

export const SingleItem: Story = {
    args: {
        items: [sampleItems[0]],
        currency: '$',
        isOpen: true,
        variant: 'sidebar',
    },
};
