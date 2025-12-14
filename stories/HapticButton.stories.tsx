import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HapticButton, isHapticSupported } from '../components/HapticButton';
import { CheckCircle2, AlertCircle, XCircle, Bell, Zap } from 'lucide-react';

const meta = {
    title: 'Buttons/HapticButton',
    component: HapticButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Botón con soporte para feedback háptico. Proporciona vibración táctil cuando se interactúa con el botón, mejorando la experiencia de usuario en dispositivos móviles. Usa la API Vibration del navegador cuando está disponible.',
            },
        },
    },
    tags: [],
    argTypes: {
        hapticFeedback: {
            control: 'select',
            options: [true, false, 'light', 'medium', 'heavy', 'success', 'warning', 'error', 'selection', 'impact', 'notification'],
            description: 'Tipo de feedback háptico a usar',
        },
        hapticOnHover: {
            control: 'boolean',
            description: 'Activar feedback háptico al pasar el mouse',
        },
        hapticOnTap: {
            control: 'boolean',
            description: 'Activar feedback háptico al hacer tap/clic',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof HapticButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   STORIES - BASIC
   ======================================== */

export const Default: Story = {
    args: {
        children: 'Haptic Button',
        hapticFeedback: 'medium',
        hapticOnTap: true,
        hapticOnHover: false,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <div className="mb-4 p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary mb-2">
                        Haptic Support: <span className="font-semibold text-text-primary">{isHapticSupported() ? '✅ Available' : '❌ Not Available'}</span>
                    </p>
                    <p className="text-xs text-text-tertiary">
                        {isHapticSupported() 
                            ? 'Este dispositivo soporta feedback háptico. Prueba hacer clic o tocar el botón.'
                            : 'Este dispositivo no soporta feedback háptico. Prueba en un dispositivo móvil o con soporte de vibración.'}
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const LightFeedback: Story = {
    name: 'Feedback Ligero',
    args: {
        children: 'Light Haptic',
        hapticFeedback: 'light',
        hapticOnTap: true,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback ligero - vibración suave
                </p>
                <Story />
            </div>
        ),
    ],
};

export const MediumFeedback: Story = {
    name: 'Feedback Medio',
    args: {
        children: 'Medium Haptic',
        hapticFeedback: 'medium',
        hapticOnTap: true,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback medio - vibración estándar
                </p>
                <Story />
            </div>
        ),
    ],
};

export const HeavyFeedback: Story = {
    name: 'Feedback Fuerte',
    args: {
        children: 'Heavy Haptic',
        hapticFeedback: 'heavy',
        hapticOnTap: true,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback fuerte - vibración intensa
                </p>
                <Story />
            </div>
        ),
    ],
};

export const SuccessFeedback: Story = {
    name: 'Feedback de Éxito',
    args: {
        children: 'Success Action',
        hapticFeedback: 'success',
        hapticOnTap: true,
        variant: 'primary',
        leftIcon: <CheckCircle2 className="w-4 h-4" />,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de éxito - patrón de vibración triple
                </p>
                <Story />
            </div>
        ),
    ],
};

export const WarningFeedback: Story = {
    name: 'Feedback de Advertencia',
    args: {
        children: 'Warning Action',
        hapticFeedback: 'warning',
        hapticOnTap: true,
        variant: 'secondary',
        leftIcon: <AlertCircle className="w-4 h-4" />,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de advertencia - patrón de vibración doble
                </p>
                <Story />
            </div>
        ),
    ],
};

export const ErrorFeedback: Story = {
    name: 'Feedback de Error',
    args: {
        children: 'Error Action',
        hapticFeedback: 'error',
        hapticOnTap: true,
        variant: 'destructive',
        leftIcon: <XCircle className="w-4 h-4" />,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de error - patrón de vibración triple intenso
                </p>
                <Story />
            </div>
        ),
    ],
};

export const SelectionFeedback: Story = {
    name: 'Feedback de Selección',
    args: {
        children: 'Select Item',
        hapticFeedback: 'selection',
        hapticOnTap: true,
        variant: 'ghost',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de selección - vibración ligera para selecciones
                </p>
                <Story />
            </div>
        ),
    ],
};

export const ImpactFeedback: Story = {
    name: 'Feedback de Impacto',
    args: {
        children: 'Impact Action',
        hapticFeedback: 'impact',
        hapticOnTap: true,
        variant: 'primary',
        leftIcon: <Zap className="w-4 h-4" />,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de impacto - vibración media para acciones importantes
                </p>
                <Story />
            </div>
        ),
    ],
};

export const NotificationFeedback: Story = {
    name: 'Feedback de Notificación',
    args: {
        children: 'Show Notification',
        hapticFeedback: 'notification',
        hapticOnTap: true,
        variant: 'secondary',
        leftIcon: <Bell className="w-4 h-4" />,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de notificación - patrón de vibración para notificaciones
                </p>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - CONFIGURATIONS
   ======================================== */

export const HoverFeedback: Story = {
    name: 'Feedback en Hover',
    args: {
        children: 'Hover Me',
        hapticFeedback: 'light',
        hapticOnHover: true,
        hapticOnTap: false,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Pasa el mouse sobre el botón para sentir el feedback háptico
                </p>
                <Story />
            </div>
        ),
    ],
};

export const BothHoverAndTap: Story = {
    name: 'Hover y Tap',
    args: {
        children: 'Hover & Tap',
        hapticFeedback: 'medium',
        hapticOnHover: true,
        hapticOnTap: true,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback háptico tanto en hover como en tap
                </p>
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    name: 'Deshabilitado',
    args: {
        children: 'Disabled Button',
        hapticFeedback: 'medium',
        hapticOnTap: true,
        variant: 'primary',
        disabled: true,
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Los botones deshabilitados no activan feedback háptico
                </p>
                <Story />
            </div>
        ),
    ],
};

export const NoHaptic: Story = {
    name: 'Sin Feedback Háptico',
    args: {
        children: 'No Haptic',
        hapticFeedback: false,
        variant: 'primary',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Botón sin feedback háptico (comportamiento normal)
                </p>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - VARIANTS
   ======================================== */

export const AllVariants: Story = {
    name: 'Todas las Variantes',
    render: () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Primary</p>
                <HapticButton hapticFeedback="medium" variant="primary">
                    Primary Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Secondary</p>
                <HapticButton hapticFeedback="medium" variant="secondary">
                    Secondary Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Ghost</p>
                <HapticButton hapticFeedback="light" variant="ghost">
                    Ghost Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Subtle</p>
                <HapticButton hapticFeedback="light" variant="subtle">
                    Subtle Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Outline</p>
                <HapticButton hapticFeedback="medium" variant="outline">
                    Outline Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Destructive</p>
                <HapticButton hapticFeedback="error" variant="destructive">
                    Destructive Button
                </HapticButton>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    name: 'Todos los Tamaños',
    render: () => (
        <div className="flex items-center gap-4">
            <HapticButton hapticFeedback="light" size="sm">
                Small
            </HapticButton>
            <HapticButton hapticFeedback="medium" size="md">
                Medium
            </HapticButton>
            <HapticButton hapticFeedback="heavy" size="lg">
                Large
            </HapticButton>
        </div>
    ),
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const ActionButtons: Story = {
    name: '🎯 Caso de Uso: Botones de Acción',
    render: () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Actions</p>
                <div className="flex gap-2">
                    <HapticButton hapticFeedback="success" variant="primary" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                        Save
                    </HapticButton>
                    <HapticButton hapticFeedback="warning" variant="secondary" leftIcon={<AlertCircle className="w-4 h-4" />}>
                        Cancel
                    </HapticButton>
                    <HapticButton hapticFeedback="error" variant="destructive" leftIcon={<XCircle className="w-4 h-4" />}>
                        Delete
                    </HapticButton>
                </div>
            </div>
        </div>
    ),
};

export const FormButtons: Story = {
    name: '📝 Caso de Uso: Formularios',
    render: () => (
        <div className="space-y-4 max-w-md">
            <div className="p-4 bg-surface-secondary rounded-xl space-y-4">
                <div>
                    <label className="text-sm font-medium text-text-primary">Email</label>
                    <input 
                        type="email" 
                        className="w-full mt-1 px-3 py-2 bg-surface-primary border border-border-primary rounded-lg"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="flex gap-2">
                    <HapticButton hapticFeedback="success" variant="primary" fullWidth>
                        Submit
                    </HapticButton>
                    <HapticButton hapticFeedback="selection" variant="ghost">
                        Cancel
                    </HapticButton>
                </div>
            </div>
        </div>
    ),
};

export const MobileActions: Story = {
    name: '📱 Caso de Uso: Acciones Móviles',
    render: () => (
        <div className="space-y-4">
            <p className="text-sm text-text-secondary text-center">
                Botones optimizados para dispositivos móviles con feedback háptico
            </p>
            <div className="grid grid-cols-2 gap-2 max-w-xs">
                <HapticButton hapticFeedback="light" variant="primary" fullWidth>
                    Like
                </HapticButton>
                <HapticButton hapticFeedback="light" variant="secondary" fullWidth>
                    Share
                </HapticButton>
                <HapticButton hapticFeedback="medium" variant="ghost" fullWidth>
                    Comment
                </HapticButton>
                <HapticButton hapticFeedback="notification" variant="secondary" fullWidth>
                    Notify
                </HapticButton>
            </div>
        </div>
    ),
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        children: 'Haptic Button',
        hapticFeedback: 'medium',
        hapticOnTap: true,
        hapticOnHover: false,
        variant: 'primary',
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary mb-2">
                        Experimenta con diferentes configuraciones usando los controles
                    </p>
                    <p className="text-xs text-text-tertiary">
                        Haptic Support: {isHapticSupported() ? '✅ Available' : '❌ Not Available'}
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

