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

export interface HorizontalBarChartProps {
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

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
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

  // Wider left margin for horizontal labels, extra right margin for value labels
  const margin = { top: padding, right: padding + 40, bottom: padding + 20, left: padding + 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxValue = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value), 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(0, maxValue, 5), [maxValue]);
  const domainMax = ticks[ticks.length - 1];

  // Bar geometry — horizontal bars stacked vertically
  const barCount = data.length;
  const barGap = Math.max(4, chartHeight * 0.04);
  const barHeight = Math.max(4, (chartHeight - barGap * (barCount + 1)) / barCount);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  // Vertical grid lines at tick positions
  const gridVerticalLines = useMemo(
    () =>
      ticks.map((t) =>
        margin.left + linearScale(t, 0, domainMax, 0, chartWidth),
      ),
    [ticks, domainMax, margin.left, chartWidth],
  );

  // X-axis ticks (values along bottom)
  const xAxisTicks = useMemo(
    () =>
      ticks.map((t) => ({
        position: margin.left + linearScale(t, 0, domainMax, 0, chartWidth),
        label: formatValue(t),
      })),
    [ticks, domainMax, margin.left, chartWidth],
  );

  // Y-axis ticks (labels on left)
  const yAxisTicks = useMemo(
    () =>
      data.map((d, i) => ({
        position: margin.top + barGap + i * (barHeight + barGap) + barHeight / 2,
        label: d.label,
      })),
    [data, margin.top, barGap, barHeight],
  );

  const handleBarHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? data[index] : null, index);
    },
    [data, onDataPointHover],
  );

  const handleBarClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  // Animate bar width from 0 (growing left to right)
  const getBarVariants = (barW: number) =>
    animated
      ? {
          hidden: { width: 0 },
          visible: {
            width: Math.max(0, barW),
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} horizontal bar chart with ${data.length} data points`
    : `Horizontal bar chart with ${data.length} data points`;

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

          {/* Grid — vertical lines */}
          {showGrid && (
            <ChartGrid
              x={margin.left}
              y={margin.top}
              width={chartWidth}
              height={chartHeight}
              verticalLines={gridVerticalLines}
            />
          )}

          {/* Y-axis (category labels on left) */}
          {showLabels && (
            <ChartAxis
              type="y"
              x={margin.left}
              y={margin.top}
              length={chartHeight}
              ticks={yAxisTicks}
              fontSize={fontSize - 2}
            />
          )}

          {/* X-axis (value axis at bottom) */}
          {showLabels && (
            <ChartAxis
              type="x"
              x={margin.left}
              y={margin.top + chartHeight}
              length={chartWidth}
              ticks={xAxisTicks}
              fontSize={fontSize - 2}
            />
          )}

          {/* Bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const barW = linearScale(item.value, 0, domainMax, 0, chartWidth);
              const x = margin.left;
              const y = margin.top + barGap + i * (barHeight + barGap);
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <g key={i}>
                  <motion.rect
                    x={x}
                    y={y}
                    height={barHeight}
                    ry={Math.min(4, barHeight / 4)}
                    fill={color}
                    opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                    variants={getBarVariants(barW)}
                    {...(!animated && { width: Math.max(0, barW) })}
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
                    transition={
                      animated
                        ? undefined
                        : { duration: 0 }
                    }
                  />
                  {/* Value label at end of bar */}
                  {showLabels && (
                    <text
                      x={x + barW + 6}
                      y={y + barHeight / 2 + (fontSize - 2) / 3}
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 2}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                      textAnchor="start"
                    >
                      {formatValue(item.value)}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip */}
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

      {/* Legend */}
      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default HorizontalBarChart;
