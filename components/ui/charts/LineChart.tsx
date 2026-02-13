'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue, catmullRomSpline } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';
import { ChartGrid } from './shared/ChartGrid';
import { ChartAxis } from './shared/ChartAxis';

export interface LineChartProps {
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
  showDots?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
  curved?: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({
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
  showDots = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
  curved = true,
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
    const all = data.flatMap((d) => d.values);
    const max = Math.max(...all, 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const minValue = useMemo(() => {
    const all = data.flatMap((d) => d.values);
    return Math.min(...all, 0);
  }, [data]);

  const ticks = useMemo(() => generateTicks(Math.min(0, minValue), maxValue, 5), [minValue, maxValue]);
  const domainMin = ticks[0];
  const domainMax = ticks[ticks.length - 1];

  const getColor = useCallback(
    (seriesIndex: number) =>
      series[seriesIndex]?.color ?? palette[seriesIndex % palette.length],
    [series, palette],
  );

  // Compute points for each series
  const seriesPoints = useMemo(() => {
    return series.map((_, si) =>
      data.map((d, di) => {
        const x = margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2);
        const y = margin.top + chartHeight - linearScale(d.values[si] ?? 0, domainMin, domainMax, 0, chartHeight);
        return { x, y };
      }),
    );
  }, [data, series, margin.left, margin.top, chartWidth, chartHeight, domainMin, domainMax]);

  // Build path strings
  const seriesPaths = useMemo(() => {
    return seriesPoints.map((points) => {
      if (curved) return catmullRomSpline(points);
      return points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join('');
    });
  }, [seriesPoints, curved]);

  const gridHorizontalLines = useMemo(
    () =>
      ticks.map((t) =>
        margin.top + chartHeight - linearScale(t, domainMin, domainMax, 0, chartHeight),
      ),
    [ticks, domainMin, domainMax, margin.top, chartHeight],
  );

  const yAxisTicks = useMemo(
    () =>
      ticks.map((t) => ({
        position: margin.top + chartHeight - linearScale(t, domainMin, domainMax, 0, chartHeight),
        label: formatValue(t),
      })),
    [ticks, domainMin, domainMax, margin.top, chartHeight],
  );

  const xAxisTicks = useMemo(
    () =>
      data.map((d, i) => ({
        position: margin.left + (data.length > 1 ? (i / (data.length - 1)) * chartWidth : chartWidth / 2),
        label: d.label,
      })),
    [data, margin.left, chartWidth],
  );

  // Crosshair x position for hovered index
  const crosshairX = useMemo(() => {
    if (hoveredIndex === null || data.length === 0) return null;
    return margin.left + (data.length > 1 ? (hoveredIndex / (data.length - 1)) * chartWidth : chartWidth / 2);
  }, [hoveredIndex, data.length, margin.left, chartWidth]);

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

  const legendItems = useMemo(
    () =>
      series.map((s, i) => ({
        label: s.name,
        color: getColor(i),
      })),
    [series, getColor],
  );

  const tooltipItems = useMemo(() => {
    if (hoveredIndex === null) return [];
    return series.map((s, si) => ({
      label: s.name,
      value: formatValue(data[hoveredIndex]?.values[si] ?? 0),
      color: getColor(si),
    }));
  }, [hoveredIndex, series, data, getColor]);

  const ariaLabel = title
    ? `${title} line chart with ${series.length} series and ${data.length} data points`
    : `Line chart with ${series.length} series and ${data.length} data points`;

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

          {/* Lines */}
          {seriesPaths.map((pathD, si) => (
            <motion.path
              key={`line-${si}`}
              d={pathD}
              fill="none"
              stroke={getColor(si)}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animated
                ? {
                    initial: { pathLength: 0, opacity: 0 },
                    animate: { pathLength: 1, opacity: 1 },
                    transition: {
                      pathLength: { duration: 0.8, delay: si * 0.15, ease: chartMotion.easing },
                      opacity: { duration: 0.2, delay: si * 0.15 },
                    },
                  }
                : {})}
            />
          ))}

          {/* Dots */}
          {showDots &&
            seriesPoints.map((points, si) =>
              points.map((p, di) => (
                <motion.circle
                  key={`dot-${si}-${di}`}
                  cx={p.x}
                  cy={p.y}
                  r={hoveredIndex === di ? 5 : 3.5}
                  fill={getColor(si)}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={2}
                  {...(animated
                    ? {
                        initial: { opacity: 0, scale: 0 },
                        animate: { opacity: 1, scale: 1 },
                        transition: {
                          delay: 0.8 + si * 0.15 + di * 0.03,
                          type: 'spring',
                          ...chartMotion.spring,
                        },
                      }
                    : {})}
                />
              )),
            )}

          {/* Crosshair line */}
          {interactive && crosshairX !== null && (
            <line
              x1={crosshairX}
              y1={margin.top}
              x2={crosshairX}
              y2={margin.top + chartHeight}
              stroke="var(--color-border-secondary)"
              strokeWidth={1}
              strokeDasharray="4 4"
              pointerEvents="none"
            />
          )}

          {/* Invisible hover regions for each data point column */}
          {interactive &&
            data.map((_, di) => {
              const x = margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2);
              const halfStep = data.length > 1 ? chartWidth / (data.length - 1) / 2 : chartWidth / 2;
              return (
                <rect
                  key={`hover-${di}`}
                  x={x - halfStep}
                  y={margin.top}
                  width={halfStep * 2}
                  height={chartHeight}
                  fill="transparent"
                  onMouseEnter={(e) => handleHover(di, e)}
                  onMouseMove={(e) => handleHover(di, e)}
                  onMouseLeave={() => handleHover(null)}
                  onClick={() => handleClick(di)}
                  cursor="pointer"
                  role="button"
                  aria-label={`${data[di].label}: ${data[di].values.map((v, si) => `${series[si]?.name ?? si} ${formatValue(v)}`).join(', ')}`}
                  tabIndex={-1}
                />
              );
            })}
        </svg>

        {/* Tooltip */}
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

export default LineChart;
