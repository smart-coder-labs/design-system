'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface PulseRingProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  value: number;
  max?: number;
  color?: string;
  pulseSpeed?: number;
}

export const PulseRing: React.FC<PulseRingProps> = ({
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  colorScheme,
  title,
  subtitle,
  value,
  max = 100,
  color,
  pulseSpeed = 1.5,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];
  const ringColor = color ?? palette[0];
  const ratio = Math.min(Math.max(value / max, 0), 1);

  const cx = width / 2;
  const cy = height / 2;
  const baseRadius = Math.min(width, height) / 2 - padding;
  const coreRadius = baseRadius * 0.25;

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!interactive) return;
    setHovered(true);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const ariaLabel = title
    ? `${title} pulse ring showing ${value} of ${max}`
    : `Pulse ring showing ${value} of ${max}`;

  const rings = [0, 1, 2];

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
        >
          <title>{ariaLabel}</title>

          {/* Animated pulse rings */}
          {rings.map((i) => {
            const ringRadius = coreRadius + (baseRadius - coreRadius) * ratio * ((i + 1) / rings.length);
            const delay = (i * pulseSpeed) / rings.length;

            return animated ? (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={ringRadius}
                fill="none"
                stroke={ringColor}
                strokeWidth={2}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: [1, 1.4 + ratio * 0.6],
                  opacity: [0.5 * ratio + 0.1, 0],
                }}
                transition={{
                  duration: pulseSpeed,
                  delay,
                  repeat: Infinity,
                  ease: chartMotion.easing,
                }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            ) : (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={ringRadius}
                fill="none"
                stroke={ringColor}
                strokeWidth={2}
                opacity={0.3 - i * 0.08}
              />
            );
          })}

          {/* Core circle */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={coreRadius}
            fill={ringColor}
            fillOpacity={0.85}
            initial={animated ? { scale: 0 } : undefined}
            animate={animated ? { scale: 1 } : undefined}
            transition={animated ? { type: 'spring', ...chartMotion.spring } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            {...(interactive
              ? {
                  onMouseEnter: handleMouseEnter,
                  onMouseMove: handleMouseMove,
                  onMouseLeave: handleMouseLeave,
                  cursor: 'pointer',
                }
              : {})}
          />

          {/* Value text */}
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 4}
            fontWeight={700}
            fill="var(--color-text-primary)"
          >
            {Math.round(value)}
          </text>
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={title ?? 'Pulse Ring'}
            items={[
              { label: 'Value', value: Math.round(value), color: ringColor },
              { label: 'Max', value: max },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default PulseRing;
