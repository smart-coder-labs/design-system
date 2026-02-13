'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface RangePlotDataPoint {
  label: string;
  min: number;
  max: number;
}

export interface RangePlotProps {
  data: RangePlotDataPoint[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

export const RangePlot: React.FC<RangePlotProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const margin = { top: padding, right: padding, bottom: padding + 20, left: padding + 36 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const { globalMin, globalMax } = useMemo(() => {
    const allMin = Math.min(...data.map((d) => d.min));
    const allMax = Math.max(...data.map((d) => d.max));
    const pad = (allMax - allMin) * 0.1 || 1;
    return { globalMin: allMin - pad, globalMax: allMax + pad };
  }, [data]);

  const bandWidth = useMemo(() => chartWidth / Math.max(data.length, 1), [chartWidth, data.length]);

  const scaleY = (v: number) => margin.top + chartHeight - linearScale(v, globalMin, globalMax, 0, chartHeight);

  const minLinePath = useMemo(() => {
    return data.map((d, i) => {
      const x = margin.left + bandWidth * i + bandWidth / 2;
      const y = scaleY(d.min);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('');
  }, [data, bandWidth, margin.left, globalMin, globalMax, chartHeight]);

  const maxLinePath = useMemo(() => {
    return data.map((d, i) => {
      const x = margin.left + bandWidth * i + bandWidth / 2;
      const y = scaleY(d.max);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('');
  }, [data, bandWidth, margin.left, globalMin, globalMax, chartHeight]);

  const areaPath = useMemo(() => {
    if (data.length === 0) return '';
    const topPoints = data.map((d, i) => {
      const x = margin.left + bandWidth * i + bandWidth / 2;
      return `${i === 0 ? 'M' : 'L'}${x},${scaleY(d.max)}`;
    }).join('');
    const bottomPoints = [...data].reverse().map((d, i) => {
      const origIdx = data.length - 1 - i;
      const x = margin.left + bandWidth * origIdx + bandWidth / 2;
      return `L${x},${scaleY(d.min)}`;
    }).join('');
    return `${topPoints}${bottomPoints}Z`;
  }, [data, bandWidth, margin.left, globalMin, globalMax, chartHeight]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const fillColor = palette[0];
  const ariaLabel = title
    ? `${title} range plot with ${data.length} categories`
    : `Range plot with ${data.length} categories`;

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

          {/* Y-axis labels */}
          {showLabels && (
            <g>
              {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                const val = globalMin + t * (globalMax - globalMin);
                const y = scaleY(val);
                return (
                  <g key={t}>
                    <line x1={margin.left} y1={y} x2={margin.left + chartWidth} y2={y} stroke="var(--color-border-secondary)" strokeOpacity={0.3} />
                    <text x={margin.left - 6} y={y} textAnchor="end" dominantBaseline="central" fontSize={fontSize - 2} fill="var(--color-text-secondary)">
                      {formatValue(val)}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* Filled area band */}
          <motion.path
            d={areaPath}
            fill={fillColor}
            fillOpacity={0.2}
            initial={animated ? { opacity: 0 } : undefined}
            animate={{ opacity: 1 }}
            transition={{ duration: chartMotion.duration.slow }}
          />

          {/* Max line */}
          <motion.path
            d={maxLinePath}
            fill="none"
            stroke={fillColor}
            strokeWidth={2}
            initial={animated ? { pathLength: 0 } : undefined}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: chartMotion.easing }}
          />

          {/* Min line */}
          <motion.path
            d={minLinePath}
            fill="none"
            stroke={fillColor}
            strokeWidth={2}
            strokeDasharray="4 2"
            initial={animated ? { pathLength: 0 } : undefined}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: chartMotion.easing }}
          />

          {/* Interactive hit areas + dots */}
          {data.map((d, i) => {
            const x = margin.left + bandWidth * i + bandWidth / 2;
            const yMax = scaleY(d.max);
            const yMin = scaleY(d.min);
            const isHovered = hoveredIndex === i;

            return (
              <g key={i}>
                {interactive && (
                  <rect
                    x={x - bandWidth / 2}
                    y={margin.top}
                    width={bandWidth}
                    height={chartHeight}
                    fill="transparent"
                    cursor="pointer"
                    onMouseEnter={(e) => handleHover(i, e)}
                    onMouseMove={(e) => handleHover(i, e)}
                    onMouseLeave={() => handleHover(null)}
                  />
                )}
                <motion.circle cx={x} cy={yMax} r={isHovered ? 5 : 3} fill={fillColor}
                  initial={animated ? { scale: 0 } : undefined} animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring', ...chartMotion.spring }}
                />
                <motion.circle cx={x} cy={yMin} r={isHovered ? 5 : 3} fill={fillColor} fillOpacity={0.6}
                  initial={animated ? { scale: 0 } : undefined} animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring', ...chartMotion.spring }}
                />
                {/* X-axis label */}
                {showLabels && (
                  <text x={x} y={margin.top + chartHeight + 16} textAnchor="middle" fontSize={fontSize - 2} fill="var(--color-text-secondary)">
                    {d.label}
                  </text>
                )}
              </g>
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
              { label: 'Max', value: formatValue(data[hoveredIndex].max), color: fillColor },
              { label: 'Min', value: formatValue(data[hoveredIndex].min) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default RangePlot;
