import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GestureCard } from '../components/ui/GestureCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const meta = {
    title: 'Surfaces/GestureCard',
    component: GestureCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Card con efecto 3D estilo VisionOS que responde a gestos del mouse. El card se inclina y rota siguiendo el movimiento del cursor, creando una experiencia inmersiva.',
            },
        },
    },
    tags: [],
    argTypes: {
        intensity: {
            control: { type: 'number', min: 5, max: 30, step: 1 },
            description: 'Intensidad de la rotación 3D',
        },
        perspective: {
            control: { type: 'number', min: 500, max: 2000, step: 100 },
            description: 'Perspectiva 3D del contenedor',
        },
        glowEffect: {
            control: 'boolean',
            description: 'Mostrar efecto de brillo',
        },
    },
} satisfies Meta<typeof GestureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        intensity: 20,
        perspective: 1000,
        glowEffect: true,
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Gesture Card</h3>
                <p className="text-text-secondary">Hover and tilt me!</p>
            </div>
        ),
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args} />
        </div>
    ),
};

export const HighIntensity: Story = {
    name: 'Alta Intensidad',
    args: {
        intensity: 40,
        perspective: 800,
        glowEffect: true,
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">High Intensity</h3>
                <p className="text-text-secondary">Stronger tilt effect</p>
            </div>
        ),
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args} />
        </div>
    ),
};

export const NoGlow: Story = {
    name: 'Sin Resplandor',
    args: {
        intensity: 20,
        perspective: 1000,
        glowEffect: false,
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">No Glow</h3>
                <p className="text-text-secondary">Just tilt, no shine</p>
            </div>
        ),
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args} />
        </div>
    ),
};

export const CustomColor: Story = {
    name: 'Color Personalizado',
    args: {
        intensity: 20,
        perspective: 1000,
        glowEffect: true,
        glowColor: 'rgba(59, 130, 246, 0.5)', // Blue glow
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Blue Glow</h3>
                <p className="text-text-secondary">Custom glow color</p>
            </div>
        ),
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args} />
        </div>
    ),
};

export const WithContent: Story = {
    name: 'Con Contenido Completo',
    args: {
        intensity: 15,
        perspective: 1000,
        glowEffect: true,
        children: <></>
    },
    render: (args) => (
        <div className="w-96">
            <GestureCard {...args}>
                <CardContent>
                    <CardHeader>
                        <CardTitle>Product Card</CardTitle>
                        <CardDescription>Premium Product</CardDescription>
                    </CardHeader>
                    <div className="h-48 bg-surface-secondary rounded-xl mb-4 flex items-center justify-center">
                        <span className="text-text-tertiary">Image Preview</span>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                        This is a product description that demonstrates the gesture card with full content.
                    </p>
                    <div className="flex gap-2">
                        <Button variant="primary">Buy Now</Button>
                        <Button variant="ghost">Learn More</Button>
                    </div>
                </CardContent>
            </GestureCard>
        </div>
    ),
};

export const MultipleCards: Story = {
    name: 'Múltiples Cards',
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[1, 2, 3].map((i) => (
                <GestureCard key={i} intensity={12} glowEffect={true}>
                    <CardContent>
                        <CardTitle>Card {i}</CardTitle>
                        <CardDescription>
                            Mueve el mouse sobre cada card
                        </CardDescription>
                    </CardContent>
                </GestureCard>
            ))}
        </div>
    ),
    args: {
        children: null, // Dummy args to satisfy type if needed, but render overrides
    }
};
