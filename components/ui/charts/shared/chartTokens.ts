"use client";

export const chartPalette = {
  primary: 'var(--color-accent-blue)',
  success: 'var(--color-status-success)',
  warning: 'var(--color-status-warning)',
  error: 'var(--color-status-error)',
  info: 'var(--color-status-info)',
  purple: '#AF52DE',
  pink: '#FF2D55',
  teal: '#5AC8FA',
  indigo: '#5856D6',
  mint: '#00C7BE',
  cyan: '#32ADE6',
  brown: '#A2845E',
};

export const chartPaletteArray = [
  chartPalette.primary,
  chartPalette.success,
  chartPalette.warning,
  chartPalette.error,
  chartPalette.info,
  chartPalette.purple,
  chartPalette.pink,
  chartPalette.teal,
  chartPalette.indigo,
  chartPalette.mint,
  chartPalette.cyan,
  chartPalette.brown,
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
