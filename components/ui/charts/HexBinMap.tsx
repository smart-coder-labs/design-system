'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface HexBinMapDataPoint {
  x: number;
  y: number;
  value: number;
}

export interface HexBinMapProps {
  data: HexBinMapDataPoint[];
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

/** Create a hexagon path string centered at (cx, cy) with given size. */
function hexagonPath(cx: number, cy: number, hexSize: number): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    points.push(`${cx + hexSize * Math.cos(angle)},${cy + hexSize * Math.sin(angle)}`);
  }
  return `M${points.join('L')}Z`;
}

interface HexCell {
  cx: number;
  cy: number;
  value: number;
  count: number;
  path: string;
}

export const HexBinMap: React.FC<HexBinMapProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = false,
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

  const hexCells = useMemo(() => {
    if (data.length === 0) return [];

    const xs = data.map((d) => d.x);
    const ys = data.map((d) => d.y);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);

    const hexSize = Math.min(chartWidth, chartHeight) / 12;
    const hexW = hexSize * Math.sqrt(3);
    const hexH = hexSize * 2;

    // Bin data into hex cells
    const bins = new Map<string, { sumVal: number; count: number; col: number; row: number }>();

    data.forEach((d) => {
      const sx = linearScale(d.x, xMin, xMax, 0, chartWidth);
      const sy = linearScale(d.y, yMin, yMax, 0, chartHeight);

      const col = Math.round(sx / hexW);
      const row = Math.round(sy / (hexH * 0.75));
      const key = `${col},${row}`;

      const existing = bins.get(key);
      if (existing) {
        existing.sumVal += d.value;
        existing.count += 1;
      } else {
        bins.set(key, { sumVal: d.value, count: 1, col, row });
      }
    });

    const cells: HexCell[] = [];
    bins.forEach(({ sumVal, count, col, row }) => {
      const cx = margin.left + col * hexW + (row % 2 !== 0 ? hexW / 2 : 0);
      const cy = margin.top + row * hexH * 0.75;
      cells.push({ cx, cy, value: sumVal, count, path: hexagonPath(cx, cy, hexSize * 0.9) });
    });

    return cells;
  }, [data, chartWidth, chartHeight, margin.left, margin.top]);

  const { minVal, maxVal } = useMemo(() => {
    if (hexCells.length === 0) return { minVal: 0, maxVal: 1 };
    const values = hexCells.map((c) => c.value);
    return { minVal: Math.min(...values), maxVal: Math.max(...values) };
  }, [hexCells]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? hexCells[index] : null, index);
    },
    [hexCells, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(hexCells[index], index); },
    [hexCells, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const baseColor = palette[0];

  const ariaLabel = title
    ? `${title} hex bin map with ${hexCells.length} cells`
    : `Hex bin map with ${hexCells.length} cells`;

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
            {hexCells.map((cell, i) => {
              const opacity = linearScale(cell.value, minVal, maxVal, 0.2, 1.0);
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
                <motion.path
                  key={i}
                  variants={itemVariants}
                  d={cell.path}
                  fill={baseColor}
                  fillOpacity={dimmed ? opacity * 0.4 : opacity}
                  stroke={isHovered ? 'var(--color-text-primary)' : 'var(--color-border-primary)'}
                  strokeWidth={isHovered ? 2 : 0.5}
                  style={{ transformOrigin: `${cell.cx}px ${cell.cy}px` }}
                  {...interactiveProps}
                />
              );
            })}
          </motion.g>

          {showLabels && hexCells.map((cell, i) => (
            <text
              key={`label-${i}`}
              x={cell.cx}
              y={cell.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize - 3}
              fill="var(--color-text-primary)"
              pointerEvents="none"
            >
              {formatValue(cell.value)}
            </text>
          ))}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Hex Cell`}
            items={[
              { label: 'Value', value: formatValue(hexCells[hoveredIndex].value), color: baseColor },
              { label: 'Points', value: hexCells[hoveredIndex].count.toString() },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default HexBinMap;
