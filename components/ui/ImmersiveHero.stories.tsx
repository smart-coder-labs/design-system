import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImmersiveHero } from './ImmersiveHero';

const meta: Meta<typeof ImmersiveHero> = {
    title: 'Surfaces/ImmersiveHero',
    component: ImmersiveHero,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Smart Finance',
        subtitle: 'Take control of your financial future with intelligent tools and real-time insights.',
        backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    },
};

export const Minimal: Story = {
    args: {
        title: 'Invest Smarter',
        backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
    },
};

export const LongSubtitle: Story = {
    args: {
        title: 'Enterprise Banking',
        subtitle: 'Comprehensive financial solutions designed for modern businesses. Secure, scalable, and compliant with global standards.',
        backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    },
};

export const VeryLongTitle: Story = {
    args: {
        title: 'International Wealth Management & Private Banking for High-Net-Worth Individuals',
        subtitle: 'Tailored financial strategies for those who demand excellence.',
        backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    },
};

export const SingleWordTitle: Story = {
    args: {
        title: 'Wealth',
        backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
    },
};

export const CryptoTheme: Story = {
    args: {
        title: 'Crypto Vault',
        subtitle: 'Secure self-custody with multi-sig wallets and DeFi integrations.',
        backgroundImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1600&q=80',
    },
};

export const DarkBackground: Story = {
    args: {
        title: 'Dark Finance',
        subtitle: 'Banking reimagined for the night owls.',
        backgroundImage: 'https://images.unsplash.com/photo-1515705576963-95cad62945b6?w=1600&q=80',
    },
};

export const MobileView: Story = {
    args: {
        title: 'On The Go',
        subtitle: 'Manage your finances from anywhere in the world.',
        backgroundImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
    },
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
};
