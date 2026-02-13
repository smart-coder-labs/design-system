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

export interface ErrorBarChartDataPoint {
  label: string;
  value: number;
  error: number;
  color?: string;
}

export interface ErrorBarChartProps {
  data: ErrorBarChartDataPoint[];
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

export const ErrorBarChart: React.FC<ErrorBarChartProps> = ({
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

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const { yTicks, yMin, yMax } = useMemo(() => {
    const allMin = Math.min(...data.map((d) => d.value - d.error));
    const allMax = Math.max(...data.map((d) => d.value + d.error));
    const rawMin = Math.min(0, allMin);
    const yt = generateTicks(rawMin, allMax, 5);
    return { yTicks: yt, yMin: yt[0], yMax: yt[yt.length - 1] };
  }, [data]);

  const barWidth = useMemo(() => {
    const totalBars = data.length;
    const gap = 0.3;
    return (chartWidth / totalBars) * (1 - gap);
  }, [data.length, chartWidth]);

  const CAP_WIDTH_RATIO = 0.6;
  const MAX_CAP_WIDTH = 12;
  const capWidth = Math.min(barWidth * CAP_WIDTH_RATIO, MAX_CAP_WIDTH);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  const getBarX = useCallback(
    (index: number) => {
      const totalBars = data.length;
      const slotWidth = chartWidth / totalBars;
      return margin.left + index * slotWidth + (slotWidth - barWidth) / 2;
    },
    [data.length, chartWidth, margin.left, barWidth],
  );

  const gridHorizontalLines = useMemo(
    () => yTicks.map((t) => scaleY(t)),
    [yTicks, scaleY],
  );

  const yAxisTicks = useMemo(
    () => yTicks.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [yTicks, scaleY],
  );

  const xAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: getBarX(i) + barWidth / 2,
      label: d.label,
    })),
    [data, getBarX, barWidth],
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

  const barVariants = animated
    ? {
        hidden: { scaleY: 0, opacity: 0 },
        visible: { scaleY: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const lineVariants = animated
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: chartMotion.duration.normal, ease: chartMotion.easing } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} error bar chart with ${data.length} data points`
    : `Error bar chart with ${data.length} data points`;

  const baselineY = scaleY(Math.max(0, yMin));

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
            horizontalLines={gridHorizontalLines}
            verticalLines={[]}
          />

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const color = getColor(item, i);
              const bx = getBarX(i);
              const valueY = scaleY(item.value);
              const barH = Math.abs(baselineY - valueY);
              const barY = Math.min(baselineY, valueY);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const errorTop = scaleY(item.value + item.error);
              const errorBottom = scaleY(item.value - item.error);
              const centerX = bx + barWidth / 2;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <g key={i} opacity={dimmed ? 0.4 : 1}>
                  {/* Bar */}
                  <motion.rect
                    variants={barVariants}
                    x={bx}
                    y={barY}
                    width={barWidth}
                    height={barH}
                    fill={color}
                    fillOpacity={0.7}
                    rx={2}
                    stroke={isHovered ? color : 'none'}
                    strokeWidth={isHovered ? 2 : 0}
                    style={{ transformOrigin: `${bx + barWidth / 2}px ${baselineY}px` }}
                    {...interactiveProps}
                  />
                  {/* Error bar vertical line */}
                  <motion.line
                    variants={lineVariants}
                    x1={centerX}
                    y1={errorTop}
                    x2={centerX}
                    y2={errorBottom}
                    stroke="var(--color-text-primary)"
                    strokeWidth={1.5}
                    pointerEvents="none"
                  />
                  {/* Top cap */}
                  <motion.line
                    variants={lineVariants}
                    x1={centerX - capWidth / 2}
                    y1={errorTop}
                    x2={centerX + capWidth / 2}
                    y2={errorTop}
                    stroke="var(--color-text-primary)"
                    strokeWidth={1.5}
                    pointerEvents="none"
                  />
                  {/* Bottom cap */}
                  <motion.line
                    variants={lineVariants}
                    x1={centerX - capWidth / 2}
                    y1={errorBottom}
                    x2={centerX + capWidth / 2}
                    y2={errorBottom}
                    stroke="var(--color-text-primary)"
                    strokeWidth={1.5}
                    pointerEvents="none"
                  />
                </g>
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
              { label: 'Value', value: formatValue(data[hoveredIndex].value), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Error', value: `±${formatValue(data[hoveredIndex].error)}` },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ErrorBarChart;
