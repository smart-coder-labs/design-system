'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { describeArc, linearScale, formatValue, polarToCartesian } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface PolarAreaChartProps {
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

export const PolarAreaChart: React.FC<PolarAreaChartProps> = ({
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

  const sectorAngle = data.length > 0 ? 360 / data.length : 0;

  const sectors = useMemo(() => {
    return data.map((item, i) => {
      const startAngle = i * sectorAngle;
      const endAngle = startAngle + sectorAngle;
      const r = linearScale(item.value, 0, maxValue, 0, maxRadius);
      return {
        ...item,
        startAngle,
        endAngle,
        radius: r,
        path: describeArc(cx, cy, r, startAngle, endAngle === 360 ? 359.99 : endAngle),
      };
    });
  }, [data, sectorAngle, maxValue, maxRadius, cx, cy]);

  const gridCircles = useMemo(() => {
    const levels = 4;
    return Array.from({ length: levels }, (_, i) =>
      ((i + 1) / levels) * maxRadius,
    );
  }, [maxRadius]);

  const handleSectorHover = useCallback(
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

  const handleSectorClick = useCallback(
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
    ? `${title} polar area chart with ${data.length} sectors`
    : `Polar area chart with ${data.length} sectors`;

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

          {/* Concentric grid circles */}
          {gridCircles.map((r, i) => (
            <circle
              key={`grid-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="var(--color-border-primary)"
              strokeWidth={0.5}
              opacity={0.3}
            />
          ))}

          <motion.g
            initial={animated ? { scale: 0, opacity: 0 } : undefined}
            animate={animated ? { scale: 1, opacity: 1 } : undefined}
            transition={animated ? { type: 'spring', ...chartMotion.spring, duration: 0.8 } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {sectors.map((sector, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <motion.path
                  key={i}
                  d={sector.path}
                  fill={getColor(sector, i)}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 0.85}
                  stroke={isHovered ? getColor(sector, i) : 'var(--color-bg-primary)'}
                  strokeWidth={isHovered ? 2 : 1}
                  animate={{ scale: isHovered ? 1.04 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleSectorHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleSectorHover(i, e),
                    onMouseLeave: () => handleSectorHover(null),
                    onClick: () => handleSectorClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${sector.label}: ${formatValue(sector.value)}`,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {showLabels &&
            sectors.map((sector, i) => {
              const midAngle = (sector.startAngle + sector.endAngle) / 2;
              const labelR = maxRadius + 12;
              const pos = polarToCartesian(cx, cy, labelR, midAngle);
              return (
                <text
                  key={`label-${i}`}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={fontSize - 2}
                  fill="var(--color-text-secondary)"
                  fontWeight={500}
                  pointerEvents="none"
                >
                  {sector.label}
                </text>
              );
            })}
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

export default PolarAreaChart;
