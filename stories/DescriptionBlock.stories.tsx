import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionBlock } from '../components/ui/DescriptionBlock';
import type { DescriptionMetadataItem, DescriptionHighlightProps } from '../components/ui/DescriptionBlock';
import { Calendar, MapPin, Users, ShieldCheck, Globe, Clock, Activity, Sparkles, BookmarkCheck } from 'lucide-react';

const baseMetadata: DescriptionMetadataItem[] = [
    {
        label: 'Fecha de lanzamiento',
        value: '15 Feb 2026',
        icon: <Calendar className="w-4 h-4" />,
        hint: 'Semana 7 del roadmap anual',
    },
    {
        label: 'Ubicación principal',
        value: 'Cupertino · Presencial / Híbrido',
        icon: <MapPin className="w-4 h-4" />,
        hint: 'Campus Apple Park',
    },
    {
        label: 'Equipo responsable',
        value: 'VisionOS Experience',
        icon: <Users className="w-4 h-4" />,
        hint: 'Design + Engineering + Content',
    },
    {
        label: 'Certificación',
        value: 'Security Level 3',
        icon: <ShieldCheck className="w-4 h-4" />,
        hint: 'Auditoría completada el 10 Feb',
    },
];

const meta = {
    title: 'Data Display/DescriptionBlock',
    component: DescriptionBlock,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'light',
        },
    },
    tags: [],
} satisfies Meta<typeof DescriptionBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASIC VARIANTS
   ======================================== */

export const MinimalArgs: Story = {
    args: {
        title: 'Descripción básica',
        subtitle: 'Variante minimalista sin metadata ni highlights',
        description:
            'Este bloque de descripción utiliza la variante minimalista, enfocándose únicamente en el título, subtítulo y descripción sin elementos adicionales.',
    },
};

export const DefaultOverview: Story = {
    args: {
        eyebrow: 'Initiative',
        title: 'Spatial Collaboration Suite',
        subtitle: 'A bordo del plan VisionOS 2.3',
        description:
            'Nuevo módulo espacial que sincroniza pizarras 3D, notas persistentes y playback contextual para equipos distribuidos.',
        badges: ['Phase 2', 'Priority: Alta'],
        metadata: baseMetadata,
        variant: 'default',
    },
};

export const SoftPanel: Story = {
    args: {
        eyebrow: 'Programa',
        title: 'Apple Creative Labs',
        subtitle: 'Cohorte Primavera 2026',
        description:
            'Laboratorio enfocado en experiencias multisensoriales y prototipos Vision Pro. Incluye mentoría semanal y sesiones con equipo de human interface.',
        badges: ['Cupos limitados', 'Mentoría Senior'],
        metadata: baseMetadata.slice(0, 2),
        variant: 'soft',
    },
};

export const SplitLayout: Story = {
    args: {
        eyebrow: 'Operational Briefing',
        title: 'Incident Response · Cluster Atlas',
        subtitle: 'Cobertura global · 11 regiones activas',
        description:
            'Panel ejecutivo con métricas de fiabilidad, responsables on-call y últimas decisiones tomadas por el comité de continuidad.',
        metadata: baseMetadata,
        layout: 'split',
        variant: 'panel',
        footer: (
            <div className="space-y-1">
                <p className="font-semibold text-text-primary">Estado</p>
                <p className="text-text-secondary">War room desactivado · Escalado al runbook estándar.</p>
            </div>
        ),
    },
};

export const WithMedia: Story = {
    args: {
        eyebrow: 'Story',
        title: 'VisionOS Immersive Briefing',
        subtitle: 'Módulos narrativos + spatial audio',
        description:
            'Experiencia de aprendizaje diseñada para liderazgos que necesitan entender nuevas dinámicas espaciales y herramientas colaborativas.',
        metadata: baseMetadata,
        media: (
            <div className="aspect-video bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/30 p-6 flex items-end">
                <div className="text-black/90">
                    <p className="text-sm uppercase tracking-[0.4em]">VisionOS</p>
                    <p className="text-2xl font-semibold">Immersive Playbook</p>
                </div>
            </div>
        ),
        variant: 'glass',
        layout: 'stacked',
    },
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const EnterpriseRollout: Story = {
    name: '🌍 Caso de Uso: Plan de Rollout Enterprise',
    args: {
        eyebrow: 'Deployment',
        title: 'Programa Modular LATAM',
        subtitle: 'Fase 3 · Integraciones con infraestructura local',
        description:
            'Estado resumido del despliegue para partners estratégicos en LATAM, incluyendo hitos legales y adopción beta.',
        badges: ['Legal listo', 'Soporte 24/7', 'Versión 2.1'],
        metadata: [
            { label: 'Responsable', value: 'Carla Dominguez', icon: <Users className="w-4 h-4" /> },
            { label: 'Próximo hito', value: '28 Feb · Consejo regional', icon: <Calendar className="w-4 h-4" /> },
            { label: 'Sedes', value: 'México, Colombia, Chile', icon: <Globe className="w-4 h-4" /> },
        ],
        layout: 'split',
        variant: 'default',
        footer: 'Trackeado en tiempo real via Command Center LATAM.',
    },
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};

export const ProductNarrative: Story = {
    name: '📘 Caso de Uso: Narrative Briefing para Producto',
    args: {
        eyebrow: 'Narrative',
        title: 'Guided Learning Journey',
        subtitle: 'Bundle para Product Marketing + AI',
        description:
            'Documento vivo que alinea storytelling, métricas clave y responsables de cada capítulo de lanzamiento.',
        badges: ['Story-driven', 'Actualizado diariamente'],
        metadata: [
            { label: 'Editor principal', value: 'Noah Sterling', icon: <Users className="w-4 h-4" /> },
            { label: 'Longitud', value: '18 capítulos · 64 assets', icon: <BookmarkCheck className="w-4 h-4" /> },
            { label: 'Modo', value: 'Async · On demand', icon: <Clock className="w-4 h-4" /> },
        ],
        variant: 'glass',
        layout: 'stacked',
        footer: 'Distribución mediante Apple Briefings · versión 1.6.',
    },
};

export const OpsSnapshot: Story = {
    name: '🛠️ Caso de Uso: Snapshot Operativo en Tiempo Real',
    args: {
        eyebrow: 'Runbook',
        title: 'Critical Maintenance Window',
        subtitle: 'Cluster Aurora · Región us-west-2',
        description:
            'Estado resumido para ejecutivos durante ventanas críticas: responsables on-call, salud de servicios y próximos pasos.',
        badges: ['All-hands ready', 'Estado: Monitoreando'],
        metadata: [
            { label: 'On-call actual', value: 'Victor Li', icon: <Users className="w-4 h-4" /> },
            { label: 'Duración restante', value: '01:42:16', icon: <Clock className="w-4 h-4" /> },
            { label: 'Alcance', value: 'Servicios Core + Billing', icon: <Activity className="w-4 h-4" /> },
        ],
        layout: 'split',
        variant: 'panel',
        footer: 'Siguiente checkpoint automático en 15 minutos.',
    },
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};
