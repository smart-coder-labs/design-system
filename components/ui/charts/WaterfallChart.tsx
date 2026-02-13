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

export interface WaterfallChartDataItem {
  label: string;
  value: number;
  type?: 'increase' | 'decrease' | 'total';
}

export interface WaterfallChartProps {
  data: WaterfallChartDataItem[];
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

const TYPE_COLORS = {
  increase: 'var(--color-status-success)',
  decrease: 'var(--color-status-error)',
  total: 'var(--color-accent-blue)',
};

export const WaterfallChart: React.FC<WaterfallChartProps> = ({
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

  const margin = { top: padding, right: padding, bottom: padding + 24, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Compute cumulative values and bar positions
  const bars = useMemo(() => {
    const result: Array<{
      item: WaterfallChartDataItem;
      index: number;
      barStart: number;
      barEnd: number;
      type: 'increase' | 'decrease' | 'total';
    }> = [];

    let cumulative = 0;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const type = item.type ?? (item.value >= 0 ? 'increase' : 'decrease');

      if (type === 'total') {
        result.push({ item, index: i, barStart: 0, barEnd: cumulative, type });
      } else {
        const prevCumulative = cumulative;
        cumulative += item.value;
        result.push({
          item,
          index: i,
          barStart: prevCumulative,
          barEnd: cumulative,
          type,
        });
      }
    }
    return result;
  }, [data]);

  const { yTicks, yMin, yMax } = useMemo(() => {
    const allValues = bars.flatMap((b) => [b.barStart, b.barEnd]);
    allValues.push(0);
    const rawMin = Math.min(...allValues);
    const rawMax = Math.max(...allValues);
    const yt = generateTicks(rawMin, rawMax, 5);
    return {
      yTicks: yt,
      yMin: yt[0],
      yMax: yt[yt.length - 1],
    };
  }, [bars]);

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  const barWidth = useMemo(
    () => Math.max(8, (chartWidth / data.length) * 0.6),
    [chartWidth, data.length],
  );

  const barSpacing = useMemo(
    () => chartWidth / data.length,
    [chartWidth, data.length],
  );

  const getBarColor = useCallback(
    (type: 'increase' | 'decrease' | 'total') => TYPE_COLORS[type],
    [],
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
      position: margin.left + i * barSpacing + barSpacing / 2,
      label: d.label,
    })),
    [data, margin.left, barSpacing],
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
        hidden: { scaleY: 0, opacity: 0 },
        visible: { scaleY: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} waterfall chart with ${data.length} items`
    : `Waterfall chart with ${data.length} items`;

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
          />

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
            {bars.map((bar, i) => {
              const x = margin.left + i * barSpacing + (barSpacing - barWidth) / 2;
              const yTop = scaleY(Math.max(bar.barStart, bar.barEnd));
              const yBottom = scaleY(Math.min(bar.barStart, bar.barEnd));
              const barH = Math.max(1, yBottom - yTop);
              const color = getBarColor(bar.type);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              // Connector line to next bar
              const nextBar = bars[i + 1];
              const connectorEndY = scaleY(bar.barEnd);
              const nextX = margin.left + (i + 1) * barSpacing + (barSpacing - barWidth) / 2;

              return (
                <React.Fragment key={i}>
                  <motion.rect
                    variants={itemVariants}
                    x={x}
                    y={yTop}
                    width={barWidth}
                    height={barH}
                    rx={3}
                    fill={color}
                    fillOpacity={dimmed ? 0.3 : 0.8}
                    stroke={isHovered ? color : 'none'}
                    strokeWidth={isHovered ? 2 : 0}
                    style={{ transformOrigin: `${x + barWidth / 2}px ${yBottom}px` }}
                    {...interactiveProps}
                  />

                  {/* Connector line to the next bar */}
                  {nextBar && bar.type !== 'total' && (
                    <line
                      x1={x + barWidth}
                      y1={connectorEndY}
                      x2={nextX}
                      y2={connectorEndY}
                      stroke="var(--color-border-primary)"
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      opacity={dimmed ? 0.2 : 0.5}
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
              { label: 'Value', value: formatValue(data[hoveredIndex].value), color: getBarColor(bars[hoveredIndex].type) },
              { label: 'Type', value: bars[hoveredIndex].type },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default WaterfallChart;
