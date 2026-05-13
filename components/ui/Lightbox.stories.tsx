import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Lightbox } from './Lightbox';

const meta: Meta<typeof Lightbox> = {
  title: 'Components/Lightbox',
  component: Lightbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/fintech1/800/600', alt: 'Dashboard preview' },
      { src: 'https://picsum.photos/seed/fintech2/800/600', alt: 'Analytics chart' },
    ],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

export const SingleImage: Story = {
  args: {
    images: [{ src: 'https://picsum.photos/seed/chart1/800/600', alt: 'Revenue chart' }],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

export const WithCaptions: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/dashboard1/800/600', alt: 'Dashboard', caption: 'Financial Dashboard Overview — Q1 2025' },
      { src: 'https://picsum.photos/seed/portfolio1/800/600', alt: 'Portfolio', caption: 'Investment Portfolio Performance' },
      { src: 'https://picsum.photos/seed/report1/800/600', alt: 'Report', caption: 'Monthly Spending Report — March 2025' },
    ],
    initialIndex: 1,
    onClose: () => console.log('Lightbox closed'),
  },
};

export const ReceiptViewer: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/receipt1/600/800', alt: 'Payment receipt', caption: 'Transaction Receipt — TRX-2025-04-8912' },
      { src: 'https://picsum.photos/seed/receipt2/600/800', alt: 'Invoice', caption: 'Invoice INV-2025-4421 — $1,200.00' },
    ],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** Many images — gallery navigation test */
export const ManyImages: Story = {
  args: {
    images: Array.from({ length: 8 }, (_, i) => ({
      src: `https://picsum.photos/seed/gallery${i}/800/600`,
      alt: `Gallery image ${i + 1}`,
    })),
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** Last image in gallery — edge case for navigation wrap-around */
export const LastImage: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/last1/800/600', alt: 'First image' },
      { src: 'https://picsum.photos/seed/last2/800/600', alt: 'Second image' },
      { src: 'https://picsum.photos/seed/last3/800/600', alt: 'Third image' },
    ],
    initialIndex: 2,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** Images without captions */
export const NoCaption: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/nocap1/800/600', alt: 'Plain image one' },
      { src: 'https://picsum.photos/seed/nocap2/800/600', alt: 'Plain image two' },
    ],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** Single image without caption */
export const SingleNoCaption: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/large1/1200/800', alt: 'Large single image' },
    ],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** Fintech-themed gallery starting from middle */
export const FintechGallery: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/fintech3/800/600', alt: 'Portfolio dashboard', caption: 'Real-time portfolio performance overview' },
      { src: 'https://picsum.photos/seed/fintech4/800/600', alt: 'Transaction analysis', caption: 'AI-powered transaction categorization and insights' },
      { src: 'https://picsum.photos/seed/fintech5/800/600', alt: 'Risk assessment', caption: 'Automated risk assessment and portfolio rebalancing' },
    ],
    initialIndex: 1,
    onClose: () => console.log('Lightbox closed'),
  },
};

/** With custom callbacks */
export const WithCallbacks: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/cb1/800/600', alt: 'Image one' },
      { src: 'https://picsum.photos/seed/cb2/800/600', alt: 'Image two' },
      { src: 'https://picsum.photos/seed/cb3/800/600', alt: 'Image three' },
    ],
    initialIndex: 0,
    onClose: () => console.log('Lightbox closed'),
    onNext: () => console.log('Navigated to next image'),
    onPrev: () => console.log('Navigated to previous image'),
    onIndexChange: (i: number) => console.log('Index changed to', i),
  },
};
