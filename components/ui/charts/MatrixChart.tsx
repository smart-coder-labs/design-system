'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface MatrixChartData {
  rows: string[];
  cols: string[];
  values: number[][];
}

export interface MatrixChartProps {
  data: MatrixChartData;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const MatrixChart: React.FC<MatrixChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
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
  const baseColor = palette[0];

  const margin = { top: padding + 20, right: padding, bottom: padding, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const rowCount = data.rows.length;
  const colCount = data.cols.length;

  const cellWidth = chartWidth / colCount;
  const cellHeight = chartHeight / rowCount;
  const cellGap = 1;

  const allValues = useMemo(() => data.values.flat(), [data.values]);
  const valMin = useMemo(() => Math.min(...allValues), [allValues]);
  const valMax = useMemo(() => Math.max(...allValues), [allValues]);

  const getOpacity = useCallback(
    (value: number) => linearScale(value, valMin, valMax, 0.1, 1.0),
    [valMin, valMax],
  );

  const flatIndex = useCallback(
    (row: number, col: number) => row * colCount + col,
    [colCount],
  );

  const fromFlatIndex = useCallback(
    (index: number) => ({ row: Math.floor(index / colCount), col: index % colCount }),
    [colCount],
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
      onDataPointClick?.({ row: data.rows[row], col: data.cols[col], value: data.values[row][col] }, index);
    },
    [data, fromFlatIndex, onDataPointClick],
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

  const totalCells = rowCount * colCount;
  const ariaLabel = title
    ? `${title} matrix chart with ${totalCells} cells`
    : `Matrix chart with ${totalCells} cells`;

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

          {/* Column labels at top */}
          {showLabels && data.cols.map((label, colIdx) => (
            <text
              key={`col-${colIdx}`}
              x={margin.left + colIdx * cellWidth + cellWidth / 2}
              y={margin.top - 6}
              textAnchor="middle"
              fontSize={fontSize - 2}
              fill="var(--color-text-secondary)"
            >
              {label}
            </text>
          ))}

          {/* Row labels on left */}
          {showLabels && data.rows.map((label, rowIdx) => (
            <text
              key={`row-${rowIdx}`}
              x={margin.left - 6}
              y={margin.top + rowIdx * cellHeight + cellHeight / 2}
              textAnchor="end"
              dominantBaseline="central"
              fontSize={fontSize - 2}
              fill="var(--color-text-secondary)"
            >
              {label}
            </text>
          ))}

          {/* Cells */}
          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.rows.map((_, rowIdx) =>
              data.cols.map((_, colIdx) => {
                const value = data.values[rowIdx][colIdx];
                const idx = flatIndex(rowIdx, colIdx);
                const cx = margin.left + colIdx * cellWidth;
                const cy = margin.top + rowIdx * cellHeight;
                const opacity = getOpacity(value);
                const isHovered = hoveredIndex === idx;
                const dimmed = hoveredIndex !== null && !isHovered;
                const showValue = showLabels && cellWidth > fontSize * 2 && cellHeight > fontSize * 1.5;

                const interactiveProps = interactive ? {
                  onMouseEnter: (e: React.MouseEvent) => handleHover(idx, e),
                  onMouseMove: (e: React.MouseEvent) => handleHover(idx, e),
                  onMouseLeave: () => handleHover(null),
                  onClick: () => handleClick(idx),
                  cursor: 'pointer' as const,
                } : {};

                return (
                  <motion.g key={idx} variants={itemVariants} style={{ transformOrigin: `${cx + cellWidth / 2}px ${cy + cellHeight / 2}px` }}>
                    <rect
                      x={cx + cellGap / 2}
                      y={cy + cellGap / 2}
                      width={Math.max(0, cellWidth - cellGap)}
                      height={Math.max(0, cellHeight - cellGap)}
                      fill={baseColor}
                      fillOpacity={dimmed ? opacity * 0.4 : opacity}
                      rx={2}
                      stroke={isHovered ? baseColor : 'none'}
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
    </ChartContainer>
  );
};

export default MatrixChart;
