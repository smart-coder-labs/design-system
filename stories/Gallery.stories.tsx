import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from '../components/ui/Gallery';

const meta: Meta<typeof Gallery> = {
    title: 'Data Display/Gallery',
    component: Gallery,
    parameters: {
        layout: 'padded',
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Gallery>;

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
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mountains',
        caption: 'Snow capped peaks'
    },
    {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop',
        alt: 'Nature',
        caption: 'Solitude in nature'
    },
    {
        src: 'https://images.unsplash.com/photo-1501854140884-074cf2b2bceb?q=80&w=2070&auto=format&fit=crop',
        alt: 'Lake',
        caption: 'Crystal clear lake reflection'
    }
];

export const Default: Story = {
    args: {
        images: sampleImages,
        columns: 3,
        gap: 16,
        aspectRatio: 'square',
    },
};

export const MasonryLike: Story = {
    args: {
        images: sampleImages,
        columns: 3,
        gap: 16,
        aspectRatio: 'portrait',
    },
};

export const VideoGrid: Story = {
    args: {
        images: sampleImages,
        columns: 2,
        gap: 24,
        aspectRatio: 'video',
    },
};

export const TightGrid: Story = {
    args: {
        images: [...sampleImages, ...sampleImages],
        columns: 4,
        gap: 8,
        aspectRatio: 'square',
    },
};
