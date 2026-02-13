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

export interface SpanChartDataPoint {
  label: string;
  start: number;
  end: number;
  color?: string;
}

export interface SpanChartProps {
  data: SpanChartDataPoint[];
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

export const SpanChart: React.FC<SpanChartProps> = ({
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

  const rowHeight = Math.max(20, baseHeight / Math.max(data.length + 1, 4));
  const height = Math.max(baseHeight, data.length * rowHeight + padding * 2 + 20);

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const { xTicks, xMin, xMax } = useMemo(() => {
    const allValues = data.flatMap((d) => [d.start, d.end]);
    const rawMin = Math.min(...allValues);
    const rawMax = Math.max(...allValues);
    const xt = generateTicks(rawMin, rawMax, 5);
    return { xTicks: xt, xMin: xt[0], xMax: xt[xt.length - 1] };
  }, [data]);

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 0, chartWidth),
    [margin.left, xMin, xMax, chartWidth],
  );

  const getRowY = useCallback(
    (index: number) => margin.top + (index + 0.5) * (chartHeight / data.length),
    [margin.top, chartHeight, data.length],
  );

  const barHeight = useMemo(
    () => Math.max(8, (chartHeight / data.length) * 0.6),
    [chartHeight, data.length],
  );

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scaleX: 0 },
        visible: { opacity: 1, scaleX: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} span chart with ${data.length} spans`
    : `Span chart with ${data.length} spans`;

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

          <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} verticalLines={gridVerticalLines} />

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          {/* Y axis labels */}
          {showLabels && data.map((item, i) => (
            <text
              key={i}
              x={margin.left - 8}
              y={getRowY(i) + 4}
              textAnchor="end"
              fill="var(--color-text-tertiary)"
              fontSize={fontSize - 2}
              fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
            >
              {item.label}
            </text>
          ))}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const x1 = scaleX(item.start);
              const x2 = scaleX(item.end);
              const y = getRowY(i);
              const w = Math.max(1, x2 - x1);
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
                <motion.rect
                  key={i}
                  variants={itemVariants}
                  x={x1}
                  y={y - barHeight / 2}
                  width={w}
                  height={barHeight}
                  fill={color}
                  fillOpacity={isHovered ? 0.9 : 0.7}
                  rx={3}
                  opacity={dimmed ? 0.4 : 1}
                  style={{ transformOrigin: `${x1}px ${y}px` }}
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
            label={data[hoveredIndex].label}
            items={[
              { label: 'Start', value: formatValue(data[hoveredIndex].start), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'End', value: formatValue(data[hoveredIndex].end) },
              { label: 'Range', value: formatValue(data[hoveredIndex].end - data[hoveredIndex].start) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default SpanChart;
