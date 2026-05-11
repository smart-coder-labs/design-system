import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Gallery } from './Gallery';
import { LightboxImage } from './Lightbox';

const images: LightboxImage[] = [
  { src: 'https://picsum.photos/seed/fintech1/600/600', alt: 'Dashboard preview', caption: 'Main Dashboard' },
  { src: 'https://picsum.photos/seed/fintech2/600/600', alt: 'Analytics chart', caption: 'Revenue Analytics' },
  { src: 'https://picsum.photos/seed/fintech3/600/600', alt: 'Payment flow', caption: 'Payment Flow Design' },
  { src: 'https://picsum.photos/seed/fintech4/600/600', alt: 'Profile page', caption: 'User Profile' },
  { src: 'https://picsum.photos/seed/fintech5/600/600', alt: 'Settings panel', caption: 'Settings Panel' },
  { src: 'https://picsum.photos/seed/fintech6/600/600', alt: 'Reports section', caption: 'Reports & Exports' },
];

const receiptImages: LightboxImage[] = [
  { src: 'https://picsum.photos/seed/receipt1/500/700', alt: 'Payment receipt', caption: 'Transaction Receipt — TRX-2025-04-8912' },
  { src: 'https://picsum.photos/seed/receipt2/500/700', alt: 'Investment statement', caption: 'Q1 2025 Investment Statement' },
  { src: 'https://picsum.photos/seed/receipt3/500/700', alt: 'Tax document', caption: 'Tax Withholding Certificate' },
];

const meta: Meta<typeof Gallery> = {
  title: 'Components/Gallery',
  component: Gallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images,
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    images,
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    images: images.slice(0, 4),
    columns: 4,
  },
};

export const PortraitAspectRatio: Story = {
  args: {
    images,
    aspectRatio: 'portrait',
  },
};

export const VideoAspectRatio: Story = {
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'video',
  },
};

export const AutoAspectRatio: Story = {
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'auto',
  },
};

export const SingleImage: Story = {
  args: {
    images: images.slice(0, 1),
    columns: 1,
  },
};

export const ReceiptGallery: Story = {
  args: {
    images: receiptImages,
    columns: 3,
    aspectRatio: 'portrait',
  },
};

export const InvestmentPortfolio: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/portfolio1/600/400', alt: 'Portfolio performance chart', caption: 'Portfolio Performance — YTD +12.4%' },
      { src: 'https://picsum.photos/seed/portfolio2/600/400', alt: 'Asset allocation pie chart', caption: 'Asset Allocation' },
      { src: 'https://picsum.photos/seed/portfolio3/600/400', alt: 'Dividend history', caption: 'Dividend History — Last 12 Months' },
      { src: 'https://picsum.photos/seed/portfolio4/600/400', alt: 'Risk assessment', caption: 'Portfolio Risk Assessment' },
    ],
    columns: 2,
  },
};
