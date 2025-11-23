import type { Meta, StoryObj } from '@storybook/react';
import { PropertyList, CompactPropertyList } from '../components/PropertyList';
import { File, Calendar, User, Hash, Server, HardDrive, Monitor, Cpu } from 'lucide-react';
import { useState } from 'react';

const meta = {
    title: 'Data Display/PropertyList',
    component: PropertyList,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Un componente al estilo macOS Property List para mostrar información estructurada en secciones colapsables. Perfecto para inspectores, paneles de configuración y detalles de archivos.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'bordered', 'inset'],
            description: 'Variante visual del componente',
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del texto y espaciado',
        },
        collapsible: {
            control: 'boolean',
            description: 'Permitir colapsar secciones',
        },
        dividers: {
            control: 'boolean',
            description: 'Mostrar divisores entre items',
        },
    },
} satisfies Meta<typeof PropertyList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFileInfo = [
    {
        id: 'general',
        title: 'General',
        items: [
            { label: 'Kind', value: 'Folder', icon: <File className="w-3.5 h-3.5" /> },
            { label: 'Size', value: '1.2 GB', icon: <HardDrive className="w-3.5 h-3.5" /> },
            { label: 'Where', value: '/Users/user/Documents', icon: <File className="w-3.5 h-3.5" /> },
            { label: 'Created', value: 'Nov 15, 2025, 10:30 AM', icon: <Calendar className="w-3.5 h-3.5" /> },
            { label: 'Modified', value: 'Nov 23, 2025, 2:45 PM', icon: <Calendar className="w-3.5 h-3.5" /> },
        ],
        defaultExpanded: true,
    },
    {
        id: 'sharing',
        title: 'Sharing & Permissions',
        items: [
            { label: 'Owner', value: 'John Doe', icon: <User className="w-3.5 h-3.5" /> },
            { label: 'Permissions', value: 'Read & Write' },
            { label: 'Shared', value: 'No' },
        ],
        defaultExpanded: false,
    },
];

const sampleSystemInfo = [
    {
        id: 'hardware',
        title: 'Hardware',
        items: [
            { label: 'Model', value: 'MacBook Pro 16"', icon: <Monitor className="w-3.5 h-3.5" /> },
            { label: 'Chip', value: 'Apple M3 Max', icon: <Cpu className="w-3.5 h-3.5" /> },
            { label: 'Memory', value: '64 GB', icon: <Server className="w-3.5 h-3.5" /> },
            { label: 'Storage', value: '1 TB SSD', icon: <HardDrive className="w-3.5 h-3.5" /> },
        ],
        defaultExpanded: true,
    },
    {
        id: 'software',
        title: 'Software',
        items: [
            { label: 'System', value: 'macOS Sonoma 14.1' },
            { label: 'Kernel', value: 'Darwin 23.1.0' },
            { label: 'Build', value: '23B74' },
        ],
        defaultExpanded: true,
    },
];

const sampleAppSettings = [
    {
        id: 'display',
        title: 'Display',
        items: [
            { label: 'Theme', value: 'Auto', editable: true },
            { label: 'Font Size', value: '14px', editable: true },
            { label: 'Line Height', value: '1.5', editable: true },
        ],
        defaultExpanded: true,
    },
    {
        id: 'editor',
        title: 'Editor',
        items: [
            { label: 'Tab Size', value: '2', editable: true },
            { label: 'Auto Save', value: 'On' },
            { label: 'Format on Save', value: 'Yes' },
        ],
        defaultExpanded: false,
    },
];

/* ========================================
   STORIES - VARIANTS
   ======================================== */

export const Default: Story = {
    args: {
        sections: sampleFileInfo,
        variant: 'default',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const Bordered: Story = {
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const Inset: Story = {
    args: {
        sections: sampleFileInfo,
        variant: 'inset',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const NonCollapsible: Story = {
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: false,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const NoDividers: Story = {
    args: {
        sections: sampleFileInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - SIZES
   ======================================== */

export const SmallSize: Story = {
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'sm',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-sm">
                <Story />
            </div>
        ),
    ],
};

export const MediumSize: Story = {
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const LargeSize: Story = {
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'lg',
        collapsible: true,
        dividers: true,
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
   STORIES - FEATURES
   ======================================== */

export const WithIcons: Story = {
    name: '🎨 Con Iconos',
    args: {
        sections: sampleFileInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const Editable: Story = {
    name: '✏️ Editable',
    args: {
        sections: sampleAppSettings,
        variant: 'bordered',
        size: 'md',
        collapsible: false,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
                <p className="text-xs text-text-tertiary mt-4 text-center">
                    Haz click en los valores para editarlos
                </p>
            </div>
        ),
    ],
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const FileInspector: Story = {
    name: '📁 Caso de Uso: Inspector de Archivo (macOS)',
    args: {
        sections: [
            {
                id: 'general',
                title: 'General',
                items: [
                    { label: 'Kind', value: 'JPEG Image', icon: <File className="w-3.5 h-3.5" /> },
                    { label: 'Size', value: '2.4 MB (2,456,789 bytes)', icon: <HardDrive className="w-3.5 h-3.5" /> },
                    { label: 'Where', value: '/Users/ana/Pictures/Vacation', icon: <File className="w-3.5 h-3.5" /> },
                    { label: 'Created', value: 'November 15, 2025 at 10:30 AM', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Modified', value: 'November 23, 2025 at 2:45 PM', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Last opened', value: 'Today at 11:20 AM', icon: <Calendar className="w-3.5 h-3.5" /> },
                ],
                defaultExpanded: true,
            },
            {
                id: 'more',
                title: 'More Info',
                items: [
                    { label: 'Dimensions', value: '4032 × 3024' },
                    { label: 'Color space', value: 'Display P3' },
                    { label: 'Color profile', value: 'Display P3' },
                    { label: 'Alpha channel', value: 'No' },
                ],
                defaultExpanded: false,
            },
            {
                id: 'permissions',
                title: 'Sharing & Permissions',
                items: [
                    { label: 'Owner', value: 'Ana García', icon: <User className="w-3.5 h-3.5" /> },
                    { label: 'Access', value: 'Read & Write' },
                    { label: 'Group', value: 'staff' },
                    { label: 'Others', value: 'Read only' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const SystemInformation: Story = {
    name: '💻 Caso de Uso: Información del Sistema',
    args: {
        sections: [
            {
                id: 'hardware',
                title: 'Hardware Overview',
                items: [
                    { label: 'Model Name', value: 'MacBook Pro', icon: <Monitor className="w-3.5 h-3.5" /> },
                    { label: 'Model Identifier', value: 'Mac15,6' },
                    { label: 'Chip', value: 'Apple M3 Max', icon: <Cpu className="w-3.5 h-3.5" /> },
                    { label: 'Total Number of Cores', value: '16 (12 performance and 4 efficiency)' },
                    { label: 'Memory', value: '64 GB', icon: <Server className="w-3.5 h-3.5" /> },
                    { label: 'Serial Number', value: 'C02YX1ABMD6M', icon: <Hash className="w-3.5 h-3.5" /> },
                ],
                defaultExpanded: true,
            },
            {
                id: 'display',
                title: 'Display',
                items: [
                    { label: 'Type', value: 'Liquid Retina XDR' },
                    { label: 'Resolution', value: '3456 × 2234 (254 PPI)' },
                    { label: 'Native Resolution', value: '3024 × 1964' },
                    { label: 'Color', value: 'P3, 1,000,000,000 colors' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'storage',
                title: 'Storage',
                items: [
                    { label: 'Capacity', value: '1 TB', icon: <HardDrive className="w-3.5 h-3.5" /> },
                    { label: 'Available', value: '412.8 GB' },
                    { label: 'Used', value: '587.2 GB' },
                    { label: 'File System', value: 'APFS' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const AppSettings: Story = {
    name: '⚙️ Caso de Uso: Configuración de App',
    args: {
        sections: [
            {
                id: 'appearance',
                title: 'Appearance',
                items: [
                    { label: 'Theme', value: 'Auto', editable: true },
                    { label: 'Color Scheme', value: 'Blue' },
                    { label: 'Font Size', value: '14px', editable: true },
                    { label: 'Line Height', value: '1.6', editable: true },
                    { label: 'Sidebar Width', value: '280px', editable: true },
                ],
                defaultExpanded: true,
            },
            {
                id: 'editor',
                title: 'Editor',
                items: [
                    { label: 'Tab Size', value: '2', editable: true },
                    { label: 'Word Wrap', value: 'On' },
                    { label: 'Auto Save', value: 'After Delay' },
                    { label: 'Format On Save', value: 'Yes' },
                    { label: 'Trim Trailing Whitespace', value: 'Yes' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'terminal',
                title: 'Terminal',
                items: [
                    { label: 'Shell', value: 'zsh' },
                    { label: 'Font Family', value: 'Menlo', editable: true },
                    { label: 'Font Size', value: '12px', editable: true },
                    { label: 'Cursor Style', value: 'Block' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const ProjectMetadata: Story = {
    name: '📦 Caso de Uso: Metadatos de Proyecto',
    args: {
        sections: [
            {
                id: 'project',
                title: 'Project Info',
                items: [
                    { label: 'Name', value: 'Design System' },
                    { label: 'Version', value: '3.2.1' },
                    { label: 'Author', value: 'Smart Coder Labs', icon: <User className="w-3.5 h-3.5" /> },
                    { label: 'License', value: 'MIT' },
                    { label: 'Repository', value: 'github.com/smart-coder-labs/ds' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'build',
                title: 'Build Info',
                items: [
                    { label: 'Build Number', value: '1234', icon: <Hash className="w-3.5 h-3.5" /> },
                    { label: 'Build Date', value: 'Nov 23, 2025', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Environment', value: 'Production' },
                    { label: 'Node Version', value: '20.10.0' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const CompactVersion: Story = {
    name: '📏 Versión Compacta',
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'sm',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-sm">
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
        sections: sampleFileInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};
