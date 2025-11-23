import type { Meta, StoryObj } from '@storybook/react';
import { DefinitionList, CompactDefinitionList } from '../components/DefinitionList';

const meta = {
    title: 'Data Display/DefinitionList',
    component: DefinitionList,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Un componente de lista de definiciones (DL) elegante al estilo Apple, perfecto para mostrar pares de término-descripción como información de perfil, especificaciones de producto, o metadatos.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'bordered', 'striped', 'compact'],
            description: 'Variante visual del componente',
        },
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'Orientación de los items',
        },
        divider: {
            control: 'boolean',
            description: 'Mostrar divisores entre items',
        },
        hoverable: {
            control: 'boolean',
            description: 'Efecto hover en los items',
        },
        density: {
            control: 'radio',
            options: ['comfortable', 'compact'],
            description: 'Densidad del espaciado',
        },
    },
} satisfies Meta<typeof DefinitionList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleUserInfo = [
    { term: 'Nombre', description: 'Juan Pérez' },
    { term: 'Email', description: 'juan.perez@example.com' },
    { term: 'Teléfono', description: '+52 55 1234 5678' },
    { term: 'Ciudad', description: 'Ciudad de México' },
    { term: 'Rol', description: 'Desarrollador Senior' },
];

const sampleProductSpecs = [
    { term: 'Modelo', description: 'MacBook Pro 16"' },
    { term: 'Procesador', description: 'Apple M3 Max con CPU de 16 núcleos' },
    { term: 'Memoria', description: '64 GB de memoria unificada' },
    { term: 'Almacenamiento', description: '1 TB SSD' },
    { term: 'Pantalla', description: 'Liquid Retina XDR de 16.2 pulgadas' },
    { term: 'Peso', description: '2.15 kg' },
];

const sampleMetadata = [
    { term: 'Creado', description: '23 de noviembre de 2025' },
    { term: 'Modificado', description: 'Hace 2 horas' },
    { term: 'Autor', description: 'Ana García' },
    { term: 'Estado', description: 'Publicado' },
];

/* ========================================
   STORIES - VARIANTS
   ======================================== */

export const Default: Story = {
    args: {
        items: sampleUserInfo,
        variant: 'default',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

export const Bordered: Story = {
    args: {
        items: sampleProductSpecs,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

export const Striped: Story = {
    args: {
        items: sampleUserInfo,
        variant: 'striped',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

export const WithDividers: Story = {
    args: {
        items: sampleProductSpecs,
        variant: 'default',
        orientation: 'horizontal',
        divider: true,
        hoverable: false,
        density: 'comfortable',
    },
};

export const Hoverable: Story = {
    args: {
        items: sampleUserInfo,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'comfortable',
    },
};

/* ========================================
   STORIES - ORIENTATIONS
   ======================================== */

export const VerticalOrientation: Story = {
    args: {
        items: sampleMetadata,
        variant: 'bordered',
        orientation: 'vertical',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

export const HorizontalOrientation: Story = {
    args: {
        items: sampleMetadata,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

/* ========================================
   STORIES - DENSITY
   ======================================== */

export const CompactDensity: Story = {
    args: {
        items: sampleUserInfo,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'compact',
    },
};

export const ComfortableDensity: Story = {
    args: {
        items: sampleUserInfo,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: false,
        density: 'comfortable',
    },
};

/* ========================================
   STORIES - COMBINATIONS
   ======================================== */

export const BorderedStripedHoverable: Story = {
    args: {
        items: sampleProductSpecs,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
};

export const VerticalWithDividers: Story = {
    args: {
        items: sampleMetadata,
        variant: 'default',
        orientation: 'vertical',
        divider: true,
        hoverable: true,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const UserProfile: Story = {
    name: '📱 Caso de Uso: Perfil de Usuario',
    args: {
        items: [
            { term: 'Nombre completo', description: 'Ana María González' },
            { term: 'Correo electrónico', description: 'ana.gonzalez@empresa.com' },
            { term: 'Teléfono', description: '+52 33 9876 5432' },
            { term: 'Departamento', description: 'Ingeniería de Software' },
            { term: 'Ubicación', description: 'Guadalajara, Jalisco' },
            { term: 'Fecha de ingreso', description: '15 de marzo de 2023' },
        ],
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
};

export const ProductSpecifications: Story = {
    name: '🖥️ Caso de Uso: Especificaciones de Producto',
    args: {
        items: [
            { term: 'Modelo', description: 'iPhone 15 Pro Max' },
            { term: 'Pantalla', description: 'Super Retina XDR de 6.7"' },
            { term: 'Chip', description: 'A17 Pro con GPU de 6 núcleos' },
            { term: 'Cámaras', description: 'Sistema de cámaras Pro de 48MP' },
            { term: 'Batería', description: 'Hasta 29 horas de reproducción de video' },
            { term: 'Almacenamiento', description: '256GB, 512GB o 1TB' },
            { term: 'Conectividad', description: '5G, Wi-Fi 6E, Bluetooth 5.3' },
            { term: 'Resistencia', description: 'Resistencia al agua IP68' },
        ],
        variant: 'striped',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-3xl">
                <Story />
            </div>
        ),
    ],
};

export const DocumentMetadata: Story = {
    name: '📄 Caso de Uso: Metadatos de Documento',
    args: {
        items: [
            { term: 'Título', description: 'Propuesta de Proyecto Q4 2025' },
            { term: 'Autor', description: 'Carlos Ramírez' },
            { term: 'Fecha de creación', description: '1 de noviembre de 2025' },
            { term: 'Última modificación', description: '23 de noviembre de 2025, 14:35' },
            { term: 'Versión', description: '3.2' },
            { term: 'Estado', description: 'En revisión' },
            { term: 'Colaboradores', description: 'María López, Juan Torres, Ana Martínez' },
        ],
        variant: 'default',
        orientation: 'vertical',
        divider: true,
        hoverable: false,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-xl">
                <Story />
            </div>
        ),
    ],
};

export const CompactSystemInfo: Story = {
    name: '⚙️ Caso de Uso: Info del Sistema (Compacto)',
    args: {
        items: [
            { term: 'Sistema operativo', description: 'macOS Sonoma 14.1' },
            { term: 'Kernel', description: 'Darwin 23.1.0' },
            { term: 'Arquitectura', description: 'arm64' },
            { term: 'CPU', description: 'Apple M3 Pro (12 cores)' },
            { term: 'RAM', description: '32 GB LPDDR5' },
            { term: 'GPU', description: 'Apple M3 Pro GPU (18 cores)' },
        ],
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'compact',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
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
        items: sampleProductSpecs,
        variant: 'bordered',
        orientation: 'horizontal',
        divider: false,
        hoverable: true,
        density: 'comfortable',
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-3xl">
                <Story />
            </div>
        ),
    ],
};
