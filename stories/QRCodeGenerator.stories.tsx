import type { Meta, StoryObj } from '@storybook/react';
import { QRCodeGenerator } from '../components/QRCodeGenerator';

const meta: Meta<typeof QRCodeGenerator> = {
    title: 'Data Display/QRCodeGenerator',
    component: QRCodeGenerator,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
        size: { control: { type: 'range', min: 100, max: 400, step: 10 } },
    },
};

export default meta;
type Story = StoryObj<typeof QRCodeGenerator>;

export const Default: Story = {
    args: {
        defaultValue: "https://apple.com",
        showInput: true,
    },
};

export const CustomColors: Story = {
    args: {
        defaultValue: "https://design-system.com",
        color: "#007AFF", // Apple Blue
        backgroundColor: "#F5F5F7", // Surface Secondary
        showInput: true,
    },
};

export const Large: Story = {
    args: {
        defaultValue: "https://maps.google.com",
        size: 300,
        showInput: false,
    },
};

export const DarkModeCompatible: Story = {
    args: {
        defaultValue: "Dark Mode QR",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        className: "bg-surface-primary dark:bg-surface-primary",
        showInput: true,
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};
