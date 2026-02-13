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

export interface LollipopChartProps {
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
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const LollipopChart: React.FC<LollipopChartProps> = ({
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

  const maxValue = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value), 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(0, maxValue, 5), [maxValue]);
  const domainMax = ticks[ticks.length - 1];

  const barCount = data.length;
  const itemGap = Math.max(4, chartWidth * 0.04);
  const itemWidth = Math.max(4, (chartWidth - itemGap * (barCount + 1)) / barCount);
  const dotRadius = size === 'sm' ? 4 : size === 'md' ? 6 : 8;
  const stickWidth = size === 'sm' ? 1.5 : 2;

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
        position: margin.left + itemGap + i * (itemWidth + itemGap) + itemWidth / 2,
        label: d.label,
      })),
    [data, margin.left, itemGap, itemWidth],
  );

  const handleHover = useCallback(
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

  const handleClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const ariaLabel = title
    ? `${title} lollipop chart with ${data.length} data points`
    : `Lollipop chart with ${data.length} data points`;

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

          {/* Lollipops */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const cx = margin.left + itemGap + i * (itemWidth + itemGap) + itemWidth / 2;
              const baseline = margin.top + chartHeight;
              const valueY = margin.top + chartHeight - linearScale(item.value, 0, domainMax, 0, chartHeight);
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <g
                  key={i}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseLeave: () => handleHover(null),
                    onClick: () => handleClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${item.label}: ${formatValue(item.value)}`,
                    tabIndex: -1,
                  })}
                >
                  {/* Stick */}
                  <motion.line
                    x1={cx}
                    x2={cx}
                    stroke={color}
                    strokeWidth={stickWidth}
                    strokeLinecap="round"
                    variants={animated ? {
                      hidden: { y1: baseline, y2: baseline },
                      visible: {
                        y1: valueY,
                        y2: baseline,
                        transition: { type: 'spring', ...chartMotion.spring },
                      },
                    } : undefined}
                    {...(!animated && { y1: valueY, y2: baseline })}
                  />

                  {/* Dot */}
                  <motion.circle
                    cx={cx}
                    r={isHovered ? dotRadius * 1.4 : dotRadius}
                    fill={color}
                    stroke="var(--color-bg-primary)"
                    strokeWidth={2}
                    variants={animated ? {
                      hidden: { cy: baseline, opacity: 0 },
                      visible: {
                        cy: valueY,
                        opacity: 1,
                        transition: { type: 'spring', ...chartMotion.spring },
                      },
                    } : undefined}
                    {...(!animated && { cy: valueY })}
                    transition={!animated ? { duration: 0 } : undefined}
                  />
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
    </ChartContainer>
  );
};

export default LollipopChart;
