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

export interface MultiAxisLineChartProps {
  data: Array<{ label: string; values: number[] }>;
  series: Array<{ name: string; color?: string; axis?: 'left' | 'right' }>;
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

export const MultiAxisLineChart: React.FC<MultiAxisLineChartProps> = ({
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

  const hasRightAxis = series.some((s) => s.axis === 'right');
  const margin = {
    top: padding,
    right: hasRightAxis ? padding + 36 : padding,
    bottom: padding + 20,
    left: padding + 36,
  };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const getColor = useCallback(
    (seriesIndex: number) =>
      series[seriesIndex]?.color ?? palette[seriesIndex % palette.length],
    [series, palette],
  );

  // Separate series indices by axis
  const leftIndices = useMemo(
    () => series.map((s, i) => ({ s, i })).filter(({ s }) => s.axis !== 'right').map(({ i }) => i),
    [series],
  );
  const rightIndices = useMemo(
    () => series.map((s, i) => ({ s, i })).filter(({ s }) => s.axis === 'right').map(({ i }) => i),
    [series],
  );

  // Compute domains for each axis
  const leftDomain = useMemo(() => {
    if (leftIndices.length === 0) return { min: 0, max: 1, ticks: [0, 1] };
    const vals = data.flatMap((d) => leftIndices.map((si) => d.values[si] ?? 0));
    const min = Math.min(...vals, 0);
    const max = Math.max(...vals, 0) || 1;
    const t = generateTicks(Math.min(0, min), max, 5);
    return { min: t[0], max: t[t.length - 1], ticks: t };
  }, [data, leftIndices]);

  const rightDomain = useMemo(() => {
    if (rightIndices.length === 0) return { min: 0, max: 1, ticks: [0, 1] };
    const vals = data.flatMap((d) => rightIndices.map((si) => d.values[si] ?? 0));
    const min = Math.min(...vals, 0);
    const max = Math.max(...vals, 0) || 1;
    const t = generateTicks(Math.min(0, min), max, 5);
    return { min: t[0], max: t[t.length - 1], ticks: t };
  }, [data, rightIndices]);

  // Compute points for each series using its respective axis domain
  const seriesPoints = useMemo(() => {
    return series.map((s, si) => {
      const domain = s.axis === 'right' ? rightDomain : leftDomain;
      return data.map((d, di) => {
        const x = margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2);
        const y = margin.top + chartHeight - linearScale(d.values[si] ?? 0, domain.min, domain.max, 0, chartHeight);
        return { x, y };
      });
    });
  }, [data, series, margin.left, margin.top, chartWidth, chartHeight, leftDomain, rightDomain]);

  // Build smooth path strings
  const seriesPaths = useMemo(() => {
    return seriesPoints.map((points) => catmullRomSpline(points));
  }, [seriesPoints]);

  const gridHorizontalLines = useMemo(
    () =>
      leftDomain.ticks.map((t) =>
        margin.top + chartHeight - linearScale(t, leftDomain.min, leftDomain.max, 0, chartHeight),
      ),
    [leftDomain, margin.top, chartHeight],
  );

  // Left Y-axis ticks
  const leftAxisTicks = useMemo(
    () =>
      leftDomain.ticks.map((t) => ({
        position: margin.top + chartHeight - linearScale(t, leftDomain.min, leftDomain.max, 0, chartHeight),
        label: formatValue(t),
      })),
    [leftDomain, margin.top, chartHeight],
  );

  // Right Y-axis ticks
  const rightAxisTicks = useMemo(
    () =>
      rightDomain.ticks.map((t) => ({
        position: margin.top + chartHeight - linearScale(t, rightDomain.min, rightDomain.max, 0, chartHeight),
        label: formatValue(t),
      })),
    [rightDomain, margin.top, chartHeight],
  );

  const xAxisTicks = useMemo(
    () =>
      data.map((d, i) => ({
        position: margin.left + (data.length > 1 ? (i / (data.length - 1)) * chartWidth : chartWidth / 2),
        label: d.label,
      })),
    [data, margin.left, chartWidth],
  );

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
        label: `${s.name}${s.axis === 'right' ? ' (R)' : ''}`,
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

  // Determine a representative color for each axis
  const leftAxisColor = useMemo(
    () => (leftIndices.length > 0 ? getColor(leftIndices[0]) : 'var(--color-text-tertiary)'),
    [leftIndices, getColor],
  );
  const rightAxisColor = useMemo(
    () => (rightIndices.length > 0 ? getColor(rightIndices[0]) : 'var(--color-text-tertiary)'),
    [rightIndices, getColor],
  );

  const ariaLabel = title
    ? `${title} multi-axis line chart with ${series.length} series and ${data.length} data points`
    : `Multi-axis line chart with ${series.length} series and ${data.length} data points`;

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

          {showGrid && (
            <ChartGrid
              x={margin.left}
              y={margin.top}
              width={chartWidth}
              height={chartHeight}
              horizontalLines={gridHorizontalLines}
            />
          )}

          {/* Left Y-axis */}
          {showLabels && (
            <ChartAxis
              type="y"
              x={margin.left}
              y={margin.top}
              length={chartHeight}
              ticks={leftAxisTicks}
              fontSize={fontSize - 2}
              color={leftAxisColor}
            />
          )}

          {/* Right Y-axis */}
          {showLabels && hasRightAxis && (
            <g>
              <line
                x1={margin.left + chartWidth}
                y1={margin.top}
                x2={margin.left + chartWidth}
                y2={margin.top + chartHeight}
                stroke="var(--color-border-primary)"
                strokeWidth={1}
              />
              {rightAxisTicks.map((tick, i) => (
                <g key={`right-tick-${i}`}>
                  <line
                    x1={margin.left + chartWidth}
                    y1={tick.position}
                    x2={margin.left + chartWidth + 4}
                    y2={tick.position}
                    stroke="var(--color-border-primary)"
                    strokeWidth={1}
                  />
                  <text
                    x={margin.left + chartWidth + 8}
                    y={tick.position + 4}
                    textAnchor="start"
                    fill={rightAxisColor}
                    fontSize={fontSize - 2}
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                  >
                    {tick.label}
                  </text>
                </g>
              ))}
            </g>
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
              strokeDasharray={series[si]?.axis === 'right' ? '6 3' : undefined}
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
          {seriesPoints.map((points, si) =>
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

          {/* Crosshair */}
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

          {/* Hover regions */}
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

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default MultiAxisLineChart;
