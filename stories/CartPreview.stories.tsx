import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CartPreview } from '../components/CartPreview';

const meta: Meta<typeof CartPreview> = {
    title: 'E-Commerce/CartPreview',
    component: CartPreview,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'A premium shopping cart preview component for e-commerce applications. Features item management, quantity controls, promo codes, free shipping progress, and multiple display variants (sidebar, dropdown, modal).',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartPreview>;

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
        maxQuantity: 5,
    },
    {
        id: '3',
        name: 'Mechanical Keyboard',
        price: 159.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
    },
];

export const Sidebar: Story = {
    args: {
        variant: 'sidebar',
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    render: (args) => {
        const [items, setItems] = React.useState(sampleItems);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};

export const WithDiscount: Story = {
    args: {
        variant: 'sidebar',
        discountCode: 'SAVE20',
        discountAmount: 100,
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    render: (args) => {
        const [items, setItems] = React.useState(sampleItems);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};

export const FreeShipping: Story = {
    args: {
        variant: 'sidebar',
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    render: (args) => {
        const [items, setItems] = React.useState([
            ...sampleItems,
            {
                id: '4',
                name: 'Designer Sunglasses',
                price: 249.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop',
            },
        ]);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};

export const EmptyCart: Story = {
    args: {
        items: [],
        variant: 'sidebar',
        onClose: () => console.log('Close cart'),
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary">
            <CartPreview {...args} />
        </div>
    ),
};

export const DropdownVariant: Story = {
    args: {
        variant: 'dropdown',
        shippingCost: 10,
    },
    render: (args) => {
        const [items, setItems] = React.useState(sampleItems.slice(0, 2));

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end">
                        <div className="relative">
                            <CartPreview
                                {...args}
                                items={items}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemoveItem={handleRemoveItem}
                                onCheckout={() => alert('Proceeding to checkout!')}
                                onClose={() => console.log('Close cart')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};

export const ModalVariant: Story = {
    args: {
        variant: 'modal',
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    render: (args) => {
        const [items, setItems] = React.useState(sampleItems);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};

export const Interactive: Story = {
    args: {
        items: sampleItems,
        variant: 'sidebar',
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    render: (args) => {
        const [items, setItems] = React.useState(args.items);
        const [isOpen, setIsOpen] = React.useState(true);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        const handleCheckout = () => {
            console.log('Proceeding to checkout with items:', items);
            alert('Proceeding to checkout!');
        };

        return (
            <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                        Interactive Cart Demo
                    </h2>
                    <p className="text-text-secondary mb-4">
                        Try adding/removing items and updating quantities. The cart updates in real-time.
                    </p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors"
                    >
                        {isOpen ? 'Close Cart' : 'Open Cart'}
                    </button>
                </div>
                <CartPreview
                    {...args}
                    items={items}
                    isOpen={isOpen}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={handleCheckout}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        );
    },
};

export const LargeCart: Story = {
    args: {
        variant: 'sidebar',
        shippingCost: 10,
        freeShippingThreshold: 1000,
        discountCode: 'SAVE50',
        discountAmount: 50,
    },
    render: (args) => {
        const [items, setItems] = React.useState([
            ...sampleItems,
            {
                id: '4',
                name: 'Running Shoes',
                price: 129.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
                variant: 'Size 10',
            },
            {
                id: '5',
                name: 'Backpack',
                price: 89.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
                variant: 'Navy Blue',
            },
            {
                id: '6',
                name: 'Sunglasses',
                price: 199.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop',
            },
            {
                id: '7',
                name: 'Wireless Mouse',
                price: 49.99,
                quantity: 2,
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop',
            },
        ]);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};

export const DarkMode: Story = {
    args: {
        variant: 'sidebar',
        shippingCost: 10,
        freeShippingThreshold: 1000,
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark">
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [items, setItems] = React.useState(sampleItems);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            );
        };

        const handleRemoveItem = (id: string) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <CartPreview
                    {...args}
                    items={items}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => alert('Proceeding to checkout!')}
                    onClose={() => console.log('Close cart')}
                />
            </div>
        );
    },
};
