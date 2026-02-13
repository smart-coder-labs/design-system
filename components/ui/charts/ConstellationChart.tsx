'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ConstellationStar {
  x: number;
  y: number;
  label?: string;
  brightness?: number;
}

export interface ConstellationChartProps {
  data: {
    stars: ConstellationStar[];
    connections: Array<[number, number]>;
  };
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

export const ConstellationChart: React.FC<ConstellationChartProps> = ({
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

  const chartArea = useMemo(() => ({
    x: padding,
    y: padding,
    w: width - padding * 2,
    h: height - padding * 2,
  }), [width, height, padding]);

  const scaledStars = useMemo(() =>
    data.stars.map((star) => ({
      ...star,
      cx: chartArea.x + (star.x / 100) * chartArea.w,
      cy: chartArea.y + (star.y / 100) * chartArea.h,
      brightness: star.brightness ?? 0.8,
    })),
    [data.stars, chartArea],
  );

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const connectionVariants = animated
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 0.4, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } },
      }
    : undefined;

  const starVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const ariaLabel = title
    ? `${title} constellation chart with ${data.stars.length} stars`
    : `Constellation chart with ${data.stars.length} stars`;

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
            <filter id="star-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dark sky background */}
          <rect
            x={chartArea.x}
            y={chartArea.y}
            width={chartArea.w}
            height={chartArea.h}
            rx={6}
            fill="#0b0d17"
          />

          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {/* Connection lines */}
            {data.connections.map(([from, to], i) => {
              const s1 = scaledStars[from];
              const s2 = scaledStars[to];
              if (!s1 || !s2) return null;
              const lineLen = Math.sqrt((s2.cx - s1.cx) ** 2 + (s2.cy - s1.cy) ** 2);

              return animated ? (
                <motion.line
                  key={`c-${i}`}
                  x1={s1.cx}
                  y1={s1.cy}
                  x2={s2.cx}
                  y2={s2.cy}
                  stroke="rgba(180, 200, 255, 0.35)"
                  strokeWidth={1}
                  strokeDasharray={lineLen}
                  variants={connectionVariants}
                  style={{ strokeDashoffset: 0 }}
                />
              ) : (
                <line
                  key={`c-${i}`}
                  x1={s1.cx}
                  y1={s1.cy}
                  x2={s2.cx}
                  y2={s2.cy}
                  stroke="rgba(180, 200, 255, 0.35)"
                  strokeWidth={1}
                  opacity={0.4}
                />
              );
            })}

            {/* Stars */}
            {scaledStars.map((star, i) => {
              const color = palette[i % palette.length];
              const isHovered = hoveredIndex === i;
              const baseRadius = 3 + star.brightness * 2;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleHover(i, e),
                onMouseLeave: () => handleHover(null),
                cursor: 'pointer' as const,
              } : {};

              return (
                <g key={`s-${i}`}>
                  {/* Glow circle */}
                  <motion.circle
                    cx={star.cx}
                    cy={star.cy}
                    r={baseRadius * 2.5}
                    fill={color}
                    fillOpacity={star.brightness * 0.12}
                    variants={starVariants}
                    style={{ transformOrigin: `${star.cx}px ${star.cy}px` }}
                  />
                  {/* Star point */}
                  <motion.circle
                    cx={star.cx}
                    cy={star.cy}
                    r={isHovered ? baseRadius + 2 : baseRadius}
                    fill="#fff"
                    fillOpacity={star.brightness}
                    stroke={color}
                    strokeWidth={isHovered ? 2 : 1}
                    filter="url(#star-glow)"
                    variants={starVariants}
                    style={{ transformOrigin: `${star.cx}px ${star.cy}px` }}
                    animate={animated ? {
                      opacity: [star.brightness * 0.7, star.brightness, star.brightness * 0.7],
                    } : undefined}
                    transition={animated ? {
                      opacity: { duration: 2 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' },
                    } : undefined}
                    {...interactiveProps}
                  />
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
            label={scaledStars[hoveredIndex].label ?? `Star ${hoveredIndex + 1}`}
            items={[
              { label: 'X', value: data.stars[hoveredIndex].x.toFixed(1), color: palette[hoveredIndex % palette.length] },
              { label: 'Y', value: data.stars[hoveredIndex].y.toFixed(1) },
              { label: 'Brightness', value: `${((scaledStars[hoveredIndex].brightness) * 100).toFixed(0)}%` },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ConstellationChart;
