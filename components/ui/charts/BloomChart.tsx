'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface BloomDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BloomChartProps {
  data: BloomDataPoint[];
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

export const BloomChart: React.FC<BloomChartProps> = ({
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
  const maxRadius = Math.min(width, height) / 2 - padding - 10;
  const coreRadius = maxRadius * 0.1;

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);

  const petals = useMemo(() => {
    const n = data.length;
    const angleStep = (Math.PI * 2) / n;

    return data.map((d, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const normValue = d.value / maxValue;
      const petalLength = coreRadius + normValue * (maxRadius - coreRadius);
      const petalWidth = (maxRadius * 0.15) + normValue * (maxRadius * 0.1);
      const color = d.color ?? palette[i % palette.length];

      // Control points for organic petal shape using cubic bezier
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const perpCos = Math.cos(angle + Math.PI / 2);
      const perpSin = Math.sin(angle + Math.PI / 2);

      // Tip of petal
      const tipX = cx + cos * petalLength;
      const tipY = cy + sin * petalLength;

      // Base points (left and right of center)
      const baseLeftX = cx + perpCos * petalWidth * 0.3;
      const baseLeftY = cy + perpSin * petalWidth * 0.3;
      const baseRightX = cx - perpCos * petalWidth * 0.3;
      const baseRightY = cy - perpSin * petalWidth * 0.3;

      // Control points for bulge
      const cp1X = cx + cos * petalLength * 0.5 + perpCos * petalWidth;
      const cp1Y = cy + sin * petalLength * 0.5 + perpSin * petalWidth;
      const cp2X = cx + cos * petalLength * 0.5 - perpCos * petalWidth;
      const cp2Y = cy + sin * petalLength * 0.5 - perpSin * petalWidth;

      const path = [
        `M ${baseLeftX} ${baseLeftY}`,
        `C ${cp1X} ${cp1Y}, ${tipX + perpCos * petalWidth * 0.15} ${tipY + perpSin * petalWidth * 0.15}, ${tipX} ${tipY}`,
        `C ${tipX - perpCos * petalWidth * 0.15} ${tipY - perpSin * petalWidth * 0.15}, ${cp2X} ${cp2Y}, ${baseRightX} ${baseRightY}`,
        'Z',
      ].join(' ');

      // Label position - slightly beyond tip
      const labelX = cx + cos * (petalLength + 14);
      const labelY = cy + sin * (petalLength + 14);

      return { path, color, tipX, tipY, labelX, labelY, data: d, angle };
    });
  }, [data, maxValue, cx, cy, maxRadius, coreRadius, palette]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const petalVariants = animated
    ? {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} bloom chart with ${data.length} petals`
    : `Bloom chart with ${data.length} petals`;

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

          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {petals.map((petal, i) => {
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g
                  key={i}
                  variants={petalVariants}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                >
                  <motion.path
                    d={petal.path}
                    fill={petal.color}
                    fillOpacity={isHovered ? 0.85 : 0.65}
                    stroke={petal.color}
                    strokeWidth={isHovered ? 2 : 1}
                    opacity={dimmed ? 0.35 : 1}
                    {...interactiveProps}
                  />
                  <text
                    x={petal.labelX}
                    y={petal.labelY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={fontSize - 2}
                    fill="var(--color-text-secondary)"
                    opacity={dimmed ? 0.3 : 0.8}
                  >
                    {petal.data.label}
                  </text>
                </motion.g>
              );
            })}
          </motion.g>

          {/* Center core */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={coreRadius}
            fill="var(--color-text-primary)"
            fillOpacity={0.15}
            stroke="var(--color-text-primary)"
            strokeWidth={1.5}
            strokeOpacity={0.3}
            initial={animated ? { scale: 0 } : undefined}
            animate={animated ? { scale: 1 } : undefined}
            transition={{ type: 'spring', ...chartMotion.spring, delay: 0.3 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            value={data[hoveredIndex].value}
            color={petals[hoveredIndex].color}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default BloomChart;
