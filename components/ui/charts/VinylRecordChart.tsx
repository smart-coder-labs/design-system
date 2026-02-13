'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface VinylRecordDataItem {
  label: string;
  value: number;
  color?: string;
}

export interface VinylRecordChartProps {
  data: VinylRecordDataItem[];
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

export const VinylRecordChart: React.FC<VinylRecordChartProps> = ({
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

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = (Math.min(width, height) / 2) - padding;
  const centerHoleRadius = maxRadius * 0.12;
  const labelRadius = maxRadius * 0.22;
  const grooveStart = maxRadius * 0.3;
  const grooveEnd = maxRadius * 0.92;

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);

  const grooves = useMemo(() => {
    const count = data.length;
    if (count === 0) return [];
    const spacing = (grooveEnd - grooveStart) / (count + 1);
    return data.map((item, i) => {
      const radius = grooveStart + spacing * (i + 1);
      const normalizedValue = item.value / maxValue;
      const strokeWidth = 1.5 + normalizedValue * 3;
      const color = item.color ?? palette[i % palette.length];
      return { ...item, radius, strokeWidth, color, normalizedValue };
    });
  }, [data, grooveStart, grooveEnd, maxValue, palette]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const grooveVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} vinyl record chart with ${data.length} tracks`
    : `Vinyl record chart with ${data.length} tracks`;

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

          <defs>
            <radialGradient id="vinyl-shine" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.06} />
              <stop offset="100%" stopColor="#fff" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="label-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8d5b0" />
              <stop offset="100%" stopColor="#c4a46c" />
            </radialGradient>
          </defs>

          <motion.g
            animate={animated ? { rotate: 360 } : undefined}
            transition={animated ? { duration: 8, repeat: Infinity, ease: 'linear' } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {/* Vinyl disc */}
            <circle cx={cx} cy={cy} r={maxRadius} fill="#1a1a1a" />

            {/* Subtle grooves background rings */}
            {Array.from({ length: 20 }).map((_, i) => {
              const r = grooveStart + ((grooveEnd - grooveStart) / 20) * i;
              return (
                <circle
                  key={`bg-${i}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth={0.5}
                />
              );
            })}

            {/* Data grooves */}
            <motion.g
              variants={containerVariants}
              initial={animated ? 'hidden' : undefined}
              animate={animated ? 'visible' : undefined}
            >
              {grooves.map((groove, i) => {
                const isHovered = hoveredIndex === i;
                const circumference = 2 * Math.PI * groove.radius;

                const interactiveProps = interactive ? {
                  onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                  onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                  onMouseLeave: () => handleHover(null),
                  cursor: 'pointer' as const,
                } : {};

                return (
                  <motion.circle
                    key={`g-${i}`}
                    cx={cx}
                    cy={cy}
                    r={groove.radius}
                    fill="none"
                    stroke={groove.color}
                    strokeWidth={isHovered ? groove.strokeWidth + 2 : groove.strokeWidth}
                    strokeOpacity={isHovered ? 0.9 : 0.5}
                    strokeDasharray={`${circumference * groove.normalizedValue} ${circumference * (1 - groove.normalizedValue)}`}
                    variants={grooveVariants}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                    {...interactiveProps}
                  />
                );
              })}
            </motion.g>

            {/* Center label area */}
            <circle cx={cx} cy={cy} r={labelRadius} fill="url(#label-gradient)" />

            {/* Center hole */}
            <circle cx={cx} cy={cy} r={centerHoleRadius} fill="#2a2a2a" />

            {/* Shine overlay */}
            <circle cx={cx} cy={cy} r={maxRadius} fill="url(#vinyl-shine)" />
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Value', value: data[hoveredIndex].value, color: grooves[hoveredIndex].color },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default VinylRecordChart;
