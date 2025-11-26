import type { Meta, StoryObj } from '@storybook/react';
import { ControlCenterToggles } from './ControlCenterToggles';
import { Wifi, Bluetooth, Moon, Volume2, Airplay, Battery } from 'lucide-react';
import { useState } from 'react';

const meta = {
    title: 'Components/ControlCenterToggles',
    component: ControlCenterToggles,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ControlCenterToggles>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultControls = [
    {
        id: 'wifi',
        label: 'Wi-Fi',
        icon: <Wifi className="w-5 h-5" />,
        enabled: true,
        onToggle: (enabled: boolean) => console.log('Wi-Fi:', enabled),
        value: 'Home Network',
        showValue: true,
    },
    {
        id: 'bluetooth',
        label: 'Bluetooth',
        icon: <Bluetooth className="w-5 h-5" />,
        enabled: true,
        onToggle: (enabled: boolean) => console.log('Bluetooth:', enabled),
    },
    {
        id: 'dark-mode',
        label: 'Dark Mode',
        icon: <Moon className="w-5 h-5" />,
        enabled: false,
        onToggle: (enabled: boolean) => console.log('Dark Mode:', enabled),
    },
    {
        id: 'volume',
        label: 'Volume',
        icon: <Volume2 className="w-5 h-5" />,
        enabled: true,
        onToggle: (enabled: boolean) => console.log('Volume:', enabled),
        value: '75%',
        showValue: true,
    },
    {
        id: 'airplay',
        label: 'AirPlay',
        icon: <Airplay className="w-5 h-5" />,
        enabled: false,
        onToggle: (enabled: boolean) => console.log('AirPlay:', enabled),
    },
    {
        id: 'battery',
        label: 'Battery',
        icon: <Battery className="w-5 h-5" />,
        enabled: true,
        onToggle: (enabled: boolean) => console.log('Battery:', enabled),
        value: '85%',
        showValue: true,
        disabled: true,
    },
];

export const GridLayout: Story = {
    args: {
        controls: defaultControls,
        layout: 'grid',
    },
};

export const ListLayout: Story = {
    args: {
        controls: defaultControls,
        layout: 'list',
    },
};

export const Interactive: Story = {
    args: {
        controls: defaultControls,
    },
    render: () => {
        const [controls, setControls] = useState(defaultControls);

        const handleToggle = (id: string, enabled: boolean) => {
            setControls(prev =>
                prev.map(control =>
                    control.id === id ? { ...control, enabled } : control
                )
            );
        };

        return (
            <ControlCenterToggles
                controls={controls.map(control => ({
                    ...control,
                    onToggle: (enabled) => handleToggle(control.id, enabled),
                }))}
                layout="grid"
            />
        );
    },
};

export const MinimalControls: Story = {
    args: {
        controls: [
            {
                id: 'wifi',
                label: 'Wi-Fi',
                icon: <Wifi className="w-5 h-5" />,
                enabled: true,
                onToggle: (enabled: boolean) => console.log('Wi-Fi:', enabled),
            },
            {
                id: 'bluetooth',
                label: 'Bluetooth',
                icon: <Bluetooth className="w-5 h-5" />,
                enabled: false,
                onToggle: (enabled: boolean) => console.log('Bluetooth:', enabled),
            },
            {
                id: 'dark-mode',
                label: 'Dark Mode',
                icon: <Moon className="w-5 h-5" />,
                enabled: true,
                onToggle: (enabled: boolean) => console.log('Dark Mode:', enabled),
            },
        ],
        layout: 'grid',
    },
};
