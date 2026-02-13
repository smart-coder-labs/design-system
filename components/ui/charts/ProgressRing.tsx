'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ProgressRingProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  max = 100,
  label,
  color,
  strokeWidth: strokeWidthProp,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { width, height, fontSize } = chartSizes[size];
  const dim = Math.min(width, height);
  const cx = dim / 2;
  const cy = dim / 2;
  const strokeWidth = strokeWidthProp ?? dim * 0.08;
  const radius = (dim - strokeWidth) / 2 - 8;
  const circumference = 2 * Math.PI * radius;

  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;
  const fillLength = (percentage / 100) * circumference;
  const dashOffset = circumference - fillLength;

  const ringColor = color ?? chartPaletteArray[1]; // Green like Apple Health

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} progress ring at ${percentage.toFixed(0)}%`
    : `Progress ring at ${percentage.toFixed(0)}%`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${dim} ${dim}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '8px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
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
            opacity={0.2}
          />

          {/* Progress ring */}
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

          {/* Glow effect on hover */}
          {hovered && (
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={ringColor}
              strokeWidth={strokeWidth + 4}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${cx} ${cy})`}
              opacity={0.15}
            />
          )}

          {/* Center content */}
          {showLabels && (
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

          {/* Interactive overlay */}
          {interactive && (
            <circle
              cx={cx} cy={cy} r={radius + strokeWidth}
              fill="transparent"
              cursor="pointer"
              onMouseEnter={(e) => handleHover(true, e)}
              onMouseMove={(e) => handleHover(true, e)}
              onMouseLeave={() => handleHover(false)}
            />
          )}
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={label ?? 'Progress'}
            value={`${Math.round(percentage)}%`}
            color={ringColor}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ProgressRing;
