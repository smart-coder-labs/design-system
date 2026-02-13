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

export interface StripPlotDataPoint {
  label: string;
  values: number[];
  color?: string;
}

export interface StripPlotProps {
  data: StripPlotDataPoint[];
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

// Seeded pseudo-random for deterministic jitter
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export const StripPlot: React.FC<StripPlotProps> = ({
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

  const allValues = useMemo(() => {
    const vals: number[] = [];
    data.forEach((d) => vals.push(...d.values));
    return vals;
  }, [data]);

  const domainMin = useMemo(() => Math.min(...allValues), [allValues]);
  const domainMaxRaw = useMemo(() => Math.max(...allValues), [allValues]);
  const ticks = useMemo(() => generateTicks(domainMin, domainMaxRaw, 5), [domainMin, domainMaxRaw]);
  const domainLeft = ticks[0];
  const domainRight = ticks[ticks.length - 1];

  const groupCount = data.length;
  const bandHeight = chartHeight / groupCount;
  const dotRadius = 3.5;

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, domainLeft, domainRight, 0, chartWidth),
    [margin.left, chartWidth, domainLeft, domainRight],
  );

  const gridVerticalLines = useMemo(
    () => ticks.map((t) => scaleX(t)),
    [ticks, scaleX],
  );

  const xAxisTicks = useMemo(
    () => ticks.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [ticks, scaleX],
  );

  const yAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: margin.top + i * bandHeight + bandHeight / 2,
      label: d.label,
    })),
    [data, margin.top, bandHeight],
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

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} strip plot with ${data.length} groups`
    : `Strip plot with ${data.length} groups`;

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
            <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} verticalLines={gridVerticalLines} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, groupIndex) => {
              const cy = margin.top + groupIndex * bandHeight + bandHeight / 2;
              const color = getColor(item, groupIndex);
              const isHovered = hoveredIndex === groupIndex;
              const dimmed = hoveredIndex !== null && !isHovered;
              const jitterRange = bandHeight * 0.35;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(groupIndex, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(groupIndex, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(groupIndex),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g key={groupIndex} variants={itemVariants} style={{ transformOrigin: `${margin.left + chartWidth / 2}px ${cy}px` }}>
                  <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                    {item.values.map((val, vi) => {
                      const jitter = (seededRandom(groupIndex * 1000 + vi) - 0.5) * 2 * jitterRange;
                      return (
                        <circle
                          key={vi}
                          cx={scaleX(val)}
                          cy={cy + jitter}
                          r={dotRadius}
                          fill={color}
                          opacity={0.7}
                        />
                      );
                    })}
                  </g>
                </motion.g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Count', value: data[hoveredIndex].values.length, color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Min', value: formatValue(Math.min(...data[hoveredIndex].values)) },
              { label: 'Max', value: formatValue(Math.max(...data[hoveredIndex].values)) },
            ]}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default StripPlot;
