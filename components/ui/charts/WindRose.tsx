'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { polarToCartesian, describeArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface WindRoseProps {
  data: Array<{ direction: string; values: number[] }>;
  series: Array<{ name: string; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

const GRID_LEVELS = 4;

export const WindRose: React.FC<WindRoseProps> = ({
  data,
  series,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredSegment, setHoveredSegment] = useState<{ dirIndex: number; seriesIndex: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2 - padding - fontSize;

  const dirCount = data.length;
  const sectorAngle = 360 / dirCount;
  const sectorGap = 1;

  const maxTotal = useMemo(
    () => Math.max(...data.map((d) => d.values.reduce((sum, v) => sum + v, 0)), 0) || 100,
    [data],
  );

  const getColor = useCallback(
    (seriesItem: { color?: string }, index: number) =>
      seriesItem.color ?? palette[index % palette.length],
    [palette],
  );

  const handleSegmentHover = useCallback(
    (dirIndex: number, seriesIndex: number, event: React.MouseEvent) => {
      setHoveredSegment({ dirIndex, seriesIndex });
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(
        { direction: data[dirIndex].direction, series: series[seriesIndex].name, value: data[dirIndex].values[seriesIndex] },
        dirIndex,
      );
    },
    [data, series, onDataPointHover],
  );

  const handleSegmentLeave = useCallback(() => {
    setHoveredSegment(null);
    onDataPointHover?.(null, null);
  }, [onDataPointHover]);

  const handleSegmentClick = useCallback(
    (dirIndex: number, seriesIndex: number) => {
      onDataPointClick?.(
        { direction: data[dirIndex].direction, series: series[seriesIndex].name, value: data[dirIndex].values[seriesIndex] },
        dirIndex,
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
    ? `${title} wind rose chart with ${dirCount} directions and ${series.length} series`
    : `Wind rose chart with ${dirCount} directions and ${series.length} series`;

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

          {/* Concentric grid circles */}
          {Array.from({ length: GRID_LEVELS }, (_, level) => {
            const r = (radius * (level + 1)) / GRID_LEVELS;
            return (
              <circle
                key={`grid-${level}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="var(--color-border-primary)"
                strokeWidth={0.5}
                opacity={0.4}
              />
            );
          })}

          {/* Axis lines from center to each direction */}
          {data.map((_, i) => {
            const angle = i * sectorAngle;
            const { x, y } = polarToCartesian(cx, cy, radius, angle);
            return (
              <line
                key={`axis-${i}`}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--color-border-primary)"
                strokeWidth={0.5}
                opacity={0.3}
              />
            );
          })}

          {/* Stacked sectors */}
          {data.map((d, di) => {
            const baseAngle = di * sectorAngle - sectorAngle / 2;
            const startAngle = baseAngle + sectorGap / 2;
            const endAngle = baseAngle + sectorAngle - sectorGap / 2;
            let cumulative = 0;

            return d.values.map((val, si) => {
              const innerR = (cumulative / maxTotal) * radius;
              cumulative += val;
              const outerR = (cumulative / maxTotal) * radius;
              if (val <= 0) return null;

              const color = getColor(series[si] ?? {}, si);
              const isHovered =
                hoveredSegment !== null &&
                hoveredSegment.dirIndex === di &&
                hoveredSegment.seriesIndex === si;
              const isFaded = hoveredSegment !== null && !isHovered;

              const path = describeArc(cx, cy, outerR, startAngle, endAngle);
              const innerPath = describeArc(cx, cy, innerR, startAngle, endAngle);

              return (
                <motion.path
                  key={`sector-${di}-${si}`}
                  d={path}
                  fill={color}
                  fillOpacity={isFaded ? 0.2 : 0.75}
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 0.5}
                  opacity={isFaded ? 0.4 : 1}
                  cursor={interactive ? 'pointer' : undefined}
                  initial={animated ? { opacity: 0, scale: 0.3 } : undefined}
                  animate={animated ? { opacity: isFaded ? 0.4 : 1, scale: 1 } : { opacity: isFaded ? 0.4 : 1 }}
                  transition={animated ? { type: 'spring', ...chartMotion.spring, delay: di * 0.03 + si * 0.05 } : undefined}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                  onMouseEnter={interactive ? (e: React.MouseEvent) => handleSegmentHover(di, si, e) : undefined}
                  onMouseMove={interactive ? (e: React.MouseEvent) => handleSegmentHover(di, si, e) : undefined}
                  onMouseLeave={interactive ? handleSegmentLeave : undefined}
                  onClick={interactive ? () => handleSegmentClick(di, si) : undefined}
                  role={interactive ? 'button' : undefined}
                  aria-label={`${d.direction} ${series[si]?.name}: ${formatValue(val)}`}
                  tabIndex={interactive ? -1 : undefined}
                />
              );
            });
          })}

          {/* Direction labels */}
          {showLabels &&
            data.map((d, i) => {
              const angle = i * sectorAngle;
              const labelRadius = radius + fontSize;
              const { x, y } = polarToCartesian(cx, cy, labelRadius, angle);
              return (
                <text
                  key={`label-${i}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={fontSize - 1}
                  fontWeight={500}
                  fill="var(--color-text-secondary)"
                  pointerEvents="none"
                >
                  {d.direction}
                </text>
              );
            })}
        </svg>

        {showTooltip && interactive && hoveredSegment !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredSegment.dirIndex].direction}
            value={`${series[hoveredSegment.seriesIndex]?.name}: ${formatValue(data[hoveredSegment.dirIndex].values[hoveredSegment.seriesIndex])}`}
            color={getColor(series[hoveredSegment.seriesIndex] ?? {}, hoveredSegment.seriesIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default WindRose;
