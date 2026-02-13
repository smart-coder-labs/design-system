'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface TreemapProps {
  data: Array<{
    label: string;
    value: number;
    color?: string;
    children?: Array<{ label: string; value: number }>;
  }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

interface TreemapRect {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  value: number;
  color: string;
  dataIndex: number;
}

// Slice-and-dice treemap layout: alternates horizontal/vertical splits
function computeTreemapLayout(
  items: Array<{ label: string; value: number; color: string; dataIndex: number }>,
  x: number,
  y: number,
  w: number,
  h: number,
  vertical: boolean,
): TreemapRect[] {
  if (items.length === 0) return [];
  const total = items.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) return [];

  const rects: TreemapRect[] = [];
  let offset = 0;

  items.forEach((item) => {
    const ratio = item.value / total;
    const rect: TreemapRect = vertical
      ? { x, y: y + offset, w, h: h * ratio, label: item.label, value: item.value, color: item.color, dataIndex: item.dataIndex }
      : { x: x + offset, y, w: w * ratio, h, label: item.label, value: item.value, color: item.color, dataIndex: item.dataIndex };
    rects.push(rect);
    offset += vertical ? h * ratio : w * ratio;
  });

  return rects;
}

// Squarified treemap: uses a greedy approach for better aspect ratios
function squarify(
  items: Array<{ label: string; value: number; color: string; dataIndex: number }>,
  x: number,
  y: number,
  w: number,
  h: number,
): TreemapRect[] {
  if (items.length === 0) return [];

  const total = items.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) return [];

  // Sort descending by value for squarified layout
  const sorted = [...items].sort((a, b) => b.value - a.value);
  const rects: TreemapRect[] = [];

  function layoutRow(
    row: typeof sorted,
    rx: number,
    ry: number,
    rw: number,
    rh: number,
    vertical: boolean,
  ) {
    const rowTotal = row.reduce((sum, d) => sum + d.value, 0);
    let offset = 0;
    row.forEach((item) => {
      const ratio = item.value / rowTotal;
      if (vertical) {
        const sliceW = (rowTotal / total) * rw;
        rects.push({
          x: rx,
          y: ry + offset,
          w: sliceW,
          h: rh * ratio,
          label: item.label,
          value: item.value,
          color: item.color,
          dataIndex: item.dataIndex,
        });
        offset += rh * ratio;
      } else {
        const sliceH = (rowTotal / total) * rh;
        rects.push({
          x: rx + offset,
          y: ry,
          w: rw * ratio,
          h: sliceH,
          label: item.label,
          value: item.value,
          color: item.color,
          dataIndex: item.dataIndex,
        });
        offset += rw * ratio;
      }
    });
    return vertical
      ? { x: rx + (rowTotal / total) * rw, y: ry, w: rw - (rowTotal / total) * rw, h: rh }
      : { x: rx, y: ry + (rowTotal / total) * rh, w: rw, h: rh - (rowTotal / total) * rh };
  }

  function worst(row: typeof sorted, sideLength: number): number {
    const rowTotal = row.reduce((sum, d) => sum + d.value, 0);
    const rowArea = (rowTotal / total) * w * h;
    const rowSide = rowArea / sideLength;
    let worstRatio = 0;
    row.forEach((item) => {
      const area = (item.value / total) * w * h;
      const itemSide = area / rowSide;
      const ratio = Math.max(itemSide / rowSide, rowSide / itemSide);
      if (ratio > worstRatio) worstRatio = ratio;
    });
    return worstRatio;
  }

  let currentRow: typeof sorted = [];
  let remaining = [...sorted];
  let rx = x, ry = y, rw = w, rh = h;

  while (remaining.length > 0) {
    const vertical = rw >= rh;
    const sideLength = vertical ? rh : rw;
    const next = remaining[0];

    if (currentRow.length === 0) {
      currentRow.push(next);
      remaining = remaining.slice(1);
      continue;
    }

    const currentWorst = worst(currentRow, sideLength);
    const newRow = [...currentRow, next];
    const newWorst = worst(newRow, sideLength);

    if (newWorst <= currentWorst) {
      currentRow.push(next);
      remaining = remaining.slice(1);
    } else {
      const result = layoutRow(currentRow, rx, ry, rw, rh, vertical);
      rx = result.x;
      ry = result.y;
      rw = result.w;
      rh = result.h;
      currentRow = [];
    }
  }

  if (currentRow.length > 0) {
    const vertical = rw >= rh;
    layoutRow(currentRow, rx, ry, rw, rh, vertical);
  }

  return rects;
}

export const Treemap: React.FC<TreemapProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLabels = true,
  showLegend = false,
  showTooltip = true,
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

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const rects = useMemo(() => {
    const items = data.map((d, i) => ({
      label: d.label,
      value: d.value,
      color: getColor(d, i),
      dataIndex: i,
    }));
    return squarify(items, padding, padding, width - padding * 2, height - padding * 2);
  }, [data, getColor, width, height, padding]);

  const handleRectHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? data[index] : null, index);
    },
    [data, onDataPointHover],
  );

  const handleRectClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
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
    ? `${title} treemap with ${data.length} items`
    : `Treemap with ${data.length} items`;

  const gap = 1.5;

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
            initial={animated ? { opacity: 0 } : undefined}
            animate={animated ? { opacity: 1 } : undefined}
            transition={animated ? { duration: chartMotion.duration.normal } : undefined}
          >
            {rects.map((rect, i) => {
              const isHovered = hoveredIndex === rect.dataIndex;
              const isDimmed = hoveredIndex !== null && !isHovered;
              const labelFits = rect.w > fontSize * 3 && rect.h > fontSize * 2;

              return (
                <g key={i}>
                  <motion.rect
                    x={rect.x + gap / 2}
                    y={rect.y + gap / 2}
                    width={Math.max(0, rect.w - gap)}
                    height={Math.max(0, rect.h - gap)}
                    rx={4}
                    fill={rect.color}
                    opacity={isDimmed ? 0.35 : 1}
                    stroke={isHovered ? 'var(--color-text-primary)' : 'none'}
                    strokeWidth={isHovered ? 2 : 0}
                    initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
                    animate={animated ? { scale: 1, opacity: isDimmed ? 0.35 : 1 } : undefined}
                    transition={
                      animated
                        ? { delay: i * 0.04, type: 'spring', ...chartMotion.spring }
                        : { duration: 0 }
                    }
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleRectHover(rect.dataIndex, e),
                      onMouseMove: (e: React.MouseEvent) => handleRectHover(rect.dataIndex, e),
                      onMouseLeave: () => handleRectHover(null),
                      onClick: () => handleRectClick(rect.dataIndex),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${rect.label}: ${formatValue(rect.value)}`,
                      tabIndex: -1,
                    })}
                  />
                  {showLabels && labelFits && (
                    <>
                      <text
                        x={rect.x + rect.w / 2}
                        y={rect.y + rect.h / 2 - fontSize * 0.3}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fontSize - 2}
                        fontWeight={600}
                        fill="white"
                        pointerEvents="none"
                        opacity={isDimmed ? 0.35 : 1}
                      >
                        {rect.label}
                      </text>
                      <text
                        x={rect.x + rect.w / 2}
                        y={rect.y + rect.h / 2 + fontSize * 0.8}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fontSize - 3}
                        fill="rgba(255,255,255,0.8)"
                        pointerEvents="none"
                        opacity={isDimmed ? 0.35 : 1}
                      >
                        {formatValue(rect.value)}
                      </text>
                    </>
                  )}
                </g>
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
            value={formatValue(data[hoveredIndex].value)}
            color={getColor(data[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default Treemap;
