'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { describeAnnularArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface NestedDonutChartProps {
  rings: Array<{
    label: string;
    data: Array<{ label: string; value: number; color?: string }>;
  }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
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
  ringLabel: string;
  value: number;
  percentage: number;
  ringIndex: number;
  segmentIndex: number;
}

export const NestedDonutChart: React.FC<NestedDonutChartProps> = ({
  rings,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLegend = true,
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

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) / 2 - padding;
  const ringCount = rings.length;
  // Reserve center space
  const centerRatio = 0.25;
  const minInnerRadius = maxRadius * centerRatio;
  const ringSpace = maxRadius - minInnerRadius;
  const ringThickness = ringCount > 0 ? (ringSpace - (ringCount - 1) * 3) / ringCount : 0;

  // Build arc segments for all rings
  const segments = useMemo(() => {
    const result: ArcSegment[] = [];

    rings.forEach((ring, ri) => {
      // Outermost ring = first in array (ri=0)
      const outerR = maxRadius - ri * (ringThickness + 3);
      const innerR = outerR - ringThickness;
      const total = Math.max(ring.data.reduce((s, d) => s + d.value, 0), 1);
      let currentAngle = 0;

      ring.data.forEach((item, si) => {
        const sliceAngle = (item.value / total) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + sliceAngle;
        const color = item.color ?? palette[(ri * 4 + si) % palette.length];

        const path = describeAnnularArc(
          cx, cy, outerR, innerR,
          startAngle, endAngle >= 360 ? 359.99 : endAngle,
        );

        result.push({
          path,
          color,
          label: item.label,
          ringLabel: ring.label,
          value: item.value,
          percentage: (item.value / total) * 100,
          ringIndex: ri,
          segmentIndex: si,
        });

        currentAngle = endAngle;
      });
    });

    return result;
  }, [rings, maxRadius, ringThickness, cx, cy, palette]);

  const handleSegmentHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? segments[index] : null, index);
    },
    [segments, onDataPointHover],
  );

  const handleSegmentClick = useCallback(
    (index: number) => {
      onDataPointClick?.(segments[index], index);
    },
    [segments, onDataPointClick],
  );

  // Legend shows ring labels with first segment color as representative
  const legendItems = useMemo(
    () =>
      rings.map((ring, ri) => ({
        label: ring.label,
        color: ring.data[0]?.color ?? palette[(ri * 4) % palette.length],
      })),
    [rings, palette],
  );

  const ariaLabel = title
    ? `${title} nested donut chart with ${rings.length} rings`
    : `Nested donut chart with ${rings.length} rings`;

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
              const isHovered = hoveredIndex === i;
              const isSameRing = hoveredIndex !== null && segments[hoveredIndex].ringIndex === seg.ringIndex;
              const isDimmed = hoveredIndex !== null && !isHovered && !isSameRing;

              return (
                <motion.path
                  key={i}
                  d={seg.path}
                  fill={seg.color}
                  opacity={isDimmed ? 0.3 : hoveredIndex !== null && !isHovered ? 0.6 : 1}
                  stroke={isHovered ? 'var(--color-text-primary)' : 'var(--color-bg-primary)'}
                  strokeWidth={isHovered ? 2 : 0.5}
                  initial={animated ? { opacity: 0 } : undefined}
                  animate={animated ? { opacity: isDimmed ? 0.3 : hoveredIndex !== null && !isHovered ? 0.6 : 1 } : undefined}
                  transition={
                    animated
                      ? { delay: i * 0.02, duration: chartMotion.duration.normal }
                      : { duration: 0 }
                  }
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleSegmentHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleSegmentHover(i, e),
                    onMouseLeave: () => handleSegmentHover(null),
                    onClick: () => handleSegmentClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${seg.ringLabel} – ${seg.label}: ${formatValue(seg.value)} (${seg.percentage.toFixed(1)}%)`,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {/* Center label */}
          <text
            x={cx}
            y={cy - fontSize * 0.2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 2}
            fontWeight={700}
            fill="var(--color-text-primary)"
            pointerEvents="none"
          >
            {rings.length}
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
            {rings.length === 1 ? 'Ring' : 'Rings'}
          </text>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${segments[hoveredIndex].ringLabel} – ${segments[hoveredIndex].label}`}
            value={`${formatValue(segments[hoveredIndex].value)} (${segments[hoveredIndex].percentage.toFixed(1)}%)`}
            color={segments[hoveredIndex].color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default NestedDonutChart;
