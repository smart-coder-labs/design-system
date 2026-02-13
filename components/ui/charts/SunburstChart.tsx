'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { describeAnnularArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface SunburstChartProps {
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
  showLegend?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

interface ArcSegment {
  path: string;
  color: string;
  label: string;
  value: number;
  parentIndex: number;
  level: number;
  dataIndex: number;
  percentage: number;
}

export const SunburstChart: React.FC<SunburstChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = false,
  showLegend = false,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) / 2 - padding;

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  // Determine max depth
  const maxDepth = useMemo(() => {
    let depth = 1;
    data.forEach((d) => {
      if (d.children && d.children.length > 0) depth = 2;
    });
    return depth;
  }, [data]);

  const ringWidth = maxRadius / (maxDepth + 0.5);
  const innerHoleRadius = ringWidth * 0.5;

  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

  const segments = useMemo(() => {
    const segs: ArcSegment[] = [];
    let segIndex = 0;
    let currentAngle = 0;

    data.forEach((item, parentIdx) => {
      const parentAngle = total > 0 ? (item.value / total) * 360 : 0;
      const parentStart = currentAngle;
      const parentEnd = currentAngle + parentAngle;
      const color = getColor(item, parentIdx);

      // Inner ring (parent)
      const innerOuter = innerHoleRadius + ringWidth;
      const parentPath = describeAnnularArc(
        cx, cy,
        innerOuter,
        innerHoleRadius,
        parentStart,
        parentEnd > 359.99 ? 359.99 : parentEnd,
      );

      segs.push({
        path: parentPath,
        color,
        label: item.label,
        value: item.value,
        parentIndex: parentIdx,
        level: 0,
        dataIndex: segIndex,
        percentage: total > 0 ? (item.value / total) * 100 : 0,
      });
      segIndex++;

      // Outer ring (children)
      if (item.children && item.children.length > 0) {
        const childTotal = item.children.reduce((sum, c) => sum + c.value, 0);
        let childAngle = parentStart;

        item.children.forEach((child, childIdx) => {
          const childSlice = childTotal > 0 ? (child.value / childTotal) * parentAngle : 0;
          const childStart = childAngle;
          const childEnd = childAngle + childSlice;

          const outerInner = innerOuter;
          const outerOuter = innerOuter + ringWidth;
          const childColor = child.color ?? adjustBrightness(color, -15 + childIdx * 10);

          const childPath = describeAnnularArc(
            cx, cy,
            outerOuter,
            outerInner,
            childStart,
            childEnd > 359.99 ? 359.99 : childEnd,
          );

          segs.push({
            path: childPath,
            color: childColor,
            label: child.label,
            value: child.value,
            parentIndex: parentIdx,
            level: 1,
            dataIndex: segIndex,
            percentage: total > 0 ? (child.value / total) * 100 : 0,
          });
          segIndex++;
          childAngle = childEnd;
        });
      }

      currentAngle = parentEnd;
    });

    return segs;
  }, [data, total, cx, cy, innerHoleRadius, ringWidth, getColor]);

  const handleSegmentHover = useCallback(
    (segIndex: number | null, event?: React.MouseEvent) => {
      setHoveredSegment(segIndex);
      if (segIndex !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      if (segIndex !== null) {
        const seg = segments[segIndex];
        onDataPointHover?.(seg, segIndex);
      } else {
        onDataPointHover?.(null, null);
      }
    },
    [segments, onDataPointHover],
  );

  const handleSegmentClick = useCallback(
    (segIndex: number) => {
      onDataPointClick?.(segments[segIndex], segIndex);
    },
    [segments, onDataPointClick],
  );

  // Highlight entire parent path on hover
  const hoveredParentIndex = useMemo(() => {
    if (hoveredSegment === null) return null;
    return segments[hoveredSegment]?.parentIndex ?? null;
  }, [hoveredSegment, segments]);

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} sunburst chart with ${data.length} categories`
    : `Sunburst chart with ${data.length} categories`;

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
            initial={animated ? { rotate: -90, opacity: 0 } : undefined}
            animate={animated ? { rotate: 0, opacity: 1 } : undefined}
            transition={animated ? { type: 'spring', ...chartMotion.spring, duration: 0.8 } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {segments.map((seg, i) => {
              const isHighlighted =
                hoveredParentIndex !== null && seg.parentIndex === hoveredParentIndex;
              const isDimmed = hoveredParentIndex !== null && !isHighlighted;

              return (
                <motion.path
                  key={i}
                  d={seg.path}
                  fill={seg.color}
                  opacity={isDimmed ? 0.3 : 1}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={1.5}
                  initial={animated ? { opacity: 0 } : undefined}
                  animate={animated ? { opacity: isDimmed ? 0.3 : 1 } : undefined}
                  transition={
                    animated
                      ? { delay: i * 0.03, duration: chartMotion.duration.normal }
                      : { duration: 0 }
                  }
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleSegmentHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleSegmentHover(i, e),
                    onMouseLeave: () => handleSegmentHover(null),
                    onClick: () => handleSegmentClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${seg.label}: ${formatValue(seg.value)} (${seg.percentage.toFixed(1)}%)`,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {/* Center text */}
          <text
            x={cx}
            y={cy - fontSize * 0.3}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 4}
            fontWeight={700}
            fill="var(--color-text-primary)"
            pointerEvents="none"
          >
            {formatValue(total)}
          </text>
          <text
            x={cx}
            y={cy + fontSize * 1}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize - 2}
            fill="var(--color-text-secondary)"
            pointerEvents="none"
          >
            Total
          </text>
        </svg>

        {showTooltip && interactive && hoveredSegment !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={segments[hoveredSegment].label}
            value={`${formatValue(segments[hoveredSegment].value)} (${segments[hoveredSegment].percentage.toFixed(1)}%)`}
            color={segments[hoveredSegment].color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

/** Adjust hex or CSS color brightness. Falls back to original if parsing fails. */
function adjustBrightness(color: string, amount: number): string {
  // Only adjust hex colors; return CSS variables as-is with opacity variation
  if (color.startsWith('var(')) return color;
  const hex = color.replace('#', '');
  if (hex.length !== 6) return color;
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default SunburstChart;
