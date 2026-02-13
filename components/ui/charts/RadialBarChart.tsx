'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { polarToCartesian, describeAnnularArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface RadialBarChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const RadialBarChart: React.FC<RadialBarChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
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

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) / 2 - padding;

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const barThickness = useMemo(() => {
    const available = maxRadius * 0.85;
    const gap = Math.max(2, available * 0.04);
    return Math.max(4, (available - gap * (data.length - 1)) / data.length);
  }, [maxRadius, data.length]);

  const bars = useMemo(() => {
    const gap = Math.max(2, maxRadius * 0.85 * 0.04);
    return data.map((item, i) => {
      const outerR = maxRadius - i * (barThickness + gap);
      const innerR = outerR - barThickness;
      const sweepAngle = (item.value / maxValue) * 360;
      const clampedSweep = Math.min(sweepAngle, 359.99);

      const trackPath = describeAnnularArc(cx, cy, outerR, innerR, 0, 359.99);
      const barPath = clampedSweep > 0
        ? describeAnnularArc(cx, cy, outerR, innerR, 0, clampedSweep)
        : '';

      const midR = (outerR + innerR) / 2;
      const labelPos = polarToCartesian(cx, cy, midR, clampedSweep);

      return {
        ...item,
        outerR,
        innerR,
        sweepAngle: clampedSweep,
        trackPath,
        barPath,
        labelPos,
        percentage: maxValue > 0 ? (item.value / maxValue) * 100 : 0,
      };
    });
  }, [data, maxValue, cx, cy, maxRadius, barThickness]);

  const handleBarHover = useCallback(
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

  const handleBarClick = useCallback(
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
    ? `${title} radial bar chart with ${data.length} bars`
    : `Radial bar chart with ${data.length} bars`;

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

          {bars.map((bar, i) => {
            const isHovered = hoveredIndex === i;
            const color = getColor(bar, i);

            return (
              <g key={i}>
                {/* Track (background ring) */}
                <path
                  d={bar.trackPath}
                  fill="var(--color-border-secondary)"
                  opacity={0.15}
                />

                {/* Animated bar */}
                {bar.barPath && (
                  <motion.path
                    d={bar.barPath}
                    fill={color}
                    opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                    initial={animated ? { opacity: 0, scale: 0 } : undefined}
                    animate={{ opacity: hoveredIndex !== null && !isHovered ? 0.4 : 1, scale: 1 }}
                    transition={
                      animated
                        ? { type: 'spring', ...chartMotion.spring, delay: i * 0.08 }
                        : { duration: 0 }
                    }
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleBarHover(i, e),
                      onMouseMove: (e: React.MouseEvent) => handleBarHover(i, e),
                      onMouseLeave: () => handleBarHover(null),
                      onClick: () => handleBarClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${bar.label}: ${formatValue(bar.value)} (${bar.percentage.toFixed(1)}%)`,
                      tabIndex: -1,
                    })}
                  />
                )}

                {/* Label at end of bar */}
                {showLabels && (
                  <text
                    x={bar.labelPos.x}
                    y={bar.labelPos.y}
                    textAnchor="start"
                    dominantBaseline="central"
                    fontSize={fontSize - 2}
                    fill="var(--color-text-secondary)"
                    pointerEvents="none"
                    dx={4}
                  >
                    {bar.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            value={`${formatValue(data[hoveredIndex].value)} (${bars[hoveredIndex].percentage.toFixed(1)}%)`}
            color={getColor(data[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default RadialBarChart;
