import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GestureCard } from '../components/GestureCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/Card';
import { Button } from '../components/Button';

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
    tags: ['autodocs'],
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
    args: {
        intensity: 15,
        perspective: 1000,
        glowEffect: true,
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args}>
                <CardContent>
                    <CardTitle>Gesture Card</CardTitle>
                    <CardDescription>
                        Mueve el mouse sobre el card para ver el efecto 3D
                    </CardDescription>
                    <p className="text-sm text-text-secondary mt-4">
                        Este card responde a los movimientos del cursor con una rotación 3D suave.
                    </p>
                </CardContent>
            </GestureCard>
        </div>
    ),
};

export const HighIntensity: Story = {
    name: 'Alta Intensidad',
    args: {
        intensity: 25,
        perspective: 1000,
        glowEffect: true,
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args}>
                <CardContent>
                    <CardTitle>High Intensity</CardTitle>
                    <CardDescription>
                        Mayor rotación 3D
                    </CardDescription>
                </CardContent>
            </GestureCard>
        </div>
    ),
};

export const WithoutGlow: Story = {
    name: 'Sin Efecto de Brillo',
    args: {
        intensity: 15,
        perspective: 1000,
        glowEffect: false,
    },
    render: (args) => (
        <div className="w-80">
            <GestureCard {...args}>
                <CardContent>
                    <CardTitle>No Glow</CardTitle>
                    <CardDescription>
                        Sin efecto de brillo
                    </CardDescription>
                </CardContent>
            </GestureCard>
        </div>
    ),
};

export const WithContent: Story = {
    name: 'Con Contenido Completo',
    args: {
        intensity: 15,
        perspective: 1000,
        glowEffect: true,
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
};

