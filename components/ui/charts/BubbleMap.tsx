'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface BubbleMapDataPoint {
  label: string;
  x: number;
  y: number;
  value: number;
  color?: string;
}

export interface BubbleMapProps {
  data: BubbleMapDataPoint[];
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

export const BubbleMap: React.FC<BubbleMapProps> = ({
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
  const { width, height, fontSize, padding } = chartSizes[size];

  const margin = { top: padding, right: padding, bottom: padding, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const { xMin, xMax, yMin, yMax, valMin, valMax } = useMemo(() => {
    if (data.length === 0) return { xMin: 0, xMax: 1, yMin: 0, yMax: 1, valMin: 0, valMax: 1 };
    const xs = data.map((d) => d.x);
    const ys = data.map((d) => d.y);
    const vals = data.map((d) => d.value);
    return {
      xMin: Math.min(...xs),
      xMax: Math.max(...xs),
      yMin: Math.min(...ys),
      yMax: Math.max(...ys),
      valMin: Math.min(...vals),
      valMax: Math.max(...vals),
    };
  }, [data]);

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 0, chartWidth),
    [margin.left, xMin, xMax, chartWidth],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 0, chartHeight),
    [margin.top, chartHeight, yMin, yMax],
  );

  const scaleRadius = useCallback(
    (v: number) => linearScale(v, valMin, valMax, 4, 30),
    [valMin, valMax],
  );

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
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} bubble map with ${data.length} points`
    : `Bubble map with ${data.length} points`;

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
              const bx = scaleX(item.x);
              const by = scaleY(item.y);
              const r = scaleRadius(item.value);
              const color = getColor(item, i);
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
                <motion.circle
                  key={i}
                  variants={itemVariants}
                  cx={bx}
                  cy={by}
                  r={isHovered ? r + 2 : r}
                  fill={color}
                  fillOpacity={0.6}
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 1}
                  opacity={dimmed ? 0.4 : 1}
                  style={{ transformOrigin: `${bx}px ${by}px` }}
                  {...interactiveProps}
                />
              );
            })}
          </motion.g>

          {showLabels && data.map((item, i) => {
            const bx = scaleX(item.x);
            const by = scaleY(item.y);
            const r = scaleRadius(item.value);
            if (r < fontSize) return null;
            return (
              <text
                key={`label-${i}`}
                x={bx}
                y={by}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={Math.min(fontSize - 2, r * 0.7)}
                fill="var(--color-text-primary)"
                pointerEvents="none"
              >
                {item.label}
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
            items={[
              { label: 'X', value: formatValue(data[hoveredIndex].x), color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Y', value: formatValue(data[hoveredIndex].y) },
              { label: 'Value', value: formatValue(data[hoveredIndex].value) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default BubbleMap;
