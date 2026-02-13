'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface TideChartDatum {
  label: string;
  value: number;
}

export interface TideChartProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: TideChartDatum[];
}

export const TideChart: React.FC<TideChartProps> = ({
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
  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const areaW = width - padding * 2;
  const areaH = height - padding * 2 - 20;
  const baseY = padding + areaH;

  const wavePath = useMemo(() => {
    if (data.length < 2) return '';
    const stepX = areaW / (data.length - 1);
    let d = `M ${padding} ${baseY}`;

    // Build wave line
    const points = data.map((datum, i) => ({
      x: padding + i * stepX,
      y: baseY - (datum.value / maxVal) * areaH,
    }));

    d += ` L ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const cp1x = points[i].x + stepX / 3;
      const cp1y = points[i].y;
      const cp2x = points[i + 1].x - stepX / 3;
      const cp2y = points[i + 1].y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${points[i + 1].x} ${points[i + 1].y}`;
    }

    d += ` L ${points[points.length - 1].x} ${baseY} Z`;
    return d;
  }, [data, areaW, areaH, baseY, maxVal, padding]);

  const waveLinePath = useMemo(() => {
    if (data.length < 2) return '';
    const stepX = areaW / (data.length - 1);
    const points = data.map((datum, i) => ({
      x: padding + i * stepX,
      y: baseY - (datum.value / maxVal) * areaH,
    }));

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const cp1x = points[i].x + stepX / 3;
      const cp1y = points[i].y;
      const cp2x = points[i + 1].x - stepX / 3;
      const cp2y = points[i + 1].y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${points[i + 1].x} ${points[i + 1].y}`;
    }
    return d;
  }, [data, areaW, areaH, baseY, maxVal, padding]);

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
    ? `${title} tide chart with ${data.length} data points`
    : `Tide chart with ${data.length} data points`;

  const stepX = areaW / Math.max(data.length - 1, 1);

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
            <linearGradient id="tideGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={palette[0]} stopOpacity={0.6} />
              <stop offset="100%" stopColor={palette[0]} stopOpacity={0.05} />
            </linearGradient>
          </defs>

          {/* Wave fill */}
          {animated ? (
            <motion.path
              d={wavePath}
              fill="url(#tideGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: chartMotion.duration.slow }}
            />
          ) : (
            <path d={wavePath} fill="url(#tideGrad)" />
          )}

          {/* Wave stroke */}
          {animated ? (
            <motion.path
              d={waveLinePath}
              fill="none"
              stroke={palette[0]}
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: chartMotion.duration.slow * 4 }}
            />
          ) : (
            <path d={waveLinePath} fill="none" stroke={palette[0]} strokeWidth={2.5} />
          )}

          {/* Data points */}
          {data.map((d, i) => {
            const x = padding + i * stepX;
            const y = baseY - (d.value / maxVal) * areaH;
            const isHovered = hovered === i;

            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5 : 3}
                  fill={palette[0]}
                  fillOpacity={0.9}
                  onMouseEnter={(e) => handleMouseEnter(e, i)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  cursor={interactive ? 'pointer' : undefined}
                />
                {/* Label below */}
                {(i % Math.max(1, Math.floor(data.length / 6)) === 0 || i === data.length - 1) && (
                  <text
                    x={x}
                    y={baseY + 14}
                    textAnchor="middle"
                    fontSize={fontSize - 2}
                    fill="var(--color-text-secondary)"
                  >
                    {d.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {showTooltip && interactive && hovered !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hovered].label}
            items={[
              { label: 'Tide', value: data[hovered].value, color: palette[0] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default TideChart;
