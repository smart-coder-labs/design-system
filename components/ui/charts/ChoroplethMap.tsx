'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ChoroplethMapDataPoint {
  id: string;
  label: string;
  value: number;
  path: string;
  color?: string;
}

export interface ChoroplethMapProps {
  data: ChoroplethMapDataPoint[];
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

export const ChoroplethMap: React.FC<ChoroplethMapProps> = ({
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
  const { width, height } = chartSizes[size];

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const { minVal, maxVal } = useMemo(() => {
    if (data.length === 0) return { minVal: 0, maxVal: 1 };
    const values = data.map((d) => d.value);
    return { minVal: Math.min(...values), maxVal: Math.max(...values) };
  }, [data]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data[index] : null, index);
    },
    [data, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(data[index], index); },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} choropleth map with ${data.length} regions`
    : `Choropleth map with ${data.length} regions`;

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

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {data.map((item, i) => {
              const color = getColor(item, i);
              const opacity = linearScale(item.value, minVal, maxVal, 0.2, 1.0);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.path
                  key={item.id}
                  variants={itemVariants}
                  d={item.path}
                  fill={color}
                  fillOpacity={dimmed ? opacity * 0.4 : opacity}
                  stroke={isHovered ? 'var(--color-text-primary)' : 'var(--color-border-primary)'}
                  strokeWidth={isHovered ? 2 : 0.5}
                  {...interactiveProps}
                />
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Value', value: formatValue(data[hoveredIndex].value), color: getColor(data[hoveredIndex], hoveredIndex) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ChoroplethMap;
