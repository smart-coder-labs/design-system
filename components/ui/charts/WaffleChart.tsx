'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface WaffleChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  total?: number;
  rows?: number;
  cols?: number;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const WaffleChart: React.FC<WaffleChartProps> = ({
  data,
  total: totalProp,
  rows = 10,
  cols = 10,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = true,
  showTooltip = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, padding } = chartSizes[size];

  const cellCount = rows * cols;
  const dataTotal = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);
  const total = totalProp ?? dataTotal;

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  // Assign each cell a category index based on proportional fill
  const cellAssignments = useMemo(() => {
    const assignments: number[] = new Array(cellCount).fill(-1);
    let cellIndex = 0;
    data.forEach((item, dataIndex) => {
      const count = total > 0 ? Math.round((item.value / total) * cellCount) : 0;
      for (let c = 0; c < count && cellIndex < cellCount; c++) {
        assignments[cellIndex] = dataIndex;
        cellIndex++;
      }
    });
    // Fill remaining cells with the last category if any remain
    if (cellIndex < cellCount && data.length > 0) {
      for (let c = cellIndex; c < cellCount; c++) {
        assignments[c] = data.length - 1;
      }
    }
    return assignments;
  }, [data, total, cellCount]);

  const cellPadding = 2;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const cellW = (chartWidth - cellPadding * (cols - 1)) / cols;
  const cellH = (chartHeight - cellPadding * (rows - 1)) / rows;
  const cellSize = Math.min(cellW, cellH);
  const gridWidth = cellSize * cols + cellPadding * (cols - 1);
  const gridHeight = cellSize * rows + cellPadding * (rows - 1);
  const offsetX = (width - gridWidth) / 2;
  const offsetY = (height - gridHeight) / 2;
  const cornerRadius = Math.max(1, cellSize * 0.15);

  const handleCellHover = useCallback(
    (categoryIndex: number | null, event?: React.MouseEvent) => {
      setHoveredCategoryIndex(categoryIndex);
      if (categoryIndex !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(categoryIndex !== null ? data[categoryIndex] : null, categoryIndex);
    },
    [data, onDataPointHover],
  );

  const handleCellClick = useCallback(
    (categoryIndex: number) => {
      onDataPointClick?.(data[categoryIndex], categoryIndex);
    },
    [data, onDataPointClick],
  );

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} waffle chart with ${data.length} categories`
    : `Waffle chart with ${data.length} categories`;

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

          <motion.g
            initial={animated ? {} : undefined}
            animate={animated ? {} : undefined}
          >
            {Array.from({ length: rows }, (_, row) =>
              Array.from({ length: cols }, (_, col) => {
                const cellIndex = row * cols + col;
                const categoryIndex = cellAssignments[cellIndex];
                const x = offsetX + col * (cellSize + cellPadding);
                const y = offsetY + row * (cellSize + cellPadding);
                const color =
                  categoryIndex >= 0
                    ? getColor(data[categoryIndex], categoryIndex)
                    : 'var(--color-border-secondary)';
                const isHoveredCategory =
                  hoveredCategoryIndex !== null && categoryIndex === hoveredCategoryIndex;
                const isDimmed =
                  hoveredCategoryIndex !== null && categoryIndex !== hoveredCategoryIndex;

                return (
                  <motion.rect
                    key={cellIndex}
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    rx={cornerRadius}
                    fill={color}
                    opacity={isDimmed ? 0.25 : 1}
                    initial={animated ? { opacity: 0, scale: 0.5 } : undefined}
                    animate={animated ? { opacity: isDimmed ? 0.25 : 1, scale: 1 } : undefined}
                    transition={
                      animated
                        ? {
                            delay: cellIndex * 0.003,
                            type: 'spring',
                            ...chartMotion.spring,
                          }
                        : { duration: 0 }
                    }
                    {...(interactive &&
                      categoryIndex >= 0 && {
                        onMouseEnter: (e: React.MouseEvent) =>
                          handleCellHover(categoryIndex, e),
                        onMouseMove: (e: React.MouseEvent) =>
                          handleCellHover(categoryIndex, e),
                        onMouseLeave: () => handleCellHover(null),
                        onClick: () => handleCellClick(categoryIndex),
                        cursor: 'pointer',
                        role: 'button',
                        'aria-label': `${data[categoryIndex].label}: ${formatValue(data[categoryIndex].value)}`,
                        tabIndex: -1,
                      })}
                  />
                );
              }),
            )}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredCategoryIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredCategoryIndex].label}
            value={`${formatValue(data[hoveredCategoryIndex].value)} (${total > 0 ? ((data[hoveredCategoryIndex].value / total) * 100).toFixed(1) : 0}%)`}
            color={getColor(data[hoveredCategoryIndex], hoveredCategoryIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default WaffleChart;
