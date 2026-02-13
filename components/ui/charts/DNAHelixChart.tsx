'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface DNAHelixDataPoint {
  left: number;
  right: number;
  label?: string;
}

export interface DNAHelixChartProps {
  data: DNAHelixDataPoint[];
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

export const DNAHelixChart: React.FC<DNAHelixChartProps> = ({
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

  const strandColor1 = palette[0];
  const strandColor2 = palette[1];
  const barColor = palette[2];

  const amplitude = useMemo(() => (height - padding * 2) * 0.3, [height, padding]);
  const centerY = height / 2;

  const points = useMemo(() => {
    const n = data.length;
    const startX = padding + 20;
    const endX = width - padding - 20;
    const step = n > 1 ? (endX - startX) / (n - 1) : 0;

    return data.map((d, i) => {
      const x = startX + i * step;
      const t = n > 1 ? i / (n - 1) : 0;
      const angle = t * Math.PI * 2;
      const y1 = centerY + Math.sin(angle) * amplitude;
      const y2 = centerY - Math.sin(angle) * amplitude;
      const maxVal = 100;
      const barThickness = 1 + ((d.left + d.right) / (maxVal * 2)) * 3;
      return { x, y1, y2, barThickness, data: d };
    });
  }, [data, width, height, padding, amplitude, centerY]);

  const strand1Path = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y1}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y1}, ${cpx} ${curr.y1}, ${curr.x} ${curr.y1}`;
    }
    return d;
  }, [points]);

  const strand2Path = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y2}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y2}, ${cpx} ${curr.y2}, ${curr.x} ${curr.y2}`;
    }
    return d;
  }, [points]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const pathVariants = animated
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: chartMotion.easing } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} DNA helix chart with ${data.length} base pairs`
    : `DNA helix chart with ${data.length} base pairs`;

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

          {/* Strand paths */}
          <motion.path
            d={strand1Path}
            fill="none"
            stroke={strandColor1}
            strokeWidth={2.5}
            strokeLinecap="round"
            variants={pathVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          />
          <motion.path
            d={strand2Path}
            fill="none"
            stroke={strandColor2}
            strokeWidth={2.5}
            strokeLinecap="round"
            variants={pathVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          />

          {/* Connecting bars and data point circles */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {points.map((p, i) => {
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.g key={i} variants={itemVariants} opacity={dimmed ? 0.4 : 1}>
                  {/* Connecting bar */}
                  <line
                    x1={p.x}
                    y1={p.y1}
                    x2={p.x}
                    y2={p.y2}
                    stroke={barColor}
                    strokeWidth={isHovered ? p.barThickness + 1.5 : p.barThickness}
                    strokeOpacity={0.6}
                    strokeLinecap="round"
                    {...interactiveProps}
                  />
                  {/* Top strand circle */}
                  <circle
                    cx={p.x}
                    cy={p.y1}
                    r={isHovered ? 5 : 3.5}
                    fill={strandColor1}
                    stroke="white"
                    strokeWidth={1}
                    {...interactiveProps}
                  />
                  {/* Bottom strand circle */}
                  <circle
                    cx={p.x}
                    cy={p.y2}
                    r={isHovered ? 5 : 3.5}
                    fill={strandColor2}
                    stroke="white"
                    strokeWidth={1}
                    {...interactiveProps}
                  />
                  {/* Label */}
                  {p.data.label && (
                    <text
                      x={p.x}
                      y={centerY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize - 2}
                      fill="var(--color-text-secondary)"
                      opacity={isHovered ? 1 : 0.6}
                    >
                      {p.data.label}
                    </text>
                  )}
                </motion.g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label ?? `Pair ${hoveredIndex + 1}`}
            items={[
              { label: 'Left', value: data[hoveredIndex].left, color: strandColor1 },
              { label: 'Right', value: data[hoveredIndex].right, color: strandColor2 },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default DNAHelixChart;
