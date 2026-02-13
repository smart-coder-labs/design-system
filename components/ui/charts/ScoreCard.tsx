'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ScoreCardProps {
  value: number | string;
  label: string;
  delta?: number;
  trend?: number[];
  prefix?: string;
  suffix?: string;
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

export const ScoreCard: React.FC<ScoreCardProps> = ({
  value,
  label,
  delta,
  trend,
  prefix = '',
  suffix = '',
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
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize } = chartSizes[size];

  const deltaColor = delta !== undefined ? (delta >= 0 ? '#34C759' : '#FF3B30') : undefined;
  const deltaSign = delta !== undefined ? (delta >= 0 ? '▲' : '▼') : '';
  const deltaText = delta !== undefined ? `${deltaSign} ${Math.abs(delta).toFixed(1)}%` : '';

  // Mini sparkline from trend data
  const sparklinePath = useMemo(() => {
    if (!trend || trend.length < 2) return '';
    const sparkW = width * 0.35;
    const sparkH = height * 0.2;
    const sparkX = width * 0.55;
    const sparkY = height * 0.55;
    const minVal = Math.min(...trend);
    const maxVal = Math.max(...trend);
    const range = maxVal - minVal || 1;

    return trend.map((v, i) => {
      const x = sparkX + (i / (trend.length - 1)) * sparkW;
      const y = sparkY + sparkH - ((v - minVal) / range) * sparkH;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('');
  }, [trend, width, height]);

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const displayValue = `${prefix}${typeof value === 'number' ? formatValue(value) : value}${suffix}`;
  const ariaLabel = title
    ? `${title} score card showing ${displayValue}`
    : `Score card: ${label} ${displayValue}`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height * 0.5}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '8px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
        >
          <title>{ariaLabel}</title>

          {/* Label */}
          {showLabels && (
            <motion.text
              x={width * 0.06}
              y={height * 0.12}
              fontSize={fontSize - 1}
              fill="var(--color-text-secondary)"
              initial={animated ? { opacity: 0 } : undefined}
              animate={{ opacity: 1 }}
              transition={{ duration: chartMotion.duration.normal }}
            >
              {label}
            </motion.text>
          )}

          {/* Big value */}
          <motion.text
            x={width * 0.06}
            y={height * 0.32}
            fontSize={fontSize + 12}
            fontWeight={700}
            fill="var(--color-text-primary)"
            initial={animated ? { opacity: 0, y: height * 0.38 } : undefined}
            animate={{ opacity: 1, y: height * 0.32 }}
            transition={animated ? { type: 'spring', ...chartMotion.spring } : { duration: 0 }}
          >
            {displayValue}
          </motion.text>

          {/* Delta */}
          {delta !== undefined && showLabels && (
            <motion.text
              x={width * 0.06}
              y={height * 0.44}
              fontSize={fontSize - 1}
              fontWeight={600}
              fill={deltaColor}
              initial={animated ? { opacity: 0 } : undefined}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: chartMotion.duration.normal }}
            >
              {deltaText}
            </motion.text>
          )}

          {/* Sparkline */}
          {trend && trend.length >= 2 && (
            <motion.path
              d={sparklinePath}
              fill="none"
              stroke={deltaColor ?? palette[0]}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={animated ? { pathLength: 0 } : undefined}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: chartMotion.easing }}
            />
          )}

          {/* Interactive overlay */}
          {interactive && (
            <rect
              x={0} y={0} width={width} height={height * 0.5}
              fill="transparent"
              cursor="pointer"
              onMouseEnter={(e) => handleHover(true, e)}
              onMouseMove={(e) => handleHover(true, e)}
              onMouseLeave={() => handleHover(false)}
            />
          )}
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={label}
            items={[
              { label: 'Value', value: displayValue, color: palette[0] },
              ...(delta !== undefined ? [{ label: 'Delta', value: deltaText, color: deltaColor }] : []),
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ScoreCard;
