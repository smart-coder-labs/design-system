import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RotarySelector, type RotarySelectorOption } from '../components/RotarySelector';

// Simple icons
const VolumeIcon = () => <span>🔊</span>;
const BrightnessIcon = () => <span>☀️</span>;
const TempIcon = () => <span>🌡️</span>;
const FanIcon = () => <span>💨</span>;
const LightIcon = () => <span>💡</span>;

const meta: Meta<typeof RotarySelector> = {
    title: 'Inputs/RotarySelector',
    component: RotarySelector,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        showLabel: { control: 'boolean' },
        hapticFeedback: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
    },
};

export default meta;

type Story = StoryObj<typeof RotarySelector>;

const volumeOptions: RotarySelectorOption[] = Array.from({ length: 12 }, (_, i) => ({
    id: `vol-${i}`,
    label: `${i * 10}%`,
    value: i * 10,
    icon: i === 0 ? <span>🔇</span> : <VolumeIcon />,
}));

const modeOptions: RotarySelectorOption[] = [
    { id: 'auto', label: 'Auto', value: 'auto', icon: <span>🤖</span> },
    { id: 'cool', label: 'Cool', value: 'cool', icon: <span>❄️</span> },
    { id: 'dry', label: 'Dry', value: 'dry', icon: <span>💧</span> },
    { id: 'fan', label: 'Fan', value: 'fan', icon: <FanIcon /> },
    { id: 'heat', label: 'Heat', value: 'heat', icon: <span>🔥</span> },
];

export const Default: Story = {
    args: {
        options: volumeOptions,
        value: 50,
    },
    render: (args) => {
        const [value, setValue] = React.useState(args.value);
        return (
            <div className="min-h-[500px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector
                    {...args}
                    value={value}
                    onChange={(v) => setValue(v)}
                />
            </div>
        );
    },
};

export const Modes: Story = {
    args: {
        options: modeOptions,
        value: 'auto',
        size: 'sm',
    },
    render: (args) => {
        const [value, setValue] = React.useState(args.value);
        return (
            <div className="min-h-[400px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector
                    {...args}
                    value={value}
                    onChange={(v) => setValue(v)}
                />
            </div>
        );
    },
};

export const Large: Story = {
    args: {
        options: volumeOptions,
        value: 50,
        size: 'lg',
    },
    render: (args) => {
        const [value, setValue] = React.useState(args.value);
        return (
            <div className="min-h-[600px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector
                    {...args}
                    value={value}
                    onChange={(v) => setValue(v)}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        options: volumeOptions,
        value: 50,
        disabled: true,
    },
    render: (args) => (
        <div className="min-h-[500px] flex items-center justify-center bg-background-secondary p-8">
            <RotarySelector {...args} />
        </div>
    ),
};
