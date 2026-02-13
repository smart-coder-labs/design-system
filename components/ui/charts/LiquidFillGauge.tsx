'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface LiquidFillGaugeProps {
  value: number;
  max?: number;
  color?: string;
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

export const LiquidFillGauge: React.FC<LiquidFillGaugeProps> = ({
  value,
  max = 100,
  color,
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
  const radius = dim * 0.42;

  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;
  const fillColor = color ?? chartPaletteArray[0];

  // Water level (top of circle = 0%, bottom = 100%, so invert)
  const waterY = cy + radius - (percentage / 100) * (radius * 2);

  // Generate wave path
  const waveAmplitude = radius * 0.06;
  const waveId = useMemo(() => `liquid-wave-${Math.random().toString(36).slice(2, 9)}`, []);
  const clipId = useMemo(() => `liquid-clip-${Math.random().toString(36).slice(2, 9)}`, []);

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} liquid fill gauge at ${percentage.toFixed(0)}%`
    : `Liquid fill gauge at ${percentage.toFixed(0)}%`;

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

          <defs>
            <clipPath id={clipId}>
              <circle cx={cx} cy={cy} r={radius} />
            </clipPath>
          </defs>

          {/* Background circle */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="var(--color-border-secondary)"
            strokeWidth={2}
            strokeOpacity={0.4}
          />

          {/* Liquid fill with wave animation */}
          <g clipPath={`url(#${clipId})`}>
            <motion.g
              initial={animated ? { y: radius * 2 } : { y: 0 }}
              animate={{ y: 0 }}
              transition={animated ? { type: 'spring', stiffness: 40, damping: 12 } : { duration: 0 }}
            >
              {/* Wave 1 */}
              <motion.rect
                x={cx - radius}
                y={waterY}
                width={radius * 2}
                height={radius * 2}
                fill={fillColor}
                fillOpacity={0.3}
                rx={waveAmplitude}
                animate={animated ? {
                  y: [waterY - waveAmplitude, waterY + waveAmplitude, waterY - waveAmplitude],
                } : undefined}
                transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
              />
              {/* Wave 2 (slightly offset) */}
              <motion.rect
                x={cx - radius}
                y={waterY + waveAmplitude * 0.5}
                width={radius * 2}
                height={radius * 2}
                fill={fillColor}
                fillOpacity={0.5}
                rx={waveAmplitude * 1.5}
                animate={animated ? {
                  y: [waterY + waveAmplitude, waterY - waveAmplitude, waterY + waveAmplitude],
                } : undefined}
                transition={animated ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
              />
            </motion.g>
          </g>

          {/* Interactive overlay */}
          {interactive && (
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              cursor="pointer"
              onMouseEnter={(e) => handleHover(true, e)}
              onMouseMove={(e) => handleHover(true, e)}
              onMouseLeave={() => handleHover(false)}
            />
          )}

          {/* Center percentage */}
          {showLabels && (
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize + 8}
              fontWeight={700}
              fill="var(--color-text-primary)"
            >
              {`${Math.round(percentage)}%`}
            </text>
          )}
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label="Fill Level"
            value={`${Math.round(percentage)}%`}
            color={fillColor}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default LiquidFillGauge;
