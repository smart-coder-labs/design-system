'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartGrid } from './shared/ChartGrid';

export interface BulletChartProps {
  data: Array<{
    label: string;
    value: number;
    target: number;
    ranges: [number, number, number];
    color?: string;
  }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const BulletChart: React.FC<BulletChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
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
  const { width, height: baseHeight, fontSize, padding } = chartSizes[size];

  const rowHeight = size === 'sm' ? 36 : size === 'md' ? 48 : 60;
  const rowGap = size === 'sm' ? 8 : 12;
  const labelWidth = showLabels ? (size === 'sm' ? 60 : size === 'md' ? 80 : 100) : 0;
  const margin = { top: padding, right: padding, bottom: padding, left: padding + labelWidth };
  const chartWidth = width - margin.left - margin.right;
  const height = margin.top + margin.bottom + data.length * rowHeight + (data.length - 1) * rowGap;

  const domainMax = useMemo(() => {
    const max = Math.max(...data.flatMap((d) => [...d.ranges, d.value, d.target]), 0);
    return max === 0 ? 1 : max;
  }, [data]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const handleHover = useCallback(
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

  const handleClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scaleX: 0 },
        visible: {
          opacity: 1,
          scaleX: 1,
          transition: { type: 'spring', ...chartMotion.spring },
        },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} bullet chart with ${data.length} data points`
    : `Bullet chart with ${data.length} data points`;

  // Range shades (light to dark for poor, satisfactory, good)
  const rangeShades = [
    'var(--color-border-primary)',
    'var(--color-text-quaternary)',
    'var(--color-text-tertiary)',
  ];

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

          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const y = margin.top + i * (rowHeight + rowGap);
              const barHeight = rowHeight * 0.4;
              const rangeHeight = rowHeight * 0.7;
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;

              return (
                <g
                  key={i}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseLeave: () => handleHover(null),
                    onClick: () => handleClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${item.label}: value ${formatValue(item.value)}, target ${formatValue(item.target)}`,
                    tabIndex: -1,
                  })}
                >
                  {/* Label */}
                  {showLabels && (
                    <text
                      x={margin.left - 8}
                      y={y + rowHeight / 2 + fontSize / 3}
                      textAnchor="end"
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 1}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                    >
                      {item.label}
                    </text>
                  )}

                  {/* Background ranges */}
                  {item.ranges.map((rangeVal, ri) => {
                    const rangeWidth = linearScale(rangeVal, 0, domainMax, 0, chartWidth);
                    return (
                      <motion.rect
                        key={`range-${ri}`}
                        x={margin.left}
                        y={y + (rowHeight - rangeHeight) / 2}
                        width={Math.max(0, rangeWidth)}
                        height={rangeHeight}
                        fill={rangeShades[ri]}
                        rx={2}
                        variants={itemVariants}
                        style={{ originX: 0 }}
                        {...(!animated && { opacity: 1 })}
                      />
                    );
                  }).reverse()}

                  {/* Value bar */}
                  <motion.rect
                    x={margin.left}
                    y={y + (rowHeight - barHeight) / 2}
                    width={Math.max(0, linearScale(item.value, 0, domainMax, 0, chartWidth))}
                    height={barHeight}
                    fill={color}
                    rx={2}
                    variants={itemVariants}
                    style={{ originX: 0 }}
                    {...(!animated && { opacity: 1 })}
                  />

                  {/* Target marker */}
                  <motion.line
                    x1={margin.left + linearScale(item.target, 0, domainMax, 0, chartWidth)}
                    y1={y + (rowHeight - rangeHeight) / 2 - 2}
                    x2={margin.left + linearScale(item.target, 0, domainMax, 0, chartWidth)}
                    y2={y + (rowHeight + rangeHeight) / 2 + 2}
                    stroke="var(--color-text-primary)"
                    strokeWidth={2.5}
                    variants={animated ? {
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.3 } },
                    } : undefined}
                    {...(!animated && { opacity: 1 })}
                  />
                </g>
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip */}
        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Value', value: formatValue(data[hoveredIndex].value), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Target', value: formatValue(data[hoveredIndex].target) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default BulletChart;
