'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface OrbitChartDataPoint {
  label: string;
  value: number;
  orbit: number;
  color?: string;
}

export interface OrbitChartProps {
  data: OrbitChartDataPoint[];
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

export const OrbitChart: React.FC<OrbitChartProps> = ({
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

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) / 2 - padding;
  const sunRadius = Math.max(6, maxRadius * 0.06);

  const { maxOrbit, maxValue } = useMemo(() => {
    const mo = Math.max(...data.map((d) => d.orbit));
    const mv = Math.max(...data.map((d) => d.value));
    return { maxOrbit: mo, maxValue: mv };
  }, [data]);

  const getColor = (item: { color?: string }, index: number) =>
    item.color ?? palette[index % palette.length];

  const getOrbitRadius = (orbit: number) =>
    (orbit / maxOrbit) * (maxRadius - sunRadius - 10) + sunRadius + 10;

  const getPlanetRadius = (value: number) =>
    Math.max(3, (value / maxValue) * (maxRadius * 0.08) + 3);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const orbitPaths = useMemo(() => {
    const unique = [...new Set(data.map((d) => d.orbit))].sort((a, b) => a - b);
    return unique.map((orbit) => getOrbitRadius(orbit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, maxOrbit, maxRadius, sunRadius]);

  const planets = useMemo(() => {
    return data.map((item, i) => {
      const orbitR = getOrbitRadius(item.orbit);
      const planetR = getPlanetRadius(item.value);
      // Distribute planets evenly by index as starting angle
      const startAngle = (i / data.length) * Math.PI * 2;
      return { ...item, orbitR, planetR, startAngle, index: i };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, maxOrbit, maxValue, maxRadius, sunRadius]);

  const ariaLabel = title
    ? `${title} orbit chart with ${data.length} items`
    : `Orbit chart with ${data.length} items`;

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

          {/* Orbital paths */}
          {orbitPaths.map((r, i) => (
            <circle
              key={`orbit-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="var(--color-border-primary)"
              strokeWidth={1}
              strokeDasharray="4 4"
              opacity={0.5}
            />
          ))}

          {/* Sun / center point */}
          <circle
            cx={cx}
            cy={cy}
            r={sunRadius}
            fill="var(--color-accent-blue)"
            opacity={0.9}
          />

          {/* Planets */}
          {planets.map((planet) => {
            const color = getColor(planet, planet.index);
            const isHovered = hoveredIndex === planet.index;
            const dimmed = hoveredIndex !== null && !isHovered;
            // Duration of one full orbit — farther = slower
            const duration = 8 + planet.orbit * 4;

            return (
              <motion.circle
                key={planet.index}
                cx={cx + planet.orbitR}
                cy={cy}
                r={isHovered ? planet.planetR + 2 : planet.planetR}
                fill={color}
                fillOpacity={0.85}
                stroke={color}
                strokeWidth={isHovered ? 2 : 1}
                opacity={dimmed ? 0.4 : 1}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
                {...(animated
                  ? {
                      initial: { rotate: (planet.startAngle * 180) / Math.PI },
                      animate: { rotate: (planet.startAngle * 180) / Math.PI + 360 },
                      transition: {
                        duration,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }
                  : {
                      style: {
                        transformOrigin: `${cx}px ${cy}px`,
                        transform: `rotate(${(planet.startAngle * 180) / Math.PI}deg)`,
                      },
                    })}
                {...(interactive
                  ? {
                      onMouseEnter: (e: React.MouseEvent) => handleHover(planet.index, e),
                      onMouseMove: (e: React.MouseEvent) => handleHover(planet.index, e),
                      onMouseLeave: () => handleHover(null),
                      cursor: 'pointer' as const,
                    }
                  : {})}
              />
            );
          })}

          {/* Labels */}
          {planets.map((planet) => {
            const color = getColor(planet, planet.index);
            if (hoveredIndex !== null && hoveredIndex !== planet.index) return null;
            return (
              <motion.text
                key={`label-${planet.index}`}
                x={cx + planet.orbitR}
                y={cy - planet.planetR - 6}
                textAnchor="middle"
                fill={color}
                fontSize={fontSize - 2}
                opacity={0.8}
                style={{ transformOrigin: `${cx}px ${cy}px`, pointerEvents: 'none' }}
                {...(animated
                  ? {
                      initial: { rotate: (planet.startAngle * 180) / Math.PI },
                      animate: { rotate: (planet.startAngle * 180) / Math.PI + 360 },
                      transition: {
                        duration: 8 + planet.orbit * 4,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }
                  : {})}
              >
                {planet.label}
              </motion.text>
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: 'Value', value: data[hoveredIndex].value, color: getColor(data[hoveredIndex], hoveredIndex) },
              { label: 'Orbit', value: data[hoveredIndex].orbit },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default OrbitChart;
