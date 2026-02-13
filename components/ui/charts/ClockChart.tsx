'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { polarToCartesian, describeArc, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface ClockChartProps {
  data: Array<{ hour: number; value: number; color?: string }>;
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

const HOURS = 24;
const SECTOR_ANGLE = 360 / HOURS;
const MAJOR_HOURS = [0, 6, 12, 18];

export const ClockChart: React.FC<ClockChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
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

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = Math.min(width, height) / 2 - padding - fontSize;
  const innerRadius = outerRadius * 0.25;

  const maxValue = useMemo(
    () => Math.max(...data.map((d) => d.value), 0) || 100,
    [data],
  );

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const handleHover = useCallback(
    (index: number, event: React.MouseEvent) => {
      setHoveredIndex(index);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(data[index], index);
    },
    [data, onDataPointHover],
  );

  const handleLeave = useCallback(() => {
    setHoveredIndex(null);
    onDataPointHover?.(null, null);
  }, [onDataPointHover]);

  const handleClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: `${d.hour}:00`,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} clock chart with ${data.length} hours`
    : `Clock chart with ${data.length} data points`;

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

          {/* Concentric guide circles */}
          {[0.25, 0.5, 0.75, 1].map((frac, i) => {
            const r = innerRadius + (outerRadius - innerRadius) * frac;
            return (
              <circle
                key={`guide-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="var(--color-border-primary)"
                strokeWidth={0.5}
                opacity={0.3}
              />
            );
          })}

          {/* Inner circle */}
          <circle
            cx={cx}
            cy={cy}
            r={innerRadius}
            fill="none"
            stroke="var(--color-border-primary)"
            strokeWidth={0.5}
            opacity={0.4}
          />

          {/* Hour tick lines */}
          {Array.from({ length: HOURS }, (_, i) => {
            const angle = i * SECTOR_ANGLE;
            const isMajor = MAJOR_HOURS.includes(i);
            const tickInner = isMajor ? innerRadius - 4 : innerRadius;
            const tickOuter = innerRadius + (outerRadius - innerRadius) * 0.05;
            const start = polarToCartesian(cx, cy, tickInner, angle);
            const end = polarToCartesian(cx, cy, tickOuter, angle);
            return (
              <line
                key={`tick-${i}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="var(--color-border-primary)"
                strokeWidth={isMajor ? 1.5 : 0.5}
                opacity={isMajor ? 0.7 : 0.4}
              />
            );
          })}

          {/* Data sectors */}
          {data.map((d, i) => {
            const angle = d.hour * SECTOR_ANGLE;
            const startAngle = angle - SECTOR_ANGLE / 2 + 0.5;
            const endAngle = angle + SECTOR_ANGLE / 2 - 0.5;
            const barRadius = innerRadius + ((d.value / maxValue) * (outerRadius - innerRadius));
            const color = getColor(d, i);
            const isHovered = hoveredIndex === i;
            const isFaded = hoveredIndex !== null && !isHovered;

            const path = describeArc(cx, cy, barRadius, startAngle, endAngle);

            return (
              <motion.path
                key={`sector-${d.hour}`}
                d={path}
                fill={color}
                fillOpacity={isFaded ? 0.2 : 0.7}
                stroke={color}
                strokeWidth={isHovered ? 2 : 0.5}
                opacity={isFaded ? 0.4 : 1}
                cursor={interactive ? 'pointer' : undefined}
                initial={animated ? { opacity: 0, scale: 0.3 } : undefined}
                animate={animated ? { opacity: isFaded ? 0.4 : 1, scale: 1 } : { opacity: isFaded ? 0.4 : 1 }}
                transition={animated ? { type: 'spring', ...chartMotion.spring, delay: i * 0.02 } : undefined}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
                onMouseEnter={interactive ? (e: React.MouseEvent) => handleHover(i, e) : undefined}
                onMouseMove={interactive ? (e: React.MouseEvent) => handleHover(i, e) : undefined}
                onMouseLeave={interactive ? handleLeave : undefined}
                onClick={interactive ? () => handleClick(i) : undefined}
                role={interactive ? 'button' : undefined}
                aria-label={`${d.hour}:00 — ${formatValue(d.value)}`}
                tabIndex={interactive ? -1 : undefined}
              />
            );
          })}

          {/* Mask inner circle to create donut effect */}
          <circle
            cx={cx}
            cy={cy}
            r={innerRadius}
            fill="var(--color-bg-primary)"
          />

          {/* Hour labels */}
          {showLabels &&
            Array.from({ length: HOURS }, (_, i) => {
              const angle = i * SECTOR_ANGLE;
              const labelR = outerRadius + fontSize * 0.9;
              const { x, y } = polarToCartesian(cx, cy, labelR, angle);
              const isMajor = MAJOR_HOURS.includes(i);
              return (
                <text
                  key={`hour-${i}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={isMajor ? fontSize : fontSize - 2}
                  fontWeight={isMajor ? 600 : 400}
                  fill={isMajor ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'}
                  pointerEvents="none"
                >
                  {i}
                </text>
              );
            })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${data[hoveredIndex].hour}:00`}
            value={formatValue(data[hoveredIndex].value)}
            color={getColor(data[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default ClockChart;
