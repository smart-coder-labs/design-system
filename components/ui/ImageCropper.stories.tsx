import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImageCropper } from './ImageCropper';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ImageCropper> = {
    title: 'Components/ImageCropper',
    component: ImageCropper,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://picsum.photos/seed/profile/1200/800',
        aspectRatio: 1,
        onCrop: action('cropped'),
        onCancel: action('cancelled'),
    },
};

export const Landscape: Story = {
    args: {
        src: 'https://picsum.photos/seed/landscape/1600/900',
        aspectRatio: 16 / 9,
        onCrop: action('cropped'),
        onCancel: action('cancelled'),
    },
};

export const Vertical: Story = {
    args: {
        src: 'https://picsum.photos/seed/portrait/800/1200',
        aspectRatio: 3 / 4,
        onCrop: action('cropped'),
        onCancel: action('cancelled'),
    },
};

export const SquareProfilePhoto: Story = {
    args: {
        src: 'https://picsum.photos/seed/avatar/1024/1024',
        aspectRatio: 1,
        onCrop: action('cropped-avatar'),
        onCancel: action('cancelled'),
    },
};

export const WideBanner: Story = {
    args: {
        src: 'https://picsum.photos/seed/banner/2000/600',
        aspectRatio: 21 / 9,
        onCrop: action('cropped-banner'),
        onCancel: action('cancelled'),
    },
};

export const DocumentIDPhoto: Story = {
    args: {
        src: 'https://picsum.photos/seed/idcard/1500/1000',
        aspectRatio: 85.6 / 53.98, // Credit card aspect ratio
        onCrop: action('cropped-id'),
        onCancel: action('cancelled'),
    },
};

export const TallPortrait: Story = {
    args: {
        src: 'https://picsum.photos/seed/tall/600/1500',
        aspectRatio: 2 / 3,
        onCrop: action('cropped-portrait'),
        onCancel: action('cancelled'),
    },
};

export const InstagramSquare: Story = {
    args: {
        src: 'https://picsum.photos/seed/instagram/1080/1080',
        aspectRatio: 1,
        onCrop: action('cropped-instagram'),
        onCancel: action('cancelled'),
    },
};
