import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../components/ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Foundations/ThemeToggle',
    component: ThemeToggle,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-md">
                <StoryComponent />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
    args: {
        label: 'Tema',
        description: 'Sincroniza con la preferencia del sistema',
    },
};

export const LightStart: Story = {
    args: {
        defaultMode: 'light',
        label: 'Modo claro',
        description: 'Fija el modo claro al cargar',
    },
};

export const WithoutSystem: Story = {
    args: {
        defaultMode: 'dark',
        allowSystem: false,
        label: 'Apariencia',
        description: 'Solo alterna entre claro y oscuro',
    },
};
