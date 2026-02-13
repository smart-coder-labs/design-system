'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface CircularPackingDataPoint {
  label: string;
  value: number;
  color?: string;
  children?: Array<{ label: string; value: number }>;
}

export interface CircularPackingProps {
  data: CircularPackingDataPoint[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

interface PackedCircle {
  x: number;
  y: number;
  r: number;
  label: string;
  value: number;
  color: string;
  parentIndex: number;
  childIndex: number | null;
}

export const CircularPacking: React.FC<CircularPackingProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize } = chartSizes[size];

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) / 2 - 16;

  const getColor = useCallback(
    (item: { color?: string }, index: number) => item.color ?? palette[index % palette.length],
    [palette],
  );

  const packedCircles = useMemo(() => {
    if (data.length === 0) return [];
    const sorted = [...data].sort((a, b) => b.value - a.value);
    const values = sorted.map((d) => d.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const minR = maxRadius * 0.08;
    const maxR = maxRadius * 0.35;

    const circles: PackedCircle[] = [];
    const placed: Array<{ x: number; y: number; r: number }> = [];

    sorted.forEach((item, i) => {
      const r = linearScale(item.value, minVal, maxVal, minR, maxR);
      // Spiral placement
      let bestX = cx;
      let bestY = cy;
      let found = false;

      if (placed.length === 0) {
        bestX = cx;
        bestY = cy;
        found = true;
      } else {
        for (let angle = 0; angle < Math.PI * 20; angle += 0.15) {
          const dist = 4 + angle * 3;
          const tx = cx + dist * Math.cos(angle);
          const ty = cy + dist * Math.sin(angle);

          let overlaps = false;
          for (const p of placed) {
            const dx = tx - p.x;
            const dy = ty - p.y;
            if (Math.sqrt(dx * dx + dy * dy) < r + p.r + 2) {
              overlaps = true;
              break;
            }
          }

          // Keep within container bounds
          if (!overlaps && tx - r > 0 && tx + r < width && ty - r > 0 && ty + r < height) {
            bestX = tx;
            bestY = ty;
            found = true;
            break;
          }
        }
      }

      if (!found) {
        bestX = cx + (i * 10) % (maxRadius * 0.5);
        bestY = cy + (i * 7) % (maxRadius * 0.5);
      }

      const color = getColor(item, i);
      placed.push({ x: bestX, y: bestY, r });
      circles.push({ x: bestX, y: bestY, r, label: item.label, value: item.value, color, parentIndex: i, childIndex: null });

      // Place children inside parent
      if (item.children && item.children.length > 0) {
        const childValues = item.children.map((c) => c.value);
        const childMinVal = Math.min(...childValues);
        const childMaxVal = Math.max(...childValues);
        const childMinR = r * 0.1;
        const childMaxR = r * 0.35;
        const childPlaced: Array<{ x: number; y: number; r: number }> = [];

        item.children.forEach((child, ci) => {
          const cr = linearScale(child.value, childMinVal, childMaxVal, childMinR, childMaxR);
          let childX = bestX;
          let childY = bestY;

          for (let angle = 0; angle < Math.PI * 10; angle += 0.3) {
            const dist = 1 + angle * 1.5;
            const tx = bestX + dist * Math.cos(angle);
            const ty = bestY + dist * Math.sin(angle);

            let overlaps = false;
            for (const cp of childPlaced) {
              const dx = tx - cp.x;
              const dy = ty - cp.y;
              if (Math.sqrt(dx * dx + dy * dy) < cr + cp.r + 1) {
                overlaps = true;
                break;
              }
            }

            const distFromParent = Math.sqrt((tx - bestX) ** 2 + (ty - bestY) ** 2);
            if (!overlaps && distFromParent + cr <= r - 1) {
              childX = tx;
              childY = ty;
              break;
            }
          }

          childPlaced.push({ x: childX, y: childY, r: cr });
          circles.push({ x: childX, y: childY, r: cr, label: child.label, value: child.value, color, parentIndex: i, childIndex: ci });
        });
      }
    });

    return circles;
  }, [data, cx, cy, maxRadius, width, height, getColor]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? packedCircles[index] : null, index);
    },
    [packedCircles, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(packedCircles[index], index); },
    [packedCircles, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} circular packing chart with ${data.length} groups`
    : `Circular packing chart with ${data.length} groups`;

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

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {packedCircles.map((circle, i) => {
              const isChild = circle.childIndex !== null;
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                onClick: () => handleClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.circle
                  key={i}
                  variants={itemVariants}
                  cx={circle.x}
                  cy={circle.y}
                  r={isHovered ? circle.r + 2 : circle.r}
                  fill={circle.color}
                  fillOpacity={isChild ? 0.5 : 0.3}
                  stroke={circle.color}
                  strokeWidth={isHovered ? 2 : 1}
                  opacity={dimmed ? 0.4 : 1}
                  style={{ transformOrigin: `${circle.x}px ${circle.y}px` }}
                  {...interactiveProps}
                />
              );
            })}
          </motion.g>

          {showLabels && packedCircles
            .filter((c) => c.r > fontSize * 1.5)
            .map((circle, i) => (
              <text
                key={`label-${i}`}
                x={circle.x}
                y={circle.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={Math.min(fontSize - 2, circle.r * 0.6)}
                fill="var(--color-text-primary)"
                pointerEvents="none"
              >
                {circle.label}
              </text>
            ))}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={packedCircles[hoveredIndex].label}
            items={[
              { label: 'Value', value: formatValue(packedCircles[hoveredIndex].value), color: packedCircles[hoveredIndex].color },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default CircularPacking;
