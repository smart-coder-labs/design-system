'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartLegend } from './shared/ChartLegend';

export interface MultiRingGaugeProps {
  rings: Array<{ label: string; value: number; max: number; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  title?: string;
  subtitle?: string;
}

export const MultiRingGauge: React.FC<MultiRingGaugeProps> = ({
  rings,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  showLabels = true,
  showLegend = false,
  title,
  subtitle,
}) => {
  const { width, height, fontSize } = chartSizes[size];
  const dim = Math.min(width, height);
  const cx = dim / 2;
  const cy = dim / 2;

  const ringCount = rings.length;
  const strokeWidth = Math.max(6, (dim * 0.08) / Math.max(1, ringCount * 0.5));
  const ringGap = strokeWidth * 0.6;

  const getColor = (ring: { color?: string }, index: number) =>
    ring.color ?? chartPaletteArray[index % chartPaletteArray.length];

  const ringData = useMemo(() => {
    const maxRadius = dim / 2 - 12;
    return rings.map((ring, i) => {
      const radius = maxRadius - i * (strokeWidth + ringGap);
      const circumference = 2 * Math.PI * radius;
      const clampedValue = Math.min(Math.max(ring.value, 0), ring.max);
      const percentage = ring.max > 0 ? (clampedValue / ring.max) * 100 : 0;
      const dashOffset = circumference - (percentage / 100) * circumference;
      return {
        ...ring,
        radius,
        circumference,
        percentage,
        dashOffset,
        color: getColor(ring, i),
      };
    });
  }, [rings, dim, strokeWidth, ringGap]);

  const legendItems = useMemo(
    () =>
      rings.map((ring, i) => ({
        label: `${ring.label} (${Math.round(ringData[i].percentage)}%)`,
        color: getColor(ring, i),
      })),
    [rings, ringData],
  );

  const ariaLabel = title
    ? `${title} multi-ring gauge with ${ringCount} rings`
    : `Multi-ring gauge with ${ringCount} rings`;

  return (
    <ChartContainer
      variant={variant}
      animated={animated}
      title={title}
      subtitle={subtitle}
      className={className}
    >
      <div className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${dim} ${dim}`}
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

          {ringData.map((ring, i) => (
            <g key={i}>
              {/* Background ring */}
              <circle
                cx={cx}
                cy={cy}
                r={ring.radius}
                fill="none"
                stroke="var(--color-border-secondary)"
                strokeWidth={strokeWidth}
                opacity={0.2}
              />

              {/* Foreground ring */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={ring.radius}
                fill="none"
                stroke={ring.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={ring.circumference}
                transform={`rotate(-90 ${cx} ${cy})`}
                initial={animated ? { strokeDashoffset: ring.circumference } : { strokeDashoffset: ring.dashOffset }}
                animate={{ strokeDashoffset: ring.dashOffset }}
                transition={
                  animated
                    ? { type: 'spring', ...chartMotion.spring, delay: i * 0.1 }
                    : { duration: 0 }
                }
                role="img"
                aria-label={`${ring.label}: ${Math.round(ring.percentage)}%`}
              />
            </g>
          ))}

          {/* Center labels */}
          {showLabels && ringCount > 0 && (
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize + 4}
              fontWeight={700}
              fill="var(--color-text-primary)"
            >
              {ringCount === 1
                ? `${Math.round(ringData[0].percentage)}%`
                : `${ringCount} Rings`}
            </text>
          )}
        </svg>
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default MultiRingGauge;
