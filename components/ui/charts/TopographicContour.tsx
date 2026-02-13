'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface TopographicContourProps {
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

const terrainPalette = [
  '#1a5276',
  '#2471a3',
  '#2e86c1',
  '#52be80',
  '#82e0aa',
  '#f9e79f',
  '#dc7633',
  '#a04000',
];

export const TopographicContour: React.FC<TopographicContourProps> = ({
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
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? terrainPalette;
  const { width, height, fontSize, padding } = chartSizes[size];

  const contours = useMemo(() => {
    const rows = data.length;
    const cols = data[0]?.length ?? 0;
    if (rows === 0 || cols === 0) return [];

    let min = Infinity;
    let max = -Infinity;
    let totalWeight = 0;
    let cx = 0;
    let cy = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const v = data[r][c];
        if (v < min) min = v;
        if (v > max) max = v;
        totalWeight += v;
        cx += c * v;
        cy += r * v;
      }
    }

    cx /= totalWeight;
    cy /= totalWeight;

    const levels = 7;
    const step = (max - min) / (levels + 1);
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const centerX = padding + (cx / (cols - 1)) * chartW;
    const centerY = padding + (cy / (rows - 1)) * chartH;
    const maxRadius = Math.min(chartW, chartH) * 0.42;
    const angleSteps = 36;

    return Array.from({ length: levels }, (_, li) => {
      const threshold = min + step * (li + 1);
      const normalizedLevel = (li + 1) / (levels + 1);
      const baseRadius = maxRadius * (1 - normalizedLevel * 0.7);

      const points: Array<{ x: number; y: number }> = [];

      for (let a = 0; a < angleSteps; a++) {
        const angle = (a / angleSteps) * Math.PI * 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Sample data values along this direction
        let radiusFactor = 0;
        let samples = 0;
        for (let d = 0; d <= 1; d += 0.1) {
          const sampleR = d * maxRadius;
          const sx = centerX + cos * sampleR;
          const sy = centerY + sin * sampleR;
          const gc = ((sx - padding) / chartW) * (cols - 1);
          const gr = ((sy - padding) / chartH) * (rows - 1);
          const c0 = Math.max(0, Math.min(cols - 2, Math.floor(gc)));
          const r0 = Math.max(0, Math.min(rows - 2, Math.floor(gr)));
          const fc = gc - c0;
          const fr = gr - r0;
          const val =
            data[r0][c0] * (1 - fc) * (1 - fr) +
            data[r0][Math.min(c0 + 1, cols - 1)] * fc * (1 - fr) +
            data[Math.min(r0 + 1, rows - 1)][c0] * (1 - fc) * fr +
            data[Math.min(r0 + 1, rows - 1)][Math.min(c0 + 1, cols - 1)] * fc * fr;
          if (val >= threshold) {
            radiusFactor += d;
            samples++;
          }
        }
        const avgRadius = samples > 0 ? (radiusFactor / samples) * maxRadius : baseRadius * 0.3;
        const r = Math.max(baseRadius * 0.15, Math.min(avgRadius, baseRadius * 1.3));
        points.push({
          x: centerX + cos * r,
          y: centerY + sin * r,
        });
      }

      // Close the path with smooth curves
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length; i++) {
        const p0 = points[(i - 1 + points.length) % points.length];
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
      }
      d += ' Z';

      const color = palette[li % palette.length];

      return { d, threshold, color, level: li };
    });
  }, [data, width, height, padding, palette]);

  const pathLengths = useMemo(() => contours.map(() => 1200), [contours]);

  const handleContourHover = (levelIndex: number | null, event?: React.MouseEvent) => {
    setHoveredLevel(levelIndex);
    if (levelIndex !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} topographic contour with ${contours.length} levels`
    : `Topographic contour with ${contours.length} levels`;

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

          {contours.map((contour, i) => {
            const isHovered = hoveredLevel === i;
            const dimmed = hoveredLevel !== null && !isHovered;

            const interactiveProps = interactive
              ? {
                  onMouseEnter: (e: React.MouseEvent<SVGPathElement>) => handleContourHover(i, e as unknown as React.MouseEvent),
                  onMouseMove: (e: React.MouseEvent<SVGPathElement>) => handleContourHover(i, e as unknown as React.MouseEvent),
                  onMouseLeave: () => handleContourHover(null),
                  cursor: 'pointer' as const,
                }
              : {};

            return (
              <motion.path
                key={i}
                d={contour.d}
                fill={contour.color}
                fillOpacity={isHovered ? 0.15 : 0.06}
                stroke={contour.color}
                strokeWidth={isHovered ? 2 : 1.2}
                opacity={dimmed ? 0.35 : 1}
                initial={animated ? { strokeDasharray: pathLengths[i], strokeDashoffset: pathLengths[i] } : undefined}
                animate={animated ? { strokeDashoffset: 0 } : undefined}
                transition={animated ? { duration: 1.2, delay: i * 0.12, ease: chartMotion.easing } : undefined}
                {...interactiveProps}
              />
            );
          })}

          {/* Elevation labels on contour lines */}
          {contours.map((contour, i) => (
            <text
              key={`label-${i}`}
              x={width - padding - 8}
              y={padding + 14 + i * (fontSize + 4)}
              fill={contour.color}
              fontSize={fontSize - 2}
              textAnchor="end"
              opacity={0.7}
            >
              {Math.round(contour.threshold)}
            </text>
          ))}
        </svg>

        {showTooltip && interactive && hoveredLevel !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Contour Level`}
            value={`Elevation: ${Math.round(contours[hoveredLevel].threshold)}`}
            color={contours[hoveredLevel].color}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default TopographicContour;
