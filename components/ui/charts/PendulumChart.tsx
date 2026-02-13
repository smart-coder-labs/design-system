'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface PendulumDatum {
  label: string;
  value: number;
  color?: string;
}

export interface PendulumChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: PendulumDatum[];
}

export const PendulumChart: React.FC<PendulumChartProps> = ({
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
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const barTopY = padding + 10;
  const spacing = (width - padding * 2) / (data.length + 1);
  const bobRadius = 8;

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
    ? `${title} pendulum chart with ${data.length} pendulums`
    : `Pendulum chart with ${data.length} pendulums`;

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

          {/* Top bar */}
          <line
            x1={padding}
            y1={barTopY}
            x2={width - padding}
            y2={barTopY}
            stroke="var(--color-border-primary)"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Pendulums */}
          {data.map((d, i) => {
            const anchorX = padding + spacing * (i + 1);
            const rodLength = (height - padding * 2 - 30) * 0.4 + ((d.value / maxValue) * (height - padding * 2 - 30) * 0.5);
            const amplitude = (d.value / maxValue) * 25;
            const color = d.color ?? palette[i % palette.length];

            return (
              <g key={i}>
                {animated ? (
                  <motion.g
                    initial={{ rotate: -amplitude }}
                    animate={{ rotate: [amplitude, -amplitude] }}
                    transition={{
                      duration: 1.2 + (1 - d.value / maxValue) * 0.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                    style={{ transformOrigin: `${anchorX}px ${barTopY}px` }}
                  >
                    {/* Rod */}
                    <line
                      x1={anchorX}
                      y1={barTopY}
                      x2={anchorX}
                      y2={barTopY + rodLength}
                      stroke="var(--color-text-secondary)"
                      strokeWidth={1.5}
                    />
                    {/* Bob */}
                    <circle
                      cx={anchorX}
                      cy={barTopY + rodLength + bobRadius}
                      r={hovered === i ? bobRadius * 1.3 : bobRadius}
                      fill={color}
                      fillOpacity={0.85}
                      onMouseEnter={(e) => handleMouseEnter(e, i)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                    {/* Value */}
                    <text
                      x={anchorX}
                      y={barTopY + rodLength + bobRadius}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize - 2}
                      fontWeight={700}
                      fill="#fff"
                    >
                      {d.value}
                    </text>
                  </motion.g>
                ) : (
                  <g>
                    <line
                      x1={anchorX}
                      y1={barTopY}
                      x2={anchorX}
                      y2={barTopY + rodLength}
                      stroke="var(--color-text-secondary)"
                      strokeWidth={1.5}
                    />
                    <circle
                      cx={anchorX}
                      cy={barTopY + rodLength + bobRadius}
                      r={bobRadius}
                      fill={color}
                      fillOpacity={0.85}
                      onMouseEnter={(e) => handleMouseEnter(e, i)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                    <text
                      x={anchorX}
                      y={barTopY + rodLength + bobRadius}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize - 2}
                      fontWeight={700}
                      fill="#fff"
                    >
                      {d.value}
                    </text>
                  </g>
                )}

                {/* Pivot dot */}
                <circle cx={anchorX} cy={barTopY} r={3} fill="var(--color-text-secondary)" />

                {/* Label */}
                <text
                  x={anchorX}
                  y={height - padding / 2}
                  textAnchor="middle"
                  fontSize={fontSize - 1}
                  fill="var(--color-text-secondary)"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hovered].label}
            items={[
              { label: 'Value', value: data[hovered].value, color: data[hovered].color ?? palette[hovered % palette.length] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default PendulumChart;
