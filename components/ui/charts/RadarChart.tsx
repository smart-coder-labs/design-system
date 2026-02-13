'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { polarToCartesian, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface RadarChartProps {
  data: Array<{ label: string; values: number[] }>;
  series: Array<{ name: string; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

const GRID_LEVELS = 5;

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  series,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLegend = false,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<{ seriesIndex: number; axisIndex: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2 - padding - fontSize;

  const axisCount = data.length;
  const angleStep = 360 / axisCount;

  const maxValue = useMemo(
    () => Math.max(...data.flatMap((d) => d.values), 0) || 100,
    [data],
  );

  const getColor = useCallback(
    (seriesItem: { color?: string }, index: number) =>
      seriesItem.color ?? palette[index % palette.length],
    [palette],
  );

  // Build polygon points for a grid level
  const gridPolygon = useCallback(
    (level: number) => {
      const r = (radius * level) / GRID_LEVELS;
      return Array.from({ length: axisCount }, (_, i) => {
        const { x, y } = polarToCartesian(cx, cy, r, i * angleStep);
        return `${x},${y}`;
      }).join(' ');
    },
    [cx, cy, radius, axisCount, angleStep],
  );

  // Build polygon points for a series
  const seriesPolygon = useCallback(
    (seriesIndex: number) =>
      data.map((d, i) => {
        const value = d.values[seriesIndex] ?? 0;
        const r = (value / maxValue) * radius;
        const { x, y } = polarToCartesian(cx, cy, r, i * angleStep);
        return `${x},${y}`;
      }).join(' '),
    [data, maxValue, radius, cx, cy, angleStep],
  );

  const handlePointHover = useCallback(
    (seriesIndex: number, axisIndex: number, event: React.MouseEvent) => {
      setHoveredPoint({ seriesIndex, axisIndex });
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(
        { axis: data[axisIndex].label, series: series[seriesIndex].name, value: data[axisIndex].values[seriesIndex] },
        axisIndex,
      );
    },
    [data, series, onDataPointHover],
  );

  const handlePointLeave = useCallback(() => {
    setHoveredPoint(null);
    onDataPointHover?.(null, null);
  }, [onDataPointHover]);

  const handlePointClick = useCallback(
    (seriesIndex: number, axisIndex: number) => {
      onDataPointClick?.(
        { axis: data[axisIndex].label, series: series[seriesIndex].name, value: data[axisIndex].values[seriesIndex] },
        axisIndex,
      );
    },
    [data, series, onDataPointClick],
  );

  const legendItems = useMemo(
    () =>
      series.map((s, i) => ({
        label: s.name,
        color: getColor(s, i),
      })),
    [series, getColor],
  );

  const ariaLabel = title
    ? `${title} radar chart with ${axisCount} axes and ${series.length} series`
    : `Radar chart with ${axisCount} axes and ${series.length} series`;

  return (
    <ChartContainer
      variant={variant}
      animated={animated}
      title={title}
      subtitle={subtitle}
      className={className}
    >
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid var(--color-accent-blue)';
            e.currentTarget.style.outlineOffset = '2px';
            e.currentTarget.style.borderRadius = '8px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
        >
          <title>{ariaLabel}</title>

          {/* Concentric grid polygons */}
          {Array.from({ length: GRID_LEVELS }, (_, level) => (
            <polygon
              key={`grid-${level}`}
              points={gridPolygon(level + 1)}
              fill="none"
              stroke="var(--color-border-primary)"
              strokeWidth={0.5}
              opacity={0.4}
            />
          ))}

          {/* Axis lines from center to vertices */}
          {data.map((_, i) => {
            const { x, y } = polarToCartesian(cx, cy, radius, i * angleStep);
            return (
              <line
                key={`axis-${i}`}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--color-border-primary)"
                strokeWidth={0.5}
                opacity={0.4}
              />
            );
          })}

          {/* Axis labels */}
          {data.map((d, i) => {
            const labelRadius = radius + fontSize;
            const { x, y } = polarToCartesian(cx, cy, labelRadius, i * angleStep);
            return (
              <text
                key={`label-${i}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize - 2}
                fill="var(--color-text-secondary)"
                pointerEvents="none"
              >
                {d.label}
              </text>
            );
          })}

          {/* Series polygons */}
          {series.map((s, si) => {
            const color = getColor(s, si);
            const isHoveredSeries = hoveredPoint !== null && hoveredPoint.seriesIndex === si;
            const isFaded = hoveredPoint !== null && !isHoveredSeries;

            return (
              <motion.polygon
                key={`series-${si}`}
                points={seriesPolygon(si)}
                fill={color}
                fillOpacity={isFaded ? 0.05 : 0.15}
                stroke={color}
                strokeWidth={isFaded ? 1 : 2}
                opacity={isFaded ? 0.3 : 1}
                initial={animated ? { opacity: 0, scale: 0.6 } : undefined}
                animate={animated ? { opacity: isFaded ? 0.3 : 1, scale: 1 } : { opacity: isFaded ? 0.3 : 1 }}
                transition={animated ? { type: 'spring', ...chartMotion.spring, delay: si * 0.1 } : undefined}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            );
          })}

          {/* Data points */}
          {interactive &&
            series.map((s, si) =>
              data.map((d, ai) => {
                const value = d.values[si] ?? 0;
                const r = (value / maxValue) * radius;
                const { x, y } = polarToCartesian(cx, cy, r, ai * angleStep);
                const color = getColor(s, si);
                const isHovered =
                  hoveredPoint !== null &&
                  hoveredPoint.seriesIndex === si &&
                  hoveredPoint.axisIndex === ai;

                return (
                  <motion.circle
                    key={`point-${si}-${ai}`}
                    cx={x}
                    cy={y}
                    r={isHovered ? 5 : 3}
                    fill={color}
                    stroke="var(--color-bg-primary)"
                    strokeWidth={2}
                    cursor="pointer"
                    initial={animated ? { opacity: 0, scale: 0 } : undefined}
                    animate={animated ? { opacity: 1, scale: 1 } : undefined}
                    transition={animated ? { type: 'spring', ...chartMotion.spring, delay: si * 0.1 + 0.2 } : undefined}
                    onMouseEnter={(e: React.MouseEvent) => handlePointHover(si, ai, e)}
                    onMouseMove={(e: React.MouseEvent) => handlePointHover(si, ai, e)}
                    onMouseLeave={handlePointLeave}
                    onClick={() => handlePointClick(si, ai)}
                    role="button"
                    aria-label={`${s.name} - ${d.label}: ${formatValue(value)}`}
                    tabIndex={-1}
                  />
                );
              }),
            )}
        </svg>

        {showTooltip && interactive && hoveredPoint !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredPoint.axisIndex].label}
            value={`${series[hoveredPoint.seriesIndex].name}: ${formatValue(data[hoveredPoint.axisIndex].values[hoveredPoint.seriesIndex])}`}
            color={getColor(series[hoveredPoint.seriesIndex], hoveredPoint.seriesIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default RadarChart;
