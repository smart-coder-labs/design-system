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

export interface StackedBarChartProps {
  data: Array<{ label: string; values: number[] }>;
  series: Array<{ name: string; color?: string }>;
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

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  series,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = true,
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
  const seriesCount = series.length;

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Compute totals for each group to determine the y-axis domain
  const totals = useMemo(
    () => data.map((d) => d.values.reduce((sum, v) => sum + v, 0)),
    [data],
  );

  const maxTotal = useMemo(() => {
    const max = Math.max(...totals, 0);
    return max === 0 ? 1 : max;
  }, [totals]);

  const ticks = useMemo(() => generateTicks(0, maxTotal, 5), [maxTotal]);
  const domainMax = ticks[ticks.length - 1];

  // Bar geometry
  const barCount = data.length;
  const barGap = Math.max(4, chartWidth * 0.04);
  const barWidth = Math.max(4, (chartWidth - barGap * (barCount + 1)) / barCount);

  const getSeriesColor = useCallback(
    (seriesIndex: number) =>
      series[seriesIndex]?.color ?? palette[seriesIndex % palette.length],
    [series, palette],
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

  // Animate each segment from its base position upward
  const getSegmentVariants = (segmentHeight: number, segmentY: number) =>
    animated
      ? {
          hidden: { y: margin.top + chartHeight, height: 0 },
          visible: {
            y: segmentY,
            height: Math.max(0, segmentHeight),
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const legendItems = useMemo(
    () =>
      series.map((s, i) => ({
        label: s.name,
        color: getSeriesColor(i),
      })),
    [series, getSeriesColor],
  );

  const tooltipItems = useMemo(() => {
    if (hoveredIndex === null) return [];
    const group = data[hoveredIndex];
    const items = series.map((s, si) => ({
      label: s.name,
      value: formatValue(group.values[si] ?? 0),
      color: getSeriesColor(si),
    }));
    // Append total
    items.push({
      label: 'Total',
      value: formatValue(totals[hoveredIndex]),
      color: 'var(--color-text-primary)',
    });
    return items;
  }, [hoveredIndex, data, series, totals, getSeriesColor]);

  const ariaLabel = title
    ? `${title} stacked bar chart with ${data.length} groups and ${seriesCount} series`
    : `Stacked bar chart with ${data.length} groups and ${seriesCount} series`;

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

          {/* Stacked Bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((group, gi) => {
              const x = margin.left + barGap + gi * (barWidth + barGap);
              const isHovered = hoveredIndex === gi;
              let cumulativeHeight = 0;

              // Render segments bottom-to-top (first series at bottom)
              return (
                <g key={gi}>
                  {series.map((_, si) => {
                    const value = group.values[si] ?? 0;
                    const segmentHeight = linearScale(value, 0, domainMax, 0, chartHeight);
                    const segmentY = margin.top + chartHeight - cumulativeHeight - segmentHeight;
                    cumulativeHeight += segmentHeight;
                    const color = getSeriesColor(si);

                    return (
                      <motion.rect
                        key={si}
                        x={x}
                        width={barWidth}
                        rx={si === seriesCount - 1 ? Math.min(4, barWidth / 4) : 0}
                        fill={color}
                        opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                        variants={getSegmentVariants(segmentHeight, segmentY)}
                        {...(!animated && { y: segmentY, height: Math.max(0, segmentHeight) })}
                        {...(interactive && {
                          onMouseEnter: (e: React.MouseEvent) => handleBarHover(gi, e),
                          onMouseMove: (e: React.MouseEvent) => handleBarHover(gi, e),
                          onMouseLeave: () => handleBarHover(null),
                          onClick: () => handleBarClick(gi),
                          cursor: 'pointer',
                          role: 'button',
                          'aria-label': `${group.label} – ${series[si].name}: ${formatValue(value)}`,
                          tabIndex: -1,
                        })}
                        transition={animated ? undefined : { duration: 0 }}
                      />
                    );
                  })}

                  {/* Total label above stacked bar */}
                  {showLabels && (
                    <text
                      x={x + barWidth / 2}
                      y={margin.top + chartHeight - linearScale(totals[gi], 0, domainMax, 0, chartHeight) - 6}
                      textAnchor="middle"
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 2}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                    >
                      {formatValue(totals[gi])}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip – shows all series values plus total */}
        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={tooltipItems}
          />
        )}
      </div>

      {/* Legend */}
      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default StackedBarChart;
