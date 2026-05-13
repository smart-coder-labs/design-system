'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../../components/ui/Card'
import { Button } from '../../../../components/ui/Button'
import { Title } from '../../../../components/ui/Title'
import Text from '../../../../components/ui/Text'
import { Badge } from '../../../../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/ui/Tabs'
import { Switch } from '../../../../components/ui/Switch'
import { Divider } from '../../../../components/ui/Divider'

const componentGroups = [
  {
    id: 'actions',
    label: 'Actions',
    components: [
      {
        name: 'Button',
        variants: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
        sizes: ['sm', 'md', 'lg'],
        description: 'Botones con spring animations, loading state y full width. Usa Framer Motion para hover scale 1.02 y tap 0.98.',
      },
      {
        name: 'ButtonWithDropdown',
        variants: ['primary', 'secondary'],
        description: 'Botón dividido con dropdown integrado. Ideal para acciones con opciones secundarias.',
      },
      {
        name: 'IconButton',
        variants: ['ghost', 'subtle'],
        sizes: ['sm', 'md'],
        description: 'Botón solo ícono, perfecto para barras de herramientas. Requiere aria-label.',
      },
      {
        name: 'SplitButton',
        description: 'Botón con acción primaria y menú de acciones secundarias en un solo control.',
      },
      {
        name: 'FAB / FABGroup',
        description: 'Floating Action Button estilo iOS con grupo expandible de acciones.',
      },
      {
        name: 'HapticButton',
        description: 'Botón con feedback háptico simulado. Ideal para mobile-first experiences.',
      },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    components: [
      {
        name: 'NavBar',
        variants: ['default', 'glass', 'transparent'],
        description: 'Barra de navegación estilo Apple. Sticky, con brand, items y separador animado.',
      },
      {
        name: 'Tabs',
        variants: ['default', 'segmented'],
        description: 'Tabs con indicador animado (layoutId) y variante segmented control iOS.',
      },
      {
        name: 'Breadcrumb',
        description: 'Navegación jerárquica con separadores y hover states.',
      },
      {
        name: 'BottomNavigation',
        description: 'Barra de navegación inferior tipo iOS con íconos y etiquetas.',
      },
      {
        name: 'Sidebar',
        description: 'Panel lateral de navegación con items expandibles y selección.',
      },
      {
        name: 'DockBar',
        description: 'Dock estilo macOS con íconos flotantes y efecto magnético al hover.',
      },
      {
        name: 'MenuBar',
        description: 'Barra de menú superior estilo macOS con dropdowns jerárquicos.',
      },
      {
        name: 'Pagination',
        description: 'Navegación de páginas con números, flechas y estado activo.',
      },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    components: [
      {
        name: 'Card',
        variants: ['elevated', 'glass', 'outlined', 'flat'],
        description: 'Tarjetas con 4 variantes. Sub-components: CardHeader, CardTitle, CardDescription, CardContent, CardFooter.',
      },
      {
        name: 'GridSystem',
        description: 'Sistema de grid responsive con Container, Row y Col (12 columnas, 6 breakpoints).',
      },
      {
        name: 'Footer',
        description: 'Footer completo con columnas, links, social icons y copyright.',
      },
      {
        name: 'SectionHeader',
        description: 'Encabezado de sección con título, subtítulo y acción opcional.',
      },
      {
        name: 'Divider',
        variants: ['solid', 'dashed', 'dotted'],
        description: 'Separador horizontal/vertical con label opcional y 3 variantes de estilo.',
      },
      {
        name: 'Spacer',
        description: 'Espaciador flexible para layouts. Acepta tamaño y axis (horizontal/vertical).',
      },
      {
        name: 'Panel',
        description: 'Panel contenedor con header, body y footer. Ideal para secciones de dashboard.',
      },
      {
        name: 'SplitView',
        description: 'Layout de vista dividida con panel izquierdo ajustable y contenido principal.',
      },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',
    components: [
      {
        name: 'Input',
        variants: ['default', 'error'],
        description: 'Input con íconos left/right, label flotante, estados de error y 3 tamaños.',
      },
      {
        name: 'Textarea',
        description: 'Área de texto con resize configurable, caracteres restantes y auto-expand.',
      },
      {
        name: 'Select',
        description: 'Select nativo estilizado con placeholder y estados disabled/error.',
      },
      {
        name: 'Combobox',
        description: 'Autocomplete con búsqueda inline y teclado. Usa Radix UI Popover.',
      },
      {
        name: 'Switch',
        sizes: ['sm', 'md', 'lg'],
        description: 'Toggle iOS con spring animation. Incluye label y description.',
      },
      {
        name: 'Checkbox',
        description: 'Checkbox animado con label y checked/indeterminate states.',
      },
      {
        name: 'RadioGroup',
        description: 'Grupo de radios con animación y focus visible. Orientación horizontal/vertical.',
      },
      {
        name: 'Slider',
        description: 'Slider de rango simple con valor mostrado y steps configurables.',
      },
      {
        name: 'RangeSlider',
        description: 'Slider de doble control para rangos mínimo/máximo.',
      },
      {
        name: 'DatePicker',
        description: 'Selector de fecha con calendario desplegable y formatos configurables.',
      },
      {
        name: 'TimePicker',
        description: 'Selector de hora tipo iOS con rueda de selección.',
      },
      {
        name: 'OTPInput',
        description: 'Input de código OTP de 6 dígitos con auto-focus y paste detection.',
      },
      {
        name: 'FileUpload',
        description: 'Drop zone para archivos con preview, drag & drop y estados.',
      },
      {
        name: 'RatingInput',
        description: 'Selector de estrellas con hover feedback y valor controlado.',
      },
      {
        name: 'TagsInput',
        description: 'Input de tags con autocomplete, enter para añadir y remove con click.',
      },
    ],
  },
  {
    id: 'data',
    label: 'Data Display',
    components: [
      {
        name: 'Badge',
        variants: ['default', 'primary', 'success', 'warning', 'error', 'info'],
        description: 'Badge con 6 variantes, dot opcional y NotificationBadge con contador.',
      },
      {
        name: 'Avatar / AvatarGroup',
        sizes: ['sm', 'md', 'lg', 'xl'],
        description: 'Avatar con imagen, iniciales, online dot y grupo con overlap.',
      },
      {
        name: 'Table',
        description: 'Tabla responsive con sticky header, sort, y row hover.',
      },
      {
        name: 'DataGrid',
        description: 'Grid de datos avanzado con TanStack Table: sort, filter, pagination.',
      },
      {
        name: 'KPIBlock',
        description: 'Bloque de indicador KPI con valor, label, tendencia y sparkline.',
      },
      {
        name: 'StatisticDisplay',
        description: 'Display de estadística con valor, label, icono y cambio porcentual.',
      },
      {
        name: 'Timeline',
        description: 'Línea de tiempo vertical con items, fechas y estados.',
      },
      {
        name: 'TreeView',
        description: 'Vista de árbol colapsable para jerarquías de datos.',
      },
      {
        name: 'KanbanBoard',
        description: 'Tablero Kanban con drag & drop (dnd-kit), columnas y cards.',
      },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    components: [
      {
        name: 'Alert',
        variants: ['info', 'success', 'warning', 'error'],
        description: 'Alerta inline con ícono, título, descripción y dismiss opcional.',
      },
      {
        name: 'Toast',
        description: 'Toast notification con sonner. Posiciones, duración y acciones configurables.',
      },
      {
        name: 'Snackbar',
        description: 'Snackbar en la parte inferior con acción y auto-dismiss.',
      },
      {
        name: 'Modal',
        sizes: ['sm', 'md', 'lg', 'xl', 'full'],
        description: 'Modal con animación VisionOS (scale + fade), backdrop blur y 5 tamaños.',
      },
      {
        name: 'Sheet',
        description: 'Sheet lateral (tipo iOS/macOS) con handle drag y backdrop dismiss.',
      },
      {
        name: 'ConfirmDialog',
        description: 'Diálogo de confirmación con acción destructiva y doble confirmación.',
      },
      {
        name: 'Tooltip',
        description: 'Tooltip con Radix UI, 4 posiciones, delay configurable y arrow opcional.',
      },
      {
        name: 'Popover',
        description: 'Popover flotante con contenido rico. 4 posiciones y close automático.',
      },
      {
        name: 'Skeleton',
        description: 'Skeleton loader con animación pulse y variantes (text, circle, rect).',
      },
      {
        name: 'Spinner',
        description: 'Spinner animado con 3 tamaños y color configurable.',
      },
      {
        name: 'Progress',
        description: 'Barra de progreso animada con indeterminate state y label.',
      },
      {
        name: 'EmptyState',
        description: 'Estado vacío con ícono, título, descripción y acción opcional.',
      },
      {
        name: 'ErrorBoundary',
        description: 'Error boundary con UI de error y botón de reintento.',
      },
      {
        name: 'OfflineState',
        description: 'Indicador de conexión perdida estilo iOS con animación y auto-detect.',
      },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    components: [
      {
        name: 'CodeBlock',
        description: 'Bloque de código con syntax highlighting copiar/prism y copy button.',
      },
      {
        name: 'ImageCarousel',
        description: 'Carrusel de imágenes con swipe, dots indicator y auto-play.',
      },
      {
        name: 'Lightbox',
        description: 'Lightbox para visualización de imágenes a pantalla completa.',
      },
      {
        name: 'AudioPlayer',
        description: 'Reproductor de audio minimalista con waveform visualizer.',
      },
      {
        name: 'VideoPlayer',
        description: 'Reproductor de video con controles personalizados.',
      },
      {
        name: 'Gallery',
        description: 'Grid de galería de imágenes con lightbox integrado.',
      },
      {
        name: 'MarkdownEditor',
        description: 'Editor markdown live con preview dividido y toolbar de formato.',
      },
      {
        name: 'JsonViewer',
        description: 'Visor JSON con colores syntax, collapse/expand y copy.',
      },
      {
        name: 'DiffViewer',
        description: 'Visor de diferencias (diff) con líneas añadidas/eliminadas/modificadas.',
      },
      {
        name: 'BarcodeGenerator / QRCodeGenerator',
        description: 'Generadores de códigos de barras y QR configurables.',
      },
    ],
  },
  {
    id: 'overlay',
    label: 'Overlay & Utils',
    components: [
      {
        name: 'CommandMenu',
        description: 'Cmd+K palette con búsqueda fuzzy, atajos y acciones agrupadas.',
      },
      {
        name: 'Dropdown',
        description: 'Dropdown menu Radix UI con items, íconos, separadores y check items.',
      },
      {
        name: 'ContextMenu',
        description: 'Menú contextual con right-click y Radix UI.',
      },
      {
        name: 'Collapsible',
        description: 'Sección colapsable con animación de altura y chevron rotado.',
      },
      {
        name: 'Accordion',
        description: 'Acordeón con items expandibles animados. Single y multiple mode.',
      },
      {
        name: 'StickyContainer',
        description: 'Contenedor sticky que sigue al scroll con threshold configurable.',
      },
      {
        name: 'ScrollArea',
        description: 'Área de scroll personalizada estilo macOS con scrollbar delgada.',
      },
      {
        name: 'LoadingOverlay',
        description: 'Overlay de carga con spinner y blur background.',
      },
      {
        name: 'TopActionBar',
        description: 'Barra de acciones superior fija con botones y breadcrumb.',
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ComponentsGallery() {
  return (
    <section id="components" className="relative py-24 md:py-32">
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="primary" size="lg" dot className="mb-4">
            50+ Components
          </Badge>
          <Title level={2} align="center" className="mb-4">
            Complete Component Library
          </Title>
          <Text variant="lead" color="secondary" align="center" className="max-w-2xl mx-auto">
            Every component is built with accessibility in mind, animated with Framer Motion,
            and styled with Apple-level attention to detail. All with full dark mode support.
          </Text>
        </motion.div>

        {/* Component groups via tabs */}
        <Tabs defaultValue="actions">
          <div className="sticky top-14 z-20 bg-background-primary/80 backdrop-blur-xl pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList variant="default" className="w-full overflow-x-auto scrollbar-none flex-nowrap gap-0">
              {componentGroups.map((group) => (
                <TabsTrigger key={group.id} value={group.id} className="whitespace-nowrap text-xs sm:text-sm">
                  {group.label}
                  <Badge variant="default" size="sm" className="ml-1.5 font-normal">
                    {group.components.length}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {componentGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {group.components.map((comp, i) => (
                  <motion.div key={comp.name} variants={itemVariants}>
                    <Card variant="flat" padding="md" hoverable className="h-full group cursor-default">
                      <CardContent className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <Title as="h3" level={6} weight="semibold" className="text-sm">
                            {comp.name}
                          </Title>
                          {comp.variants && (
                            <div className="flex gap-1">
                              {comp.variants.slice(0, 3).map((v) => (
                                <span
                                  key={v}
                                  className="text-[10px] px-1.5 py-0.5 rounded-md bg-accent-blue-tint text-accent-blue font-medium"
                                >
                                  {v}
                                </span>
                              ))}
                              {comp.variants.length > 3 && (
                                <span className="text-[10px] px-1.5 py-0.5 text-text-tertiary">
                                  +{comp.variants.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                          {comp.sizes && (
                            <div className="flex gap-1">
                              {comp.sizes.map((s) => (
                                <span key={s} className="text-[10px] px-1.5 py-0.5 rounded-md bg-surface-secondary text-text-tertiary font-mono">
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <Text variant="tiny" color="secondary" className="leading-relaxed">
                          {comp.description}
                        </Text>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Text variant="small" color="tertiary">
            ...and more fintech-specific components including{' '}
            <span className="text-text-secondary font-medium">FintechDashboardPreview</span>,{' '}
            <span className="text-text-secondary font-medium">TransactionList</span>,{' '}
            <span className="text-text-secondary font-medium">BalanceChart</span>,{' '}
            <span className="text-text-secondary font-medium">VirtualCardPreview</span>, and{' '}
            <span className="text-text-secondary font-medium">BiometricPrompt</span>.
          </Text>
          <div className="mt-4">
            <a href="https://github.com/smart-coder-labs/design-system/tree/main/components/ui" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" rightIcon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              }>
                Browse all source components
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
