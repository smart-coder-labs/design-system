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

export interface OHLCChartDataPoint {
  label: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface OHLCChartProps {
  data: OHLCChartDataPoint[];
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

const BULL_COLOR = '#34C759';
const BEAR_COLOR = '#FF3B30';

export const OHLCChart: React.FC<OHLCChartProps> = ({
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
    const allValues = data.flatMap((d) => [d.open, d.high, d.low, d.close]);
    const rawMin = Math.min(...allValues);
    const rawMax = Math.max(...allValues);
    const yt = generateTicks(rawMin, rawMax, 5);
    return { yTicks: yt, yMin: yt[0], yMax: yt[yt.length - 1] };
  }, [data]);

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  const tickWidth = useMemo(
    () => Math.max(3, (chartWidth / data.length) * 0.25),
    [chartWidth, data.length],
  );

  const getBarX = useCallback(
    (index: number) => margin.left + (index + 0.5) * (chartWidth / data.length),
    [margin.left, chartWidth, data.length],
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
    () => data.map((d, i) => ({ position: getBarX(i), label: d.label })),
    [data, getBarX],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scaleY: 0 },
        visible: { opacity: 1, scaleY: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} OHLC chart with ${data.length} bars`
    : `OHLC chart with ${data.length} bars`;

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

          <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} horizontalLines={gridHorizontalLines} />

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const cx = getBarX(i);
              const isBull = item.close >= item.open;
              const color = isBull ? BULL_COLOR : BEAR_COLOR;
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;
              const strokeW = isHovered ? 2.5 : 1.5;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g
                  key={i}
                  variants={itemVariants}
                  style={{ transformOrigin: `${cx}px ${scaleY((item.high + item.low) / 2)}px` }}
                  opacity={dimmed ? 0.4 : 1}
                  {...interactiveProps}
                >
                  {/* Vertical line: low to high */}
                  <motion.line
                    x1={cx}
                    y1={scaleY(item.high)}
                    x2={cx}
                    y2={scaleY(item.low)}
                    stroke={color}
                    strokeWidth={strokeW}
                  />
                  {/* Left tick: open */}
                  <motion.line
                    x1={cx - tickWidth}
                    y1={scaleY(item.open)}
                    x2={cx}
                    y2={scaleY(item.open)}
                    stroke={color}
                    strokeWidth={strokeW}
                  />
                  {/* Right tick: close */}
                  <motion.line
                    x1={cx}
                    y1={scaleY(item.close)}
                    x2={cx + tickWidth}
                    y2={scaleY(item.close)}
                    stroke={color}
                    strokeWidth={strokeW}
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
            label={data[hoveredIndex].label}
            items={[
              { label: 'Open', value: formatValue(data[hoveredIndex].open), color: data[hoveredIndex].close >= data[hoveredIndex].open ? BULL_COLOR : BEAR_COLOR },
              { label: 'High', value: formatValue(data[hoveredIndex].high) },
              { label: 'Low', value: formatValue(data[hoveredIndex].low) },
              { label: 'Close', value: formatValue(data[hoveredIndex].close) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default OHLCChart;
