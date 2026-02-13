'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface EclipseChartData {
  left: { label: string; value: number };
  right: { label: string; value: number };
  overlap: number;
}

export interface EclipseChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: EclipseChartData;
}

export const EclipseChart: React.FC<EclipseChartProps> = ({
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  colorScheme,
  title,
  subtitle,
  data,
}) => {
  const [hovered, setHovered] = useState<'left' | 'right' | 'overlap' | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const cx = width / 2;
  const cy = height / 2;
  const maxVal = Math.max(data.left.value, data.right.value, 1);
  const baseR = Math.min(width, height) / 2 - padding - 10;
  const leftR = baseR * 0.5 + (data.left.value / maxVal) * baseR * 0.4;
  const rightR = baseR * 0.5 + (data.right.value / maxVal) * baseR * 0.4;
  const overlapRatio = Math.min(data.overlap / Math.min(data.left.value, data.right.value, 1), 1);
  const separation = (leftR + rightR) * (1 - overlapRatio * 0.6);
  const leftCx = cx - separation / 2;
  const rightCx = cx + separation / 2;

  const handleMouseEnter = (e: React.MouseEvent, area: 'left' | 'right' | 'overlap') => {
    if (!interactive) return;
    setHovered(area);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const ariaLabel = title
    ? `${title} eclipse chart comparing ${data.left.label} and ${data.right.label}`
    : `Eclipse chart comparing ${data.left.label} and ${data.right.label}`;

  const tooltipItems = () => {
    if (hovered === 'left') return [{ label: data.left.label, value: data.left.value, color: palette[0] }];
    if (hovered === 'right') return [{ label: data.right.label, value: data.right.value, color: palette[1] }];
    return [
      { label: 'Overlap', value: data.overlap, color: palette[2] },
    ];
  };

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
        >
          <title>{ariaLabel}</title>

          {/* Left circle */}
          {animated ? (
            <motion.circle
              cx={leftCx}
              cy={cy}
              r={leftR}
              fill={palette[0]}
              fillOpacity={hovered === 'left' ? 0.45 : 0.3}
              stroke={palette[0]}
              strokeWidth={2}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ...chartMotion.spring }}
              style={{ transformOrigin: `${leftCx}px ${cy}px` }}
              onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, 'left')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          ) : (
            <circle
              cx={leftCx}
              cy={cy}
              r={leftR}
              fill={palette[0]}
              fillOpacity={0.3}
              stroke={palette[0]}
              strokeWidth={2}
              onMouseEnter={(e) => handleMouseEnter(e, 'left')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          )}

          {/* Right circle */}
          {animated ? (
            <motion.circle
              cx={rightCx}
              cy={cy}
              r={rightR}
              fill={palette[1]}
              fillOpacity={hovered === 'right' ? 0.45 : 0.3}
              stroke={palette[1]}
              strokeWidth={2}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ...chartMotion.spring, delay: 0.1 }}
              style={{ transformOrigin: `${rightCx}px ${cy}px` }}
              onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, 'right')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          ) : (
            <circle
              cx={rightCx}
              cy={cy}
              r={rightR}
              fill={palette[1]}
              fillOpacity={0.3}
              stroke={palette[1]}
              strokeWidth={2}
              onMouseEnter={(e) => handleMouseEnter(e, 'right')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          )}

          {/* Overlap indicator circle */}
          <circle
            cx={cx}
            cy={cy}
            r={6}
            fill={palette[2]}
            fillOpacity={0.8}
            onMouseEnter={(e) => handleMouseEnter(e, 'overlap')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            cursor={interactive ? 'pointer' : undefined}
          />

          {/* Labels */}
          <text x={leftCx} y={cy - leftR - 8} textAnchor="middle" fontSize={fontSize} fontWeight={600} fill="var(--color-text-primary)">
            {data.left.label}
          </text>
          <text x={leftCx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={fontSize + 2} fontWeight={700} fill="var(--color-text-primary)">
            {data.left.value}
          </text>

          <text x={rightCx} y={cy - rightR - 8} textAnchor="middle" fontSize={fontSize} fontWeight={600} fill="var(--color-text-primary)">
            {data.right.label}
          </text>
          <text x={rightCx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={fontSize + 2} fontWeight={700} fill="var(--color-text-primary)">
            {data.right.value}
          </text>

          <text x={cx} y={cy + 16} textAnchor="middle" fontSize={fontSize - 1} fill="var(--color-text-secondary)">
            {data.overlap}
          </text>
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={hovered === 'overlap' ? 'Overlap' : hovered === 'left' ? data.left.label : data.right.label}
            items={tooltipItems()}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default EclipseChart;
