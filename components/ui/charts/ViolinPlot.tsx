'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';
import { ChartGrid } from './shared/ChartGrid';
import { ChartAxis } from './shared/ChartAxis';

export interface ViolinPlotProps {
  data: Array<{ label: string; values: number[]; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

/** Simple KDE for violin shape */
function computeKDE(values: number[], min: number, max: number, steps: number = 30): { y: number; density: number }[] {
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  if (n === 0) return [];
  const bandwidth = (max - min) / (steps * 0.8) || 1;
  const result: { y: number; density: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const y = min + (i / steps) * (max - min);
    let density = 0;
    for (const v of sorted) {
      const u = (y - v) / bandwidth;
      density += Math.exp(-0.5 * u * u) / (bandwidth * Math.sqrt(2 * Math.PI));
    }
    density /= n;
    result.push({ y, density });
  }
  return result;
}

export const ViolinPlot: React.FC<ViolinPlotProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
  showTooltip = true,
  showGrid = true,
  showLabels = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const allValues = useMemo(() => data.flatMap((d) => d.values), [data]);
  const globalMin = useMemo(() => Math.min(...allValues), [allValues]);
  const globalMax = useMemo(() => Math.max(...allValues), [allValues]);
  const ticks = useMemo(() => generateTicks(globalMin, globalMax, 5), [globalMin, globalMax]);
  const domainBottom = ticks[0];
  const domainTop = ticks[ticks.length - 1];

  const violinCount = data.length;
  const violinGap = Math.max(4, chartWidth * 0.06);
  const violinWidth = Math.max(12, (chartWidth - violinGap * (violinCount + 1)) / violinCount);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, domainBottom, domainTop, 0, chartHeight),
    [margin.top, chartHeight, domainBottom, domainTop],
  );

  const kdeData = useMemo(
    () => data.map((d) => computeKDE(d.values, domainBottom, domainTop, 30)),
    [data, domainBottom, domainTop],
  );

  const maxDensity = useMemo(
    () => Math.max(...kdeData.flatMap((kde) => kde.map((p) => p.density)), 0.001),
    [kdeData],
  );

  const gridHorizontalLines = useMemo(() => ticks.map((t) => scaleY(t)), [ticks, scaleY]);

  const yAxisTicks = useMemo(
    () => ticks.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [ticks, scaleY],
  );

  const xAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: margin.left + violinGap + i * (violinWidth + violinGap) + violinWidth / 2,
      label: d.label,
    })),
    [data, margin.left, violinGap, violinWidth],
  );

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data[index] : null, index);
    },
    [data, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(data[index], index); },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const violinVariants = animated
    ? {
        hidden: { opacity: 0, scaleX: 0 },
        visible: { opacity: 1, scaleX: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} violin plot with ${data.length} groups`
    : `Violin plot with ${data.length} groups`;

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

          {showGrid && (
            <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} horizontalLines={gridHorizontalLines} />
          )}
          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}
          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const cx = margin.left + violinGap + i * (violinWidth + violinGap) + violinWidth / 2;
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;
              const kde = kdeData[i];
              const halfW = violinWidth / 2;

              // Build symmetric violin path
              const leftPoints = kde.map((p) => {
                const sy = scaleY(p.y);
                const dx = linearScale(p.density, 0, maxDensity, 0, halfW);
                return `${cx - dx},${sy}`;
              });
              const rightPoints = [...kde].reverse().map((p) => {
                const sy = scaleY(p.y);
                const dx = linearScale(p.density, 0, maxDensity, 0, halfW);
                return `${cx + dx},${sy}`;
              });
              const path = `M${leftPoints.join('L')}L${rightPoints.join('L')}Z`;

              // Stats for tooltip
              const sorted = [...item.values].sort((a, b) => a - b);
              const median = sorted[Math.floor(sorted.length / 2)];

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g key={i} variants={violinVariants} style={{ transformOrigin: `${cx}px ${scaleY((domainBottom + domainTop) / 2)}px` }}>
                  <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                    <path d={path} fill={color} opacity={0.3} />
                    <path d={path} fill="none" stroke={color} strokeWidth={1.5} />
                    {/* Median dot */}
                    <circle cx={cx} cy={scaleY(median)} r={3} fill={color} />
                  </g>
                </motion.g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (() => {
          const item = data[hoveredIndex];
          const sorted = [...item.values].sort((a, b) => a - b);
          const median = sorted[Math.floor(sorted.length / 2)];
          const min = sorted[0];
          const max = sorted[sorted.length - 1];
          return (
            <ChartTooltip
              visible
              x={tooltipPos.x}
              y={tooltipPos.y}
              label={item.label}
              items={[
                { label: 'Count', value: item.values.length, color: getColor(item, hoveredIndex) },
                { label: 'Median', value: formatValue(median) },
                { label: 'Min', value: formatValue(min) },
                { label: 'Max', value: formatValue(max) },
              ]}
            />
          );
        })()}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default ViolinPlot;
