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

export interface CorrelogramData {
  labels: string[];
  matrix: number[][];
}

export interface CorrelogramProps {
  data: CorrelogramData;
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

function correlationColor(v: number): string {
  const clamped = Math.max(-1, Math.min(1, v));
  if (clamped < 0) {
    const t = Math.abs(clamped);
    const r = Math.round(255 + (220 - 255) * t);
    const g = Math.round(255 + (50 - 255) * t);
    const b = Math.round(255 + (50 - 255) * t);
    return `rgb(${r},${g},${b})`;
  }
  const t = clamped;
  const r = Math.round(255 + (50 - 255) * t);
  const g = Math.round(255 + (100 - 255) * t);
  const b = Math.round(255 + (220 - 255) * t);
  return `rgb(${r},${g},${b})`;
}

export const Correlogram: React.FC<CorrelogramProps> = ({
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

  const n = data.labels.length;
  const cellWidth = chartWidth / n;
  const cellHeight = chartHeight / n;

  const getColor = useCallback(
    (_item: { color?: string }, index: number) => _item.color ?? palette[index % palette.length],
    [palette],
  );

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? { row: Math.floor(index / n), col: index % n, value: data.matrix[Math.floor(index / n)][index % n] } : null, index);
    },
    [data, n, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => {
      const row = Math.floor(index / n);
      const col = index % n;
      onDataPointClick?.({ row, col, value: data.matrix[row][col] }, index);
    },
    [data, n, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.02 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const xAxisTicks = useMemo(
    () => data.labels.map((label, i) => ({
      position: margin.left + i * cellWidth + cellWidth / 2,
      label,
    })),
    [data.labels, margin.left, cellWidth],
  );

  const yAxisTicks = useMemo(
    () => data.labels.map((label, i) => ({
      position: margin.top + i * cellHeight + cellHeight / 2,
      label,
    })),
    [data.labels, margin.top, cellHeight],
  );

  const legendItems = useMemo(
    () => [
      { label: 'Negative (-1)', color: 'rgb(220,50,50)' },
      { label: 'Neutral (0)', color: 'rgb(255,255,255)' },
      { label: 'Positive (+1)', color: 'rgb(50,100,220)' },
    ],
    [],
  );

  const ariaLabel = title
    ? `${title} correlogram with ${n} variables`
    : `Correlogram with ${n} variables`;

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

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.matrix.map((row, rowIdx) =>
              row.map((value, colIdx) => {
                const flatIndex = rowIdx * n + colIdx;
                const cx = margin.left + colIdx * cellWidth;
                const cy = margin.top + rowIdx * cellHeight;
                const fill = correlationColor(value);
                const isHovered = hoveredIndex === flatIndex;
                const dimmed = hoveredIndex !== null && !isHovered;

                const interactiveProps = interactive ? {
                  onMouseEnter: (e: React.MouseEvent) => handleHover(flatIndex, e),
                  onMouseMove: (e: React.MouseEvent) => handleHover(flatIndex, e),
                  onMouseLeave: () => handleHover(null),
                  onClick: () => handleClick(flatIndex),
                  cursor: 'pointer' as const,
                } : {};

                return (
                  <motion.g key={flatIndex} variants={itemVariants}>
                    <g opacity={dimmed ? 0.4 : 1} {...interactiveProps}>
                      <rect
                        x={cx}
                        y={cy}
                        width={cellWidth}
                        height={cellHeight}
                        fill={fill}
                        stroke="rgba(0,0,0,0.08)"
                        strokeWidth={0.5}
                        rx={2}
                      />
                      <text
                        x={cx + cellWidth / 2}
                        y={cy + cellHeight / 2}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fontSize - 2}
                        fill={Math.abs(value) > 0.6 ? '#fff' : '#333'}
                        fontWeight={500}
                      >
                        {value.toFixed(2)}
                      </text>
                    </g>
                  </motion.g>
                );
              }),
            )}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (() => {
          const row = Math.floor(hoveredIndex / n);
          const col = hoveredIndex % n;
          return (
            <ChartTooltip
              visible
              x={tooltipPos.x}
              y={tooltipPos.y}
              label={`${data.labels[row]} × ${data.labels[col]}`}
              items={[
                { label: 'Correlation', value: data.matrix[row][col].toFixed(2), color: correlationColor(data.matrix[row][col]) },
              ]}
            />
          );
        })()}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default Correlogram;
