'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface SpiralChartProps {
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

export const SpiralChart: React.FC<SpiralChartProps> = ({
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

  // Compute spiral points: each data point sits at increasing angle and radius
  const spiralPoints = useMemo(() => {
    const totalTurns = 2.5;
    const startRadius = maxRadius * 0.15;
    return data.map((item, i) => {
      const t = data.length > 1 ? i / (data.length - 1) : 0;
      const angle = t * totalTurns * 2 * Math.PI;
      const r = startRadius + t * (maxRadius - startRadius);
      const x = cx + r * Math.cos(angle - Math.PI / 2);
      const y = cy + r * Math.sin(angle - Math.PI / 2);
      const dotRadius = 4 + (item.value / maxValue) * 10;
      return { ...item, x, y, dotRadius, angle, r };
    });
  }, [data, cx, cy, maxRadius, maxValue]);

  // Build the spiral path (smooth line through points)
  const spiralPath = useMemo(() => {
    const steps = 200;
    const totalTurns = 2.5;
    const startRadius = maxRadius * 0.15;
    const points: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const angle = t * totalTurns * 2 * Math.PI;
      const r = startRadius + t * (maxRadius - startRadius);
      const x = cx + r * Math.cos(angle - Math.PI / 2);
      const y = cy + r * Math.sin(angle - Math.PI / 2);
      points.push(`${i === 0 ? 'M' : 'L'}${x},${y}`);
    }
    return points.join(' ');
  }, [cx, cy, maxRadius]);

  const handlePointHover = useCallback(
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

  const handlePointClick = useCallback(
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
    ? `${title} spiral chart with ${data.length} data points`
    : `Spiral chart with ${data.length} data points`;

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

          {/* Spiral path line */}
          <motion.path
            d={spiralPath}
            fill="none"
            stroke="var(--color-border-primary)"
            strokeWidth={1.5}
            strokeOpacity={0.4}
            initial={animated ? { pathLength: 0 } : undefined}
            animate={animated ? { pathLength: 1 } : undefined}
            transition={animated ? { duration: 1.2, ease: chartMotion.easing } : undefined}
          />

          {/* Data points */}
          {spiralPoints.map((point, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r={point.dotRadius}
                fill={getColor(point, i)}
                opacity={hoveredIndex !== null && !isHovered ? 0.4 : 0.85}
                stroke={isHovered ? 'white' : 'none'}
                strokeWidth={isHovered ? 2 : 0}
                initial={animated ? { scale: 0, opacity: 0 } : undefined}
                animate={animated ? { scale: 1, opacity: hoveredIndex !== null && !isHovered ? 0.4 : 0.85 } : undefined}
                transition={animated ? { delay: (i / data.length) * 0.8, type: 'spring', ...chartMotion.spring } : undefined}
                style={{ transformOrigin: `${point.x}px ${point.y}px` }}
                {...(interactive && {
                  onMouseEnter: (e: React.MouseEvent) => handlePointHover(i, e),
                  onMouseMove: (e: React.MouseEvent) => handlePointHover(i, e),
                  onMouseLeave: () => handlePointHover(null),
                  onClick: () => handlePointClick(i),
                  cursor: 'pointer',
                  role: 'button',
                  'aria-label': `${point.label}: ${formatValue(point.value)}`,
                  tabIndex: -1,
                })}
              />
            );
          })}

          {/* Labels */}
          {showLabels &&
            spiralPoints.map((point, i) => (
              <text
                key={`label-${i}`}
                x={point.x}
                y={point.y - point.dotRadius - 4}
                textAnchor="middle"
                dominantBaseline="auto"
                fontSize={fontSize - 2}
                fill="var(--color-text-secondary)"
                pointerEvents="none"
              >
                {point.label}
              </text>
            ))}
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

export default SpiralChart;
