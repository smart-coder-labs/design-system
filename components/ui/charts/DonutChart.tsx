'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { describeAnnularArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface DonutChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  centerLabel?: string;
  centerValue?: string | number;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  centerLabel,
  centerValue,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
  showTooltip = true,
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
  const outerRadius = Math.min(width, height) / 2 - padding;
  const innerRadius = outerRadius * 0.6;

  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const slices = useMemo(() => {
    let currentAngle = 0;
    return data.map((item, i) => {
      const sliceAngle = total > 0 ? (item.value / total) * 360 : 0;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      currentAngle = endAngle;
      return {
        ...item,
        startAngle,
        endAngle,
        percentage: total > 0 ? (item.value / total) * 100 : 0,
        path: describeAnnularArc(
          cx, cy, outerRadius, innerRadius,
          startAngle, endAngle === 360 ? 359.99 : endAngle,
        ),
      };
    });
  }, [data, total, cx, cy, outerRadius, innerRadius]);

  const handleSliceHover = useCallback(
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

  const handleSliceClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const displayValue = centerValue !== undefined ? centerValue : formatValue(total);
  const displayLabel = centerLabel !== undefined ? centerLabel : 'Total';

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} donut chart with ${data.length} segments`
    : `Donut chart with ${data.length} segments`;

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
            initial={animated ? { rotate: -90, opacity: 0 } : undefined}
            animate={animated ? { rotate: 0, opacity: 1 } : undefined}
            transition={animated ? { type: 'spring', ...chartMotion.spring, duration: 0.8 } : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {slices.map((slice, i) => {
              const isHovered = hoveredIndex === i;
              const midAngle = (slice.startAngle + slice.endAngle) / 2;
              const midAngleRad = ((midAngle - 90) * Math.PI) / 180;
              const hoverOffset = isHovered ? 4 : 0;
              const tx = Math.cos(midAngleRad) * hoverOffset;
              const ty = Math.sin(midAngleRad) * hoverOffset;

              return (
                <motion.path
                  key={i}
                  d={slice.path}
                  fill={getColor(slice, i)}
                  opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                  animate={{ translateX: tx, translateY: ty }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleSliceHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleSliceHover(i, e),
                    onMouseLeave: () => handleSliceHover(null),
                    onClick: () => handleSliceClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${slice.label}: ${formatValue(slice.value)} (${slice.percentage.toFixed(1)}%)`,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {/* Center text */}
          <text
            x={cx}
            y={cy - fontSize * 0.4}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 6}
            fontWeight={700}
            fill="var(--color-text-primary)"
            pointerEvents="none"
          >
            {displayValue}
          </text>
          <text
            x={cx}
            y={cy + fontSize * 1.1}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize - 2}
            fill="var(--color-text-secondary)"
            pointerEvents="none"
          >
            {displayLabel}
          </text>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            value={`${formatValue(data[hoveredIndex].value)} (${slices[hoveredIndex].percentage.toFixed(1)}%)`}
            color={getColor(data[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default DonutChart;
