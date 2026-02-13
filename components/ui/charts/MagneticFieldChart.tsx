'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface MagneticFieldPole {
  x: number;
  y: number;
  strength: number;
  polarity: 'positive' | 'negative';
}

export interface MagneticFieldChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: MagneticFieldPole[];
}

export const MagneticFieldChart: React.FC<MagneticFieldChartProps> = ({
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
  const maxStrength = Math.max(...data.map((d) => d.strength), 1);

  const positivePoles = data.filter((d) => d.polarity === 'positive');
  const negativePoles = data.filter((d) => d.polarity === 'negative');

  // Generate field lines between positive and negative poles
  const fieldLines: Array<{ path: string; strength: number; color: string }> = [];
  positivePoles.forEach((pp) => {
    negativePoles.forEach((np) => {
      const px = padding + pp.x * (width - padding * 2);
      const py = padding + pp.y * (height - padding * 2);
      const nx = padding + np.x * (width - padding * 2);
      const ny = padding + np.y * (height - padding * 2);
      const strength = (pp.strength + np.strength) / 2;
      const lineCount = Math.max(2, Math.round(strength / maxStrength * 5));

      for (let i = 0; i < lineCount; i++) {
        const offset = ((i - (lineCount - 1) / 2) / Math.max(lineCount - 1, 1)) * 60;
        const midX = (px + nx) / 2;
        const midY = (py + ny) / 2 + offset;
        const path = `M ${px} ${py} Q ${midX} ${midY} ${nx} ${ny}`;
        fieldLines.push({ path, strength, color: palette[fieldLines.length % palette.length] });
      }
    });
  });

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
    ? `${title} magnetic field chart with ${data.length} poles`
    : `Magnetic field chart with ${data.length} poles`;

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

          {/* Field lines */}
          {fieldLines.map((fl, i) =>
            animated ? (
              <motion.path
                key={`fl-${i}`}
                d={fl.path}
                fill="none"
                stroke={fl.color}
                strokeWidth={1.2}
                strokeOpacity={0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: chartMotion.duration.slow * 3, delay: i * 0.04 }}
              />
            ) : (
              <path
                key={`fl-${i}`}
                d={fl.path}
                fill="none"
                stroke={fl.color}
                strokeWidth={1.2}
                strokeOpacity={0.4}
              />
            )
          )}

          {/* Poles */}
          {data.map((pole, i) => {
            const px = padding + pole.x * (width - padding * 2);
            const py = padding + pole.y * (height - padding * 2);
            const poleR = 6 + (pole.strength / maxStrength) * 10;
            const color = pole.polarity === 'positive' ? palette[0] : palette[3];
            const isHovered = hovered === i;

            return (
              <g key={`pole-${i}`}>
                {animated ? (
                  <motion.circle
                    cx={px}
                    cy={py}
                    r={isHovered ? poleR * 1.2 : poleR}
                    fill={color}
                    fillOpacity={0.85}
                    stroke={color}
                    strokeWidth={2}
                    strokeOpacity={0.3}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', ...chartMotion.spring, delay: i * 0.08 }}
                    style={{ transformOrigin: `${px}px ${py}px` }}
                    onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, i)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                ) : (
                  <circle
                    cx={px}
                    cy={py}
                    r={poleR}
                    fill={color}
                    fillOpacity={0.85}
                    onMouseEnter={(e) => handleMouseEnter(e, i)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    cursor={interactive ? 'pointer' : undefined}
                  />
                )}
                <text
                  x={px}
                  y={py}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={fontSize - 1}
                  fontWeight={700}
                  fill="#fff"
                  pointerEvents="none"
                >
                  {pole.polarity === 'positive' ? '+' : '−'}
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
            label={`${data[hovered].polarity === 'positive' ? '+' : '−'} Pole`}
            items={[
              { label: 'Strength', value: data[hovered].strength, color: data[hovered].polarity === 'positive' ? palette[0] : palette[3] },
              { label: 'Polarity', value: data[hovered].polarity },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default MagneticFieldChart;
