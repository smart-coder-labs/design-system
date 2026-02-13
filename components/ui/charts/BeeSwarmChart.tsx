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

export interface BeeSwarmDataPoint {
  label: string;
  values: number[];
  color?: string;
}

export interface BeeSwarmChartProps {
  data: BeeSwarmDataPoint[];
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

export const BeeSwarmChart: React.FC<BeeSwarmChartProps> = ({
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

  const allValues = useMemo(() => {
    const vals: number[] = [];
    data.forEach((d) => vals.push(...d.values));
    return vals;
  }, [data]);

  const domainMin = useMemo(() => Math.min(...allValues), [allValues]);
  const domainMaxRaw = useMemo(() => Math.max(...allValues), [allValues]);
  const ticks = useMemo(() => generateTicks(domainMin, domainMaxRaw, 5), [domainMin, domainMaxRaw]);
  const domainLeft = ticks[0];
  const domainRight = ticks[ticks.length - 1];

  const groupCount = data.length;
  const bandHeight = chartHeight / groupCount;
  const dotRadius = 3.5;

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, domainLeft, domainRight, 0, chartWidth),
    [margin.left, chartWidth, domainLeft, domainRight],
  );

  // Compute beeswarm positions with collision avoidance
  const swarmPositions = useMemo(() => {
    return data.map((item, groupIndex) => {
      const centerY = margin.top + groupIndex * bandHeight + bandHeight / 2;
      const placed: { x: number; y: number }[] = [];
      const spacing = dotRadius * 2.2;

      return item.values.map((val) => {
        const px = scaleX(val);
        let py = centerY;

        // Check collisions with already placed dots, shift vertically if overlapping
        let attempts = 0;
        let direction = 1;
        let offset = 0;

        while (attempts < 50) {
          const collides = placed.some(
            (p) => Math.sqrt((px - p.x) ** 2 + (py - p.y) ** 2) < spacing,
          );
          if (!collides) break;
          attempts++;
          offset += spacing * 0.5;
          py = centerY + offset * direction;
          direction *= -1;
          if (direction === 1) offset += spacing * 0.5;
        }

        placed.push({ x: px, y: py });
        return { x: px, y: py };
      });
    });
  }, [data, scaleX, margin.top, bandHeight, dotRadius]);

  const gridVerticalLines = useMemo(
    () => ticks.map((t) => scaleX(t)),
    [ticks, scaleX],
  );

  const xAxisTicks = useMemo(
    () => ticks.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [ticks, scaleX],
  );

  const yAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: margin.top + i * bandHeight + bandHeight / 2,
      label: d.label,
    })),
    [data, margin.top, bandHeight],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} bee swarm chart with ${data.length} groups`
    : `Bee swarm chart with ${data.length} groups`;

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
            <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} verticalLines={gridVerticalLines} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, groupIndex) => {
              const centerY = margin.top + groupIndex * bandHeight + bandHeight / 2;
              const color = getColor(item, groupIndex);
              const isHovered = hoveredIndex === groupIndex;
              const dimmed = hoveredIndex !== null && !isHovered;
              const positions = swarmPositions[groupIndex];

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(groupIndex, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(groupIndex, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(groupIndex),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g key={groupIndex} variants={itemVariants} style={{ transformOrigin: `${margin.left + chartWidth / 2}px ${centerY}px` }}>
                  <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                    {positions.map((pos, vi) => (
                      <circle
                        key={vi}
                        cx={pos.x}
                        cy={pos.y}
                        r={dotRadius}
                        fill={color}
                        opacity={0.7}
                      />
                    ))}
                  </g>
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
              { label: 'Count', value: data[hoveredIndex].values.length, color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Min', value: formatValue(Math.min(...data[hoveredIndex].values)) },
              { label: 'Max', value: formatValue(Math.max(...data[hoveredIndex].values)) },
            ]}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default BeeSwarmChart;
