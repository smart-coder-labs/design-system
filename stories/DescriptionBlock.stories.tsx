import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionBlock, DescriptionHighlight } from '../components/DescriptionBlock';
import type { DescriptionMetadataItem, DescriptionHighlightProps } from '../components/DescriptionBlock';
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

const baseHighlights: DescriptionHighlightProps[] = [
    {
        label: 'Engagement 7d',
        value: '87.2%',
        change: '+5.3 pts',
        trend: 'up',
        helper: 'Incremento sostenido tras el lanzamiento de la nueva guía interactiva.',
    },
    {
        label: 'Usuarios Beta',
        value: '18,420',
        change: '+1,280',
        trend: 'up',
        helper: 'Adopción liderada por equipos Enterprise en EMEA.',
    },
];

const splitHighlights: DescriptionHighlightProps[] = [
    {
        label: 'Tiempo de resolución',
        value: '3.4 h',
        change: '-32 min',
        trend: 'down',
        helper: 'Reducción gracias a la automatización de playbooks críticos.',
    },
    {
        label: 'Satisfacción NPS',
        value: '+68',
        change: '+4 pts',
        trend: 'up',
        helper: 'Clientes enterprise priorizan la claridad del nuevo onboarding.',
    },
    {
        label: 'Riesgo operativo',
        value: 'Bajo',
        change: '·',
        trend: 'neutral',
        helper: 'Sin incidentes abiertos, checklist 100% completo.',
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
    tags: ['autodocs'],
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
        highlights: baseHighlights,
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
        highlights: baseHighlights,
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
        highlights: splitHighlights,
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
        highlights: baseHighlights,
        media: (
            <div className="aspect-video bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/30 p-6 flex items-end">
                <div className="text-white/90">
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
   COMPOSABLE HIGHLIGHTS
   ======================================== */

export const StandaloneHighlights: Story = {
    args: {
        title: 'Standalone',
    },
    render: () => (
        <div className="grid gap-4 md:grid-cols-3">
            <DescriptionHighlight
                label="Velocidad de adopción"
                value="4.1 semanas"
                change="-1.3 semanas"
                trend="down"
                helper="Tiempo promedio desde kickoff a rollout estable."
            />
            <DescriptionHighlight
                label="Playbooks certificados"
                value="27"
                change="+5"
                trend="up"
                helper="Incluye accesibilidad avanzada y MDM secure shell."
            />
            <DescriptionHighlight
                label="Feedback positivo"
                value="94%"
                trend="up"
                helper="NPS > 65 en 9 de 11 regiones."
                badge={<Sparkles className="w-3.5 h-3.5" />}
            />
        </div>
    ),
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
        highlights: [
            { label: 'Adopción pilotos', value: '76%', change: '+12%', trend: 'up' },
            { label: 'SLA cumplidos', value: '99.4%', change: '+0.6%', trend: 'up' },
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
        highlights: [
            { label: 'Tiempo de lectura', value: '21 min', trend: 'neutral', helper: 'Promedio en cohortes de liderazgo.' },
            { label: 'Feedback premium', value: '4.8/5', change: '+0.4', trend: 'up' },
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
        highlights: [
            { label: 'Errores p95', value: '0.18%', change: '-0.02%', trend: 'down' },
            { label: 'Capacidad en uso', value: '68%', change: '+3%', trend: 'up' },
            { label: 'Alertas abiertas', value: '1', change: '-2', trend: 'down' },
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
