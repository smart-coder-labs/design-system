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

export interface BubbleDataPoint {
  x: number;
  y: number;
  size: number;
  label?: string;
  color?: string;
}

export interface BubbleChartProps {
  data: BubbleDataPoint[];
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

export const BubbleChart: React.FC<BubbleChartProps> = ({
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

  const xValues = useMemo(() => data.map((d) => d.x), [data]);
  const yValues = useMemo(() => data.map((d) => d.y), [data]);
  const sizeValues = useMemo(() => data.map((d) => d.size), [data]);

  const xTicks = useMemo(() => generateTicks(Math.min(...xValues), Math.max(...xValues), 5), [xValues]);
  const yTicks = useMemo(() => generateTicks(Math.min(...yValues), Math.max(...yValues), 5), [yValues]);

  const xMin = xTicks[0];
  const xMax = xTicks[xTicks.length - 1];
  const yMin = yTicks[0];
  const yMax = yTicks[yTicks.length - 1];

  const sizeMin = useMemo(() => Math.min(...sizeValues), [sizeValues]);
  const sizeMax = useMemo(() => Math.max(...sizeValues), [sizeValues]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 0, chartWidth),
    [margin.left, chartWidth, xMin, xMax],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  const scaleRadius = useCallback(
    (v: number) => linearScale(v, sizeMin, sizeMax, 4, 24),
    [sizeMin, sizeMax],
  );

  const gridHorizontalLines = useMemo(() => yTicks.map((t) => scaleY(t)), [yTicks, scaleY]);
  const gridVerticalLines = useMemo(() => xTicks.map((t) => scaleX(t)), [xTicks, scaleX]);

  const yAxisTicks = useMemo(
    () => yTicks.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [yTicks, scaleY],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label ?? `Point ${i + 1}`, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} bubble chart with ${data.length} points`
    : `Bubble chart with ${data.length} points`;

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
            <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} horizontalLines={gridHorizontalLines} verticalLines={gridVerticalLines} />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const cx = scaleX(item.x);
              const cy = scaleY(item.y);
              const r = scaleRadius(item.size);
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
                <motion.g key={i} variants={itemVariants} style={{ transformOrigin: `${cx}px ${cy}px` }}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={color}
                    opacity={dimmed ? 0.2 : 0.55}
                    stroke={color}
                    strokeWidth={isHovered ? 2 : 1}
                    {...interactiveProps}
                  />
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
            label={data[hoveredIndex].label ?? `Point ${hoveredIndex + 1}`}
            items={[
              { label: 'X', value: formatValue(data[hoveredIndex].x), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Y', value: formatValue(data[hoveredIndex].y) },
              { label: 'Size', value: formatValue(data[hoveredIndex].size) },
            ]}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default BubbleChart;
