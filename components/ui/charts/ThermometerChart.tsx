'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ThermometerChartProps {
  value: number;
  min?: number;
  max?: number;
  color?: string;
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

export const ThermometerChart: React.FC<ThermometerChartProps> = ({
  value,
  min = 0,
  max = 100,
  color,
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

  const fillColor = color ?? chartPaletteArray[3]; // Red-ish default
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = max > min ? (clampedValue - min) / (max - min) : 0;

  // Thermometer dimensions
  const tubeWidth = width * 0.1;
  const tubeHeight = height * 0.6;
  const bulbRadius = tubeWidth * 1.2;
  const tubeX = width / 2 - tubeWidth / 2;
  const tubeTop = height * 0.1;
  const tubeBottom = tubeTop + tubeHeight;
  const bulbCY = tubeBottom + bulbRadius * 0.6;
  const fillHeight = tubeHeight * percentage;

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} thermometer at ${formatValue(clampedValue)}`
    : `Thermometer at ${formatValue(clampedValue)}`;

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

          {/* Tube outline */}
          <rect
            x={tubeX}
            y={tubeTop}
            width={tubeWidth}
            height={tubeHeight}
            rx={tubeWidth / 2}
            fill="var(--color-border-secondary)"
            fillOpacity={0.15}
            stroke="var(--color-border-secondary)"
            strokeWidth={1.5}
            strokeOpacity={0.4}
          />

          {/* Bulb outline */}
          <circle
            cx={width / 2}
            cy={bulbCY}
            r={bulbRadius}
            fill="var(--color-border-secondary)"
            fillOpacity={0.15}
            stroke="var(--color-border-secondary)"
            strokeWidth={1.5}
            strokeOpacity={0.4}
          />

          {/* Bulb fill (always full) */}
          <circle
            cx={width / 2}
            cy={bulbCY}
            r={bulbRadius * 0.75}
            fill={fillColor}
          />

          {/* Tube fill */}
          <motion.rect
            x={tubeX + tubeWidth * 0.2}
            width={tubeWidth * 0.6}
            rx={tubeWidth * 0.3}
            fill={fillColor}
            initial={animated ? { y: tubeBottom, height: 0 } : { y: tubeBottom - fillHeight, height: fillHeight }}
            animate={{ y: tubeBottom - fillHeight, height: fillHeight }}
            transition={animated ? { type: 'spring', stiffness: 50, damping: 12 } : { duration: 0 }}
          />

          {/* Scale marks */}
          {showLabels && [0, 0.25, 0.5, 0.75, 1].map((t) => {
            const markY = tubeBottom - t * tubeHeight;
            const val = min + t * (max - min);
            return (
              <g key={t}>
                <line
                  x1={tubeX + tubeWidth + 4}
                  y1={markY}
                  x2={tubeX + tubeWidth + 10}
                  y2={markY}
                  stroke="var(--color-text-secondary)"
                  strokeWidth={1}
                />
                <text
                  x={tubeX + tubeWidth + 14}
                  y={markY}
                  dominantBaseline="central"
                  fontSize={fontSize - 3}
                  fill="var(--color-text-secondary)"
                >
                  {formatValue(val)}
                </text>
              </g>
            );
          })}

          {/* Value label */}
          {showLabels && (
            <text
              x={width / 2}
              y={bulbCY}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize - 1}
              fontWeight={700}
              fill="white"
            >
              {formatValue(clampedValue)}
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
            label="Temperature"
            value={formatValue(clampedValue)}
            color={fillColor}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ThermometerChart;
