'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ParallelCoordinatesData {
  axes: string[];
  items: Array<{ label: string; values: number[]; color?: string }>;
}

export interface ParallelCoordinatesProps {
  data: ParallelCoordinatesData;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const ParallelCoordinates: React.FC<ParallelCoordinatesProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
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

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 20 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const axisCount = data.axes.length;
  const tickCount = 5;

  const axisScales = useMemo(() => {
    return data.axes.map((_, axisIdx) => {
      const vals = data.items.map((item) => item.values[axisIdx]);
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      return { min, max };
    });
  }, [data.axes, data.items]);

  const axisX = useCallback(
    (axisIdx: number) =>
      margin.left + (axisCount > 1 ? (axisIdx / (axisCount - 1)) * chartWidth : chartWidth / 2),
    [margin.left, axisCount, chartWidth],
  );

  const scaleY = useCallback(
    (value: number, axisIdx: number) => {
      const { min, max } = axisScales[axisIdx];
      return margin.top + chartHeight - linearScale(value, min, max, 0, chartHeight);
    },
    [margin.top, chartHeight, axisScales],
  );

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const axisTicks = useMemo(() => {
    return axisScales.map(({ min, max }) => {
      const ticks: number[] = [];
      for (let i = 0; i < tickCount; i++) {
        ticks.push(min + (i / (tickCount - 1)) * (max - min));
      }
      return ticks;
    });
  }, [axisScales]);

  const polylines = useMemo(() => {
    return data.items.map((item) => {
      const points = item.values.map((val, axisIdx) => {
        const x = axisX(axisIdx);
        const y = scaleY(val, axisIdx);
        return `${x},${y}`;
      });
      return `M${points.join('L')}`;
    });
  }, [data.items, axisX, scaleY]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data.items[index] : null, index);
    },
    [data.items, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(data.items[index], index); },
    [data.items, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} parallel coordinates chart with ${data.items.length} items and ${axisCount} axes`
    : `Parallel coordinates chart with ${data.items.length} items and ${axisCount} axes`;

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

          {/* Axes */}
          {data.axes.map((axisLabel, axisIdx) => {
            const x = axisX(axisIdx);
            return (
              <g key={axisIdx}>
                <line
                  x1={x}
                  y1={margin.top}
                  x2={x}
                  y2={margin.top + chartHeight}
                  stroke="var(--color-border-primary)"
                  strokeWidth={1}
                />
                {/* Tick marks and values */}
                {showLabels && axisTicks[axisIdx].map((tick, tickIdx) => {
                  const ty = scaleY(tick, axisIdx);
                  return (
                    <g key={tickIdx}>
                      <line
                        x1={x - 3}
                        y1={ty}
                        x2={x + 3}
                        y2={ty}
                        stroke="var(--color-border-primary)"
                        strokeWidth={1}
                      />
                      <text
                        x={x}
                        y={ty - 6}
                        textAnchor="middle"
                        fontSize={fontSize - 3}
                        fill="var(--color-text-tertiary)"
                      >
                        {formatValue(tick)}
                      </text>
                    </g>
                  );
                })}
                {/* Axis label at bottom */}
                {showLabels && (
                  <text
                    x={x}
                    y={margin.top + chartHeight + 16}
                    textAnchor="middle"
                    fontSize={fontSize - 2}
                    fill="var(--color-text-secondary)"
                  >
                    {axisLabel}
                  </text>
                )}
              </g>
            );
          })}

          {/* Polylines */}
          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.items.map((item, i) => {
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.path
                  key={i}
                  variants={itemVariants}
                  d={polylines[i]}
                  fill="none"
                  stroke={color}
                  strokeWidth={isHovered ? 3 : 1.5}
                  opacity={dimmed ? 0.2 : 1}
                  strokeLinejoin="round"
                  {...interactiveProps}
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
            label={data.items[hoveredIndex].label}
            items={data.axes.map((axis, axisIdx) => ({
              label: axis,
              value: formatValue(data.items[hoveredIndex].values[axisIdx]),
              color: getColor(data.items[hoveredIndex], hoveredIndex),
            }))}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ParallelCoordinates;
