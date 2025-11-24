import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/ProductCard';

const meta: Meta<typeof ProductCard> = {
    title: 'E-Commerce/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A premium product card component designed for e-commerce applications. Features image galleries, badges, ratings, favorites, quick actions, and stock management. Includes smooth animations and hover effects for an engaging shopping experience.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

// Sample product images (using placeholder images)
const sampleImages = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
];

export const Default: Story = {
    args: {
        id: '1',
        name: 'Premium Wireless Headphones',
        description: 'High-quality sound with active noise cancellation',
        price: 299.99,
        image: sampleImages[0],
        rating: 4.5,
        reviewCount: 128,
        category: 'Audio',
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const WithDiscount: Story = {
    args: {
        id: '2',
        name: 'Smart Watch Pro',
        description: 'Track your fitness and stay connected',
        price: 349.99,
        originalPrice: 499.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        rating: 4.8,
        reviewCount: 256,
        category: 'Wearables',
        badge: {
            text: 'Sale',
            variant: 'sale',
        },
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const NewProduct: Story = {
    args: {
        id: '3',
        name: 'Minimalist Backpack',
        description: 'Perfect for daily commute and travel',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        rating: 4.6,
        reviewCount: 45,
        category: 'Accessories',
        badge: {
            text: 'New',
            variant: 'new',
        },
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const TrendingProduct: Story = {
    args: {
        id: '4',
        name: 'Mechanical Keyboard',
        description: 'RGB backlit with custom switches',
        price: 159.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
        rating: 4.9,
        reviewCount: 512,
        category: 'Peripherals',
        badge: {
            text: 'Trending',
            variant: 'trending',
        },
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const LimitedEdition: Story = {
    args: {
        id: '5',
        name: 'Designer Sunglasses',
        description: 'Limited edition collection',
        price: 249.99,
        originalPrice: 349.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        rating: 4.7,
        reviewCount: 89,
        category: 'Fashion',
        badge: {
            text: 'Limited',
            variant: 'limited',
        },
        stockCount: 5,
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const WithImageGallery: Story = {
    args: {
        id: '6',
        name: 'Premium Wireless Headphones',
        description: 'Experience superior sound quality',
        price: 299.99,
        image: sampleImages[0],
        images: sampleImages.slice(1),
        rating: 4.5,
        reviewCount: 128,
        category: 'Audio',
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const LowStock: Story = {
    args: {
        id: '7',
        name: 'Vintage Camera',
        description: 'Classic design meets modern technology',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
        rating: 4.4,
        reviewCount: 67,
        category: 'Photography',
        stockCount: 3,
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const OutOfStock: Story = {
    args: {
        id: '8',
        name: 'Gaming Console',
        description: 'Next-gen gaming experience',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop',
        rating: 4.9,
        reviewCount: 1024,
        category: 'Gaming',
        inStock: false,
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const CompactVariant: Story = {
    args: {
        id: '9',
        name: 'Wireless Mouse',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        rating: 4.3,
        reviewCount: 234,
        category: 'Peripherals',
        variant: 'compact',
        onAddToCart: () => console.log('Added to cart'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const FeaturedVariant: Story = {
    args: {
        id: '10',
        name: 'Professional DSLR Camera',
        description:
            'Capture stunning photos with this professional-grade camera. Features a 45MP full-frame sensor, 4K video recording, and advanced autofocus system.',
        price: 2499.99,
        originalPrice: 2999.99,
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop',
        ],
        rating: 4.9,
        reviewCount: 456,
        category: 'Photography',
        badge: {
            text: 'Pro',
            variant: 'new',
        },
        variant: 'featured',
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const WithoutQuickActions: Story = {
    args: {
        id: '11',
        name: 'Leather Wallet',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
        rating: 4.6,
        reviewCount: 89,
        category: 'Accessories',
        showQuickActions: false,
        onAddToCart: () => console.log('Added to cart'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const Favorited: Story = {
    args: {
        id: '12',
        name: 'Running Shoes',
        description: 'Lightweight and comfortable for long runs',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        rating: 4.7,
        reviewCount: 345,
        category: 'Footwear',
        isFavorite: true,
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
};

export const ProductGrid: Story = {
    render: () => (
        <div className="p-8 bg-background-primary min-h-screen">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard
                    id="1"
                    name="Premium Wireless Headphones"
                    price={299.99}
                    originalPrice={399.99}
                    image={sampleImages[0]}
                    rating={4.5}
                    reviewCount={128}
                    category="Audio"
                    badge={{ text: 'Sale', variant: 'sale' }}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="2"
                    name="Smart Watch Pro"
                    price={349.99}
                    image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
                    rating={4.8}
                    reviewCount={256}
                    category="Wearables"
                    badge={{ text: 'New', variant: 'new' }}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="3"
                    name="Mechanical Keyboard"
                    price={159.99}
                    image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"
                    rating={4.9}
                    reviewCount={512}
                    category="Peripherals"
                    badge={{ text: 'Trending', variant: 'trending' }}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="4"
                    name="Designer Sunglasses"
                    price={249.99}
                    originalPrice={349.99}
                    image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
                    rating={4.7}
                    reviewCount={89}
                    category="Fashion"
                    badge={{ text: 'Limited', variant: 'limited' }}
                    stockCount={5}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="5"
                    name="Minimalist Backpack"
                    price={89.99}
                    image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
                    rating={4.6}
                    reviewCount={45}
                    category="Accessories"
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="6"
                    name="Running Shoes"
                    price={129.99}
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
                    rating={4.7}
                    reviewCount={345}
                    category="Footwear"
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="7"
                    name="Vintage Camera"
                    price={899.99}
                    image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop"
                    rating={4.4}
                    reviewCount={67}
                    category="Photography"
                    stockCount={3}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
                <ProductCard
                    id="8"
                    name="Gaming Console"
                    price={499.99}
                    image="https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop"
                    rating={4.9}
                    reviewCount={1024}
                    category="Gaming"
                    inStock={false}
                    onAddToCart={() => console.log('Added to cart')}
                    onQuickView={() => console.log('Quick view')}
                    onFavorite={() => console.log('Favorite toggled')}
                />
            </div>
        </div>
    ),
};

export const DarkMode: Story = {
    args: {
        id: '13',
        name: 'Premium Wireless Headphones',
        description: 'High-quality sound with active noise cancellation',
        price: 299.99,
        originalPrice: 399.99,
        image: sampleImages[0],
        images: sampleImages.slice(1),
        rating: 4.5,
        reviewCount: 128,
        category: 'Audio',
        badge: {
            text: 'Sale',
            variant: 'sale',
        },
        onAddToCart: () => console.log('Added to cart'),
        onQuickView: () => console.log('Quick view'),
        onFavorite: () => console.log('Favorite toggled'),
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark p-8">
                <Story />
            </div>
        ),
    ],
};
