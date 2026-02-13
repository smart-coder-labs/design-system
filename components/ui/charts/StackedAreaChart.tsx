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

export interface StackedAreaChartProps {
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
  curved?: boolean;
}

export const StackedAreaChart: React.FC<StackedAreaChartProps> = ({
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

  const getColor = useCallback(
    (seriesIndex: number) =>
      series[seriesIndex]?.color ?? palette[seriesIndex % palette.length],
    [series, palette],
  );

  // Compute cumulative stacked values per data point
  const stackedValues = useMemo(() => {
    return data.map((d) => {
      const cumulative: number[] = [];
      let sum = 0;
      for (let si = 0; si < series.length; si++) {
        sum += d.values[si] ?? 0;
        cumulative.push(sum);
      }
      return cumulative;
    });
  }, [data, series]);

  const maxValue = useMemo(() => {
    const allTotals = stackedValues.map((cv) => cv[cv.length - 1] ?? 0);
    const max = Math.max(...allTotals, 0);
    return max === 0 ? 1 : max;
  }, [stackedValues]);

  const ticks = useMemo(() => generateTicks(0, maxValue, 5), [maxValue]);
  const domainMax = ticks[ticks.length - 1];

  const baselineY = margin.top + chartHeight;

  // Get x position for each data point
  const getX = useCallback(
    (di: number) =>
      margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2),
    [data.length, margin.left, chartWidth],
  );

  // Compute top-edge points for each series (cumulative)
  const seriesTopPoints = useMemo(() => {
    return series.map((_, si) =>
      data.map((_, di) => {
        const x = getX(di);
        const y = margin.top + chartHeight - linearScale(stackedValues[di][si], 0, domainMax, 0, chartHeight);
        return { x, y };
      }),
    );
  }, [data, series, stackedValues, getX, margin.top, chartHeight, domainMax]);

  // Compute bottom-edge points for each series (previous cumulative or baseline)
  const seriesBottomPoints = useMemo(() => {
    return series.map((_, si) =>
      data.map((_, di) => {
        const x = getX(di);
        const y =
          si === 0
            ? baselineY
            : margin.top + chartHeight - linearScale(stackedValues[di][si - 1], 0, domainMax, 0, chartHeight);
        return { x, y };
      }),
    );
  }, [data, series, stackedValues, getX, baselineY, margin.top, chartHeight, domainMax]);

  // Build area paths for each series
  const seriesAreaPaths = useMemo(() => {
    return series.map((_, si) => {
      const topPoints = seriesTopPoints[si];
      const bottomPoints = seriesBottomPoints[si];
      if (topPoints.length === 0) return '';

      const topPath = curved
        ? catmullRomSpline(topPoints)
        : topPoints.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join('');

      // Bottom path goes in reverse
      const reversedBottom = [...bottomPoints].reverse();
      const bottomPath = reversedBottom.map((p) => `L${p.x},${p.y}`).join('');

      return `${topPath}${bottomPath}Z`;
    });
  }, [series, seriesTopPoints, seriesBottomPoints, curved]);

  // Build top-line paths (for stroke on top edge)
  const seriesLinePaths = useMemo(() => {
    return seriesTopPoints.map((points) => {
      if (curved) return catmullRomSpline(points);
      return points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join('');
    });
  }, [seriesTopPoints, curved]);

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
        position: getX(i),
        label: d.label,
      })),
    [data, getX],
  );

  const crosshairX = useMemo(() => {
    if (hoveredIndex === null || data.length === 0) return null;
    return getX(hoveredIndex);
  }, [hoveredIndex, data.length, getX]);

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
    const items = series.map((s, si) => ({
      label: s.name,
      value: formatValue(data[hoveredIndex]?.values[si] ?? 0),
      color: getColor(si),
    }));
    // Add total row
    const total = stackedValues[hoveredIndex]?.[series.length - 1] ?? 0;
    items.push({
      label: 'Total',
      value: formatValue(total),
      color: 'var(--color-text-primary)',
    });
    return items;
  }, [hoveredIndex, series, data, getColor, stackedValues]);

  const ariaLabel = title
    ? `${title} stacked area chart with ${series.length} series and ${data.length} data points`
    : `Stacked area chart with ${series.length} series and ${data.length} data points`;

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

          {/* Stacked areas (render bottom series first so top series paints over) */}
          {seriesAreaPaths.map((pathD, si) => (
            <motion.path
              key={`area-${si}`}
              d={pathD}
              fill={getColor(si)}
              fillOpacity={0.6}
              strokeWidth={0}
              {...(animated
                ? {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: si * 0.1, ease: chartMotion.easing },
                  }
                : {})}
            />
          ))}

          {/* Top-edge stroke lines */}
          {seriesLinePaths.map((pathD, si) => (
            <motion.path
              key={`line-${si}`}
              d={pathD}
              fill="none"
              stroke={getColor(si)}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animated
                ? {
                    initial: { pathLength: 0, opacity: 0 },
                    animate: { pathLength: 1, opacity: 1 },
                    transition: {
                      pathLength: { duration: 0.8, delay: si * 0.12, ease: chartMotion.easing },
                      opacity: { duration: 0.2, delay: si * 0.12 },
                    },
                  }
                : {})}
            />
          ))}

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

          {/* Hover dots on each stacked layer top edge */}
          {interactive &&
            hoveredIndex !== null &&
            seriesTopPoints.map((points, si) => (
              <circle
                key={`hover-dot-${si}`}
                cx={points[hoveredIndex].x}
                cy={points[hoveredIndex].y}
                r={4}
                fill={getColor(si)}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
                pointerEvents="none"
              />
            ))}

          {/* Invisible hover regions */}
          {interactive &&
            data.map((_, di) => {
              const x = getX(di);
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
                  aria-label={`${data[di].label}: ${data[di].values.map((v, si) => `${series[si]?.name ?? si} ${formatValue(v)}`).join(', ')}, Total ${formatValue(stackedValues[di]?.[series.length - 1] ?? 0)}`}
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

export default StackedAreaChart;
