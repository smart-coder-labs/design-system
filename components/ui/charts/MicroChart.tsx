'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface MicroChartProps {
  data: number[];
  type?: 'line' | 'bar' | 'dot';
  color?: string;
  width?: number;
  height?: number;
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

export const MicroChart: React.FC<MicroChartProps> = ({
  data,
  type = 'line',
  color: colorProp,
  width: widthProp,
  height: heightProp,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = false,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const defaults = chartSizes[size];
  const w = widthProp ?? defaults.width * 0.4;
  const h = heightProp ?? defaults.height * 0.2;
  const pad = 4;

  const chartColor = colorProp ?? chartPaletteArray[0];

  const { minVal, maxVal } = useMemo(() => {
    const mn = Math.min(...data);
    const mx = Math.max(...data);
    return { minVal: mn, maxVal: mx === mn ? mn + 1 : mx };
  }, [data]);

  const points = useMemo(() => {
    return data.map((v, i) => ({
      x: pad + (i / Math.max(data.length - 1, 1)) * (w - pad * 2),
      y: pad + (h - pad * 2) - linearScale(v, minVal, maxVal, 0, h - pad * 2),
    }));
  }, [data, w, h, minVal, maxVal]);

  const linePath = useMemo(() => {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join('');
  }, [points]);

  const barWidth = useMemo(() => Math.max(1, (w - pad * 2) / data.length - 1), [w, data.length]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} micro chart`
    : `Micro ${type} chart with ${data.length} points`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={cn('p-2', className)}>
      <div ref={containerRef} className="relative inline-block">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${w} ${h}`}
          width={w}
          height={h}
          style={{ outline: 'none' }}
          tabIndex={0}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '4px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
        >
          <title>{ariaLabel}</title>

          {type === 'line' && (
            <motion.path
              d={linePath}
              fill="none"
              stroke={chartColor}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={animated ? { pathLength: 0 } : undefined}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: chartMotion.easing }}
            />
          )}

          {type === 'bar' && data.map((v, i) => {
            const barH = linearScale(v, minVal, maxVal, 2, h - pad * 2);
            const x = pad + (i / data.length) * (w - pad * 2);
            const isHovered = hoveredIndex === i;

            return (
              <motion.rect
                key={i}
                x={x}
                y={h - pad - barH}
                width={barWidth}
                height={barH}
                rx={1}
                fill={chartColor}
                fillOpacity={isHovered ? 1 : 0.7}
                initial={animated ? { height: 0, y: h - pad } : undefined}
                animate={{ height: barH, y: h - pad - barH }}
                transition={{ delay: i * 0.03, type: 'spring', ...chartMotion.spring }}
                onMouseEnter={(e) => interactive && handleHover(i, e)}
                onMouseMove={(e) => interactive && handleHover(i, e)}
                onMouseLeave={() => interactive && handleHover(null)}
                cursor={interactive ? 'pointer' : undefined}
              />
            );
          })}

          {type === 'dot' && points.map((p, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={isHovered ? 3 : 2}
                fill={chartColor}
                initial={animated ? { scale: 0 } : undefined}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.03, type: 'spring', ...chartMotion.spring }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                onMouseEnter={(e) => interactive && handleHover(i, e)}
                onMouseMove={(e) => interactive && handleHover(i, e)}
                onMouseLeave={() => interactive && handleHover(null)}
                cursor={interactive ? 'pointer' : undefined}
              />
            );
          })}

          {/* Line/interactive overlay for line type */}
          {type === 'line' && points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={6}
              fill="transparent"
              onMouseEnter={(e) => interactive && handleHover(i, e)}
              onMouseMove={(e) => interactive && handleHover(i, e)}
              onMouseLeave={() => interactive && handleHover(null)}
              cursor={interactive ? 'pointer' : undefined}
            />
          ))}

          {/* Hovered dot for line type */}
          {type === 'line' && hoveredIndex !== null && (
            <circle
              cx={points[hoveredIndex].x}
              cy={points[hoveredIndex].y}
              r={3}
              fill={chartColor}
            />
          )}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            value={formatValue(data[hoveredIndex])}
            color={chartColor}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default MicroChart;
