'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface CrystalClusterDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface CrystalClusterProps {
  data: CrystalClusterDataPoint[];
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

/** Generate hexagon points string for an SVG polygon */
function hexagonPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

/** Pack crystals in a spiral-ish cluster from center */
function packPositions(
  count: number,
  centerX: number,
  centerY: number,
  radii: number[],
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  if (count === 0) return positions;

  // First crystal at center
  positions.push({ x: centerX, y: centerY });

  // Remaining crystals spiral outward
  let ring = 1;
  let placed = 1;
  while (placed < count) {
    const itemsInRing = Math.min(6 * ring, count - placed);
    for (let i = 0; i < itemsInRing && placed < count; i++) {
      const angle = (Math.PI * 2 * i) / itemsInRing - Math.PI / 2;
      // Distance: sum of current + neighbor radius with small gap
      const dist = (radii[0] + radii[placed]) * 1.15 * ring;
      positions.push({
        x: centerX + dist * Math.cos(angle),
        y: centerY + dist * Math.sin(angle),
      });
      placed++;
    }
    ring++;
  }
  return positions;
}

export const CrystalCluster: React.FC<CrystalClusterProps> = ({
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const centerX = width / 2;
  const centerY = height / 2;
  const maxCrystalRadius = Math.min(width, height) / 2 - padding;

  const getColor = (item: { color?: string }, index: number) =>
    item.color ?? palette[index % palette.length];

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);

  const crystalRadii = useMemo(
    () =>
      data.map(
        (d) => Math.max(12, (d.value / maxValue) * maxCrystalRadius * 0.28),
      ),
    [data, maxValue, maxCrystalRadius],
  );

  const positions = useMemo(
    () => packPositions(data.length, centerX, centerY, crystalRadii),
    [data.length, centerX, centerY, crystalRadii],
  );

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} crystal cluster with ${data.length} items`
    : `Crystal cluster with ${data.length} items`;

  // Unique gradient IDs per instance
  const gradientId = useRef(`crystal-grad-${Math.random().toString(36).slice(2, 8)}`).current;

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

          <defs>
            {/* Shine / highlight gradient reused per crystal */}
            <linearGradient id={gradientId} x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const pos = positions[i];
              if (!pos) return null;
              const r = crystalRadii[i];
              const color = getColor(item, i);
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;
              const pts = hexagonPoints(pos.x, pos.y, isHovered ? r + 3 : r);
              const highlightPts = hexagonPoints(pos.x, pos.y, (isHovered ? r + 3 : r) * 0.92);

              const interactiveProps = interactive
                ? {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                    onMouseLeave: () => handleHover(null),
                    cursor: 'pointer' as const,
                  }
                : {};

              return (
                <g key={i}>
                  {/* Crystal body */}
                  <motion.polygon
                    variants={itemVariants}
                    points={pts}
                    fill={color}
                    fillOpacity={0.25}
                    stroke={color}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeOpacity={0.7}
                    opacity={dimmed ? 0.35 : 1}
                    style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                    {...interactiveProps}
                  />
                  {/* Glass shine overlay */}
                  <motion.polygon
                    variants={itemVariants}
                    points={highlightPts}
                    fill={`url(#${gradientId})`}
                    opacity={dimmed ? 0.15 : 0.6}
                    style={{ pointerEvents: 'none', transformOrigin: `${pos.x}px ${pos.y}px` }}
                  />
                  {/* Label */}
                  {(hoveredIndex === null || isHovered) && (
                    <text
                      x={pos.x}
                      y={pos.y + 3}
                      textAnchor="middle"
                      fill={color}
                      fontSize={fontSize - 2}
                      opacity={0.9}
                      style={{ pointerEvents: 'none' }}
                    >
                      {item.label}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Value', value: data[hoveredIndex].value, color: getColor(data[hoveredIndex], hoveredIndex) },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default CrystalCluster;
