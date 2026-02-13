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

export interface GroupedBarChartProps {
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

export const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
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

  const maxValue = useMemo(() => {
    const allValues = data.flatMap((d) => d.values);
    const max = Math.max(...allValues, 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(0, maxValue, 5), [maxValue]);
  const domainMax = ticks[ticks.length - 1];

  // Group geometry: each group has seriesCount bars side-by-side
  const groupCount = data.length;
  const groupGap = Math.max(8, chartWidth * 0.06);
  const groupWidth = Math.max(seriesCount * 4, (chartWidth - groupGap * (groupCount + 1)) / groupCount);
  const barGapInner = Math.max(1, groupWidth * 0.08);
  const barWidth = Math.max(2, (groupWidth - barGapInner * (seriesCount - 1)) / seriesCount);

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
        position: margin.left + groupGap + i * (groupWidth + groupGap) + groupWidth / 2,
        label: d.label,
      })),
    [data, margin.left, groupGap, groupWidth],
  );

  const handleGroupHover = useCallback(
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

  const handleGroupClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  const getBarVariants = (barHeight: number, barY: number) =>
    animated
      ? {
          hidden: { y: margin.top + chartHeight, height: 0 },
          visible: {
            y: barY,
            height: Math.max(0, barHeight),
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
    return series.map((s, si) => ({
      label: s.name,
      value: formatValue(group.values[si] ?? 0),
      color: getSeriesColor(si),
    }));
  }, [hoveredIndex, data, series, getSeriesColor]);

  const ariaLabel = title
    ? `${title} grouped bar chart with ${data.length} groups and ${seriesCount} series`
    : `Grouped bar chart with ${data.length} groups and ${seriesCount} series`;

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

          {/* Grouped Bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((group, gi) => {
              const groupX = margin.left + groupGap + gi * (groupWidth + groupGap);
              const isGroupHovered = hoveredIndex === gi;

              return (
                <g key={gi}>
                  {series.map((_, si) => {
                    const value = group.values[si] ?? 0;
                    const barHeight = linearScale(value, 0, domainMax, 0, chartHeight);
                    const x = groupX + si * (barWidth + barGapInner);
                    const y = margin.top + chartHeight - barHeight;
                    const color = getSeriesColor(si);

                    return (
                      <motion.rect
                        key={si}
                        x={x}
                        width={barWidth}
                        rx={Math.min(4, barWidth / 4)}
                        fill={color}
                        opacity={hoveredIndex !== null && !isGroupHovered ? 0.4 : 1}
                        variants={getBarVariants(barHeight, y)}
                        {...(!animated && { y, height: Math.max(0, barHeight) })}
                        {...(interactive && {
                          onMouseEnter: (e: React.MouseEvent) => handleGroupHover(gi, e),
                          onMouseMove: (e: React.MouseEvent) => handleGroupHover(gi, e),
                          onMouseLeave: () => handleGroupHover(null),
                          onClick: () => handleGroupClick(gi),
                          cursor: 'pointer',
                          role: 'button',
                          'aria-label': `${group.label} – ${series[si].name}: ${formatValue(value)}`,
                          tabIndex: -1,
                        })}
                        transition={animated ? undefined : { duration: 0 }}
                      />
                    );
                  })}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip – shows all series values for the hovered group */}
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

export default GroupedBarChart;
