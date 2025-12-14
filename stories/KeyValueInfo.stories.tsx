import type { Meta, StoryObj } from '@storybook/react';
import { KeyValueInfo, CompactKeyValueInfo, InlineKeyValueInfo } from '../components/KeyValueInfo';
import { Badge } from '../components/Badge';
import { User, Mail, Phone, MapPin, Calendar, Clock, Package, CreditCard, Hash, Server } from 'lucide-react';

const meta = {
    title: 'Data Display/KeyValueInfo',
    component: KeyValueInfo,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Un componente elegante para mostrar información clave-valor al estilo Apple. Ideal para perfiles, especificaciones, metadatos y datos estructurados.',
            },
        },
    },
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'card', 'inline', 'grid'],
            description: 'Variante visual del componente',
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del texto y espaciado',
        },
        columns: {
            control: 'select',
            options: [1, 2, 3, 4],
            description: 'Número de columnas (solo para variant="grid")',
        },
        hoverable: {
            control: 'boolean',
            description: 'Efecto hover en los items',
        },
        divider: {
            control: 'boolean',
            description: 'Mostrar divisores entre items (variant="card")',
        },
    },
} satisfies Meta<typeof KeyValueInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleUserData = [
    { key: 'Nombre', value: 'Ana García Martínez' },
    { key: 'Email', value: 'ana.garcia@example.com', copyable: true },
    { key: 'Teléfono', value: '+52 33 1234 5678', copyable: true },
    { key: 'Ciudad', value: 'Guadalajara, Jalisco' },
];

const sampleUserDataWithIcons = [
    { key: 'Nombre', value: 'Ana García Martínez', icon: <User className="w-4 h-4" /> },
    { key: 'Email', value: 'ana.garcia@example.com', icon: <Mail className="w-4 h-4" />, copyable: true },
    { key: 'Teléfono', value: '+52 33 1234 5678', icon: <Phone className="w-4 h-4" />, copyable: true },
    { key: 'Ciudad', value: 'Guadalajara, Jalisco', icon: <MapPin className="w-4 h-4" /> },
];

const sampleOrderData = [
    { 
        key: 'Pedido', 
        value: '#ORD-2025-1234', 
        badge: <Badge variant="success" size="sm">Entregado</Badge> 
    },
    { key: 'Fecha', value: '23 de noviembre, 2025' },
    { key: 'Total', value: '$1,299.00 MXN' },
    { key: 'Método de pago', value: 'Visa •••• 4242' },
];

const sampleSystemInfo = [
    { key: 'CPU', value: 'Apple M3 Max', icon: <Server className="w-4 h-4" /> },
    { key: 'Memoria', value: '64 GB', icon: <Hash className="w-4 h-4" /> },
    { key: 'Almacenamiento', value: '1 TB SSD', icon: <Package className="w-4 h-4" /> },
    { key: 'Sistema', value: 'macOS Sonoma 14.1', icon: <Server className="w-4 h-4" /> },
];

const sampleMetadata = [
    { key: 'Creado', value: 'Hace 3 días', icon: <Calendar className="w-4 h-4" /> },
    { key: 'Modificado', value: 'Hace 2 horas', icon: <Clock className="w-4 h-4" /> },
    { key: 'Autor', value: 'Carlos Ramírez', icon: <User className="w-4 h-4" /> },
    { 
        key: 'Estado', 
        value: 'Publicado', 
        badge: <Badge variant="success" size="sm" dot>Activo</Badge> 
    },
];

/* ========================================
   STORIES - VARIANTS
   ======================================== */

export const Default: Story = {
    args: {
        items: sampleUserData,
        variant: 'default',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: false,
    },
};

export const Card: Story = {
    args: {
        items: sampleUserDataWithIcons,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const CardWithDividers: Story = {
    args: {
        items: sampleOrderData,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const CardHoverable: Story = {
    args: {
        items: sampleUserDataWithIcons,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: true,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const Inline: Story = {
    args: {
        items: [
            { key: 'Version', value: '3.2.1' },
            { key: 'Build', value: '1234' },
            { key: 'Environment', value: 'Production' },
        ],
        variant: 'inline',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
};

export const Grid2Columns: Story = {
    args: {
        items: sampleSystemInfo,
        variant: 'grid',
        size: 'md',
        columns: 2,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
};

export const Grid3Columns: Story = {
    args: {
        items: [
            { key: 'CPU', value: 'M3 Max', icon: <Server className="w-4 h-4" /> },
            { key: 'RAM', value: '64 GB', icon: <Hash className="w-4 h-4" /> },
            { key: 'Storage', value: '1 TB', icon: <Package className="w-4 h-4" /> },
            { key: 'GPU', value: '40 cores', icon: <Server className="w-4 h-4" /> },
            { key: 'Display', value: '16.2"', icon: <Package className="w-4 h-4" /> },
            { key: 'Weight', value: '2.15 kg', icon: <Hash className="w-4 h-4" /> },
        ],
        variant: 'grid',
        size: 'md',
        columns: 3,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-4xl">
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
        items: sampleSystemInfo,
        variant: 'card',
        size: 'sm',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const MediumSize: Story = {
    args: {
        items: sampleSystemInfo,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const LargeSize: Story = {
    args: {
        items: sampleSystemInfo,
        variant: 'card',
        size: 'lg',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-xl">
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
        items: sampleUserDataWithIcons,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithBadges: Story = {
    name: '🏷️ Con Badges',
    args: {
        items: sampleMetadata,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const Copyable: Story = {
    name: '📋 Copiable',
    args: {
        items: [
            { key: 'API Key', value: 'sk_live_51H8xYZ...abc123', copyable: true },
            { key: 'Secret', value: 'whsec_def456...xyz789', copyable: true },
            { key: 'Webhook URL', value: 'https://api.example.com/webhooks', copyable: true },
        ],
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: true,
        divider: true,
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
    name: '👤 Caso de Uso: Perfil de Usuario',
    args: {
        items: [
            { 
                key: 'Nombre completo', 
                value: 'María López Hernández',
                icon: <User className="w-4 h-4" />
            },
            { 
                key: 'Correo electrónico', 
                value: 'maria.lopez@empresa.mx',
                icon: <Mail className="w-4 h-4" />,
                copyable: true
            },
            { 
                key: 'Teléfono', 
                value: '+52 55 9876 5432',
                icon: <Phone className="w-4 h-4" />,
                copyable: true
            },
            { 
                key: 'Ubicación', 
                value: 'Ciudad de México, México',
                icon: <MapPin className="w-4 h-4" />
            },
            { 
                key: 'Miembro desde', 
                value: '15 de marzo, 2023',
                icon: <Calendar className="w-4 h-4" />
            },
            { 
                key: 'Rol', 
                value: 'Desarrollador Senior',
                badge: <Badge variant="primary" size="sm">Premium</Badge>
            },
        ],
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: true,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const OrderDetails: Story = {
    name: '📦 Caso de Uso: Detalles de Pedido',
    args: {
        items: [
            { 
                key: 'Número de pedido', 
                value: '#ORD-2025-1234',
                badge: <Badge variant="success" size="sm">Entregado</Badge>
            },
            { 
                key: 'Fecha de pedido', 
                value: '20 de noviembre, 2025',
                icon: <Calendar className="w-4 h-4" />
            },
            { 
                key: 'Fecha de entrega', 
                value: '23 de noviembre, 2025',
                icon: <Calendar className="w-4 h-4" />
            },
            { 
                key: 'Total', 
                value: '$2,499.00 MXN',
                icon: <CreditCard className="w-4 h-4" />
            },
            { 
                key: 'Método de pago', 
                value: 'Mastercard •••• 5678',
                icon: <CreditCard className="w-4 h-4" />
            },
            { 
                key: 'Dirección de envío', 
                value: 'Av. Reforma 123, CDMX',
                icon: <MapPin className="w-4 h-4" />
            },
        ],
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const SystemSpecifications: Story = {
    name: '💻 Caso de Uso: Especificaciones del Sistema',
    args: {
        items: [
            { key: 'Procesador', value: 'Apple M3 Max (16 núcleos)', icon: <Server className="w-4 h-4" /> },
            { key: 'GPU', value: 'Apple M3 Max GPU (40 núcleos)', icon: <Server className="w-4 h-4" /> },
            { key: 'Memoria RAM', value: '64 GB Unificada', icon: <Hash className="w-4 h-4" /> },
            { key: 'Almacenamiento', value: '1 TB SSD NVMe', icon: <Package className="w-4 h-4" /> },
            { key: 'Sistema operativo', value: 'macOS Sonoma 14.1', icon: <Server className="w-4 h-4" /> },
            { key: 'Arquitectura', value: 'arm64 (Apple Silicon)', icon: <Server className="w-4 h-4" /> },
        ],
        variant: 'grid',
        size: 'md',
        columns: 2,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-3xl">
                <Story />
            </div>
        ),
    ],
};

export const APICredentials: Story = {
    name: '🔑 Caso de Uso: Credenciales API',
    args: {
        items: [
            { 
                key: 'API Key', 
                value: 'sk_live_51H8xYZ2eZvKYlo2C...abc123',
                copyable: true,
                badge: <Badge variant="success" size="sm" dot>Activa</Badge>
            },
            { 
                key: 'Secret Key', 
                value: 'whsec_def456ghi789jkl012...xyz789',
                copyable: true,
                badge: <Badge variant="warning" size="sm">Sensible</Badge>
            },
            { 
                key: 'Webhook URL', 
                value: 'https://api.example.com/webhooks/stripe',
                copyable: true
            },
            { 
                key: 'Environment', 
                value: 'Production',
                badge: <Badge variant="error" size="sm">Live</Badge>
            },
            { 
                key: 'Creada', 
                value: '15 de octubre, 2025',
                icon: <Calendar className="w-4 h-4" />
            },
            { 
                key: 'Último uso', 
                value: 'Hace 5 minutos',
                icon: <Clock className="w-4 h-4" />
            },
        ],
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: true,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
};

export const CompactVersion: Story = {
    name: '📏 Versión Compacta',
    args: {
        items: sampleSystemInfo,
        variant: 'card',
        size: 'sm',
        columns: 1,
        hoverable: false,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const InlineVersion: Story = {
    name: '➡️ Versión Inline',
    args: {
        items: [
            { key: 'Version', value: '3.2.1' },
            { key: 'Build', value: '1234' },
            { key: 'Env', value: 'Production' },
            { key: 'Region', value: 'us-west-2' },
        ],
        variant: 'inline',
        size: 'md',
        columns: 1,
        hoverable: false,
        divider: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
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
        items: sampleUserDataWithIcons,
        variant: 'card',
        size: 'md',
        columns: 1,
        hoverable: true,
        divider: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};
