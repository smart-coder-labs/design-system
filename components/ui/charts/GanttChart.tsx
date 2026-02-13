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

export interface GanttChartDataItem {
  label: string;
  start: number;
  end: number;
  color?: string;
  progress?: number;
}

export interface GanttChartProps {
  data: GanttChartDataItem[];
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

export const GanttChart: React.FC<GanttChartProps> = ({
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
  const { width, height: baseHeight, fontSize, padding } = chartSizes[size];

  const barHeight = size === 'sm' ? 18 : size === 'md' ? 24 : 30;
  const barGap = size === 'sm' ? 6 : 8;
  const labelWidth = padding + 80;

  const dynamicHeight = Math.max(baseHeight, padding * 2 + 20 + data.length * (barHeight + barGap));
  const height = dynamicHeight;

  const margin = { top: padding, right: padding, bottom: padding + 20, left: labelWidth };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const { xTicks, xMin, xMax } = useMemo(() => {
    const starts = data.map((d) => d.start);
    const ends = data.map((d) => d.end);
    const rawMin = Math.min(...starts);
    const rawMax = Math.max(...ends);
    const xt = generateTicks(rawMin, rawMax, 6);
    return {
      xTicks: xt,
      xMin: xt[0],
      xMax: xt[xt.length - 1],
    };
  }, [data]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 0, chartWidth),
    [margin.left, xMin, xMax, chartWidth],
  );

  const gridVerticalLines = useMemo(
    () => xTicks.map((t) => scaleX(t)),
    [xTicks, scaleX],
  );

  const xAxisTicks = useMemo(
    () => xTicks.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [xTicks, scaleX],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { scaleX: 0, opacity: 0 },
        visible: { scaleX: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} Gantt chart with ${data.length} tasks`
    : `Gantt chart with ${data.length} tasks`;

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

          <ChartGrid
            x={margin.left}
            y={margin.top}
            width={chartWidth}
            height={chartHeight}
            verticalLines={gridVerticalLines}
          />

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

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const x1 = scaleX(item.start);
              const x2 = scaleX(item.end);
              const barW = Math.max(0, x2 - x1);
              const y = margin.top + i * (barHeight + barGap);
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
                <React.Fragment key={i}>
                  {showLabels && (
                    <text
                      x={margin.left - 8}
                      y={y + barHeight / 2}
                      textAnchor="end"
                      dominantBaseline="central"
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 2}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                      opacity={dimmed ? 0.4 : 1}
                    >
                      {item.label}
                    </text>
                  )}

                  {/* Background bar */}
                  <motion.rect
                    variants={itemVariants}
                    x={x1}
                    y={y}
                    width={barW}
                    height={barHeight}
                    rx={4}
                    fill={color}
                    fillOpacity={dimmed ? 0.2 : 0.35}
                    style={{ transformOrigin: `${x1}px ${y + barHeight / 2}px` }}
                    {...interactiveProps}
                  />

                  {/* Progress overlay */}
                  {item.progress != null && item.progress > 0 && (
                    <motion.rect
                      variants={itemVariants}
                      x={x1}
                      y={y}
                      width={barW * Math.min(1, item.progress)}
                      height={barHeight}
                      rx={4}
                      fill={color}
                      fillOpacity={dimmed ? 0.4 : 0.85}
                      style={{ transformOrigin: `${x1}px ${y + barHeight / 2}px` }}
                      pointerEvents="none"
                    />
                  )}

                  {isHovered && (
                    <rect
                      x={x1}
                      y={y}
                      width={barW}
                      height={barHeight}
                      rx={4}
                      fill="none"
                      stroke={color}
                      strokeWidth={2}
                      pointerEvents="none"
                    />
                  )}
                </React.Fragment>
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
              { label: 'Start', value: formatValue(data[hoveredIndex].start), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'End', value: formatValue(data[hoveredIndex].end) },
              ...(data[hoveredIndex].progress != null
                ? [{ label: 'Progress', value: `${Math.round(data[hoveredIndex].progress! * 100)}%` }]
                : []),
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default GanttChart;
