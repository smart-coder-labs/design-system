# 📊 PROMPT: Generación de Componentes de Gráficos — Apple-Minimal Radix DS

> **Este documento es un prompt completo para un agente de IA.** El agente debe leer y seguir estas instrucciones al pie de la letra para generar todos los componentes de gráficos listados.

---

## 🎯 Objetivo

Generar una **biblioteca completa de componentes de gráficos y visualización de datos** para el Design System **Apple-Minimal Radix DS**. Cada componente debe ser un archivo `.tsx` independiente, estilizado con los tokens, colores, fuentes y patrones del design system existente.

---

## 📐 CONTEXTO OBLIGATORIO — Design System

Antes de crear cualquier componente, el agente **DEBE** leer y respetar los siguientes archivos del proyecto:

| Archivo | Propósito |
|---|---|
| `AGENT.md` | Reglas generales de creación de componentes |
| `DESIGN_DECISIONS.md` | Decisiones de diseño, paleta de colores, tipografía, animaciones |
| `globals.css` | Variables CSS, tokens, clases utilitarias, animaciones globales |
| `components/ui/Chart.tsx` | Componente base existente (referencia de estructura SVG) |
| `components/ui/Sparkline.tsx` | Referencia de gráfico inline existente |
| `components/ui/StatisticDisplay.tsx` | Referencia de visualización de estadísticas existente |
| `components/ui/KPIBlock.tsx` | Referencia de bloques KPI existentes |
| `lib/utils.ts` | Función `cn()` para merge de clases |

---

## 🎨 REGLAS DE ESTILO OBLIGATORIAS

### Colores del Design System
```
// Light Mode
--color-accent-blue: #007AFF
--color-status-success: #34C759
--color-status-warning: #FF9500
--color-status-error: #FF3B30
--color-status-info: #5AC8FA
--color-text-primary: #1D1D1F
--color-text-secondary: #6E6E73
--color-text-tertiary: #86868B
--color-bg-primary: #FFFFFF
--color-bg-secondary: #F5F5F7
--color-border-primary: rgba(0, 0, 0, 0.08)
--color-surface-glass: rgba(255, 255, 255, 0.72)

// Dark Mode
--color-accent-blue: #0A84FF
--color-status-success: #32D74B
--color-status-warning: #FF9F0A
--color-status-error: #FF453A
--color-status-info: #64D2FF
--color-text-primary: #FFFFFF
--color-text-secondary: #98989D
--color-bg-primary: #000000
--color-bg-secondary: #1C1C1E
--color-border-primary: rgba(255, 255, 255, 0.12)
```

### Paleta de Colores para Gráficos (Chart Palette)
Usar esta paleta semántica consistente para datasets. Nunca hardcodear colores aleatorios:
```typescript
export const chartPalette = {
  primary: 'var(--color-accent-blue)',       // #007AFF / #0A84FF
  success: 'var(--color-status-success)',     // #34C759 / #32D74B
  warning: 'var(--color-status-warning)',     // #FF9500 / #FF9F0A
  error: 'var(--color-status-error)',         // #FF3B30 / #FF453A
  info: 'var(--color-status-info)',           // #5AC8FA / #64D2FF
  purple: '#AF52DE',                          // iOS Purple
  pink: '#FF2D55',                            // iOS Pink
  teal: '#5AC8FA',                            // iOS Teal
  indigo: '#5856D6',                          // iOS Indigo
  mint: '#00C7BE',                            // iOS Mint
  cyan: '#32ADE6',                            // iOS Cyan
  brown: '#A2845E',                           // iOS Brown
};
```

### Tipografía
```
Font Family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', Roboto, sans-serif
Font Mono: 'SF Mono', 'Monaco', 'Cascadia Code', monospace
Base Size: 15px
Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### Animaciones
```
Duración: 160ms (fast), 220ms (normal), 260ms (slow)
Easing: cubic-bezier(0.16, 1, 0.3, 1) — curva Apple
Framer Motion Spring: { stiffness: 300, damping: 30, mass: 0.8 }
```

### Sombras
```
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)
```

### Border Radius
```
md: 12px — Cards de gráficos
lg: 16px — Contenedores grandes
xl: 20px — Modales con gráficos
```

---

## ⚙️ ESTRUCTURA OBLIGATORIA POR COMPONENTE

Cada componente de gráfico debe seguir esta estructura:

```typescript
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

// 1. Interface con props tipadas
export interface [NombreChart]Props {
  data: [...];                    // Datos tipados
  className?: string;             // Siempre aceptar className
  size?: 'sm' | 'md' | 'lg';     // Variantes de tamaño
  variant?: 'default' | 'glass' | 'bordered' | 'elevated'; // Variantes visuales
  animated?: boolean;             // Flag de animación
  interactive?: boolean;          // Flag de interactividad
  showLegend?: boolean;           // Mostrar leyenda
  showTooltip?: boolean;          // Mostrar tooltips
  showGrid?: boolean;             // Mostrar grilla
  showLabels?: boolean;           // Mostrar etiquetas
  colorScheme?: string[];         // Colores personalizables
  onDataPointClick?: (item: any, index: number) => void; // Evento click
  onDataPointHover?: (item: any, index: number | null) => void; // Evento hover
  // ...props específicas del tipo de gráfico
}

// 2. Componente con Framer Motion
export const [NombreChart]: React.FC<[NombreChart]Props> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = true,
  ...props
}) => {
  // Implementación SVG puro (NO usar librerías externas de charts)
  // Usar tokens CSS del design system
  // Animaciones con Framer Motion
  // Accesibilidad completa (ARIA, keyboard)
  // Soporte light/dark mode
};

export default [NombreChart];
```

### Reglas Técnicas Clave
- **SVG puro** — No usar Chart.js, D3, Recharts ni ninguna librería externa de gráficos
- **`"use client"`** — Siempre como primera línea
- **`cn()`** — Para merge de clases Tailwind
- **Framer Motion** — Para animaciones de entrada, hover, y transiciones
- **Variables CSS** — Usar `var(--color-*)` en lugar de colores hardcodeados
- **Accesibilidad** — `role="img"`, `aria-label`, `tabIndex`, focus visible
- **Responsive** — Usar `viewBox` en SVGs, tamaños relativos
- **Dark Mode** — Usar clases `dark:` o variables CSS que cambian automáticamente

---

## 📦 LISTA COMPLETA DE COMPONENTES A GENERAR

### 🔹 Categoría 1: Gráficos de Comparación

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 1 | **Bar Chart** | `BarChart.tsx` | Barras verticales con animación de crecimiento, tooltips, grilla, y leyenda |
| 2 | **Horizontal Bar Chart** | `HorizontalBarChart.tsx` | Barras horizontales con labels a la izquierda, ideal para rankings |
| 3 | **Grouped Bar Chart** | `GroupedBarChart.tsx` | Barras verticales agrupadas para comparar múltiples datasets |
| 4 | **Stacked Bar Chart** | `StackedBarChart.tsx` | Barras apiladas mostrando composición y total |
| 5 | **Bullet Chart** | `BulletChart.tsx` | Barra con rangos de referencia y marcador objetivo (inspirado en Stephen Few) |
| 6 | **Lollipop Chart** | `LollipopChart.tsx` | Puntos con línea al eje, alternativa elegante al bar chart |
| 7 | **Back-to-Back Bar Chart** | `BackToBackBarChart.tsx` | Barras espejadas (pirámide poblacional), ideal para comparar dos grupos |
| 8 | **Diverging Bar Chart** | `DivergingBarChart.tsx` | Barras que divergen desde un punto central (positivo/negativo) |
| 9 | **Column Range Chart** | `ColumnRangeChart.tsx` | Barras que muestran un rango min-max por categoría |

---

### 🔹 Categoría 2: Gráficos de Tendencia y Series de Tiempo

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 10 | **Line Chart** | `LineChart.tsx` | Líneas con puntos, grilla, tooltips, múltiples series |
| 11 | **Area Chart** | `AreaChart.tsx` | Área bajo la curva con gradiente, opacidad y relleno suave |
| 12 | **Stacked Area Chart** | `StackedAreaChart.tsx` | Áreas apiladas mostrando composición temporal |
| 13 | **Sparkline** | `Sparkline.tsx` | *(YA EXISTE)* Mini gráfico inline, revisar y mejorar |
| 14 | **Step Line Chart** | `StepLineChart.tsx` | Línea escalonada (step-after / step-before) |
| 15 | **Spline Chart** | `SplineChart.tsx` | Línea suavizada con curvas Bézier (Catmull-Rom spline) |
| 16 | **Multi-Axis Line Chart** | `MultiAxisLineChart.tsx` | Línea con dos ejes Y para escalas diferentes |
| 17 | **Stream Graph** | `StreamGraph.tsx` | Similar a stacked area pero centrado, estilo río |
| 18 | **Bump Chart** | `BumpChart.tsx` | Muestra cambios de ranking a lo largo del tiempo |
| 19 | **Slope Chart** | `SlopeChart.tsx` | Comparación entre dos puntos temporales con líneas inclinadas |

---

### 🔹 Categoría 3: Gráficos de Proporción y Composición

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 20 | **Pie Chart** | `PieChart.tsx` | Pastel clásico con animación de entrada rotacional |
| 21 | **Donut Chart** | `DonutChart.tsx` | Rosquilla con valor central y leyenda |
| 22 | **Semi-Circle Gauge** | `SemiCircleGauge.tsx` | Medio círculo tipo velocímetro con aguja animada |
| 23 | **Ring Gauge** | `RingGauge.tsx` | Anillo de progreso con porcentaje central (estilo Apple Watch) |
| 24 | **Multi-Ring Gauge** | `MultiRingGauge.tsx` | Múltiples anillos concéntricos (Activity Rings de Apple) |
| 25 | **Waffle Chart** | `WaffleChart.tsx` | Grid de cuadrados coloreados mostrando proporciones (como GitHub contributions) |
| 26 | **Treemap** | `Treemap.tsx` | Rectángulos anidados proporcionales al tamaño del dato |
| 27 | **Sunburst Chart** | `SunburstChart.tsx` | Donut multi-nivel jerárquico con drill-down |
| 28 | **Funnel Chart** | `FunnelChart.tsx` | Embudo de conversión con etapas y porcentajes de caída |
| 29 | **Pyramid Chart** | `PyramidChart.tsx` | Pirámide jerárquica de datos |
| 30 | **Icicle Chart** | `IcicleChart.tsx` | Jerarquía rectangular vertical (alternativa al treemap) |
| 31 | **Marimekko Chart** | `MarimekkoChart.tsx` | Barras de ancho variable mostrando dos dimensiones |
| 32 | **Nested Donut Chart** | `NestedDonutChart.tsx` | Donuts concéntricos para comparar categorías |

---

### 🔹 Categoría 4: Gráficos de Distribución

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 33 | **Histogram** | `Histogram.tsx` | Distribución de frecuencia con bins configurables |
| 34 | **Box Plot** | `BoxPlot.tsx` | Caja y bigotes con mediana, cuartiles y outliers |
| 35 | **Violin Plot** | `ViolinPlot.tsx` | Distribución de densidad simétrica (forma de violín) |
| 36 | **Density Plot** | `DensityPlot.tsx` | Curva de distribución de densidad suavizada (KDE) |
| 37 | **Dot Plot** | `DotPlot.tsx` | Puntos individuales mostrando distribución |
| 38 | **Strip Plot** | `StripPlot.tsx` | Puntos dispersos en una dimensión con jitter |
| 39 | **Bee Swarm Chart** | `BeeSwarmChart.tsx` | Puntos sin superposición (como enjambre), variante elegante del strip plot |
| 40 | **Ridgeline Plot** | `RidgelinePlot.tsx` | Múltiples distribuciones apiladas como montañas ("joy plot") |

---

### 🔹 Categoría 5: Gráficos de Correlación

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 41 | **Scatter Plot** | `ScatterPlot.tsx` | Nube de puntos XY con tamaño/color variable (bubble opcional) |
| 42 | **Bubble Chart** | `BubbleChart.tsx` | Scatter con tercera dimensión representada por tamaño del círculo |
| 43 | **Heatmap** | `Heatmap.tsx` | Matriz de celdas coloreadas por intensidad |
| 44 | **Correlogram** | `Correlogram.tsx` | Matriz de correlación (heatmap de coeficientes) |
| 45 | **Connected Scatter** | `ConnectedScatter.tsx` | Scatter con líneas conectando puntos en secuencia temporal |
| 46 | **Density Scatter** | `DensityScatter.tsx` | Scatter con densidad representada por color/opacidad |

---

### 🔹 Categoría 6: Gráficos de Flujo y Relaciones

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 47 | **Sankey Diagram** | `SankeyDiagram.tsx` | Flujos de energía/dinero/datos entre nodos con ancho proporcional |
| 48 | **Alluvial Diagram** | `AlluvialDiagram.tsx` | Similar al Sankey pero para categorías ordenadas |
| 49 | **Chord Diagram** | `ChordDiagram.tsx` | Relaciones circulares entre entidades con arcos |
| 50 | **Network Graph** | `NetworkGraph.tsx` | Nodos y aristas con layout force-directed |
| 51 | **Arc Diagram** | `ArcDiagram.tsx` | Nodos en línea con arcos conectándolos |
| 52 | **Dependency Wheel** | `DependencyWheel.tsx` | Rueda circular mostrando dependencias entre módulos |
| 53 | **Node Link Tree** | `NodeLinkTree.tsx` | Árbol jerárquico con nodos y conexiones |

---

### 🔹 Categoría 7: Gráficos Radiales y Circulares

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 54 | **Radar Chart** | `RadarChart.tsx` | Polígono radar con múltiples ejes |
| 55 | **Polar Area Chart** | `PolarAreaChart.tsx` | Sectores con radio variable (rosa de Nightingale) |
| 56 | **Radial Bar Chart** | `RadialBarChart.tsx` | Barras curvadas en disposición circular |
| 57 | **Wind Rose** | `WindRose.tsx` | Distribución direccional circular (meteorología) |
| 58 | **Clock Chart** | `ClockChart.tsx` | Datos distribuidos como un reloj (24h o 12h) |
| 59 | **Spiral Chart** | `SpiralChart.tsx` | Datos en espiral temporal (ideal para periodicidad) |
| 60 | **Coxcomb Chart** | `CoxcombChart.tsx` | Variante del polar con sectores de ángulo fijo y radio variable |
| 61 | **Circular Packing** | `CircularPacking.tsx` | Círculos empaquetados dentro de un contenedor circular |

---

### 🔹 Categoría 8: Gráficos Geográficos y Espaciales

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 62 | **Choropleth Map** | `ChoroplethMap.tsx` | Mapa con regiones coloreadas por intensidad |
| 63 | **Bubble Map** | `BubbleMap.tsx` | Mapa con burbujas de tamaño variable en coordenadas |
| 64 | **Hex Bin Map** | `HexBinMap.tsx` | Mapa con hexágonos de densidad |
| 65 | **Connection Map** | `ConnectionMap.tsx` | Mapa con arcos de conexión entre puntos |
| 66 | **Cartogram** | `Cartogram.tsx` | Mapa distorsionado donde el tamaño representa un valor |

---

### 🔹 Categoría 9: Gráficos Especializados

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 67 | **Gantt Chart** | `GanttChart.tsx` | Línea de tiempo de tareas con dependencias |
| 68 | **Waterfall Chart** | `WaterfallChart.tsx` | Cascada mostrando contribuciones incrementales a un total |
| 69 | **Candlestick Chart** | `CandlestickChart.tsx` | Velas financieras (OHLC: Open, High, Low, Close) |
| 70 | **OHLC Chart** | `OHLCChart.tsx` | Barras de precio financiero (alternativa a candlestick) |
| 71 | **Span Chart** | `SpanChart.tsx` | Rangos horizontales con inicio y fin |
| 72 | **Dumbbell Chart** | `DumbbellChart.tsx` | Dos puntos conectados por línea mostrando cambio entre dos estados |
| 73 | **Parallel Coordinates** | `ParallelCoordinates.tsx` | Múltiples ejes paralelos con líneas cruzándolos |
| 74 | **Calendar Heatmap** | `CalendarHeatmap.tsx` | Grid tipo GitHub contributions con días coloreados por intensidad |
| 75 | **Matrix Chart** | `MatrixChart.tsx` | Grilla de celdas con valores, colores y tooltips |
| 76 | **Error Bar Chart** | `ErrorBarChart.tsx` | Barras o puntos con barras de error (intervalo de confianza) |
| 77 | **Range Plot** | `RangePlot.tsx` | Área entre un mínimo y máximo por categoría |

---

### 🔹 Categoría 10: Gráficos de Indicadores y Métricas

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 78 | **Gauge Chart** | `GaugeChart.tsx` | Velocímetro completo con aguja animada y zonas de color |
| 79 | **Liquid Fill Gauge** | `LiquidFillGauge.tsx` | Círculo con efecto de "llenado de agua" animado |
| 80 | **Thermometer Chart** | `ThermometerChart.tsx` | Indicador vertical tipo termómetro con nivel animado |
| 81 | **Progress Ring** | `ProgressRing.tsx` | Anillo de progreso con porcentaje y label (Apple Health style) |
| 82 | **Battery Indicator** | `BatteryIndicator.tsx` | Indicador tipo batería con nivel y colores de estado |
| 83 | **Score Card** | `ScoreCard.tsx` | Tarjeta con valor prominente, tendencia (sparkline) y delta |
| 84 | **Micro Chart** | `MicroChart.tsx` | Gráfico tiny para usar dentro de tablas o listas |

---

### 🔹 Categoría 11: Word & Text Visualizations

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 85 | **Word Cloud** | `WordCloud.tsx` | Nube de palabras con tamaño proporcional a frecuencia |
| 86 | **Tag Cloud** | `TagCloud.tsx` | Similar a word cloud pero con pills/tags interactivos |

---

### 🟡 Categoría 12: INNOVADORES — Gráficos Creativos Nuevos

> Estos son **gráficos originales** que no existen en las librerías convencionales. Diseñados para ofrecer experiencias premium y diferenciadas.

| # | Componente | Archivo | Descripción |
|---|---|---|---|
| 87 | **Pulse Ring** | `PulseRing.tsx` | Anillo que pulsa con intensidad proporcional al valor, con ondas expansivas animadas. Ideal para métricas en tiempo real (heartbeat de servidor, actividad). |
| 88 | **Gradient Wave** | `GradientWave.tsx` | Forma de onda con gradientes animados que fluyen, representando datos temporales de forma orgánica y viva (audio, sensores). |
| 89 | **Orbit Chart** | `OrbitChart.tsx` | Planetas orbitando un centro, donde cada órbita es una categoría y el tamaño del planeta es el valor. Con rotación animada. |
| 90 | **Crystal Cluster** | `CrystalCluster.tsx` | Visualización de datos como cristales/gemas poligonales agrupados. El tamaño y color del cristal representan dimensiones. Estilo premium tipo VisionOS. |
| 91 | **DNA Helix Chart** | `DNAHelixChart.tsx` | Dos espirales entrelazadas donde los "pares base" conectan puntos de dos series de datos. Con rotación 3D sutil en perspectiva. |
| 92 | **Bloom Chart** | `BloomChart.tsx` | Flor cuyos pétalos representan categorías. El largo, ancho y color de cada pétalo son dimensiones del dato. Con animación de apertura "bloom". |
| 93 | **Terrain Map** | `TerrainMap.tsx` | Mapa topográfico generado a partir de una matriz de datos. Picos = valores altos, valles = valores bajos. Con gradiente de altura y contornos. |
| 94 | **Aurora Chart** | `AuroraChart.tsx` | Visualización tipo aurora boreal donde las bandas de color ondulantes representan series de datos temporales. Con animación fluida y efecto glass. |
| 95 | **Constellation Chart** | `ConstellationChart.tsx` | Puntos como estrellas conectados por líneas sutiles formando constelaciones. Ideal para mostrar clusters y relaciones. Con efecto de brillo (twinkle). |
| 96 | **Vinyl Record Chart** | `VinylRecordChart.tsx` | Gráfico circular con surcos concéntricos, donde cada surco es una categoría y la variación del surco representa los datos. Con animación de giro. |
| 97 | **Topographic Contour** | `TopographicContour.tsx` | Líneas de contorno suaves tipo mapa topográfico, generadas desde una grilla 2D de densidad. Colores subtles con efecto minimal. |
| 98 | **Ripple Impact Chart** | `RippleImpactChart.tsx` | Ondas concéntricas que emanan de puntos de impacto. Cada onda = un evento, la amplitud = la magnitud. Con animación de propagación. |
| 99 | **Neural Network Viz** | `NeuralNetworkViz.tsx` | Visualización de capas de una red neuronal con nodos y conexiones ponderadas. Las conexiones tienen grosor/opacidad proporcional al peso. |
| 100 | **Particle Flow** | `ParticleFlow.tsx` | Partículas fluyen entre categorías a través de canales, como un Sankey pero con partículas animadas individuales en movimiento continuo. |
| 101 | **Morphing Shape** | `MorphingShape.tsx` | Una forma orgánica (blob) que cambia de forma suavemente según los datos varían en el tiempo. Usa SVG path morphing con interpolación. |
| 102 | **Glass Prism Chart** | `GlassPrismChart.tsx` | Prisma de vidrio que descompone un valor total en sus componentes como un espectro de luz. Con efecto glassmorphism y refracción CSS. |
| 103 | **Eclipse Chart** | `EclipseChart.tsx` | Dos círculos superpuestos donde la intersección (eclipse) muestra valores comunes (como Venn). Con animación de alineación y sombra. |
| 104 | **Pendulum Chart** | `PendulumChart.tsx` | Valores que oscilan como péndulos colgados de un eje central. La amplitud del balanceo representa la variabilidad/volatilidad. Con physics spring animation. |
| 105 | **Mosaic Flow** | `MosaicFlow.tsx` | Grid de tiles que fluyen y reorganizan en tiempo real. Cada tile = un dato, el color = categoría, el tamaño = valor. Layout masonry animado. |
| 106 | **Stained Glass** | `StainedGlass.tsx` | Voronoi diagram estilizado como vitral. Las celdas tienen colores basados en datos, bordes metálicos, y efecto de luz pasando a través. |
| 107 | **Sound Wave Viz** | `SoundWaveViz.tsx` | Visualización tipo onda de sonido (waveform) con barras verticales simétricas animadas. Puede representar datos de intensidad a lo largo del tiempo. |
| 108 | **Magnetic Field Chart** | `MagneticFieldChart.tsx` | Líneas de campo magnético curvas entre polos positivos y negativos. Los datos definen los polos y la intensidad del campo. |
| 109 | **Tide Chart** | `TideChart.tsx` | Visualización de datos cíclicos como mareas. Una ola que sube y baja con fill gradient, ideal para datos periódicos (ventas por hora, tráfico). |
| 110 | **Kaleidoscope Chart** | `KaleidoscopeChart.tsx` | Patrón simétrico caleidoscópico generado desde datos. Rotación simétrica multiplicada. Puramente decorativo pero con datos reales mapeados. |

---

## 📁 UBICACIÓN DE ARCHIVOS

Todos los componentes deben crearse en:
```
packages/design-system/components/ui/charts/
```

Estructura:
```
components/ui/charts/
├── index.ts                     // Re-exports de todos los charts
├── shared/
│   ├── chartTokens.ts           // Paleta, tamaños, constantes
│   ├── chartUtils.ts            // Funciones helper (escalas, interpolación, geometría)
│   ├── ChartContainer.tsx       // Wrapper con glass/bordered/elevated variants
│   ├── ChartLegend.tsx          // Leyenda reutilizable
│   ├── ChartTooltip.tsx         // Tooltip reutilizable (Apple style)
│   ├── ChartGrid.tsx            // Grilla/ejes reutilizable
│   └── ChartAxis.tsx            // Ejes X/Y reutilizable
├── BarChart.tsx
├── LineChart.tsx
├── PieChart.tsx
├── ...todos los demás
```

---

## 📖 STORIES OBLIGATORIAS

Cada componente debe tener un archivo `.stories.tsx` en:
```
packages/design-system/stories/charts/
```

Cada story debe incluir:

1. **Default** — Vista básica con datos de ejemplo
2. **Variants** — Todas las variantes (default, glass, bordered, elevated)
3. **Sizes** — Variantes de tamaño (sm, md, lg)
4. **Interactive** — Demo con state, hover, click
5. **Dark Mode** — Preview en modo oscuro
6. **Real Use Case** — Un caso de uso real (dashboard financiero, analytics, salud, etc.)
7. **Playground** — Story con controles Storybook arg types

Ejemplo de caso de uso en story:
```typescript
export const FinancialDashboard: Story = {
    name: '💰 Caso de Uso: Dashboard Financiero',
    args: {
        data: [
            { month: 'Ene', revenue: 42000, expenses: 31000 },
            { month: 'Feb', revenue: 48000, expenses: 33000 },
            // ...
        ],
        variant: 'glass',
        size: 'lg',
        animated: true,
        showLegend: true,
        showGrid: true,
        showTooltip: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl bg-background-secondary p-6 rounded-2xl">
                <Story />
            </div>
        ),
    ],
};
```

---

## ✅ CHECKLIST POR COMPONENTE

Antes de dar por terminado cada componente:

- [ ] ¿Usa SVG puro sin librerías externas?
- [ ] ¿Importa `"use client"` al inicio?
- [ ] ¿Usa `cn()` para merge de clases?
- [ ] ¿Usa colores del design system (`var(--color-*)`)?
- [ ] ¿Usa la font family del sistema (`font-sans`)?
- [ ] ¿Funciona en light y dark mode?
- [ ] ¿Tiene animaciones con Framer Motion?
- [ ] ¿Es accesible (`role`, `aria-label`, `tabIndex`, `focus-visible`)?
- [ ] ¿Tiene variantes de tamaño (`sm`, `md`, `lg`)?
- [ ] ¿Tiene variantes visuales (`default`, `glass`, `bordered`, `elevated`)?
- [ ] ¿Acepta `className` personalizable?
- [ ] ¿El API es consistente con los otros charts?
- [ ] ¿Tiene tooltips al hacer hover?
- [ ] ¿Tiene eventos interactivos (`onDataPointClick`, `onDataPointHover`)?
- [ ] ¿Sigue los border-radius del design system (12px, 16px)?
- [ ] ¿Usa las sombras del design system (`--shadow-*`)?
- [ ] ¿El código está tipado con TypeScript estricto?
- [ ] ¿Se crearon las stories en `stories/charts/`?
- [ ] ¿Las stories incluyen casos de uso reales?

---

## 🏁 Prioridad de Implementación Sugerida

1. **Fase 1 — Esenciales**: BarChart, LineChart, AreaChart, PieChart, DonutChart, RadarChart, GaugeChart, Heatmap, ScoreCard
2. **Fase 2 — Avanzados**: WaterfallChart, FunnelChart, Treemap, SankeyDiagram, CandlestickChart, CalendarHeatmap, BoxPlot
3. **Fase 3 — Especializados**: NetworkGraph, ParallelCoordinates, SunburstChart, ChordDiagram, ChoroplethMap, StreamGraph
4. **Fase 4 — Indicadores**: LiquidFillGauge, MultiRingGauge, ProgressRing, BatteryIndicator, SemiCircleGauge
5. **Fase 5 — Innovadores**: PulseRing, GradientWave, OrbitChart, AuroraChart, ConstellationChart, GlassPrismChart, ParticleFlow, MorphingShape

---

> **Total: 110 componentes de gráficos** — La biblioteca de charts más completa del mercado, con estilo Apple premium.
