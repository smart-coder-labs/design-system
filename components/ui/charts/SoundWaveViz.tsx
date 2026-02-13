'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface SoundWaveVizProps {
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

export const SoundWaveViz: React.FC<SoundWaveVizProps> = ({
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
  const maxVal = Math.max(...data, 1);
  const centerY = height / 2;
  const barCount = data.length;
  const availW = width - padding * 2;
  const barW = Math.max(2, (availW / barCount) * 0.6);
  const barGap = availW / barCount;
  const maxBarH = (height - padding * 2) / 2 - 4;

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
    ? `${title} sound wave visualization with ${data.length} bars`
    : `Sound wave visualization with ${data.length} bars`;

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

          {/* Center line */}
          <line
            x1={padding}
            y1={centerY}
            x2={width - padding}
            y2={centerY}
            stroke="var(--color-border-primary)"
            strokeWidth={0.5}
            strokeOpacity={0.4}
          />

          {/* Bars */}
          {data.map((v, i) => {
            const barH = (v / maxVal) * maxBarH;
            const x = padding + i * barGap + barGap / 2 - barW / 2;
            const color = palette[i % palette.length];
            const isHovered = hovered === i;

            return (
              <g key={i}>
                {animated ? (
                  <>
                    {/* Upper bar */}
                    <motion.rect
                      x={x}
                      y={centerY - barH}
                      width={barW}
                      height={barH}
                      rx={barW / 2}
                      fill={color}
                      fillOpacity={isHovered ? 0.95 : 0.75}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: [1, 0.6, 1] }}
                      transition={{
                        duration: 1.5 + (i % 5) * 0.2,
                        delay: i * 0.03,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{ transformOrigin: `${x + barW / 2}px ${centerY}px` }}
                      onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, i)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                    {/* Lower bar (mirror) */}
                    <motion.rect
                      x={x}
                      y={centerY}
                      width={barW}
                      height={barH}
                      rx={barW / 2}
                      fill={color}
                      fillOpacity={isHovered ? 0.95 : 0.75}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: [1, 0.6, 1] }}
                      transition={{
                        duration: 1.5 + (i % 5) * 0.2,
                        delay: i * 0.03,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{ transformOrigin: `${x + barW / 2}px ${centerY}px` }}
                    />
                  </>
                ) : (
                  <>
                    <rect
                      x={x}
                      y={centerY - barH}
                      width={barW}
                      height={barH}
                      rx={barW / 2}
                      fill={color}
                      fillOpacity={isHovered ? 0.95 : 0.75}
                      onMouseEnter={(e) => handleMouseEnter(e, i)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                    <rect
                      x={x}
                      y={centerY}
                      width={barW}
                      height={barH}
                      rx={barW / 2}
                      fill={color}
                      fillOpacity={isHovered ? 0.95 : 0.75}
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Bar ${hovered + 1}`}
            items={[
              { label: 'Amplitude', value: data[hovered], color: palette[hovered % palette.length] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default SoundWaveViz;
