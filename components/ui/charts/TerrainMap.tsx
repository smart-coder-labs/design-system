'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface TerrainMapProps {
  data: number[][];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

const terrainColors = [
  '#1a3c6e', // deep blue
  '#2a6496', // blue
  '#3a9bbc', // light blue
  '#4db88a', // teal-green
  '#6ec95e', // green
  '#a8d948', // yellow-green
  '#c9b84a', // tan
  '#b08040', // brown
  '#a06030', // dark brown
  '#c0a080', // light brown
  '#e0d0c0', // beige
  '#f0f0f0', // near-white
];

function interpolateColor(t: number): string {
  const clamped = Math.max(0, Math.min(1, t));
  const segCount = terrainColors.length - 1;
  const segIndex = Math.min(Math.floor(clamped * segCount), segCount - 1);
  const segT = clamped * segCount - segIndex;
  const c1 = terrainColors[segIndex];
  const c2 = terrainColors[segIndex + 1];
  const r1 = parseInt(c1.slice(1, 3), 16);
  const g1 = parseInt(c1.slice(3, 5), 16);
  const b1 = parseInt(c1.slice(5, 7), 16);
  const r2 = parseInt(c2.slice(1, 3), 16);
  const g2 = parseInt(c2.slice(3, 5), 16);
  const b2 = parseInt(c2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * segT);
  const g = Math.round(g1 + (g2 - g1) * segT);
  const b = Math.round(b1 + (b2 - b1) * segT);
  return `rgb(${r},${g},${b})`;
}

export const TerrainMap: React.FC<TerrainMapProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const rows = data.length;
  const cols = data.length > 0 ? data[0].length : 0;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const cellW = cols > 0 ? chartWidth / cols : 0;
  const cellH = rows > 0 ? chartHeight / rows : 0;

  const { min, max } = useMemo(() => {
    let min = Infinity;
    let max = -Infinity;
    for (const row of data) {
      for (const v of row) {
        if (v < min) min = v;
        if (v > max) max = v;
      }
    }
    return { min, max };
  }, [data]);

  const getColor = useMemo(() => {
    const range = max - min || 1;
    return (value: number) => interpolateColor((value - min) / range);
  }, [min, max]);

  const handleHover = (row: number, col: number, event: React.MouseEvent) => {
    setHoveredCell({ row, col });
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const handleLeave = () => {
    setHoveredCell(null);
  };

  const ariaLabel = title
    ? `${title} terrain map with ${rows}×${cols} grid`
    : `Terrain map with ${rows}×${cols} grid`;

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
          {data.map((row, ri) =>
            row.map((value, ci) => {
              const x = padding + ci * cellW;
              const y = padding + ri * cellH;
              const color = getColor(value);
              const isHovered = hoveredCell?.row === ri && hoveredCell?.col === ci;
              const delay = animated ? (ri + ci) * 0.02 : 0;

              const interactiveProps = interactive
                ? {
                    onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => handleHover(ri, ci, e),
                    onMouseMove: (e: React.MouseEvent<SVGRectElement>) => handleHover(ri, ci, e),
                    onMouseLeave: handleLeave,
                    cursor: 'pointer' as const,
                  }
                : {};

              return (
                <motion.rect
                  key={`${ri}-${ci}`}
                  x={x}
                  y={y}
                  width={cellW}
                  height={cellH}
                  fill={color}
                  stroke={isHovered ? 'var(--color-text-primary)' : 'none'}
                  strokeWidth={isHovered ? 1.5 : 0}
                  initial={animated ? { opacity: 0 } : undefined}
                  animate={animated ? { opacity: 1 } : undefined}
                  transition={animated ? { duration: chartMotion.duration.normal, delay, ease: chartMotion.easing } : undefined}
                  {...interactiveProps}
                />
              );
            }),
          )}
        </svg>

        {showTooltip && interactive && hoveredCell !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Cell (${hoveredCell.row}, ${hoveredCell.col})`}
            items={[
              { label: 'Row', value: hoveredCell.row },
              { label: 'Col', value: hoveredCell.col },
              { label: 'Height', value: data[hoveredCell.row][hoveredCell.col], color: getColor(data[hoveredCell.row][hoveredCell.col]) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default TerrainMap;
