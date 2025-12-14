import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation, type BottomNavigationItem } from '../components/BottomNavigation';
import {
    Home,
    Search,
    Bell,
    User,
    Settings,
    Mail,
    Calendar,
    MessageSquare,
    Heart,
    ShoppingBag,
    Camera,
    Music,
    BookOpen,
    MapPin,
} from 'lucide-react';

const meta = {
    title: 'Navigation/BottomNavigation',
    component: BottomNavigation,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Navegación inferior estilo móvil con iconos y etiquetas. Perfecto para aplicaciones móviles y web responsive. Incluye soporte para badges, estados activos y animaciones suaves.',
            },
        },
    },
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'glass', 'elevated'],
            description: 'Variante visual del componente',
        },
        showLabels: {
            control: 'boolean',
            description: 'Mostrar etiquetas de texto debajo de los iconos',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del componente',
        },
    },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   SAMPLE DATA
   ======================================== */

const basicItems: BottomNavigationItem[] = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5 },
    { id: 'profile', label: 'Profile', icon: User },
];

const socialMediaItems: BottomNavigationItem[] = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'search', label: 'Explore', icon: Search },
    { id: 'create', label: 'Create', icon: Camera },
    { id: 'activity', label: 'Activity', icon: Heart, badge: 12 },
    { id: 'profile', label: 'Profile', icon: User },
];

const ecommerceItems: BottomNavigationItem[] = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'cart', label: 'Cart', icon: ShoppingBag, badge: 3 },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
];

const messagingItems: BottomNavigationItem[] = [
    { id: 'chats', label: 'Chats', icon: MessageSquare, active: true, badge: 8 },
    { id: 'calls', label: 'Calls', icon: Bell },
    { id: 'contacts', label: 'Contacts', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
];

const mediaItems: BottomNavigationItem[] = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: User },
];

/* ========================================
   STORIES - BASIC
   ======================================== */

export const Default: Story = {
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Bottom Navigation</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación inferior con iconos y etiquetas. Perfecto para aplicaciones móviles.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-text-primary mb-2">Características</h2>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Iconos con etiquetas</li>
                            <li>• Estados activos</li>
                            <li>• Soporte para badges</li>
                            <li>• Animaciones suaves</li>
                            <li>• Responsive</li>
                        </ul>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const WithoutLabels: Story = {
    name: 'Sin Etiquetas',
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: false,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-20">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Sin Etiquetas</h1>
                    <p className="text-text-secondary">
                        Versión compacta sin etiquetas de texto, solo iconos.
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Glass: Story = {
    name: 'Variante Glass',
    args: {
        items: basicItems,
        variant: 'glass',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-24">
                <div className="max-w-md mx-auto p-6 text-white">
                    <h1 className="text-2xl font-bold mb-4">Glass Effect</h1>
                    <p className="text-white/90">
                        Variante con efecto glassmorphism y backdrop blur.
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Elevated: Story = {
    name: 'Variante Elevated',
    args: {
        items: basicItems,
        variant: 'elevated',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Elevated</h1>
                    <p className="text-text-secondary">
                        Variante con sombra elevada para mayor prominencia.
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - SIZES
   ======================================== */

export const Small: Story = {
    name: 'Tamaño Pequeño',
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: true,
        size: 'sm',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-20">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Pequeño</h1>
                    <p className="text-text-secondary">Versión compacta para espacios reducidos.</p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Medium: Story = {
    name: 'Tamaño Mediano',
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Mediano</h1>
                    <p className="text-text-secondary">Tamaño estándar recomendado.</p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Large: Story = {
    name: 'Tamaño Grande',
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: true,
        size: 'lg',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-28">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Grande</h1>
                    <p className="text-text-secondary">Versión más grande para mejor accesibilidad.</p>
                </div>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const SocialMedia: Story = {
    name: '📱 Caso de Uso: Red Social',
    args: {
        items: socialMediaItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Red Social</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación típica de una aplicación de redes sociales con secciones principales.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Feed de contenido</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Ecommerce: Story = {
    name: '🛒 Caso de Uso: E-commerce',
    args: {
        items: ecommerceItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">E-commerce</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación para una aplicación de compras con carrito y favoritos.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Catálogo de productos</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Messaging: Story = {
    name: '💬 Caso de Uso: Mensajería',
    args: {
        items: messagingItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Mensajería</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación para una aplicación de mensajería con chats, llamadas y contactos.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Lista de conversaciones</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const MediaApp: Story = {
    name: '🎵 Caso de Uso: App de Medios',
    args: {
        items: mediaItems,
        variant: 'glass',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 pb-24">
                <div className="max-w-md mx-auto p-6 text-white">
                    <h1 className="text-2xl font-bold mb-4">App de Medios</h1>
                    <p className="text-white/90 mb-8">
                        Navegación para una aplicación de medios con música, libros y ubicación.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="space-y-4">
                            <div className="h-48 bg-white/20 rounded-lg flex items-center justify-center">
                                <span className="text-white/80">Contenido multimedia</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - INTERACTIVE
   ======================================== */

export const Interactive: Story = {
    args: {
        items: [
            { id: 'home', label: 'Home', icon: Home, active: true },
            { id: 'search', label: 'Search', icon: Search, active: false },
            { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5, active: false },
            { id: 'profile', label: 'Profile', icon: User, active: false },
        ],
    },
    name: '🔄 Interactivo',
    render: () => {
        const [activeId, setActiveId] = useState('home');

        const items: BottomNavigationItem[] = [
            { id: 'home', label: 'Home', icon: Home, active: activeId === 'home' },
            { id: 'search', label: 'Search', icon: Search, active: activeId === 'search' },
            { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5, active: activeId === 'notifications' },
            { id: 'profile', label: 'Profile', icon: User, active: activeId === 'profile' },
        ];

        const handleItemClick = (item: BottomNavigationItem) => {
            setActiveId(item.id);
            console.log('Clicked:', item.label);
        };

        return (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Interactivo</h1>
                    <p className="text-text-secondary mb-8">
                        Haz clic en los elementos de navegación para cambiar el estado activo.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <p className="text-sm text-text-secondary mb-4">
                            Estado activo: <span className="font-semibold text-text-primary">{activeId}</span>
                        </p>
                        <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                            <span className="text-text-tertiary">Contenido de {activeId}</span>
                        </div>
                    </div>
                </div>
                <BottomNavigation items={items} onItemClick={handleItemClick} />
            </div>
        );
    },
};

export const WithManyBadges: Story = {
    name: '🔔 Con Múltiples Badges',
    args: {
        items: [
            { id: 'home', label: 'Home', icon: Home, active: true },
            { id: 'mail', label: 'Mail', icon: Mail, badge: 12 },
            { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 99 },
            { id: 'calendar', label: 'Calendar', icon: Calendar, badge: 3 },
            { id: 'notifications', label: 'Notifications', icon: Bell, badge: 150 },
        ],
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Con Múltiples Badges</h1>
                    <p className="text-text-secondary">
                        Ejemplo con diferentes tipos de badges, incluyendo números grandes que se muestran como "99+".
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const DisabledItems: Story = {
    name: '🚫 Con Elementos Deshabilitados',
    args: {
        items: [
            { id: 'home', label: 'Home', icon: Home, active: true },
            { id: 'search', label: 'Search', icon: Search, disabled: true },
            { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5 },
            { id: 'profile', label: 'Profile', icon: User, disabled: true },
        ],
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Elementos Deshabilitados</h1>
                    <p className="text-text-secondary">
                        Algunos elementos pueden estar deshabilitados y no responden a interacciones.
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        items: basicItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Playground</h1>
                    <p className="text-text-secondary">
                        Experimenta con diferentes configuraciones usando los controles.
                    </p>
                </div>
                <Story />
            </div>
        ),
    ],
};

