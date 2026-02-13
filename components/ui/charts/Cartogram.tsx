'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface CartogramDataItem {
  label: string;
  value: number;
  color?: string;
}

export interface CartogramProps {
  data: CartogramDataItem[];
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

interface LayoutRect {
  x: number;
  y: number;
  w: number;
  h: number;
  item: CartogramDataItem;
  index: number;
}

export const Cartogram: React.FC<CartogramProps> = ({
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

  const margin = { top: padding, right: padding, bottom: padding, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Squarified treemap layout: sorts by value and optimizes row/column splits to minimize aspect ratios
  const rects = useMemo((): LayoutRect[] => {
    if (data.length === 0) return [];

    const sorted = data
      .map((item, index) => ({ item, index }))
      .sort((a, b) => b.item.value - a.item.value);

    const totalValue = sorted.reduce((sum, d) => sum + d.item.value, 0);
    if (totalValue === 0) return [];

    const totalArea = chartWidth * chartHeight;
    const result: LayoutRect[] = [];
    let currentX = margin.left;
    let currentY = margin.top;
    let remainingWidth = chartWidth;
    let remainingHeight = chartHeight;
    let remainingItems = [...sorted];

    while (remainingItems.length > 0) {
      const isHorizontal = remainingWidth >= remainingHeight;
      const remainingValue = remainingItems.reduce((s, d) => s + d.item.value, 0);

      // Find best split for this row/column
      let bestAspectRatio = Infinity;
      let bestSplit = 1;
      const sideLength = isHorizontal ? remainingHeight : remainingWidth;

      for (let split = 1; split <= remainingItems.length; split++) {
        const rowValue = remainingItems.slice(0, split).reduce((s, d) => s + d.item.value, 0);
        const rowFraction = rowValue / remainingValue;
        const rowSize = isHorizontal ? remainingWidth * rowFraction : remainingHeight * rowFraction;

        let worstAspect = 0;
        for (let j = 0; j < split; j++) {
          const itemFraction = remainingItems[j].item.value / rowValue;
          const itemSize = sideLength * itemFraction;
          const aspect = Math.max(rowSize / itemSize, itemSize / rowSize);
          worstAspect = Math.max(worstAspect, aspect);
        }

        if (worstAspect <= bestAspectRatio) {
          bestAspectRatio = worstAspect;
          bestSplit = split;
        } else {
          break;
        }
      }

      const rowItems = remainingItems.slice(0, bestSplit);
      remainingItems = remainingItems.slice(bestSplit);
      const rowValue = rowItems.reduce((s, d) => s + d.item.value, 0);
      const rowFraction = rowValue / remainingValue;

      if (isHorizontal) {
        const rowWidth = remainingWidth * rowFraction;
        let offsetY = currentY;
        for (const entry of rowItems) {
          const itemFraction = entry.item.value / rowValue;
          const itemHeight = remainingHeight * itemFraction;
          result.push({
            x: currentX,
            y: offsetY,
            w: rowWidth,
            h: itemHeight,
            item: entry.item,
            index: entry.index,
          });
          offsetY += itemHeight;
        }
        currentX += rowWidth;
        remainingWidth -= rowWidth;
      } else {
        const rowHeight = remainingHeight * rowFraction;
        let offsetX = currentX;
        for (const entry of rowItems) {
          const itemFraction = entry.item.value / rowValue;
          const itemWidth = remainingWidth * itemFraction;
          result.push({
            x: offsetX,
            y: currentY,
            w: itemWidth,
            h: rowHeight,
            item: entry.item,
            index: entry.index,
          });
          offsetX += itemWidth;
        }
        currentY += rowHeight;
        remainingHeight -= rowHeight;
      }
    }

    return result;
  }, [data, chartWidth, chartHeight, margin.left, margin.top]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} cartogram with ${data.length} items`
    : `Cartogram with ${data.length} items`;

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

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {rects.map((r) => {
              const color = getColor(r.item, r.index);
              const isHovered = hoveredIndex === r.index;
              const dimmed = hoveredIndex !== null && !isHovered;
              const labelFits = r.w > 30 && r.h > 16;
              const gap = 1;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(r.index, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(r.index, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(r.index),
                cursor: 'pointer' as const,
              } : {};

              return (
                <React.Fragment key={r.index}>
                  <motion.rect
                    variants={itemVariants}
                    x={r.x + gap}
                    y={r.y + gap}
                    width={Math.max(0, r.w - gap * 2)}
                    height={Math.max(0, r.h - gap * 2)}
                    rx={3}
                    fill={color}
                    fillOpacity={dimmed ? 0.3 : 0.8}
                    stroke={isHovered ? color : 'none'}
                    strokeWidth={isHovered ? 2 : 0}
                    {...interactiveProps}
                  />
                  {showLabels && labelFits && (
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="white"
                      fontSize={Math.min(fontSize - 2, r.w / r.item.label.length * 1.4)}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                      fontWeight={500}
                      pointerEvents="none"
                    >
                      {r.item.label}
                    </text>
                  )}
                </React.Fragment>
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
              { label: 'Value', value: formatValue(data[hoveredIndex].value), color: getColor(data[hoveredIndex], hoveredIndex) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default Cartogram;
