'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { polarToCartesian, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';

export interface SemiCircleGaugeProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  unit?: string;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

function describeGaugeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? '1' : '0';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

export const SemiCircleGauge: React.FC<SemiCircleGaugeProps> = ({
  value,
  min = 0,
  max = 100,
  label,
  unit = '',
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const { width, height: rawHeight, fontSize, padding } = chartSizes[size];
  const height = rawHeight * 0.7;
  const cx = width / 2;
  const cy = height - padding;
  const radius = Math.min(width / 2, height) - padding - 10;

  const colors = colorScheme ?? ['#34C759', '#FFCC00', '#FF3B30'];

  const clampedValue = Math.min(Math.max(value, min), max);
  const normalizedValue = max > min ? (clampedValue - min) / (max - min) : 0;

  // Semi-circle spans from 180° to 360° (left to right)
  const startAngle = 180;
  const endAngle = 360;
  const needleAngle = startAngle + normalizedValue * (endAngle - startAngle);

  // Zone arcs (green, yellow, red)
  const zones = useMemo(() => {
    const zoneCount = colors.length;
    const angleRange = endAngle - startAngle;
    const zoneAngle = angleRange / zoneCount;
    return colors.map((color, i) => ({
      color,
      path: describeGaugeArc(
        cx, cy, radius,
        startAngle + i * zoneAngle,
        startAngle + (i + 1) * zoneAngle,
      ),
    }));
  }, [colors, cx, cy, radius]);

  // Needle endpoint
  const needleTip = polarToCartesian(cx, cy, radius - 8, needleAngle);

  // Tick marks
  const tickCount = 5;
  const ticks = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= tickCount; i++) {
      const angle = startAngle + (i / tickCount) * (endAngle - startAngle);
      const outer = polarToCartesian(cx, cy, radius + 4, angle);
      const inner = polarToCartesian(cx, cy, radius - 4, angle);
      const tickValue = min + (i / tickCount) * (max - min);
      const labelPos = polarToCartesian(cx, cy, radius + 16, angle);
      arr.push({ outer, inner, label: formatValue(tickValue), labelPos, angle });
    }
    return arr;
  }, [cx, cy, radius, min, max]);

  const ariaLabel = title
    ? `${title} gauge showing ${clampedValue}${unit} out of ${max}${unit}`
    : `Gauge showing ${clampedValue}${unit} out of ${max}${unit}`;

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

          {/* Zone arcs */}
          {zones.map((zone, i) => (
            <path
              key={i}
              d={zone.path}
              fill="none"
              stroke={zone.color}
              strokeWidth={radius * 0.18}
              strokeLinecap="round"
              opacity={0.3}
            />
          ))}

          {/* Active arc (filled portion) */}
          {normalizedValue > 0 && (
            <motion.path
              d={describeGaugeArc(cx, cy, radius, startAngle, needleAngle)}
              fill="none"
              stroke={colors[Math.min(Math.floor(normalizedValue * colors.length), colors.length - 1)]}
              strokeWidth={radius * 0.18}
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : undefined}
              animate={animated ? { pathLength: 1 } : undefined}
              transition={animated ? { type: 'spring', ...chartMotion.spring } : undefined}
            />
          )}

          {/* Tick marks */}
          {ticks.map((tick, i) => (
            <g key={i}>
              <line
                x1={tick.outer.x}
                y1={tick.outer.y}
                x2={tick.inner.x}
                y2={tick.inner.y}
                stroke="var(--color-text-tertiary)"
                strokeWidth={1.5}
              />
              <text
                x={tick.labelPos.x}
                y={tick.labelPos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize - 3}
                fill="var(--color-text-tertiary)"
              >
                {tick.label}
              </text>
            </g>
          ))}

          {/* Needle */}
          <motion.line
            x1={cx}
            y1={cy}
            x2={needleTip.x}
            y2={needleTip.y}
            stroke="var(--color-text-primary)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={animated ? { rotate: -90 } : undefined}
            animate={animated ? { rotate: 0 } : undefined}
            transition={animated ? { type: 'spring', ...chartMotion.spring } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Needle center dot */}
          <circle cx={cx} cy={cy} r={4} fill="var(--color-text-primary)" />

          {/* Value display */}
          <text
            x={cx}
            y={cy + fontSize + 8}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 4}
            fontWeight={700}
            fill="var(--color-text-primary)"
          >
            {formatValue(clampedValue)}{unit}
          </text>

          {/* Label */}
          {label && (
            <text
              x={cx}
              y={cy + fontSize * 2 + 12}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize - 2}
              fill="var(--color-text-secondary)"
            >
              {label}
            </text>
          )}
        </svg>
      </div>
    </ChartContainer>
  );
};

export default SemiCircleGauge;
