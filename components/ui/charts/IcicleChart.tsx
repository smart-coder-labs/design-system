'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface IcicleChartProps {
  data: Array<{
    label: string;
    value: number;
    color?: string;
    children?: Array<{ label: string; value: number; color?: string }>;
  }>;
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

interface IcicleRect {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  value: number;
  color: string;
  parentIndex: number;
  isChild: boolean;
}

export const IcicleChart: React.FC<IcicleChartProps> = ({
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
  const [hoveredParent, setHoveredParent] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const gap = 1.5;

  // Compute the total value for proportional widths
  const totalValue = useMemo(
    () => Math.max(data.reduce((s, d) => s + d.value, 0), 1),
    [data],
  );

  // Build rectangles for parents and children
  const rects = useMemo(() => {
    const hasChildren = data.some((d) => d.children && d.children.length > 0);
    const parentHeight = hasChildren ? chartHeight * 0.4 : chartHeight;
    const childHeight = chartHeight - parentHeight;
    const result: IcicleRect[] = [];
    let xOffset = 0;

    data.forEach((item, i) => {
      const itemWidth = (item.value / totalValue) * chartWidth;
      const color = getColor(item, i);

      // Parent rect
      result.push({
        x: padding + xOffset,
        y: padding,
        w: itemWidth,
        h: parentHeight,
        label: item.label,
        value: item.value,
        color,
        parentIndex: i,
        isChild: false,
      });

      // Children rects
      if (item.children && item.children.length > 0) {
        const childTotal = Math.max(item.children.reduce((s, c) => s + c.value, 0), 1);
        let childYOffset = 0;

        item.children.forEach((child, ci) => {
          const childH = (child.value / childTotal) * childHeight;
          // Slightly lighten/shift child color
          const childColor = child.color ?? palette[(i * 3 + ci + 1) % palette.length];

          result.push({
            x: padding + xOffset,
            y: padding + parentHeight + childYOffset,
            w: itemWidth,
            h: childH,
            label: child.label,
            value: child.value,
            color: childColor,
            parentIndex: i,
            isChild: true,
          });

          childYOffset += childH;
        });
      }

      xOffset += itemWidth;
    });

    return result;
  }, [data, chartWidth, chartHeight, padding, totalValue, getColor, palette]);

  const handleRectHover = useCallback(
    (rectIndex: number | null, parentIdx: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(rectIndex);
      setHoveredParent(parentIdx);
      if (rectIndex !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(rectIndex !== null ? rects[rectIndex] : null, rectIndex);
    },
    [rects, onDataPointHover],
  );

  const handleRectClick = useCallback(
    (index: number) => {
      onDataPointClick?.(rects[index], index);
    },
    [rects, onDataPointClick],
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
    ? `${title} icicle chart with ${data.length} categories`
    : `Icicle chart with ${data.length} categories`;

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
            {rects.map((r, i) => {
              const isHovered = hoveredIndex === i;
              // Highlight parent-child relationship
              const isRelated = hoveredParent !== null && r.parentIndex === hoveredParent;
              const isDimmed = hoveredIndex !== null && !isHovered && !isRelated;
              const labelFits = r.w > fontSize * 3 && r.h > fontSize * 1.5;

              return (
                <g key={i}>
                  <motion.rect
                    x={r.x + gap / 2}
                    y={r.y + gap / 2}
                    width={Math.max(0, r.w - gap)}
                    height={Math.max(0, r.h - gap)}
                    rx={3}
                    fill={r.color}
                    opacity={isDimmed ? 0.3 : 1}
                    stroke={isHovered ? 'var(--color-text-primary)' : 'none'}
                    strokeWidth={isHovered ? 2 : 0}
                    initial={animated ? { scaleY: 0, opacity: 0 } : undefined}
                    animate={animated ? { scaleY: 1, opacity: isDimmed ? 0.3 : 1 } : undefined}
                    transition={
                      animated
                        ? { delay: i * 0.03, type: 'spring', ...chartMotion.spring }
                        : { duration: 0 }
                    }
                    style={{ transformOrigin: `${r.x + r.w / 2}px ${r.y}px` }}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleRectHover(i, r.parentIndex, e),
                      onMouseMove: (e: React.MouseEvent) => handleRectHover(i, r.parentIndex, e),
                      onMouseLeave: () => handleRectHover(null, null),
                      onClick: () => handleRectClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${r.label}: ${formatValue(r.value)}`,
                      tabIndex: -1,
                    })}
                  />
                  {showLabels && labelFits && (
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={r.isChild ? fontSize - 3 : fontSize - 1}
                      fontWeight={r.isChild ? 500 : 600}
                      fill="white"
                      pointerEvents="none"
                      opacity={isDimmed ? 0.3 : 1}
                    >
                      {r.label}
                    </text>
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
            label={rects[hoveredIndex].label}
            value={formatValue(rects[hoveredIndex].value)}
            color={rects[hoveredIndex].color}
          />
        )}
      </div>

      {showLabels && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default IcicleChart;
