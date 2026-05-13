import type { Meta, StoryObj } from '@storybook/react';
import { BarcodeGenerator } from './BarcodeGenerator';

const meta = {
    title: 'Data Display/BarcodeGenerator',
    component: BarcodeGenerator,
    tags: ['autodocs'],
} satisfies Meta<typeof BarcodeGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: '1234567890',
        format: 'code128',
        scale: 3,
        includeText: true,
    },
};

export { Default as Code128 };

export const EAN13: Story = {
    args: {
        defaultValue: '5901234123457',
        format: 'ean13',
        scale: 3,
    },
};

export const UPCA: Story = {
    args: {
        defaultValue: '725272730706',
        format: 'upca',
        scale: 3,
    },
};

export const Code39: Story = {
    args: {
        defaultValue: 'HELLO123',
        format: 'code39',
        scale: 3,
    },
};

export const QRCode: Story = {
    args: {
        defaultValue: 'https://example.com/payment',
        format: 'qrcode',
        scale: 5,
        includeText: false,
    },
};

export const WithInput: Story = {
    args: {
        defaultValue: 'PROD-2024-001',
        format: 'code128',
        scale: 3,
        showInput: true,
    },
};

export const WithoutText: Story = {
    args: {
        defaultValue: '9876543210',
        format: 'code128',
        includeText: false,
    },
};

export const LargeScale: Story = {
    args: {
        defaultValue: 'INV-001',
        format: 'code128',
        scale: 5,
    },
};
