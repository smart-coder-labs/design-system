'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface RippleImpactDataPoint {
  x: number;
  y: number;
  value: number;
  label?: string;
}

export interface RippleImpactChartProps {
  data: RippleImpactDataPoint[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

export const RippleImpactChart: React.FC<RippleImpactChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const { maxValue, points } = useMemo(() => {
    const mv = Math.max(...data.map((d) => d.value), 1);
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const maxRadius = Math.min(chartW, chartH) * 0.18;

    const pts = data.map((d, i) => ({
      cx: padding + (d.x / 100) * chartW,
      cy: padding + (d.y / 100) * chartH,
      radius: (d.value / mv) * maxRadius,
      color: palette[i % palette.length],
      label: d.label,
      value: d.value,
    }));

    return { maxValue: mv, points: pts };
  }, [data, width, height, padding, palette]);

  const rippleCount = 4;

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} ripple impact chart with ${data.length} impact points`
    : `Ripple impact chart with ${data.length} impact points`;

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

          {points.map((point, i) => {
            const isHovered = hoveredIndex === i;
            const dimmed = hoveredIndex !== null && !isHovered;

            return (
              <g key={i} opacity={dimmed ? 0.3 : 1}>
                {/* Expanding ripple rings */}
                {Array.from({ length: rippleCount }, (_, ri) => (
                  <motion.circle
                    key={`ripple-${i}-${ri}`}
                    cx={point.cx}
                    cy={point.cy}
                    r={point.radius}
                    fill="none"
                    stroke={point.color}
                    strokeWidth={isHovered ? 1.5 : 1}
                    initial={animated ? { r: 0, opacity: 0.6 } : { r: point.radius * ((ri + 1) / rippleCount), opacity: 0.5 - ri * 0.1 }}
                    animate={
                      animated
                        ? {
                            r: point.radius,
                            opacity: 0,
                          }
                        : undefined
                    }
                    transition={
                      animated
                        ? {
                            duration: 2.4,
                            delay: ri * 0.6,
                            repeat: Infinity,
                            ease: chartMotion.easing,
                          }
                        : undefined
                    }
                  />
                ))}

                {/* Center dot */}
                <motion.circle
                  cx={point.cx}
                  cy={point.cy}
                  r={isHovered ? 5 : 3.5}
                  fill={point.color}
                  fillOpacity={0.9}
                  stroke={point.color}
                  strokeWidth={isHovered ? 2 : 1}
                  initial={animated ? { scale: 0, opacity: 0 } : undefined}
                  animate={animated ? { scale: 1, opacity: 1 } : undefined}
                  transition={animated ? { type: 'spring', ...chartMotion.spring, delay: i * 0.1 } : undefined}
                  style={{ transformOrigin: `${point.cx}px ${point.cy}px` }}
                  {...(interactive
                    ? {
                        onMouseEnter: (e: React.MouseEvent<SVGCircleElement>) => handleHover(i, e as unknown as React.MouseEvent),
                        onMouseMove: (e: React.MouseEvent<SVGCircleElement>) => handleHover(i, e as unknown as React.MouseEvent),
                        onMouseLeave: () => handleHover(null),
                        cursor: 'pointer' as const,
                      }
                    : {})}
                />

                {/* Label below center */}
                {point.label && (
                  <text
                    x={point.cx}
                    y={point.cy + point.radius + fontSize + 2}
                    textAnchor="middle"
                    fill="var(--color-text-secondary)"
                    fontSize={fontSize - 2}
                    opacity={0.8}
                  >
                    {point.label}
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
            label={points[hoveredIndex].label ?? `Impact ${hoveredIndex + 1}`}
            value={points[hoveredIndex].value}
            color={points[hoveredIndex].color}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default RippleImpactChart;
