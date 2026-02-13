'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue, catmullRomSpline } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';
import { ChartGrid } from './shared/ChartGrid';

export interface StreamGraphProps {
  data: Array<{ label: string; values: number[] }>;
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

export const StreamGraph: React.FC<StreamGraphProps> = ({
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

  const getX = useCallback(
    (di: number) =>
      margin.left + (data.length > 1 ? (di / (data.length - 1)) * chartWidth : chartWidth / 2),
    [data.length, margin.left, chartWidth],
  );

  // Compute stream layout: center stacked values around the midline
  const streamLayers = useMemo(() => {
    const numPoints = data.length;
    const numSeries = series.length;

    // Compute totals per data point
    const totals = data.map((d) => {
      let sum = 0;
      for (let si = 0; si < numSeries; si++) {
        sum += d.values[si] ?? 0;
      }
      return sum;
    });

    const maxTotal = Math.max(...totals, 1);

    // For each data point, compute the baseline offset so the stack is centered
    // baseline[di] = -total[di] / 2 (centering around 0)
    const layers: Array<{ top: { x: number; y: number }[]; bottom: { x: number; y: number }[] }> = [];

    for (let si = 0; si < numSeries; si++) {
      const topPoints: { x: number; y: number }[] = [];
      const bottomPoints: { x: number; y: number }[] = [];

      for (let di = 0; di < numPoints; di++) {
        const x = getX(di);
        const total = totals[di];
        const baseline = -total / 2;

        // Sum values below this series
        let below = 0;
        for (let s = 0; s < si; s++) {
          below += data[di].values[s] ?? 0;
        }
        const val = data[di].values[si] ?? 0;

        // Map from centered coordinates to pixel Y
        const midY = margin.top + chartHeight / 2;
        const scale = chartHeight / maxTotal;

        const bottomY = midY - (baseline + below) * scale;
        const topY = midY - (baseline + below + val) * scale;

        topPoints.push({ x, y: topY });
        bottomPoints.push({ x, y: bottomY });
      }

      layers.push({ top: topPoints, bottom: bottomPoints });
    }

    return layers;
  }, [data, series, getX, margin.top, chartHeight]);

  // Build area paths for each stream layer
  const streamPaths = useMemo(() => {
    return streamLayers.map((layer) => {
      if (layer.top.length === 0) return '';

      const topPath = catmullRomSpline(layer.top);
      const reversedBottom = [...layer.bottom].reverse();
      const bottomPath = reversedBottom.map((p) => `L${p.x},${p.y}`).join('');

      return `${topPath}${bottomPath}Z`;
    });
  }, [streamLayers]);

  // Midline for reference
  const midlineY = margin.top + chartHeight / 2;

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
    const total = data[hoveredIndex]?.values.reduce((a, b) => a + (b ?? 0), 0) ?? 0;
    items.push({
      label: 'Total',
      value: formatValue(total),
      color: 'var(--color-text-primary)',
    });
    return items;
  }, [hoveredIndex, series, data, getColor]);

  const ariaLabel = title
    ? `${title} stream graph with ${series.length} series and ${data.length} data points`
    : `Stream graph with ${series.length} series and ${data.length} data points`;

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

          {/* Midline reference */}
          <line
            x1={margin.left}
            y1={midlineY}
            x2={margin.left + chartWidth}
            y2={midlineY}
            stroke="var(--color-border-secondary)"
            strokeWidth={1}
            strokeDasharray="4 4"
            opacity={0.5}
          />

          {/* X-axis labels */}
          {showLabels &&
            data.map((d, di) => (
              <text
                key={`label-${di}`}
                x={getX(di)}
                y={margin.top + chartHeight + 16}
                textAnchor="middle"
                fill="var(--color-text-secondary)"
                fontSize={fontSize - 2}
              >
                {d.label}
              </text>
            ))}

          {/* Stream layers */}
          {streamPaths.map((pathD, si) => (
            <motion.path
              key={`stream-${si}`}
              d={pathD}
              fill={getColor(si)}
              fillOpacity={0.7}
              stroke={getColor(si)}
              strokeWidth={1}
              strokeOpacity={0.9}
              {...(animated
                ? {
                    initial: { opacity: 0, scaleY: 0 },
                    animate: { opacity: 1, scaleY: 1 },
                    transition: {
                      duration: 0.6,
                      delay: si * 0.1,
                      ease: chartMotion.easing,
                    },
                    style: { transformOrigin: `center ${midlineY}px` },
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

          {/* Hover dots on each layer */}
          {interactive &&
            hoveredIndex !== null &&
            streamLayers.map((layer, si) => {
              const topY = layer.top[hoveredIndex].y;
              const bottomY = layer.bottom[hoveredIndex].y;
              const centerY = (topY + bottomY) / 2;
              return (
                <circle
                  key={`hover-dot-${si}`}
                  cx={getX(hoveredIndex)}
                  cy={centerY}
                  r={4}
                  fill={getColor(si)}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={2}
                  pointerEvents="none"
                />
              );
            })}

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

export default StreamGraph;
