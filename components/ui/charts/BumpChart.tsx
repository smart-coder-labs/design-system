'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue, monotoneCubicPath } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';
import { ChartGrid } from './shared/ChartGrid';

export interface BumpChartProps {
  data: Array<{ label: string; rankings: number[] }>;
  series: Array<{ name: string; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const BumpChart: React.FC<BumpChartProps> = ({
  data,
  series,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSeries, setHoveredSeries] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  // Extra horizontal margin for series name labels at start/end
  const labelMargin = 48;
  const margin = {
    top: padding,
    right: padding + labelMargin,
    bottom: padding + 20,
    left: padding + labelMargin,
  };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxRank = series.length;

  const getColor = useCallback(
    (seriesIndex: number) =>
      series[seriesIndex]?.color ?? palette[seriesIndex % palette.length],
    [series, palette],
  );

  const getX = useCallback(
    (di: number) =>
      margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2),
    [data.length, margin.left, chartWidth],
  );

  // Map rank to Y position (rank 1 at top, maxRank at bottom)
  const getRankY = useCallback(
    (rank: number) =>
      margin.top + linearScale(rank, 1, maxRank, 0, chartHeight),
    [margin.top, maxRank, chartHeight],
  );

  // Compute points for each series line
  const seriesPoints = useMemo(() => {
    return series.map((_, si) =>
      data.map((d, di) => {
        const rank = d.rankings[si] ?? maxRank;
        return { x: getX(di), y: getRankY(rank) };
      }),
    );
  }, [data, series, maxRank, getX, getRankY]);

  // Build smooth paths connecting rank positions
  const seriesPaths = useMemo(() => {
    return seriesPoints.map((points) => monotoneCubicPath(points));
  }, [seriesPoints]);

  // Grid horizontal lines for each rank position
  const gridHorizontalLines = useMemo(
    () => Array.from({ length: maxRank }, (_, i) => getRankY(i + 1)),
    [maxRank, getRankY],
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
    return series.map((s, si) => ({
      label: s.name,
      value: `#${data[hoveredIndex]?.rankings[si] ?? '–'}`,
      color: getColor(si),
    }));
  }, [hoveredIndex, series, data, getColor]);

  const ariaLabel = title
    ? `${title} bump chart with ${series.length} series and ${data.length} time periods`
    : `Bump chart with ${series.length} series and ${data.length} time periods`;

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

          {/* Rank grid lines */}
          <ChartGrid
            x={margin.left}
            y={margin.top}
            width={chartWidth}
            height={chartHeight}
            horizontalLines={gridHorizontalLines}
          />

          {/* Rank labels on Y-axis */}
          {showLabels &&
            Array.from({ length: maxRank }, (_, i) => (
              <text
                key={`rank-${i}`}
                x={margin.left - 8}
                y={getRankY(i + 1)}
                textAnchor="end"
                dominantBaseline="central"
                fill="var(--color-text-secondary)"
                fontSize={fontSize - 2}
              >
                #{i + 1}
              </text>
            ))}

          {/* X-axis labels */}
          {showLabels &&
            data.map((d, di) => (
              <text
                key={`xlabel-${di}`}
                x={getX(di)}
                y={margin.top + chartHeight + 16}
                textAnchor="middle"
                fill="var(--color-text-secondary)"
                fontSize={fontSize - 2}
              >
                {d.label}
              </text>
            ))}

          {/* Bump lines */}
          {seriesPaths.map((pathD, si) => (
            <motion.path
              key={`line-${si}`}
              d={pathD}
              fill="none"
              stroke={getColor(si)}
              strokeWidth={hoveredSeries === si ? 3.5 : 2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1}
              {...(animated
                ? {
                    initial: { pathLength: 0, opacity: 0 },
                    animate: {
                      pathLength: 1,
                      opacity: hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1,
                    },
                    transition: {
                      pathLength: { duration: 0.8, delay: si * 0.1, ease: chartMotion.easing },
                      opacity: { duration: 0.2, delay: si * 0.1 },
                    },
                  }
                : {})}
            />
          ))}

          {/* Dots at each data point */}
          {seriesPoints.map((points, si) =>
            points.map((p, di) => (
              <motion.circle
                key={`dot-${si}-${di}`}
                cx={p.x}
                cy={p.y}
                r={hoveredIndex === di && (hoveredSeries === null || hoveredSeries === si) ? 6 : 4}
                fill={getColor(si)}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
                opacity={hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1}
                {...(animated
                  ? {
                      initial: { opacity: 0, scale: 0 },
                      animate: {
                        opacity: hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1,
                        scale: 1,
                      },
                      transition: {
                        delay: 0.8 + si * 0.1 + di * 0.03,
                        type: 'spring',
                        ...chartMotion.spring,
                      },
                    }
                  : {})}
              />
            )),
          )}

          {/* Series name labels at start and end */}
          {showLabels &&
            series.map((s, si) => {
              const firstRank = data[0]?.rankings[si] ?? maxRank;
              const lastRank = data[data.length - 1]?.rankings[si] ?? maxRank;
              return (
                <React.Fragment key={`labels-${si}`}>
                  <text
                    x={margin.left - 12}
                    y={getRankY(firstRank)}
                    textAnchor="end"
                    dominantBaseline="central"
                    fill={getColor(si)}
                    fontSize={fontSize - 2}
                    fontWeight={500}
                    opacity={hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1}
                  >
                    {s.name}
                  </text>
                  <text
                    x={margin.left + chartWidth + 12}
                    y={getRankY(lastRank)}
                    textAnchor="start"
                    dominantBaseline="central"
                    fill={getColor(si)}
                    fontSize={fontSize - 2}
                    fontWeight={500}
                    opacity={hoveredSeries !== null && hoveredSeries !== si ? 0.25 : 1}
                  >
                    {s.name}
                  </text>
                </React.Fragment>
              );
            })}

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
                  onMouseLeave={() => {
                    handleHover(null);
                    setHoveredSeries(null);
                  }}
                  onClick={() => handleClick(di)}
                  cursor="pointer"
                  role="button"
                  aria-label={`${data[di].label}: ${series.map((s, si) => `${s.name} rank #${data[di].rankings[si] ?? '–'}`).join(', ')}`}
                  tabIndex={-1}
                />
              );
            })}

          {/* Invisible hover regions per series line for highlighting */}
          {interactive &&
            seriesPoints.map((points, si) =>
              points.map((p, di) => (
                <circle
                  key={`series-hover-${si}-${di}`}
                  cx={p.x}
                  cy={p.y}
                  r={10}
                  fill="transparent"
                  onMouseEnter={() => setHoveredSeries(si)}
                  onMouseLeave={() => setHoveredSeries(null)}
                  cursor="pointer"
                />
              )),
            )}
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

export default BumpChart;
