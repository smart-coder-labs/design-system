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

export interface HeatmapData {
  rows: string[];
  cols: string[];
  values: number[][];
}

export interface HeatmapProps {
  data: HeatmapData;
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

export const Heatmap: React.FC<HeatmapProps> = ({
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

  const rowCount = data.rows.length;
  const colCount = data.cols.length;

  const allValues = useMemo(() => data.values.flat(), [data.values]);
  const valMin = useMemo(() => Math.min(...allValues), [allValues]);
  const valMax = useMemo(() => Math.max(...allValues), [allValues]);

  const cellWidth = chartWidth / colCount;
  const cellHeight = chartHeight / rowCount;
  const cellGap = 1;

  const baseColor = palette[0];

  const getCellColor = useCallback(
    (value: number) => {
      const t = valMax === valMin ? 0.5 : (value - valMin) / (valMax - valMin);
      const alpha = 0.1 + t * 0.9;
      return { fill: baseColor, opacity: alpha };
    },
    [baseColor, valMin, valMax],
  );

  const flatIndex = useCallback(
    (row: number, col: number) => row * colCount + col,
    [colCount],
  );

  const fromFlatIndex = useCallback(
    (index: number) => ({ row: Math.floor(index / colCount), col: index % colCount }),
    [colCount],
  );

  const xAxisTicks = useMemo(
    () => data.cols.map((label, i) => ({
      position: margin.left + i * cellWidth + cellWidth / 2,
      label,
    })),
    [data.cols, margin.left, cellWidth],
  );

  const yAxisTicks = useMemo(
    () => data.rows.map((label, i) => ({
      position: margin.top + i * cellHeight + cellHeight / 2,
      label,
    })),
    [data.rows, margin.top, cellHeight],
  );

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? { index, ...fromFlatIndex(index) } : null, index);
    },
    [fromFlatIndex, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => {
      const { row, col } = fromFlatIndex(index);
      onDataPointClick?.({ row, col, value: data.values[row][col] }, index);
    },
    [data.values, fromFlatIndex, onDataPointClick],
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

  const legendItems = useMemo(
    () => [
      { label: `Low (${formatValue(valMin)})`, color: baseColor },
      { label: `High (${formatValue(valMax)})`, color: baseColor },
    ],
    [baseColor, valMin, valMax],
  );

  const totalCells = rowCount * colCount;
  const ariaLabel = title
    ? `${title} heatmap with ${totalCells} cells`
    : `Heatmap with ${totalCells} cells`;

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
              horizontalLines={data.rows.map((_, i) => margin.top + i * cellHeight)}
              verticalLines={data.cols.map((_, i) => margin.left + i * cellWidth)}
            />
          )}

          {showLabels && (
            <ChartAxis type="y" x={margin.left} y={margin.top} length={chartHeight} ticks={yAxisTicks} fontSize={fontSize - 2} />
          )}

          {showLabels && (
            <ChartAxis type="x" x={margin.left} y={margin.top + chartHeight} length={chartWidth} ticks={xAxisTicks} fontSize={fontSize - 2} />
          )}

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.rows.map((_, rowIdx) =>
              data.cols.map((_, colIdx) => {
                const value = data.values[rowIdx][colIdx];
                const idx = flatIndex(rowIdx, colIdx);
                const cx = margin.left + colIdx * cellWidth;
                const cy = margin.top + rowIdx * cellHeight;
                const { fill, opacity } = getCellColor(value);
                const isHovered = hoveredIndex === idx;
                const dimmed = hoveredIndex !== null && !isHovered;

                const interactiveProps = interactive ? {
                  onMouseEnter: (e: React.MouseEvent) => handleHover(idx, e),
                  onMouseMove: (e: React.MouseEvent) => handleHover(idx, e),
                  onMouseLeave: () => handleHover(null),
                  onClick: () => handleClick(idx),
                  cursor: 'pointer' as const,
                } : {};

                const showValue = cellWidth > fontSize * 2 && cellHeight > fontSize * 1.5;

                return (
                  <motion.g key={idx} variants={itemVariants} style={{ transformOrigin: `${cx + cellWidth / 2}px ${cy + cellHeight / 2}px` }}>
                    <rect
                      x={cx + cellGap / 2}
                      y={cy + cellGap / 2}
                      width={Math.max(0, cellWidth - cellGap)}
                      height={Math.max(0, cellHeight - cellGap)}
                      fill={fill}
                      opacity={dimmed ? opacity * 0.4 : opacity}
                      rx={2}
                      stroke={isHovered ? fill : 'none'}
                      strokeWidth={isHovered ? 2 : 0}
                      {...interactiveProps}
                    />
                    {showValue && (
                      <text
                        x={cx + cellWidth / 2}
                        y={cy + cellHeight / 2}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fontSize - 3}
                        fill={opacity > 0.55 ? 'white' : 'var(--color-text-primary)'}
                        pointerEvents="none"
                      >
                        {formatValue(value)}
                      </text>
                    )}
                  </motion.g>
                );
              }),
            )}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (() => {
          const { row, col } = fromFlatIndex(hoveredIndex);
          return (
            <ChartTooltip
              visible
              x={tooltipPos.x}
              y={tooltipPos.y}
              label={`${data.rows[row]} × ${data.cols[col]}`}
              items={[
                { label: 'Value', value: formatValue(data.values[row][col]), color: baseColor },
              ]}
            />
          );
        })()}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default Heatmap;
