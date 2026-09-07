import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

const meta = {
    title: 'Navigation/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultMode: 'system',
        onModeChange: (mode, theme) => console.log('Mode:', mode, 'Theme:', theme),
    },
};

export const Light: Story = {
    args: {
        defaultMode: 'light',
        onModeChange: (mode, theme) => console.log('Mode:', mode),
    },
};

export const Dark: Story = {
    args: {
        defaultMode: 'dark',
        onModeChange: (mode, theme) => console.log('Mode:', mode),
    },
};

export const CustomLabel: Story = {
    args: {
        label: 'Appearance Settings',
        description: 'Choose between light, dark, or system theme',
        defaultMode: 'system',
        onModeChange: (mode, theme) => console.log('Mode:', mode),
    },
};

export const WithoutSystem: Story = {
    args: {
        defaultMode: 'light',
        allowSystem: false,
        onModeChange: (mode, theme) => console.log('Mode:', mode),
    },
};

export const InteractiveTheme: Story = {
    render: () => {
        const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system');
        const [theme, setTheme] = useState<'light' | 'dark'>('light');
        return (
            <div className="space-y-4">
                <ThemeToggle
                    defaultMode={mode}
                    onModeChange={(m, t) => { setMode(m); setTheme(t); }}
                    allowSystem
                />
                <div className="p-3 bg-surface-secondary rounded-lg text-xs space-y-1">
                    <p>Current mode: <strong>{mode}</strong></p>
                    <p>Resolved theme: <strong>{theme}</strong></p>
                </div>
            </div>
        );
    },
};

export const DarkModeDefault: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        defaultMode: 'dark',
        label: 'Dark Theme Toggle',
        onModeChange: (mode, theme) => console.log('Mode:', mode),
    },
};

/**
 * Reproduce el escenario del issue #52: la app anfitriona ya aplicó `dark` al
 * `<html>` (script anti-flash) y no hay preferencia en `localStorage`.
 * El control debe montar en oscuro y anunciar "Cambiar a modo claro".
 */
export const PreAppliedDarkClass: Story = {
    args: {
        defaultMode: 'system',
    },
    render: (args) => {
        // Se aplica antes de montar el toggle, igual que un script anti-flash.
        if (typeof document !== 'undefined') {
            localStorage.removeItem('theme');
            document.documentElement.classList.add('dark');
        }
        return <ThemeToggle {...args} />;
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
