'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ParticleFlowDatum {
  from: string;
  to: string;
  value: number;
  color?: string;
}

export interface ParticleFlowProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: ParticleFlowDatum[];
}

export const ParticleFlow: React.FC<ParticleFlowProps> = ({
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

  const sources = [...new Set(data.map((d) => d.from))];
  const targets = [...new Set(data.map((d) => d.to))];
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  const sourceX = padding + 30;
  const targetX = width - padding - 30;
  const nodeRadius = 8;

  const getSourceY = (idx: number) => padding + (idx + 0.5) * ((height - padding * 2) / sources.length);
  const getTargetY = (idx: number) => padding + (idx + 0.5) * ((height - padding * 2) / targets.length);

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
    ? `${title} particle flow chart with ${data.length} flows`
    : `Particle flow chart with ${data.length} flows`;

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

          {/* Flow paths with particles */}
          {data.map((d, i) => {
            const sIdx = sources.indexOf(d.from);
            const tIdx = targets.indexOf(d.to);
            const sy = getSourceY(sIdx);
            const ty = getTargetY(tIdx);
            const color = d.color ?? palette[i % palette.length];
            const thickness = 1 + (d.value / maxValue) * 3;
            const midX = width / 2;
            const pathD = `M ${sourceX} ${sy} C ${midX} ${sy}, ${midX} ${ty}, ${targetX} ${ty}`;
            const particleCount = Math.max(2, Math.round((d.value / maxValue) * 5));

            return (
              <g
                key={i}
                onMouseEnter={(e) => handleMouseEnter(e, i)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                cursor={interactive ? 'pointer' : undefined}
              >
                {/* Flow path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={color}
                  strokeWidth={thickness}
                  strokeOpacity={hovered === i ? 0.5 : 0.15}
                />

                {/* Particles */}
                {animated &&
                  Array.from({ length: particleCount }).map((_, pi) => (
                    <motion.circle
                      key={pi}
                      r={2.5}
                      fill={color}
                      initial={{ offsetDistance: '0%', opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2 + (pi % 3) * 0.5,
                        delay: pi * 0.4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <animateMotion
                        dur={`${2 + (pi % 3) * 0.5}s`}
                        begin={`${pi * 0.4}s`}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </motion.circle>
                  ))}
              </g>
            );
          })}

          {/* Source nodes */}
          {sources.map((s, i) => {
            const y = getSourceY(i);
            return (
              <g key={`src-${i}`}>
                {animated ? (
                  <motion.circle
                    cx={sourceX}
                    cy={y}
                    r={nodeRadius}
                    fill={palette[i % palette.length]}
                    fillOpacity={0.85}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', ...chartMotion.spring, delay: i * 0.05 }}
                    style={{ transformOrigin: `${sourceX}px ${y}px` }}
                  />
                ) : (
                  <circle cx={sourceX} cy={y} r={nodeRadius} fill={palette[i % palette.length]} fillOpacity={0.85} />
                )}
                <text x={sourceX - nodeRadius - 4} y={y} textAnchor="end" dominantBaseline="central" fontSize={fontSize} fill="var(--color-text-secondary)">
                  {s}
                </text>
              </g>
            );
          })}

          {/* Target nodes */}
          {targets.map((t, i) => {
            const y = getTargetY(i);
            return (
              <g key={`tgt-${i}`}>
                {animated ? (
                  <motion.circle
                    cx={targetX}
                    cy={y}
                    r={nodeRadius}
                    fill={palette[(sources.length + i) % palette.length]}
                    fillOpacity={0.85}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', ...chartMotion.spring, delay: i * 0.05 + 0.2 }}
                    style={{ transformOrigin: `${targetX}px ${y}px` }}
                  />
                ) : (
                  <circle cx={targetX} cy={y} r={nodeRadius} fill={palette[(sources.length + i) % palette.length]} fillOpacity={0.85} />
                )}
                <text x={targetX + nodeRadius + 4} y={y} textAnchor="start" dominantBaseline="central" fontSize={fontSize} fill="var(--color-text-secondary)">
                  {t}
                </text>
              </g>
            );
          })}
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${data[hovered].from} → ${data[hovered].to}`}
            items={[
              { label: 'Value', value: data[hovered].value, color: data[hovered].color ?? palette[hovered % palette.length] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ParticleFlow;
