'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartGrid } from './shared/ChartGrid';

export interface SlopeChartProps {
  data: Array<{ label: string; startValue: number; endValue: number; color?: string }>;
  startLabel?: string;
  endLabel?: string;
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

export const SlopeChart: React.FC<SlopeChartProps> = ({
  data,
  startLabel = 'Start',
  endLabel = 'End',
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

  // Extra horizontal margin for value/label text
  const labelSpace = 60;
  const margin = {
    top: padding + 20,
    right: padding + labelSpace,
    bottom: padding,
    left: padding + labelSpace,
  };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Vertical axis positions
  const startX = margin.left;
  const endX = margin.left + chartWidth;

  const getColor = useCallback(
    (index: number) => {
      if (data[index]?.color) return data[index].color!;
      // Green for increase, red for decrease, neutral for same
      const d = data[index];
      if (!d) return palette[index % palette.length];
      if (d.endValue > d.startValue) return 'var(--color-status-success)';
      if (d.endValue < d.startValue) return 'var(--color-status-error)';
      return 'var(--color-text-secondary)';
    },
    [data, palette],
  );

  // Compute Y scale from all values
  const { domainMin, domainMax } = useMemo(() => {
    const allValues = data.flatMap((d) => [d.startValue, d.endValue]);
    const min = Math.min(...allValues, 0);
    const max = Math.max(...allValues, 1);
    const ticks = generateTicks(min, max, 5);
    return { domainMin: ticks[0], domainMax: ticks[ticks.length - 1] };
  }, [data]);

  const getY = useCallback(
    (value: number) =>
      margin.top + chartHeight - linearScale(value, domainMin, domainMax, 0, chartHeight),
    [margin.top, chartHeight, domainMin, domainMax],
  );

  // Compute line endpoints for each data item
  const lines = useMemo(() => {
    return data.map((d, i) => ({
      x1: startX,
      y1: getY(d.startValue),
      x2: endX,
      y2: getY(d.endValue),
      color: getColor(i),
    }));
  }, [data, startX, endX, getY, getColor]);

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

  const tooltipItems = useMemo(() => {
    if (hoveredIndex === null) return [];
    const d = data[hoveredIndex];
    if (!d) return [];
    const change = d.endValue - d.startValue;
    const pct = d.startValue !== 0 ? ((change / Math.abs(d.startValue)) * 100).toFixed(1) : '–';
    return [
      { label: startLabel, value: formatValue(d.startValue), color: getColor(hoveredIndex) },
      { label: endLabel, value: formatValue(d.endValue), color: getColor(hoveredIndex) },
      {
        label: 'Change',
        value: `${change >= 0 ? '+' : ''}${formatValue(change)} (${pct}%)`,
        color: getColor(hoveredIndex),
      },
    ];
  }, [hoveredIndex, data, startLabel, endLabel, getColor]);

  const ariaLabel = title
    ? `${title} slope chart comparing ${data.length} items between ${startLabel} and ${endLabel}`
    : `Slope chart comparing ${data.length} items between ${startLabel} and ${endLabel}`;

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

          {/* Vertical axis lines */}
          <line
            x1={startX}
            y1={margin.top}
            x2={startX}
            y2={margin.top + chartHeight}
            stroke="var(--color-border-primary)"
            strokeWidth={1}
          />
          <line
            x1={endX}
            y1={margin.top}
            x2={endX}
            y2={margin.top + chartHeight}
            stroke="var(--color-border-primary)"
            strokeWidth={1}
          />

          {/* Column headers */}
          <text
            x={startX}
            y={margin.top - 8}
            textAnchor="middle"
            fill="var(--color-text-primary)"
            fontSize={fontSize}
            fontWeight={600}
          >
            {startLabel}
          </text>
          <text
            x={endX}
            y={margin.top - 8}
            textAnchor="middle"
            fill="var(--color-text-primary)"
            fontSize={fontSize}
            fontWeight={600}
          >
            {endLabel}
          </text>

          {/* Slope lines */}
          {lines.map((line, i) => (
            <motion.line
              key={`slope-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.color}
              strokeWidth={hoveredIndex === i ? 3 : 2}
              strokeLinecap="round"
              opacity={hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 0.85}
              {...(animated
                ? {
                    initial: { pathLength: 0, opacity: 0 },
                    animate: {
                      pathLength: 1,
                      opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 0.85,
                    },
                    transition: {
                      pathLength: { duration: 0.6, delay: i * 0.08, ease: chartMotion.easing },
                      opacity: { duration: 0.2, delay: i * 0.08 },
                    },
                  }
                : {})}
            />
          ))}

          {/* Dots at start and end */}
          {lines.map((line, i) => (
            <React.Fragment key={`dots-${i}`}>
              <motion.circle
                cx={line.x1}
                cy={line.y1}
                r={hoveredIndex === i ? 5 : 4}
                fill={line.color}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
                opacity={hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1}
                {...(animated
                  ? {
                      initial: { opacity: 0, scale: 0 },
                      animate: {
                        opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1,
                        scale: 1,
                      },
                      transition: {
                        delay: 0.6 + i * 0.08,
                        type: 'spring',
                        ...chartMotion.spring,
                      },
                    }
                  : {})}
              />
              <motion.circle
                cx={line.x2}
                cy={line.y2}
                r={hoveredIndex === i ? 5 : 4}
                fill={line.color}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
                opacity={hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1}
                {...(animated
                  ? {
                      initial: { opacity: 0, scale: 0 },
                      animate: {
                        opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1,
                        scale: 1,
                      },
                      transition: {
                        delay: 0.6 + i * 0.08 + 0.05,
                        type: 'spring',
                        ...chartMotion.spring,
                      },
                    }
                  : {})}
              />
            </React.Fragment>
          ))}

          {/* Labels with values on both sides */}
          {showLabels &&
            data.map((d, i) => {
              const line = lines[i];
              const labelOpacity = hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1;
              return (
                <React.Fragment key={`labels-${i}`}>
                  {/* Start side: label + value */}
                  <text
                    x={startX - 8}
                    y={line.y1}
                    textAnchor="end"
                    dominantBaseline="central"
                    fill={line.color}
                    fontSize={fontSize - 2}
                    fontWeight={500}
                    opacity={labelOpacity}
                  >
                    {d.label} {formatValue(d.startValue)}
                  </text>
                  {/* End side: value + label */}
                  <text
                    x={endX + 8}
                    y={line.y2}
                    textAnchor="start"
                    dominantBaseline="central"
                    fill={line.color}
                    fontSize={fontSize - 2}
                    fontWeight={500}
                    opacity={labelOpacity}
                  >
                    {formatValue(d.endValue)} {d.label}
                  </text>
                </React.Fragment>
              );
            })}

          {/* Invisible hover regions for each slope line */}
          {interactive &&
            lines.map((line, i) => {
              // Create a wider invisible path for easier hovering
              const dx = line.x2 - line.x1;
              const dy = line.y2 - line.y1;
              const len = Math.sqrt(dx * dx + dy * dy);
              const nx = (-dy / len) * 8;
              const ny = (dx / len) * 8;
              const polyPoints = [
                `${line.x1 + nx},${line.y1 + ny}`,
                `${line.x2 + nx},${line.y2 + ny}`,
                `${line.x2 - nx},${line.y2 - ny}`,
                `${line.x1 - nx},${line.y1 - ny}`,
              ].join(' ');
              return (
                <polygon
                  key={`hover-${i}`}
                  points={polyPoints}
                  fill="transparent"
                  onMouseEnter={(e) => handleHover(i, e)}
                  onMouseMove={(e) => handleHover(i, e)}
                  onMouseLeave={() => handleHover(null)}
                  onClick={() => handleClick(i)}
                  cursor="pointer"
                  role="button"
                  aria-label={`${data[i].label}: ${startLabel} ${formatValue(data[i].startValue)}, ${endLabel} ${formatValue(data[i].endValue)}`}
                  tabIndex={-1}
                />
              );
            })}
        </svg>

        {/* Tooltip */}
        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={tooltipItems}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default SlopeChart;
