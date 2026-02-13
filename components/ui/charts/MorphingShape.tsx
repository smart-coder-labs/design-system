'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface MorphingShapeProps {
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

function buildBlobPath(values: number[], cx: number, cy: number, baseRadius: number): string {
  const count = values.length;
  if (count < 3) return '';
  const max = Math.max(...values, 1);
  const points = values.map((v, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const r = baseRadius * 0.3 + (v / max) * baseRadius * 0.7;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length; i++) {
    const p0 = points[(i - 1 + count) % count];
    const p1 = points[i];
    const p2 = points[(i + 1) % count];
    const p3 = points[(i + 2) % count];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  d += ' Z';
  return d;
}

export const MorphingShape: React.FC<MorphingShapeProps> = ({
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
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];
  const cx = width / 2;
  const cy = height / 2;
  const baseRadius = Math.min(width, height) / 2 - padding;

  const pathD = useMemo(() => buildBlobPath(data, cx, cy, baseRadius), [data, cx, cy, baseRadius]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!interactive) return;
    setHovered(true);
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
    setHovered(false);
  };

  const ariaLabel = title
    ? `${title} morphing shape with ${data.length} data points`
    : `Morphing shape with ${data.length} data points`;

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
            <radialGradient id="morphGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette[0]} stopOpacity={0.6} />
              <stop offset="100%" stopColor={palette[1]} stopOpacity={0.2} />
            </radialGradient>
          </defs>

          {animated ? (
            <motion.path
              d={pathD}
              fill="url(#morphGrad)"
              stroke={palette[0]}
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', ...chartMotion.spring }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          ) : (
            <path
              d={pathD}
              fill="url(#morphGrad)"
              stroke={palette[0]}
              strokeWidth={2}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              cursor={interactive ? 'pointer' : undefined}
            />
          )}

          {/* Data point markers */}
          {data.map((v, i) => {
            const max = Math.max(...data, 1);
            const angle = (i / data.length) * Math.PI * 2 - Math.PI / 2;
            const r = baseRadius * 0.3 + (v / max) * baseRadius * 0.7;
            const px = cx + r * Math.cos(angle);
            const py = cy + r * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={px}
                cy={py}
                r={3}
                fill={palette[i % palette.length]}
                fillOpacity={0.9}
              />
            );
          })}

          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize + 2}
            fontWeight={700}
            fill="var(--color-text-primary)"
          >
            {data.length} pts
          </text>
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={title ?? 'Morphing Shape'}
            items={[
              { label: 'Points', value: data.length },
              { label: 'Max', value: Math.max(...data), color: palette[0] },
              { label: 'Min', value: Math.min(...data), color: palette[1] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default MorphingShape;
