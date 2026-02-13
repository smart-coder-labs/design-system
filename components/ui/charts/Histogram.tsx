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

export interface HistogramProps {
  data: Array<{ label: string; value: number; color?: string }>;
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

export const Histogram: React.FC<HistogramProps> = ({
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

  const maxValue = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value), 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(0, maxValue, 5), [maxValue]);
  const domainMax = ticks[ticks.length - 1];

  const barCount = data.length;
  // Histogram bars have no gap between them (contiguous bins)
  const barWidth = Math.max(4, chartWidth / barCount);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const gridHorizontalLines = useMemo(
    () =>
      ticks.map((t) =>
        margin.top + chartHeight - linearScale(t, 0, domainMax, 0, chartHeight),
      ),
    [ticks, domainMax, margin.top, chartHeight],
  );

  const yAxisTicks = useMemo(
    () =>
      ticks.map((t) => ({
        position: margin.top + chartHeight - linearScale(t, 0, domainMax, 0, chartHeight),
        label: formatValue(t),
      })),
    [ticks, domainMax, margin.top, chartHeight],
  );

  const xAxisTicks = useMemo(
    () =>
      data.map((d, i) => ({
        position: margin.left + i * barWidth + barWidth / 2,
        label: d.label,
      })),
    [data, margin.left, barWidth],
  );

  const handleBarHover = useCallback(
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

  const handleBarClick = useCallback(
    (index: number) => { onDataPointClick?.(data[index], index); },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }
    : undefined;

  const getBarVariants = (barHeight: number, barY: number) =>
    animated
      ? {
          hidden: { y: margin.top + chartHeight, height: 0 },
          visible: {
            y: barY,
            height: Math.max(0, barHeight),
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} histogram with ${data.length} bins`
    : `Histogram with ${data.length} bins`;

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
              const barHeight = linearScale(item.value, 0, domainMax, 0, chartHeight);
              const x = margin.left + i * barWidth;
              const y = margin.top + chartHeight - barHeight;
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <motion.rect
                  key={i}
                  x={x}
                  width={barWidth}
                  fill={color}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={1}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  variants={getBarVariants(barHeight, y)}
                  {...(!animated && { y, height: Math.max(0, barHeight) })}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleBarHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleBarHover(i, e),
                    onMouseLeave: () => handleBarHover(null),
                    onClick: () => handleBarClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${item.label}: ${formatValue(item.value)}`,
                    tabIndex: -1,
                  })}
                  transition={animated ? undefined : { duration: 0 }}
                />
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
            value={formatValue(data[hoveredIndex].value)}
            color={getColor(data[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default Histogram;
