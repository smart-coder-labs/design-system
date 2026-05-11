import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS/iOS-inspired theme switcher with light, dark, and system modes. Includes animated icon transitions, an Auto button, and a Switch component. Persists preference to localStorage.',
            },
        },
    },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultMode: 'system',
        label: 'Theme',
        allowSystem: true,
    },
};

export const WithoutSystem: Story = {
    args: {
        defaultMode: 'light',
        label: 'Appearance',
        allowSystem: false,
    },
};

export const DarkDefault: Story = {
    args: {
        defaultMode: 'dark',
        label: 'Dark Mode',
        allowSystem: false,
    },
};

export const CustomLabels: Story = {
    args: {
        defaultMode: 'system',
        label: 'Display Mode',
        description: 'Choose your preferred color scheme',
        allowSystem: true,
    },
};

export const SpanishLabels: Story = {
    args: {
        defaultMode: 'system',
        label: 'Apariencia',
        description: 'Sincroniza con la preferencia del sistema',
        allowSystem: true,
    },
};

export const MinimalNoSystem: Story = {
    args: {
        defaultMode: 'light',
        label: 'Theme',
        allowSystem: false,
    },
};

export const WithStorageKey: Story = {
    args: {
        defaultMode: 'system',
        storageKey: 'app-theme-preference',
        label: 'Theme',
        description: 'Saved as "app-theme-preference" in localStorage',
        allowSystem: true,
    },
};

export const InCardContext: Story = {
    decorators: [
        (Story) => (
            <div className="max-w-md mx-auto p-6 bg-surface-primary rounded-2xl border border-border-primary shadow-sm">
                <h3 className="text-sm font-semibold text-text-primary mb-4">Settings</h3>
                <Story />
                <div className="mt-4 pt-4 border-t border-border-primary space-y-3">
                    {[
                        { label: 'Notifications', desc: 'Push, email, SMS' },
                        { label: 'Language', desc: 'English (US)' },
                        { label: 'Sound', desc: 'Enabled' },
                    ].map((s) => (
                        <div key={s.label} className="flex items-center justify-between py-1">
                            <div>
                                <p className="text-sm text-text-primary">{s.label}</p>
                                <p className="text-xs text-text-tertiary">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        defaultMode: 'system',
        label: 'Theme',
        description: 'Follow system or choose manually',
        allowSystem: true,
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        defaultMode: 'system',
        label: 'Theme',
        allowSystem: true,
    },
};

export const InteractiveLogging: Story = {
    args: {
        defaultMode: 'system',
        label: 'Theme',
        description: 'Check browser console for mode changes',
        allowSystem: true,
        onModeChange: (mode, theme) => {
            console.log('Theme changed:', { mode, theme });
        },
    },
};
