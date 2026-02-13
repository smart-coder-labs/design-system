'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface KaleidoscopeDatum {
  value: number;
  color?: string;
}

export interface KaleidoscopeChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: KaleidoscopeDatum[];
}

export const KaleidoscopeChart: React.FC<KaleidoscopeChartProps> = ({
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
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(width, height) / 2 - padding;
  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const segments = 6; // Kaleidoscope symmetry

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
    ? `${title} kaleidoscope chart with ${data.length} data points`
    : `Kaleidoscope chart with ${data.length} data points`;

  // Build triangular segments for each data point repeated around center
  const segmentAngle = (Math.PI * 2) / segments;

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

          {animated ? (
            <motion.g
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              {data.map((d, di) => {
                const r = maxR * 0.3 + (d.value / maxVal) * maxR * 0.65;
                const color = d.color ?? palette[di % palette.length];
                const layerAngle = (di / data.length) * segmentAngle;

                return Array.from({ length: segments }).map((_, si) => {
                  const baseAngle = si * segmentAngle + layerAngle;
                  const angle1 = baseAngle;
                  const angle2 = baseAngle + segmentAngle * 0.4;
                  const innerR = maxR * 0.1 + di * (maxR * 0.15);
                  const outerR = Math.min(innerR + r * 0.3, maxR);

                  const x1 = cx + innerR * Math.cos(angle1);
                  const y1 = cy + innerR * Math.sin(angle1);
                  const x2 = cx + outerR * Math.cos((angle1 + angle2) / 2);
                  const y2 = cy + outerR * Math.sin((angle1 + angle2) / 2);
                  const x3 = cx + innerR * Math.cos(angle2);
                  const y3 = cy + innerR * Math.sin(angle2);

                  return (
                    <motion.polygon
                      key={`${di}-${si}`}
                      points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                      fill={color}
                      fillOpacity={hovered === di ? 0.85 : 0.55}
                      stroke={color}
                      strokeWidth={0.5}
                      strokeOpacity={0.3}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        ...chartMotion.spring,
                        delay: di * 0.08 + si * 0.02,
                      }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                      onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, di)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                  );
                });
              })}
            </motion.g>
          ) : (
            <g>
              {data.map((d, di) => {
                const r = maxR * 0.3 + (d.value / maxVal) * maxR * 0.65;
                const color = d.color ?? palette[di % palette.length];
                const layerAngle = (di / data.length) * segmentAngle;

                return Array.from({ length: segments }).map((_, si) => {
                  const baseAngle = si * segmentAngle + layerAngle;
                  const angle1 = baseAngle;
                  const angle2 = baseAngle + segmentAngle * 0.4;
                  const innerR = maxR * 0.1 + di * (maxR * 0.15);
                  const outerR = Math.min(innerR + r * 0.3, maxR);

                  const x1 = cx + innerR * Math.cos(angle1);
                  const y1 = cy + innerR * Math.sin(angle1);
                  const x2 = cx + outerR * Math.cos((angle1 + angle2) / 2);
                  const y2 = cy + outerR * Math.sin((angle1 + angle2) / 2);
                  const x3 = cx + innerR * Math.cos(angle2);
                  const y3 = cy + innerR * Math.sin(angle2);

                  return (
                    <polygon
                      key={`${di}-${si}`}
                      points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                      fill={color}
                      fillOpacity={0.55}
                      stroke={color}
                      strokeWidth={0.5}
                      strokeOpacity={0.3}
                      onMouseEnter={(e) => handleMouseEnter(e, di)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      cursor={interactive ? 'pointer' : undefined}
                    />
                  );
                });
              })}
            </g>
          )}

          {/* Center dot */}
          <circle cx={cx} cy={cy} r={4} fill="var(--color-text-primary)" fillOpacity={0.5} />
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Segment ${hovered + 1}`}
            items={[
              { label: 'Value', value: data[hovered].value, color: data[hovered].color ?? palette[hovered % palette.length] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default KaleidoscopeChart;
