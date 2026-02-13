'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartGrid } from './shared/ChartGrid';
import { ChartAxis } from './shared/ChartAxis';

export interface ColumnRangeChartProps {
  data: Array<{ label: string; min: number; max: number; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const ColumnRangeChart: React.FC<ColumnRangeChartProps> = ({
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

  // Compute domain from global min/max across all data
  const { domainMin, domainMax, ticks } = useMemo(() => {
    const allMin = Math.min(...data.map((d) => d.min));
    const allMax = Math.max(...data.map((d) => d.max));
    const t = generateTicks(allMin, allMax, 5);
    return { domainMin: t[0], domainMax: t[t.length - 1], ticks: t };
  }, [data]);

  // Bar geometry
  const barCount = data.length;
  const barGap = Math.max(4, chartWidth * 0.04);
  const barWidth = Math.max(4, (chartWidth - barGap * (barCount + 1)) / barCount);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  // Grid horizontal line positions
  const gridHorizontalLines = useMemo(
    () =>
      ticks.map((t) =>
        margin.top + chartHeight - linearScale(t, domainMin, domainMax, 0, chartHeight),
      ),
    [ticks, domainMin, domainMax, margin.top, chartHeight],
  );

  // Axis ticks
  const yAxisTicks = useMemo(
    () =>
      ticks.map((t) => ({
        position: margin.top + chartHeight - linearScale(t, domainMin, domainMax, 0, chartHeight),
        label: formatValue(t),
      })),
    [ticks, domainMin, domainMax, margin.top, chartHeight],
  );

  const xAxisTicks = useMemo(
    () =>
      data.map((d, i) => ({
        position: margin.left + barGap + i * (barWidth + barGap) + barWidth / 2,
        label: d.label,
      })),
    [data, margin.left, barGap, barWidth],
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

  // Animate bar growing from min to max (height grows upward from min position)
  const getBarVariants = (barH: number, barY: number) =>
    animated
      ? {
          hidden: {
            y: margin.top + chartHeight - linearScale(0, domainMin, domainMax, 0, chartHeight),
            height: 0,
          },
          visible: {
            y: barY,
            height: Math.max(0, barH),
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const ariaLabel = title
    ? `${title} column range chart with ${data.length} data points`
    : `Column range chart with ${data.length} data points`;

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

          {/* Grid */}
          {showGrid && (
            <ChartGrid
              x={margin.left}
              y={margin.top}
              width={chartWidth}
              height={chartHeight}
              horizontalLines={gridHorizontalLines}
            />
          )}

          {/* Y-axis */}
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

          {/* X-axis */}
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

          {/* Floating range bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const yMax = margin.top + chartHeight - linearScale(item.max, domainMin, domainMax, 0, chartHeight);
              const yMin = margin.top + chartHeight - linearScale(item.min, domainMin, domainMax, 0, chartHeight);
              const barH = yMin - yMax;
              const x = margin.left + barGap + i * (barWidth + barGap);
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <motion.rect
                  key={i}
                  x={x}
                  width={barWidth}
                  rx={Math.min(6, barWidth / 4)}
                  ry={Math.min(6, barWidth / 4)}
                  fill={color}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  variants={getBarVariants(barH, yMax)}
                  {...(!animated && { y: yMax, height: Math.max(0, barH) })}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleBarHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleBarHover(i, e),
                    onMouseLeave: () => handleBarHover(null),
                    onClick: () => handleBarClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${item.label}: ${formatValue(item.min)} – ${formatValue(item.max)}`,
                    tabIndex: -1,
                  })}
                  transition={animated ? undefined : { duration: 0 }}
                />
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip showing min and max */}
        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Min', value: formatValue(data[hoveredIndex].min), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Max', value: formatValue(data[hoveredIndex].max), color: getColor(data[hoveredIndex], hoveredIndex) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ColumnRangeChart;
