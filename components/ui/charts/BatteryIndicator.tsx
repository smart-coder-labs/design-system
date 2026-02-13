'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface BatteryIndicatorProps {
  value: number;
  max?: number;
  status?: 'good' | 'warning' | 'critical';
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

const STATUS_COLORS = {
  good: '#34C759',
  warning: '#FF9500',
  critical: '#FF3B30',
};

export const BatteryIndicator: React.FC<BatteryIndicatorProps> = ({
  value,
  max = 100,
  status,
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

  const { width, height, fontSize } = chartSizes[size];
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;

  // Auto-determine status from percentage if not provided
  const effectiveStatus = status ?? (percentage > 50 ? 'good' : percentage > 20 ? 'warning' : 'critical');
  const fillColor = STATUS_COLORS[effectiveStatus];

  // Battery dimensions
  const batteryWidth = width * 0.6;
  const batteryHeight = height * 0.35;
  const batteryX = (width - batteryWidth) / 2;
  const batteryY = (height - batteryHeight) / 2;
  const cornerRadius = batteryHeight * 0.15;
  const tipWidth = batteryWidth * 0.04;
  const tipHeight = batteryHeight * 0.35;
  const innerPad = batteryHeight * 0.12;
  const innerWidth = batteryWidth - innerPad * 2;
  const innerHeight = batteryHeight - innerPad * 2;
  const fillWidth = innerWidth * (percentage / 100);

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} battery at ${Math.round(percentage)}%`
    : `Battery indicator at ${Math.round(percentage)}%`;

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

          {/* Battery body outline */}
          <rect
            x={batteryX}
            y={batteryY}
            width={batteryWidth}
            height={batteryHeight}
            rx={cornerRadius}
            fill="none"
            stroke="var(--color-border-secondary)"
            strokeWidth={2}
            strokeOpacity={0.6}
          />

          {/* Battery tip (positive terminal) */}
          <rect
            x={batteryX + batteryWidth}
            y={batteryY + (batteryHeight - tipHeight) / 2}
            width={tipWidth}
            height={tipHeight}
            rx={tipWidth * 0.4}
            fill="var(--color-border-secondary)"
            fillOpacity={0.6}
          />

          {/* Fill */}
          <motion.rect
            x={batteryX + innerPad}
            y={batteryY + innerPad}
            height={innerHeight}
            rx={cornerRadius * 0.5}
            fill={fillColor}
            initial={animated ? { width: 0 } : { width: fillWidth }}
            animate={{ width: fillWidth }}
            transition={animated ? { type: 'spring', ...chartMotion.spring } : { duration: 0 }}
          />

          {/* Percentage label */}
          {showLabels && (
            <text
              x={width / 2}
              y={batteryY + batteryHeight + fontSize * 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize + 2}
              fontWeight={600}
              fill="var(--color-text-primary)"
            >
              {`${Math.round(percentage)}%`}
            </text>
          )}

          {/* Status text */}
          {showLabels && (
            <text
              x={width / 2}
              y={batteryY - fontSize}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize - 2}
              fill={fillColor}
              fontWeight={500}
            >
              {effectiveStatus.charAt(0).toUpperCase() + effectiveStatus.slice(1)}
            </text>
          )}

          {/* Interactive overlay */}
          {interactive && (
            <rect
              x={0} y={0} width={width} height={height}
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
            label="Battery"
            value={`${Math.round(percentage)}% (${effectiveStatus})`}
            color={fillColor}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default BatteryIndicator;
