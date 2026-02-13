'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface CalendarHeatmapDataPoint {
  date: string;
  value: number;
}

export interface CalendarHeatmapProps {
  data: CalendarHeatmapDataPoint[];
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

const DAY_LABELS = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];

export const CalendarHeatmap: React.FC<CalendarHeatmapProps> = ({
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

  const grid = useMemo(() => {
    if (data.length === 0) return { cells: [], weekCount: 0, valMin: 0, valMax: 1 };

    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
    const firstDate = new Date(sorted[0].date);
    const lastDate = new Date(sorted[sorted.length - 1].date);

    // Map dates to values for lookup
    const dateMap = new Map<string, number>();
    sorted.forEach((d) => dateMap.set(d.date, d.value));

    const vals = sorted.map((d) => d.value);
    const valMin = Math.min(...vals);
    const valMax = Math.max(...vals);

    // Find the Monday of the first date's week
    const startDay = firstDate.getDay();
    const mondayOffset = startDay === 0 ? -6 : 1 - startDay;
    const weekStart = new Date(firstDate);
    weekStart.setDate(firstDate.getDate() + mondayOffset);

    const cells: Array<{
      date: string;
      value: number;
      row: number;
      col: number;
      dataIndex: number;
    }> = [];

    const current = new Date(weekStart);
    let dataIdx = 0;
    while (current <= lastDate) {
      const dateStr = current.toISOString().split('T')[0];
      const dayOfWeek = current.getDay();
      // row: 0=Mon, 1=Tue, ..., 6=Sun
      const row = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
      const diffTime = current.getTime() - weekStart.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const col = Math.floor(diffDays / 7);

      const value = dateMap.get(dateStr);
      if (value !== undefined) {
        cells.push({ date: dateStr, value, row, col, dataIndex: dataIdx });
        dataIdx++;
      }

      current.setDate(current.getDate() + 1);
    }

    const weekCount = cells.length > 0 ? Math.max(...cells.map((c) => c.col)) + 1 : 0;
    return { cells, weekCount, valMin, valMax };
  }, [data]);

  const labelWidth = showLabels ? 28 : 0;
  const margin = { top: padding, right: padding, bottom: padding, left: padding + labelWidth };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const cellSize = useMemo(() => {
    if (grid.weekCount === 0) return 0;
    const maxByWidth = (chartWidth - (grid.weekCount - 1)) / grid.weekCount;
    const maxByHeight = (chartHeight - 6) / 7;
    return Math.max(2, Math.min(maxByWidth, maxByHeight));
  }, [chartWidth, chartHeight, grid.weekCount]);

  const cellGap = Math.max(1, cellSize * 0.15);

  const getOpacity = useCallback(
    (value: number) => linearScale(value, grid.valMin, grid.valMax, 0.1, 1.0),
    [grid.valMin, grid.valMax],
  );

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? grid.cells[index] : null, index);
    },
    [grid.cells, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(grid.cells[index], index); },
    [grid.cells, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.005 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} calendar heatmap with ${data.length} entries`
    : `Calendar heatmap with ${data.length} entries`;

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

          {/* Day labels */}
          {showLabels && DAY_LABELS.map((label, i) => (
            label && (
              <text
                key={i}
                x={margin.left - 6}
                y={margin.top + i * (cellSize + cellGap) + cellSize / 2}
                textAnchor="end"
                dominantBaseline="central"
                fontSize={fontSize - 3}
                fill="var(--color-text-tertiary)"
              >
                {label}
              </text>
            )
          ))}

          {/* Cells */}
          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {grid.cells.map((cell, i) => {
              const cx = margin.left + cell.col * (cellSize + cellGap);
              const cy = margin.top + cell.row * (cellSize + cellGap);
              const opacity = getOpacity(cell.value);
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
                <motion.rect
                  key={i}
                  variants={itemVariants}
                  x={cx}
                  y={cy}
                  width={cellSize}
                  height={cellSize}
                  rx={2}
                  fill={baseColor}
                  fillOpacity={dimmed ? opacity * 0.4 : opacity}
                  stroke={isHovered ? baseColor : 'none'}
                  strokeWidth={isHovered ? 1.5 : 0}
                  style={{ transformOrigin: `${cx + cellSize / 2}px ${cy + cellSize / 2}px` }}
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
            label={grid.cells[hoveredIndex].date}
            items={[
              { label: 'Value', value: formatValue(grid.cells[hoveredIndex].value), color: baseColor },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default CalendarHeatmap;
