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

export interface DensityScatterDataPoint {
  x: number;
  y: number;
}

export interface DensityScatterProps {
  data: DensityScatterDataPoint[];
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

export const DensityScatter: React.FC<DensityScatterProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
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

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xValues = useMemo(() => data.map((d) => d.x), [data]);
  const yValues = useMemo(() => data.map((d) => d.y), [data]);

  const xTicksArr = useMemo(() => generateTicks(Math.min(...xValues), Math.max(...xValues), 5), [xValues]);
  const yTicksArr = useMemo(() => generateTicks(Math.min(...yValues), Math.max(...yValues), 5), [yValues]);

  const xMin = xTicksArr[0];
  const xMax = xTicksArr[xTicksArr.length - 1];
  const yMin = yTicksArr[0];
  const yMax = yTicksArr[yTicksArr.length - 1];

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 0, chartWidth),
    [margin.left, chartWidth, xMin, xMax],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  // Density calculation: count nearby points within 10% of range
  const densities = useMemo(() => {
    const xRange = xMax - xMin;
    const yRange = yMax - yMin;
    const radius = Math.max(xRange, yRange) * 0.1;
    const radiusSq = radius * radius;

    return data.map((p) => {
      let count = 0;
      for (const q of data) {
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        if (dx * dx + dy * dy <= radiusSq) count++;
      }
      // Subtract 1 to exclude the point itself; normalization happens in getOpacity
      return count - 1;
    });
  }, [data, xMin, xMax, yMin, yMax]);

  const maxDensity = useMemo(() => Math.max(1, ...densities), [densities]);

  const getOpacity = useCallback(
    (index: number) => 0.2 + 0.8 * (densities[index] / maxDensity),
    [densities, maxDensity],
  );

  const gridHorizontalLines = useMemo(
    () => yTicksArr.map((t) => scaleY(t)),
    [yTicksArr, scaleY],
  );

  const gridVerticalLines = useMemo(
    () => xTicksArr.map((t) => scaleX(t)),
    [xTicksArr, scaleX],
  );

  const yAxisTicks = useMemo(
    () => yTicksArr.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [yTicksArr, scaleY],
  );

  const xAxisTicks = useMemo(
    () => xTicksArr.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [xTicksArr, scaleX],
  );

  const getColor = useCallback(
    (_item: DensityScatterDataPoint, _index: number) => palette[0],
    [palette],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.01 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => [{ label: 'Density', color: palette[0] }],
    [palette],
  );

  const ariaLabel = title
    ? `${title} density scatter chart with ${data.length} points`
    : `Density scatter chart with ${data.length} points`;

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

          {showGrid && (
            <ChartGrid
              x={margin.left}
              y={margin.top}
              width={chartWidth}
              height={chartHeight}
              horizontalLines={gridHorizontalLines}
              verticalLines={gridVerticalLines}
            />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const cx = scaleX(item.x);
              const cy = scaleY(item.y);
              const color = getColor(item, i);
              const opacity = getOpacity(i);
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
                <motion.circle
                  key={i}
                  variants={itemVariants}
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 5 : 3.5}
                  fill={color}
                  opacity={dimmed ? 0.15 : opacity}
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
            label={`Point ${hoveredIndex + 1}`}
            items={[
              { label: 'X', value: formatValue(data[hoveredIndex].x), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Y', value: formatValue(data[hoveredIndex].y) },
              { label: 'Density', value: `${Math.round(getOpacity(hoveredIndex) * 100)}%` },
            ]}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default DensityScatter;
