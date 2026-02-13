'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface GlassPrismDatum {
  label: string;
  value: number;
  color?: string;
}

export interface GlassPrismChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: GlassPrismDatum[];
}

export const GlassPrismChart: React.FC<GlassPrismChartProps> = ({
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
  const [hovered, setHovered] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];
  const total = data.reduce((s, d) => s + d.value, 0) || 1;

  // Prism triangle on the left
  const prismW = width * 0.18;
  const prismH = height * 0.6;
  const prismX = padding + prismW * 0.5;
  const prismCy = height / 2;
  const prismPath = `M ${prismX} ${prismCy - prismH / 2} L ${prismX + prismW} ${prismCy} L ${prismX} ${prismCy + prismH / 2} Z`;

  // Spectrum bands spread to the right
  const bandStartX = prismX + prismW + 10;
  const bandEndX = width - padding;
  const bandAreaH = height - padding * 2;

  const handleMouseEnter = (e: React.MouseEvent, idx: number) => {
    if (!interactive) return;
    setHovered(idx);
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
    ? `${title} prism chart with ${data.length} components`
    : `Prism chart with ${data.length} components`;

  let accY = padding;

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
          <defs>
            <linearGradient id="prismGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* Spectrum bands */}
          {data.map((d, i) => {
            const bandH = (d.value / total) * bandAreaH;
            const color = d.color ?? palette[i % palette.length];
            const y = accY;
            accY += bandH;

            // Fan shape from prism tip to band
            const pathD = `M ${prismX + prismW} ${prismCy} L ${bandStartX} ${y} L ${bandEndX} ${y} L ${bandEndX} ${y + bandH} L ${bandStartX} ${y + bandH} Z`;

            return (
              <g key={i}>
                {animated ? (
                  <motion.path
                    d={pathD}
                    fill={color}
                    fillOpacity={hovered === i ? 0.7 : 0.45}
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: chartMotion.duration.slow, delay: i * 0.08 }}
                    onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, i)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                ) : (
                  <path
                    d={pathD}
                    fill={color}
                    fillOpacity={hovered === i ? 0.7 : 0.45}
                    onMouseEnter={(e) => handleMouseEnter(e, i)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                )}
                <text
                  x={bandEndX - 4}
                  y={y + bandH / 2}
                  textAnchor="end"
                  dominantBaseline="central"
                  fontSize={fontSize}
                  fill="var(--color-text-primary)"
                >
                  {d.label}
                </text>
              </g>
            );
          })}

          {/* Prism shape */}
          {animated ? (
            <motion.path
              d={prismPath}
              fill="url(#prismGlass)"
              stroke="var(--color-border-primary)"
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', ...chartMotion.spring }}
              style={{ transformOrigin: `${prismX + prismW / 2}px ${prismCy}px` }}
            />
          ) : (
            <path
              d={prismPath}
              fill="url(#prismGlass)"
              stroke="var(--color-border-primary)"
              strokeWidth={1.5}
            />
          )}
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hovered].label}
            items={[
              { label: 'Value', value: data[hovered].value, color: data[hovered].color ?? palette[hovered % palette.length] },
              { label: 'Share', value: `${((data[hovered].value / total) * 100).toFixed(1)}%` },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default GlassPrismChart;
