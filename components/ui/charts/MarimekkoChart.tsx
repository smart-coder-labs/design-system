'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface MarimekkoChartProps {
  data: Array<{
    label: string;
    width: number;
    segments: Array<{ label: string; value: number; color?: string }>;
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

interface MekkoRect {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  segmentLabel: string;
  value: number;
  color: string;
  columnIndex: number;
  segmentIndex: number;
}

export const MarimekkoChart: React.FC<MarimekkoChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  showLegend = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredRect, setHoveredRect] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const gap = 2;

  const totalWidth = useMemo(
    () => Math.max(data.reduce((s, d) => s + d.width, 0), 1),
    [data],
  );

  // Build all segment rectangles
  const rects = useMemo(() => {
    const result: MekkoRect[] = [];
    let xOffset = 0;

    data.forEach((col, ci) => {
      const colWidth = (col.width / totalWidth) * chartWidth;
      const segTotal = Math.max(col.segments.reduce((s, seg) => s + seg.value, 0), 1);
      let yOffset = 0;

      col.segments.forEach((seg, si) => {
        const segHeight = (seg.value / segTotal) * chartHeight;
        const color = seg.color ?? palette[si % palette.length];

        result.push({
          x: margin.left + xOffset,
          y: margin.top + yOffset,
          w: colWidth,
          h: segHeight,
          label: col.label,
          segmentLabel: seg.label,
          value: seg.value,
          color,
          columnIndex: ci,
          segmentIndex: si,
        });

        yOffset += segHeight;
      });

      xOffset += colWidth;
    });

    return result;
  }, [data, totalWidth, chartWidth, chartHeight, margin.left, margin.top, palette]);

  // Unique segment labels for legend
  const legendItems = useMemo(() => {
    const seen = new Map<string, string>();
    data.forEach((col) => {
      col.segments.forEach((seg, si) => {
        if (!seen.has(seg.label)) {
          seen.set(seg.label, seg.color ?? palette[si % palette.length]);
        }
      });
    });
    return Array.from(seen.entries()).map(([label, color]) => ({ label, color }));
  }, [data, palette]);

  // Column labels for x-axis
  const columnLabels = useMemo(() => {
    let xOffset = 0;
    return data.map((col) => {
      const colWidth = (col.width / totalWidth) * chartWidth;
      const x = margin.left + xOffset + colWidth / 2;
      xOffset += colWidth;
      return { label: col.label, x };
    });
  }, [data, totalWidth, chartWidth, margin.left]);

  const handleRectHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredRect(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? rects[index] : null, index);
    },
    [rects, onDataPointHover],
  );

  const handleRectClick = useCallback(
    (index: number) => {
      onDataPointClick?.(rects[index], index);
    },
    [rects, onDataPointClick],
  );

  const ariaLabel = title
    ? `${title} Marimekko chart with ${data.length} columns`
    : `Marimekko chart with ${data.length} columns`;

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

          {/* X-axis labels */}
          {showLabels &&
            columnLabels.map((col, i) => (
              <text
                key={i}
                x={col.x}
                y={margin.top + chartHeight + 16}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize - 2}
                fill="var(--color-text-secondary)"
                pointerEvents="none"
              >
                {col.label}
              </text>
            ))}

          <motion.g
            initial={animated ? { opacity: 0 } : undefined}
            animate={animated ? { opacity: 1 } : undefined}
            transition={animated ? { duration: chartMotion.duration.normal } : undefined}
          >
            {rects.map((r, i) => {
              const isHovered = hoveredRect === i;
              const isDimmed = hoveredRect !== null && !isHovered;
              const labelFits = r.w > fontSize * 3 && r.h > fontSize * 1.5;

              return (
                <g key={i}>
                  <motion.rect
                    x={r.x + gap / 2}
                    y={r.y + gap / 2}
                    width={Math.max(0, r.w - gap)}
                    height={Math.max(0, r.h - gap)}
                    rx={2}
                    fill={r.color}
                    opacity={isDimmed ? 0.35 : 1}
                    stroke={isHovered ? 'var(--color-text-primary)' : 'none'}
                    strokeWidth={isHovered ? 1.5 : 0}
                    initial={animated ? { scaleY: 0, opacity: 0 } : undefined}
                    animate={animated ? { scaleY: 1, opacity: isDimmed ? 0.35 : 1 } : undefined}
                    transition={
                      animated
                        ? { delay: i * 0.02, type: 'spring', ...chartMotion.spring }
                        : { duration: 0 }
                    }
                    style={{ transformOrigin: `${r.x + r.w / 2}px ${margin.top + chartHeight}px` }}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleRectHover(i, e),
                      onMouseMove: (e: React.MouseEvent) => handleRectHover(i, e),
                      onMouseLeave: () => handleRectHover(null),
                      onClick: () => handleRectClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${r.label} – ${r.segmentLabel}: ${formatValue(r.value)}`,
                      tabIndex: -1,
                    })}
                  />
                  {showLabels && labelFits && (
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize - 3}
                      fontWeight={500}
                      fill="white"
                      pointerEvents="none"
                      opacity={isDimmed ? 0.35 : 1}
                    >
                      {r.segmentLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredRect !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${rects[hoveredRect].label} – ${rects[hoveredRect].segmentLabel}`}
            value={formatValue(rects[hoveredRect].value)}
            color={rects[hoveredRect].color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default MarimekkoChart;
