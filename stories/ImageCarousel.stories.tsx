import type { Meta, StoryObj } from '@storybook/react';
import { ImageCarousel } from '../components/ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
    title: 'Data Display/ImageCarousel',
    component: ImageCarousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

const sampleImages = [
    {
        src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mountain Landscape',
        caption: 'Majestic mountains under the starry sky'
    },
    {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
        alt: 'Green Valley',
        caption: 'Lush green valley in the morning mist'
    },
    {
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
        alt: 'Portrait',
        caption: 'Artistic portrait photography'
    }
];

export const Default: Story = {
    args: {
        images: sampleImages,
        className: 'w-full max-w-3xl',
    },
};

export const AutoPlay: Story = {
    args: {
        images: sampleImages,
        autoPlay: true,
        interval: 3000,
        className: 'w-full max-w-3xl',
    },
};

export const FadeEffect: Story = {
    args: {
        images: sampleImages,
        effect: 'fade',
        className: 'w-full max-w-3xl',
    },
};

export const NoIndicators: Story = {
    args: {
        images: sampleImages,
        showIndicators: false,
        className: 'w-full max-w-3xl',
    },
};

export const CustomHeight: Story = {
    args: {
        images: sampleImages,
        height: '200px',
        className: 'w-full max-w-3xl',
    },
};
