'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface GaugeZone {
  from: number;
  to: number;
  color: string;
}

export interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  zones?: GaugeZone[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_ZONES: GaugeZone[] = [
  { from: 0, to: 33, color: '#34C759' },
  { from: 33, to: 66, color: '#FF9500' },
  { from: 66, to: 100, color: '#FF3B30' },
];

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  zones,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { width, height, fontSize } = chartSizes[size];
  const dim = Math.min(width, height);
  const cx = width / 2;
  const cy = dim * 0.55;
  const outerR = dim * 0.4;
  const innerR = outerR * 0.75;

  const activeZones = zones ?? DEFAULT_ZONES;
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = max > min ? (clampedValue - min) / (max - min) : 0;

  // Gauge arc from -135° to 135° (270° total sweep)
  const startAngle = -135;
  const endAngle = 135;
  const totalSweep = endAngle - startAngle;

  const polarToXY = (angleDeg: number, r: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const describeGaugeArc = (r: number, aStart: number, aEnd: number) => {
    const s = polarToXY(aStart, r);
    const e = polarToXY(aEnd, r);
    const largeArc = aEnd - aStart > 180 ? 1 : 0;
    return `M${s.x},${s.y} A${r},${r} 0 ${largeArc} 1 ${e.x},${e.y}`;
  };

  // Needle angle
  const needleAngle = startAngle + percentage * totalSweep;

  const handleHover = (isHovered: boolean, event?: React.MouseEvent) => {
    setHovered(isHovered);
    if (isHovered && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} gauge chart showing ${formatValue(clampedValue)}`
    : `Gauge chart showing ${formatValue(clampedValue)}`;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${dim * 0.75}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '8px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
        >
          <title>{ariaLabel}</title>

          {/* Background arc */}
          <path
            d={describeGaugeArc(outerR, startAngle, endAngle)}
            fill="none"
            stroke="var(--color-border-secondary)"
            strokeWidth={(outerR - innerR)}
            strokeOpacity={0.2}
            strokeLinecap="round"
          />

          {/* Color zone arcs */}
          {activeZones.map((zone, i) => {
            const zoneStart = startAngle + ((zone.from - min) / (max - min)) * totalSweep;
            const zoneEnd = startAngle + ((zone.to - min) / (max - min)) * totalSweep;
            return (
              <motion.path
                key={i}
                d={describeGaugeArc((outerR + innerR) / 2, zoneStart, zoneEnd)}
                fill="none"
                stroke={zone.color}
                strokeWidth={(outerR - innerR) * 0.8}
                strokeLinecap="butt"
                strokeOpacity={0.5}
                initial={animated ? { pathLength: 0 } : undefined}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: chartMotion.easing }}
              />
            );
          })}

          {/* Needle */}
          <motion.g
            initial={animated ? { rotate: startAngle } : { rotate: needleAngle }}
            animate={{ rotate: needleAngle }}
            transition={animated ? { type: 'spring', stiffness: 60, damping: 15 } : { duration: 0 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            onMouseEnter={(e) => interactive && handleHover(true, e)}
            onMouseMove={(e) => interactive && handleHover(true, e)}
            onMouseLeave={() => interactive && handleHover(false)}
            cursor={interactive ? 'pointer' : undefined}
          >
            <line
              x1={cx}
              y1={cy}
              x2={cx + outerR * 0.85}
              y2={cy}
              stroke="var(--color-text-primary)"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </motion.g>

          {/* Center dot */}
          <circle cx={cx} cy={cy} r={outerR * 0.08} fill="var(--color-text-primary)" />

          {/* Value text */}
          {showLabels && (
            <>
              <text
                x={cx}
                y={cy + outerR * 0.35}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize + 6}
                fontWeight={700}
                fill="var(--color-text-primary)"
              >
                {formatValue(clampedValue)}
              </text>
              <text x={cx} y={cy + outerR * 0.55} textAnchor="middle" fontSize={fontSize - 2} fill="var(--color-text-secondary)">
                {formatValue(min)} – {formatValue(max)}
              </text>
            </>
          )}

          {/* Min/Max labels */}
          {showLabels && (
            <>
              <text x={polarToXY(startAngle, outerR + 12).x} y={polarToXY(startAngle, outerR + 12).y} textAnchor="middle" fontSize={fontSize - 3} fill="var(--color-text-secondary)">
                {formatValue(min)}
              </text>
              <text x={polarToXY(endAngle, outerR + 12).x} y={polarToXY(endAngle, outerR + 12).y} textAnchor="middle" fontSize={fontSize - 3} fill="var(--color-text-secondary)">
                {formatValue(max)}
              </text>
            </>
          )}
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label="Value"
            value={formatValue(clampedValue)}
            color={activeZones.find((z) => clampedValue >= z.from && clampedValue <= z.to)?.color}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default GaugeChart;
