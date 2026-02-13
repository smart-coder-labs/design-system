'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartGrid } from './shared/ChartGrid';
import { ChartAxis } from './shared/ChartAxis';

export interface DivergingBarChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  positiveColor?: string;
  negativeColor?: string;
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const DivergingBarChart: React.FC<DivergingBarChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showGrid = true,
  showLabels = true,
  colorScheme,
  positiveColor = 'var(--color-status-success)',
  negativeColor = 'var(--color-status-error)',
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { width, height, fontSize, padding } = chartSizes[size];

  // Extra left margin for category labels
  const margin = { top: padding, right: padding + 20, bottom: padding + 20, left: padding + 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Compute symmetric domain around zero
  const absMax = useMemo(() => {
    const max = Math.max(...data.map((d) => Math.abs(d.value)), 1);
    return max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(-absMax, absMax, 7), [absMax]);
  const domainMin = ticks[0];
  const domainMax = ticks[ticks.length - 1];

  // Center axis x position (value = 0)
  const centerX = margin.left + linearScale(0, domainMin, domainMax, 0, chartWidth);

  // Bar geometry — horizontal bars stacked vertically
  const barCount = data.length;
  const barGap = Math.max(4, chartHeight * 0.04);
  const barHeight = Math.max(4, (chartHeight - barGap * (barCount + 1)) / barCount);

  const getColor = useCallback(
    (item: { color?: string; value: number }, index: number) => {
      if (item.color) return item.color;
      if (colorScheme) return colorScheme[index % colorScheme.length];
      return item.value >= 0 ? positiveColor : negativeColor;
    },
    [colorScheme, positiveColor, negativeColor],
  );

  // Vertical grid lines at tick positions
  const gridVerticalLines = useMemo(
    () =>
      ticks.map((t) =>
        margin.left + linearScale(t, domainMin, domainMax, 0, chartWidth),
      ),
    [ticks, domainMin, domainMax, margin.left, chartWidth],
  );

  // X-axis ticks (values along bottom)
  const xAxisTicks = useMemo(
    () =>
      ticks.map((t) => ({
        position: margin.left + linearScale(t, domainMin, domainMax, 0, chartWidth),
        label: formatValue(t),
      })),
    [ticks, domainMin, domainMax, margin.left, chartWidth],
  );

  // Y-axis ticks (category labels on left)
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

  // Animate bar width from center axis outward
  const getBarVariants = (barW: number, barX: number) =>
    animated
      ? {
          hidden: { width: 0, x: centerX },
          visible: {
            width: Math.max(0, barW),
            x: barX,
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const ariaLabel = title
    ? `${title} diverging bar chart with ${data.length} data points`
    : `Diverging bar chart with ${data.length} data points`;

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

          {/* Central vertical axis line at zero */}
          <line
            x1={centerX}
            y1={margin.top}
            x2={centerX}
            y2={margin.top + chartHeight}
            stroke="var(--color-text-tertiary)"
            strokeWidth={1.5}
          />

          {/* Bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const scaledValue = linearScale(Math.abs(item.value), 0, domainMax, 0, chartWidth / 2);
              const barW = Math.max(0, scaledValue);
              const barX = item.value >= 0 ? centerX : centerX - barW;
              const y = margin.top + barGap + i * (barHeight + barGap);
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <motion.rect
                  key={i}
                  y={y}
                  height={barHeight}
                  ry={Math.min(4, barHeight / 4)}
                  fill={color}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  variants={getBarVariants(barW, barX)}
                  {...(!animated && { x: barX, width: barW })}
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
    </ChartContainer>
  );
};

export default DivergingBarChart;
