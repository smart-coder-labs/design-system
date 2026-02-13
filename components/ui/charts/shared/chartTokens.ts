"use client";

/**
 * Chart color palette — shadcn-inspired blue tonalities.
 * Uses CSS variables defined in globals.css so that colors
 * automatically adapt to light / dark mode.
 */
export const chartPalette = {
  chart1: 'var(--chart-1)',
  chart2: 'var(--chart-2)',
  chart3: 'var(--chart-3)',
  chart4: 'var(--chart-4)',
  chart5: 'var(--chart-5)',
  /** Extended palette for charts that need more than 5 colours */
  chart6: 'var(--chart-6)',
  chart7: 'var(--chart-7)',
  chart8: 'var(--chart-8)',
  chart9: 'var(--chart-9)',
  chart10: 'var(--chart-10)',
  chart11: 'var(--chart-11)',
  chart12: 'var(--chart-12)',
};

export const chartPaletteArray = [
  chartPalette.chart1,
  chartPalette.chart2,
  chartPalette.chart3,
  chartPalette.chart4,
  chartPalette.chart5,
  chartPalette.chart6,
  chartPalette.chart7,
  chartPalette.chart8,
  chartPalette.chart9,
  chartPalette.chart10,
  chartPalette.chart11,
  chartPalette.chart12,
];

export const chartSizes = {
  sm: { width: 320, height: 200, fontSize: 11, padding: 16 },
  md: { width: 480, height: 300, fontSize: 13, padding: 24 },
  lg: { width: 640, height: 400, fontSize: 15, padding: 32 },
} as const;

export type ChartSize = 'sm' | 'md' | 'lg';
export type ChartVariant = 'default' | 'glass' | 'bordered' | 'elevated';

export const variantClasses: Record<ChartVariant, string> = {
  default: 'bg-[var(--color-bg-primary)]',
  glass: 'bg-[var(--color-surface-glass)] backdrop-blur-xl',
  bordered: 'bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)]',
  elevated: 'bg-[var(--color-bg-primary)] shadow-[var(--shadow-md)]',
};

export const chartMotion = {
  spring: { stiffness: 300, damping: 30, mass: 0.8 },
  duration: { fast: 0.16, normal: 0.22, slow: 0.26 },
  easing: [0.16, 1, 0.3, 1] as [number, number, number, number],
};
