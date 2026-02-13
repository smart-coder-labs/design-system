'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface GradientWaveProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: number[];
}

export const GradientWave: React.FC<GradientWaveProps> = ({
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const maxValue = Math.max(...data, 1);
  const gradientId = useMemo(() => `gw-grad-${Math.random().toString(36).slice(2, 9)}`, []);

  const wavePath = useMemo(() => {
    if (data.length === 0) return '';

    const points: { x: number; y: number }[] = data.map((v, i) => {
      const x = padding + (i / (data.length - 1)) * chartWidth;
      const amplitude = (v / maxValue) * chartHeight * 0.8;
      const y = padding + chartHeight - amplitude;
      return { x, y };
    });

    // Build smooth cubic bezier path through points
    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    // Close path to form fill area
    const lastX = points[points.length - 1].x;
    const baseY = padding + chartHeight;
    d += ` L ${lastX} ${baseY} L ${points[0].x} ${baseY} Z`;

    return d;
  }, [data, padding, chartWidth, chartHeight, maxValue]);

  const strokePath = useMemo(() => {
    if (data.length === 0) return '';

    const points: { x: number; y: number }[] = data.map((v, i) => {
      const x = padding + (i / (data.length - 1)) * chartWidth;
      const amplitude = (v / maxValue) * chartHeight * 0.8;
      const y = padding + chartHeight - amplitude;
      return { x, y };
    });

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return d;
  }, [data, padding, chartWidth, chartHeight, maxValue]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const svgX = (mouseX / rect.width) * width;
    const relX = svgX - padding;
    const idx = Math.round((relX / chartWidth) * (data.length - 1));
    const clampedIdx = Math.min(Math.max(idx, 0), data.length - 1);
    setHoveredIndex(clampedIdx);
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const ariaLabel = title
    ? `${title} gradient wave with ${data.length} data points`
    : `Gradient wave with ${data.length} data points`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          onMouseMove={interactive ? handleMouseMove : undefined}
          onMouseLeave={interactive ? handleMouseLeave : undefined}
        >
          <title>{ariaLabel}</title>

          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {palette.slice(0, Math.max(2, Math.min(palette.length, 4))).map((c, i, arr) => (
                <stop
                  key={i}
                  offset={`${(i / (arr.length - 1)) * 100}%`}
                  stopColor={c}
                  stopOpacity={0.6}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Filled wave area */}
          {animated ? (
            <motion.path
              d={wavePath}
              fill={`url(#${gradientId})`}
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: chartMotion.duration.slow * 3, ease: chartMotion.easing }}
            />
          ) : (
            <path d={wavePath} fill={`url(#${gradientId})`} />
          )}

          {/* Stroke line on top */}
          {animated ? (
            <motion.path
              d={strokePath}
              fill="none"
              stroke={palette[0]}
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: chartMotion.duration.slow * 3, ease: chartMotion.easing }}
            />
          ) : (
            <path d={strokePath} fill="none" stroke={palette[0]} strokeWidth={2} strokeLinecap="round" />
          )}

          {/* Hover indicator */}
          {interactive && hoveredIndex !== null && (
            <>
              <line
                x1={padding + (hoveredIndex / (data.length - 1)) * chartWidth}
                y1={padding}
                x2={padding + (hoveredIndex / (data.length - 1)) * chartWidth}
                y2={padding + chartHeight}
                stroke="var(--color-text-tertiary)"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
              <circle
                cx={padding + (hoveredIndex / (data.length - 1)) * chartWidth}
                cy={padding + chartHeight - (data[hoveredIndex] / maxValue) * chartHeight * 0.8}
                r={4}
                fill={palette[0]}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
              />
            </>
          )}

          {/* Baseline */}
          <line
            x1={padding}
            y1={padding + chartHeight}
            x2={padding + chartWidth}
            y2={padding + chartHeight}
            stroke="var(--color-border-primary)"
            strokeWidth={1}
          />
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Point ${hoveredIndex + 1}`}
            items={[
              { label: 'Value', value: data[hoveredIndex], color: palette[0] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default GradientWave;
