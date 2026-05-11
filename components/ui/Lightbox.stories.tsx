import type { Meta, StoryObj } from '@storybook/react';
import { Lightbox } from './Lightbox';

const sampleImages = [
    { src: 'https://picsum.photos/800/600?1', alt: 'Dashboard overview', caption: 'Main dashboard showing portfolio performance' },
    { src: 'https://picsum.photos/800/600?2', alt: 'Transaction history', caption: 'Detailed transaction history view' },
    { src: 'https://picsum.photos/800/600?3', alt: 'Investment analytics', caption: 'Advanced investment analytics charts' },
];

const meta = {
    title: 'Components/Lightbox',
    component: Lightbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Lightbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        images: sampleImages,
        currentIndex: 0,
        onClose: () => {},
    },
};

export const SecondImage: Story = {
    args: {
        isOpen: true,
        images: sampleImages,
        currentIndex: 1,
        onClose: () => {},
    },
};

export const WithCaption: Story = {
    args: {
        isOpen: true,
        images: [
            { src: 'https://picsum.photos/800/600?4', alt: 'Single image', caption: 'Beautiful landscape captured during golden hour' },
        ],
        currentIndex: 0,
        onClose: () => {},
    },
};

export const Closed: Story = {
    args: {
        isOpen: false,
        images: sampleImages,
        currentIndex: 0,
        onClose: () => {},
    },
};
