import type { Meta, StoryObj } from '@storybook/react';
import { SignaturePad } from '../components/ui/SignaturePad';

const meta: Meta<typeof SignaturePad> = {
    title: 'Data Display/SignaturePad',
    component: SignaturePad,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        penColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        strokeWidth: { control: { type: 'range', min: 1, max: 10, step: 0.5 } },
    },
};

export default meta;
type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
    args: {
        className: "w-[400px]",
    },
};

export const BluePen: Story = {
    args: {
        penColor: "#007AFF",
        className: "w-[400px]",
    },
};

export const ThickStroke: Story = {
    args: {
        strokeWidth: 4,
        className: "w-[400px]",
    },
};

export const CustomBackground: Story = {
    args: {
        backgroundColor: "#F5F5F7",
        className: "w-[400px]",
    },
};

export const Large: Story = {
    args: {
        width: 600,
        height: 300,
        className: "w-[600px]",
    },
};
