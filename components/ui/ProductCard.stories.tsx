import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Crypto Hardware Wallet',
    description: 'Secure your digital assets with this cold storage device supporting 1000+ coins.',
    price: '$79.99',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop',
  },
};

export const WithRating: Story = {
  args: {
    title: 'Premium Ledger Nano X',
    description: 'Bluetooth-enabled hardware wallet with advanced security features.',
    price: '$149.00',
    originalPrice: '$179.00',
    rating: 4.8,
    reviewCount: 234,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop',
  },
};

export const Sale: Story = {
  args: {
    title: 'Trezor Model T',
    description: 'Touchscreen hardware wallet. Last few units at this price.',
    price: '$129.00',
    originalPrice: '$199.00',
    badge: 'Sale',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop',
  },
};

export const OutOfStock: Story = {
  args: {
    title: 'Ledger Stax',
    description: 'Next-gen hardware wallet with E-Ink display.',
    price: '$279.00',
    badge: 'Sold Out',
    disabled: true,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop',
  },
};

export const Compact: Story = {
  args: {
    title: 'CoolWallet Pro',
    description: 'Credit card-sized crypto wallet.',
    price: '$99.00',
    compact: true,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=200&h=200&fit=crop',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'ProductCard used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
