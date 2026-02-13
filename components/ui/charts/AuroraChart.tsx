'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface AuroraChartDataItem {
  label: string;
  values: number[];
}

export interface AuroraChartProps {
  data: AuroraChartDataItem[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

const auroraColors = [
  { base: '#00ff88', end: '#00cc66' },
  { base: '#aa44ff', end: '#7722cc' },
  { base: '#00ccbb', end: '#009988' },
  { base: '#4488ff', end: '#2266cc' },
  { base: '#66ffcc', end: '#33cc99' },
  { base: '#cc66ff', end: '#9933cc' },
];

function buildSmoothPath(
  values: number[],
  baseY: number,
  xStep: number,
  xStart: number,
  amplitude: number,
): string {
  const points = values.map((v, i) => ({
    x: xStart + i * xStep,
    y: baseY - v * amplitude,
  }));

  if (points.length < 2) return '';

  let d = `M ${xStart} ${baseY}`;
  d += ` L ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cpx = (p0.x + p1.x) / 2;
    d += ` C ${cpx} ${p0.y}, ${cpx} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  d += ` L ${points[points.length - 1].x} ${baseY}`;
  d += ' Z';

  return d;
}

export const AuroraChart: React.FC<AuroraChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const baseY = padding + chartHeight;

  const maxValue = useMemo(() => {
    let m = 0;
    for (const item of data) {
      for (const v of item.values) {
        if (v > m) m = v;
      }
    }
    return m || 1;
  }, [data]);

  const amplitude = chartHeight / maxValue;

  const paths = useMemo(() => {
    return data.map((item, i) => {
      const xStep = item.values.length > 1 ? chartWidth / (item.values.length - 1) : chartWidth;
      const d = buildSmoothPath(item.values, baseY, xStep, padding, amplitude);
      const colors = auroraColors[i % auroraColors.length];
      const avg = item.values.reduce((s, v) => s + v, 0) / item.values.length;
      return { d, colors, label: item.label, avg };
    });
  }, [data, chartWidth, baseY, padding, amplitude]);

  const handleHover = (index: number, event: React.MouseEvent) => {
    setHoveredIndex(index);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const ariaLabel = title
    ? `${title} aurora chart with ${data.length} bands`
    : `Aurora chart with ${data.length} bands`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '8px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
        >
          <title>{ariaLabel}</title>

          <defs>
            {paths.map((p, i) => (
              <linearGradient key={`grad-${i}`} id={`aurora-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={p.colors.base} stopOpacity={0.8} />
                <stop offset="100%" stopColor={p.colors.end} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>

          {paths.map((p, i) => {
            const isHovered = hoveredIndex === i;
            const dimmed = hoveredIndex !== null && !isHovered;

            const interactiveProps = interactive
              ? {
                  onMouseEnter: (e: React.MouseEvent<SVGPathElement>) => handleHover(i, e),
                  onMouseMove: (e: React.MouseEvent<SVGPathElement>) => handleHover(i, e),
                  onMouseLeave: handleLeave,
                  cursor: 'pointer' as const,
                }
              : {};

            return (
              <motion.path
                key={i}
                d={p.d}
                fill={`url(#aurora-grad-${i})`}
                fillOpacity={dimmed ? 0.2 : isHovered ? 0.85 : 0.5}
                stroke={p.colors.base}
                strokeWidth={isHovered ? 1.5 : 0.5}
                strokeOpacity={dimmed ? 0.3 : 0.7}
                initial={animated ? { opacity: 0, pathLength: 0 } : undefined}
                animate={animated ? { opacity: 1, pathLength: 1 } : undefined}
                transition={
                  animated
                    ? {
                        duration: chartMotion.duration.slow,
                        delay: i * 0.12,
                        ease: chartMotion.easing,
                      }
                    : undefined
                }
                {...interactiveProps}
              />
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={paths[hoveredIndex].label}
            items={[
              {
                label: 'Average',
                value: Math.round(paths[hoveredIndex].avg * 100) / 100,
                color: paths[hoveredIndex].colors.base,
              },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default AuroraChart;
