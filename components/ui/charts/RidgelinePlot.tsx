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

export interface RidgelinePlotDataPoint {
  label: string;
  values: number[];
  color?: string;
}

export interface RidgelinePlotProps {
  data: RidgelinePlotDataPoint[];
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

/** Simple Gaussian KDE over evaluation points. */
function kde(values: number[], evalPoints: number[], bandwidth: number): number[] {
  const n = values.length;
  return evalPoints.map((x) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const z = (x - values[i]) / bandwidth;
      sum += Math.exp(-0.5 * z * z);
    }
    return sum / (n * bandwidth * Math.sqrt(2 * Math.PI));
  });
}

export const RidgelinePlot: React.FC<RidgelinePlotProps> = ({
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

  const NUM_EVAL_POINTS = 50;

  // Global value domain across all groups
  const { globalMin, globalMax, ticks } = useMemo(() => {
    let gMin = Infinity;
    let gMax = -Infinity;
    data.forEach((d) => {
      d.values.forEach((v) => {
        if (v < gMin) gMin = v;
        if (v > gMax) gMax = v;
      });
    });
    const t = generateTicks(gMin, gMax, 5);
    return { globalMin: t[0], globalMax: t[t.length - 1], ticks: t };
  }, [data]);

  // Compute densities for each group
  const densities = useMemo(() => {
    const range = globalMax - globalMin;
    const step = range / (NUM_EVAL_POINTS - 1);
    const evalPoints = Array.from({ length: NUM_EVAL_POINTS }, (_, i) => globalMin + i * step);
    return data.map((d) => {
      const bw = range * 0.08 || 1;
      const density = kde(d.values, evalPoints, bw);
      return { evalPoints, density };
    });
  }, [data, globalMin, globalMax]);

  const maxDensity = useMemo(
    () => Math.max(...densities.flatMap((d) => d.density)),
    [densities],
  );

  const groupCount = data.length;
  const rowHeight = chartHeight / groupCount;
  const overlapFactor = 0.6;

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, globalMin, globalMax, 0, chartWidth),
    [margin.left, globalMin, globalMax, chartWidth],
  );

  const gridHorizontalLines = useMemo(
    () => ticks.map((t) => margin.top + chartHeight - linearScale(t, globalMin, globalMax, 0, chartHeight)),
    [ticks, margin.top, chartHeight, globalMin, globalMax],
  );

  const xAxisTicks = useMemo(
    () => ticks.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [ticks, scaleX],
  );

  const yAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: margin.top + (groupCount - 1 - i) * rowHeight + rowHeight * 0.8,
      label: d.label,
    })),
    [data, margin.top, groupCount, rowHeight],
  );

  // Build area paths for each group
  const paths = useMemo(
    () =>
      densities.map((group, gi) => {
        const baseline = margin.top + (groupCount - 1 - gi) * rowHeight + rowHeight * 0.8;
        const curveHeight = rowHeight * (1 + overlapFactor);
        const points = group.evalPoints.map((v, pi) => {
          const x = scaleX(v);
          const densityNorm = maxDensity > 0 ? group.density[pi] / maxDensity : 0;
          const y = baseline - densityNorm * curveHeight;
          return { x, y };
        });
        let d = `M${points[0].x},${baseline}`;
        points.forEach((p) => { d += `L${p.x},${p.y}`; });
        d += `L${points[points.length - 1].x},${baseline}Z`;
        return { d, baseline };
      }),
    [densities, margin.top, groupCount, rowHeight, overlapFactor, scaleX, maxDensity],
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
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} ridgeline plot with ${data.length} groups`
    : `Ridgeline plot with ${data.length} groups`;

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
            <ChartGrid x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} horizontalLines={gridHorizontalLines} />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const color = getColor(item, i);
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
                <motion.g key={i} variants={itemVariants}>
                  <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                    <path
                      d={paths[i].d}
                      fill={color}
                      fillOpacity={0.35}
                      stroke={color}
                      strokeWidth={isHovered ? 2 : 1.5}
                    />
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

export default RidgelinePlot;
