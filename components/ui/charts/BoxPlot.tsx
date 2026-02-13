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

export interface BoxPlotDataPoint {
  label: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers?: number[];
  color?: string;
}

export interface BoxPlotProps {
  data: BoxPlotDataPoint[];
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

export const BoxPlot: React.FC<BoxPlotProps> = ({
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
    data.forEach((d) => {
      vals.push(d.min, d.q1, d.median, d.q3, d.max);
      if (d.outliers) vals.push(...d.outliers);
    });
    return vals;
  }, [data]);

  const domainMin = useMemo(() => Math.min(...allValues), [allValues]);
  const domainMaxRaw = useMemo(() => Math.max(...allValues), [allValues]);
  const ticks = useMemo(() => generateTicks(domainMin, domainMaxRaw, 5), [domainMin, domainMaxRaw]);
  const domainBottom = ticks[0];
  const domainTop = ticks[ticks.length - 1];

  const boxCount = data.length;
  const boxGap = Math.max(4, chartWidth * 0.06);
  const boxWidth = Math.max(8, (chartWidth - boxGap * (boxCount + 1)) / boxCount);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, domainBottom, domainTop, 0, chartHeight),
    [margin.top, chartHeight, domainBottom, domainTop],
  );

  const gridHorizontalLines = useMemo(
    () => ticks.map((t) => scaleY(t)),
    [ticks, scaleY],
  );

  const yAxisTicks = useMemo(
    () => ticks.map((t) => ({ position: scaleY(t), label: formatValue(t) })),
    [ticks, scaleY],
  );

  const xAxisTicks = useMemo(
    () => data.map((d, i) => ({
      position: margin.left + boxGap + i * (boxWidth + boxGap) + boxWidth / 2,
      label: d.label,
    })),
    [data, margin.left, boxGap, boxWidth],
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

  const boxVariants = animated
    ? {
        hidden: { opacity: 0, scaleY: 0 },
        visible: { opacity: 1, scaleY: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const legendItems = useMemo(
    () => data.map((d, i) => ({ label: d.label, color: getColor(d, i) })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} box plot with ${data.length} groups`
    : `Box plot with ${data.length} groups`;

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
              const cx = margin.left + boxGap + i * (boxWidth + boxGap) + boxWidth / 2;
              const x = cx - boxWidth / 2;
              const yMin = scaleY(item.min);
              const yQ1 = scaleY(item.q1);
              const yMedian = scaleY(item.median);
              const yQ3 = scaleY(item.q3);
              const yMax = scaleY(item.max);
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
                <motion.g key={i} variants={boxVariants} style={{ transformOrigin: `${cx}px ${scaleY((item.q1 + item.q3) / 2)}px` }}>
                  <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                    {/* Whisker line */}
                    <line x1={cx} y1={yMin} x2={cx} y2={yMax} stroke={color} strokeWidth={1.5} />
                    {/* Min cap */}
                    <line x1={cx - boxWidth * 0.3} y1={yMin} x2={cx + boxWidth * 0.3} y2={yMin} stroke={color} strokeWidth={1.5} />
                    {/* Max cap */}
                    <line x1={cx - boxWidth * 0.3} y1={yMax} x2={cx + boxWidth * 0.3} y2={yMax} stroke={color} strokeWidth={1.5} />
                    {/* Box (IQR) */}
                    <rect x={x} y={yQ3} width={boxWidth} height={Math.max(0, yQ1 - yQ3)} fill={color} opacity={0.3} rx={2} />
                    <rect x={x} y={yQ3} width={boxWidth} height={Math.max(0, yQ1 - yQ3)} fill="none" stroke={color} strokeWidth={1.5} rx={2} />
                    {/* Median line */}
                    <line x1={x} y1={yMedian} x2={x + boxWidth} y2={yMedian} stroke={color} strokeWidth={2.5} />
                    {/* Outliers */}
                    {item.outliers?.map((ov, oi) => (
                      <circle key={oi} cx={cx} cy={scaleY(ov)} r={3} fill={color} opacity={0.7} />
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
              { label: 'Max', value: formatValue(data[hoveredIndex].max), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Q3', value: formatValue(data[hoveredIndex].q3) },
              { label: 'Median', value: formatValue(data[hoveredIndex].median) },
              { label: 'Q1', value: formatValue(data[hoveredIndex].q1) },
              { label: 'Min', value: formatValue(data[hoveredIndex].min) },
            ]}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default BoxPlot;
