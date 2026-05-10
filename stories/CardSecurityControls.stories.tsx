import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CardSecurityControls, type CardControl } from '../components/ui/CardSecurityControls';
import { Snowflake, Gauge, Globe } from 'lucide-react';

const meta: Meta<typeof CardSecurityControls> = {
    title: 'Fintech/Cards/CardSecurityControls',
    component: CardSecurityControls,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof CardSecurityControls>;

export const Default: Story = {
    args: {},
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const Interactive: Story = {
    name: '🔐 Caso de Uso: Interactive Controls',
    render: () => {
        const [controls, setControls] = useState<CardControl[]>([
            { id: 'freeze', label: 'Freeze Card', description: 'Temporarily block all card transactions', icon: <Snowflake className="w-5 h-5" />, checked: false, variant: 'danger' },
            { id: 'limits', label: 'Spending Limits', description: 'Set daily spending and ATM withdrawal limits', icon: <Gauge className="w-5 h-5" />, checked: true },
            { id: 'international', label: 'International Purchases', description: 'Allow transactions from foreign merchants', icon: <Globe className="w-5 h-5" />, checked: false },
        ]);

        const handleToggle = (id: string, checked: boolean) => {
            setControls(prev => prev.map(c => c.id === id ? { ...c, checked } : c));
        };

        return (
            <div className="w-[400px]">
                <CardSecurityControls controls={controls} onToggle={handleToggle} />
            </div>
        );
    },
};
