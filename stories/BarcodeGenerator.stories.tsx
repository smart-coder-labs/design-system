import type { Meta, StoryObj } from '@storybook/react';
import { BarcodeGenerator } from '../components/BarcodeGenerator';

const meta: Meta<typeof BarcodeGenerator> = {
    title: 'Data Display/BarcodeGenerator',
    component: BarcodeGenerator,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        format: {
            control: 'select',
            options: ['code128', 'ean13', 'upca', 'code39', 'itf14'],
        },
        scale: {
            control: { type: 'range', min: 1, max: 5, step: 1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof BarcodeGenerator>;

export const Default: Story = {
    args: {
        defaultValue: "1234567890",
        showInput: true,
    },
};

export const EAN13: Story = {
    args: {
        defaultValue: "978020137962", // Valid EAN-13 example
        format: "ean13",
        showInput: true,
    },
};

export const Code39: Story = {
    args: {
        defaultValue: "CODE-39-TEST",
        format: "code39",
        showInput: true,
    },
};

export const NoText: Story = {
    args: {
        defaultValue: "1234567890",
        includeText: false,
        showInput: false,
    },
};

export const LargeScale: Story = {
    args: {
        defaultValue: "1234567890",
        scale: 5,
        showInput: false,
    },
};
