import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImageCarousel, CarouselImage } from './ImageCarousel';

const images: CarouselImage[] = [
  { src: 'https://picsum.photos/seed/dash1/800/400', alt: 'Dashboard', caption: 'Financial Dashboard Overview' },
  { src: 'https://picsum.photos/seed/dash2/800/400', alt: 'Analytics', caption: 'Real-time Analytics' },
  { src: 'https://picsum.photos/seed/dash3/800/400', alt: 'Reports', caption: 'Monthly Reports' },
  { src: 'https://picsum.photos/seed/dash4/800/400', alt: 'Wallet', caption: 'Digital Wallet' },
];

const meta: Meta<typeof ImageCarousel> = {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images,
  },
};

export const WithAutoPlay: Story = {
  args: {
    images,
    autoPlay: true,
    interval: 3000,
  },
};

export const FadeEffect: Story = {
  args: {
    images,
    effect: 'fade',
  },
};

export const WithoutArrows: Story = {
  args: {
    images,
    showArrows: false,
  },
};

export const WithoutIndicators: Story = {
  args: {
    images,
    showIndicators: false,
  },
};

export const Tall: Story = {
  args: {
    images,
    height: '600px',
  },
};
