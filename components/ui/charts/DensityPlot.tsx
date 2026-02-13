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

const EVAL_POINT_COUNT = 60;

export interface DensityPlotDataPoint {
  label: string;
  values: number[];
  color?: string;
}

export interface DensityPlotProps {
  data: DensityPlotDataPoint[];
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

function gaussianKDE(values: number[], evalPoints: number[], bandwidth: number): number[] {
  const n = values.length;
  const factor = 1 / (n * bandwidth * Math.sqrt(2 * Math.PI));
  return evalPoints.map((x) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const z = (x - values[i]) / bandwidth;
      sum += Math.exp(-0.5 * z * z);
    }
    return sum * factor;
  });
}

function silvermanBandwidth(values: number[]): number {
  const n = values.length;
  const sorted = [...values].sort((a, b) => a - b);
  const mean = values.reduce((s, v) => s + v, 0) / n;
  const variance = values.reduce((s, v) => s + (v - mean) ** 2, 0) / n;
  const std = Math.sqrt(variance);
  const q1 = sorted[Math.floor(n * 0.25)];
  const q3 = sorted[Math.floor(n * 0.75)];
  const iqr = q3 - q1;
  return 0.9 * Math.min(std, iqr / 1.34) * Math.pow(n, -0.2);
}

export const DensityPlot: React.FC<DensityPlotProps> = ({
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

  const allValues = useMemo(() => data.flatMap((d) => d.values), [data]);

  const domainMin = useMemo(() => Math.min(...allValues), [allValues]);
  const domainMaxRaw = useMemo(() => Math.max(...allValues), [allValues]);
  const xRange = domainMaxRaw - domainMin;
  const evalMin = domainMin - xRange * 0.1;
  const evalMax = domainMaxRaw + xRange * 0.1;

  const evalPoints = useMemo(() => {
    const pts: number[] = [];
    const step = (evalMax - evalMin) / (EVAL_POINT_COUNT - 1);
    for (let i = 0; i < EVAL_POINT_COUNT; i++) {
      pts.push(evalMin + i * step);
    }
    return pts;
  }, [evalMin, evalMax]);

  const densities = useMemo(
    () =>
      data.map((d) => {
        const bw = silvermanBandwidth(d.values);
        return gaussianKDE(d.values, evalPoints, bw > 0 ? bw : 1);
      }),
    [data, evalPoints],
  );

  const maxDensity = useMemo(
    () => Math.max(...densities.flatMap((d) => d)),
    [densities],
  );

  const xTicks = useMemo(() => generateTicks(evalMin, evalMax, 5), [evalMin, evalMax]);
  const xDomainMin = xTicks[0];
  const xDomainMax = xTicks[xTicks.length - 1];

  const yTicks = useMemo(() => generateTicks(0, maxDensity, 5), [maxDensity]);
  const yDomainMax = yTicks[yTicks.length - 1];

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xDomainMin, xDomainMax, 0, chartWidth),
    [margin.left, chartWidth, xDomainMin, xDomainMax],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, 0, yDomainMax, 0, chartHeight),
    [margin.top, chartHeight, yDomainMax],
  );

  const gridHorizontalLines = useMemo(
    () => yTicks.map((t) => scaleY(t)),
    [yTicks, scaleY],
  );

  const yAxisTicks = useMemo(
    () => yTicks.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [yTicks, scaleY],
  );

  const xAxisTicks = useMemo(
    () => xTicks.map((t) => ({ position: scaleX(t), label: formatValue(t) })),
    [xTicks, scaleX],
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
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} density plot with ${data.length} groups`
    : `Density plot with ${data.length} groups`;

  const baselineY = scaleY(0);

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
              const density = densities[i];
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const points = evalPoints.map((xVal, j) => ({
                x: scaleX(xVal),
                y: scaleY(density[j]),
              }));

              const linePath = points.map((p, j) => (j === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join('');
              const areaPath = linePath + `L${points[points.length - 1].x},${baselineY}L${points[0].x},${baselineY}Z`;

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
                    <path d={areaPath} fill={color} opacity={0.2} />
                    <path d={linePath} fill="none" stroke={color} strokeWidth={2} />
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
              { label: 'Samples', value: String(data[hoveredIndex].values.length), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Mean', value: formatValue(data[hoveredIndex].values.reduce((s, v) => s + v, 0) / data[hoveredIndex].values.length) },
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

export default DensityPlot;
