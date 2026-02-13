'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';

export interface RingGaugeProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  showLabel?: boolean;
  title?: string;
  subtitle?: string;
}

export const RingGauge: React.FC<RingGaugeProps> = ({
  value,
  max = 100,
  label,
  color,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  showLabel = true,
  title,
  subtitle,
}) => {
  const { width, height, fontSize } = chartSizes[size];
  const dim = Math.min(width, height);
  const cx = dim / 2;
  const cy = dim / 2;
  const strokeWidth = dim * 0.1;
  const radius = (dim - strokeWidth) / 2 - 8;
  const circumference = 2 * Math.PI * radius;

  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;
  const fillLength = (percentage / 100) * circumference;
  const dashOffset = circumference - fillLength;

  const ringColor = color ?? chartPaletteArray[0];

  const ariaLabel = title
    ? `${title} ring gauge at ${percentage.toFixed(0)}%`
    : `Ring gauge at ${percentage.toFixed(0)}%`;

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

          {/* Background ring */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="var(--color-border-secondary)"
            strokeWidth={strokeWidth}
            opacity={0.3}
          />

          {/* Foreground ring */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            transform={`rotate(-90 ${cx} ${cy})`}
            initial={animated ? { strokeDashoffset: circumference } : { strokeDashoffset: dashOffset }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={animated ? { type: 'spring', ...chartMotion.spring } : { duration: 0 }}
          />

          {/* Center percentage */}
          {showLabel && (
            <>
              <text
                x={cx}
                y={cy - (label ? fontSize * 0.4 : 0)}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize + 8}
                fontWeight={700}
                fill="var(--color-text-primary)"
              >
                {`${Math.round(percentage)}%`}
              </text>
              {label && (
                <text
                  x={cx}
                  y={cy + fontSize * 1.2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={fontSize - 2}
                  fill="var(--color-text-secondary)"
                >
                  {label}
                </text>
              )}
            </>
          )}
        </svg>
      </div>
    </ChartContainer>
  );
};

export default RingGauge;
