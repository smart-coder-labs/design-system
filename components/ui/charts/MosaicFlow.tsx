'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface MosaicFlowDatum {
  label: string;
  value: number;
  color?: string;
}

export interface MosaicFlowProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: MosaicFlowDatum[];
}

export const MosaicFlow: React.FC<MosaicFlowProps> = ({
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

  // Layout tiles using a simple treemap-like row packing
  const areaW = width - padding * 2;
  const areaH = height - padding * 2;
  const gap = 3;

  const tiles: Array<{ x: number; y: number; w: number; h: number; idx: number }> = [];
  let remaining = [...data.map((d, i) => ({ ...d, idx: i }))];
  let curY = padding;
  let availH = areaH;

  while (remaining.length > 0 && availH > 0) {
    const rowTotal = remaining.slice(0, Math.ceil(remaining.length / 2) || 1).reduce((s, d) => s + d.value, 0);
    const rowCount = Math.min(Math.ceil(remaining.length / 2) || 1, remaining.length);
    const rowItems = remaining.slice(0, rowCount);
    remaining = remaining.slice(rowCount);
    const rowH = remaining.length > 0 ? (rowTotal / total) * areaH : availH;

    let curX = padding;
    const rowItemTotal = rowItems.reduce((s, d) => s + d.value, 0) || 1;
    rowItems.forEach((item) => {
      const tileW = (item.value / rowItemTotal) * areaW - gap;
      tiles.push({ x: curX, y: curY, w: Math.max(tileW, 10), h: Math.max(rowH - gap, 10), idx: item.idx });
      curX += tileW + gap;
    });
    curY += rowH;
    availH -= rowH;
  }

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
    ? `${title} mosaic flow chart with ${data.length} tiles`
    : `Mosaic flow chart with ${data.length} tiles`;

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

          {tiles.map((tile) => {
            const d = data[tile.idx];
            const color = d.color ?? palette[tile.idx % palette.length];
            const isHovered = hovered === tile.idx;

            return (
              <g key={tile.idx}>
                {animated ? (
                  <motion.rect
                    x={tile.x}
                    y={tile.y}
                    width={tile.w}
                    height={tile.h}
                    rx={4}
                    fill={color}
                    fillOpacity={isHovered ? 0.85 : 0.65}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      ...chartMotion.spring,
                      delay: tile.idx * 0.06,
                    }}
                    style={{ transformOrigin: `${tile.x + tile.w / 2}px ${tile.y + tile.h / 2}px` }}
                    onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, tile.idx)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                ) : (
                  <rect
                    x={tile.x}
                    y={tile.y}
                    width={tile.w}
                    height={tile.h}
                    rx={4}
                    fill={color}
                    fillOpacity={isHovered ? 0.85 : 0.65}
                    onMouseEnter={(e) => handleMouseEnter(e, tile.idx)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                )}
                {tile.w > 30 && tile.h > 20 && (
                  <text
                    x={tile.x + tile.w / 2}
                    y={tile.y + tile.h / 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={fontSize - 1}
                    fontWeight={600}
                    fill="#fff"
                  >
                    {d.label}
                  </text>
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

export default MosaicFlow;
