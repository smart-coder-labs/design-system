'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface StainedGlassDatum {
  label: string;
  value: number;
  color?: string;
  x?: number;
  y?: number;
}

export interface StainedGlassProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: StainedGlassDatum[];
}

function generateCells(
  data: StainedGlassDatum[],
  width: number,
  height: number,
  padding: number
): Array<{ points: string; cx: number; cy: number; idx: number }> {
  const areaW = width - padding * 2;
  const areaH = height - padding * 2;
  const centers = data.map((d, i) => ({
    x: d.x !== undefined ? padding + d.x * areaW : padding + ((i % 3) + 0.5) * (areaW / Math.min(data.length, 3)),
    y: d.y !== undefined ? padding + d.y * areaH : padding + (Math.floor(i / 3) + 0.5) * (areaH / Math.ceil(data.length / 3)),
  }));

  return centers.map((center, idx) => {
    const sides = 5 + (idx % 3);
    const maxR = Math.min(areaW, areaH) / (Math.ceil(Math.sqrt(data.length)) + 0.5);
    const r = maxR * 0.4 + (data[idx].value / Math.max(...data.map((d) => d.value), 1)) * maxR * 0.5;
    const pts = Array.from({ length: sides })
      .map((_, j) => {
        const angle = (j / sides) * Math.PI * 2 - Math.PI / 2;
        const jitter = 0.85 + ((idx * 7 + j * 13) % 10) / 30;
        const px = center.x + r * jitter * Math.cos(angle);
        const py = center.y + r * jitter * Math.sin(angle);
        return `${px},${py}`;
      })
      .join(' ');

    return { points: pts, cx: center.x, cy: center.y, idx };
  });
}

export const StainedGlass: React.FC<StainedGlassProps> = ({
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

  const cells = useMemo(() => generateCells(data, width, height, padding), [data, width, height, padding]);

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
    ? `${title} stained glass chart with ${data.length} cells`
    : `Stained glass chart with ${data.length} cells`;

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

          {cells.map((cell) => {
            const d = data[cell.idx];
            const color = d.color ?? palette[cell.idx % palette.length];
            const isHovered = hovered === cell.idx;

            return (
              <g key={cell.idx}>
                {animated ? (
                  <motion.polygon
                    points={cell.points}
                    fill={color}
                    fillOpacity={isHovered ? 0.85 : 0.6}
                    stroke="var(--color-text-primary)"
                    strokeWidth={2}
                    strokeOpacity={0.7}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      ...chartMotion.spring,
                      delay: cell.idx * 0.06,
                    }}
                    style={{ transformOrigin: `${cell.cx}px ${cell.cy}px` }}
                    onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, cell.idx)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                ) : (
                  <polygon
                    points={cell.points}
                    fill={color}
                    fillOpacity={isHovered ? 0.85 : 0.6}
                    stroke="var(--color-text-primary)"
                    strokeWidth={2}
                    strokeOpacity={0.7}
                    onMouseEnter={(e) => handleMouseEnter(e, cell.idx)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                )}
                <text
                  x={cell.cx}
                  y={cell.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={fontSize - 1}
                  fontWeight={600}
                  fill="#fff"
                  pointerEvents="none"
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

export default StainedGlass;
