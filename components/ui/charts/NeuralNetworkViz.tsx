'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface NeuralNetworkVizProps {
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
  data: { layers: number[] };
}

export const NeuralNetworkViz: React.FC<NeuralNetworkVizProps> = ({
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
  const [hovered, setHovered] = useState<{ layerIdx: number; nodeIdx: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];
  const { layers } = data;
  const maxNodes = Math.max(...layers);
  const layerCount = layers.length;

  const layerSpacing = (width - padding * 2) / (layerCount - 1 || 1);
  const nodeRadius = Math.min(12, (height - padding * 2) / (maxNodes * 3));

  const getNodePos = (layerIdx: number, nodeIdx: number, nodeCount: number) => {
    const x = padding + layerIdx * layerSpacing;
    const totalHeight = (nodeCount - 1) * nodeRadius * 3;
    const startY = height / 2 - totalHeight / 2;
    const y = startY + nodeIdx * nodeRadius * 3;
    return { x, y };
  };

  const handleMouseEnter = (e: React.MouseEvent, layerIdx: number, nodeIdx: number) => {
    if (!interactive) return;
    setHovered({ layerIdx, nodeIdx });
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
    ? `${title} neural network with ${layerCount} layers`
    : `Neural network with ${layerCount} layers`;

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

          {/* Connection lines */}
          {layers.map((nodeCount, layerIdx) => {
            if (layerIdx >= layers.length - 1) return null;
            const nextCount = layers[layerIdx + 1];
            return Array.from({ length: nodeCount }).map((_, ni) => {
              const from = getNodePos(layerIdx, ni, nodeCount);
              return Array.from({ length: nextCount }).map((_, nj) => {
                const to = getNodePos(layerIdx + 1, nj, nextCount);
                const opacity = 0.08 + 0.12 * (1 / (Math.abs(ni - nj) + 1));
                return animated ? (
                  <motion.line
                    key={`conn-${layerIdx}-${ni}-${nj}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={palette[layerIdx % palette.length]}
                    strokeWidth={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity }}
                    transition={{ duration: chartMotion.duration.slow, delay: layerIdx * 0.1 }}
                  />
                ) : (
                  <line
                    key={`conn-${layerIdx}-${ni}-${nj}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={palette[layerIdx % palette.length]}
                    strokeWidth={1}
                    opacity={opacity}
                  />
                );
              });
            });
          })}

          {/* Nodes */}
          {layers.map((nodeCount, layerIdx) =>
            Array.from({ length: nodeCount }).map((_, nodeIdx) => {
              const pos = getNodePos(layerIdx, nodeIdx, nodeCount);
              const color = palette[layerIdx % palette.length];
              const isHovered = hovered?.layerIdx === layerIdx && hovered?.nodeIdx === nodeIdx;

              return animated ? (
                <motion.circle
                  key={`node-${layerIdx}-${nodeIdx}`}
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? nodeRadius * 1.3 : nodeRadius}
                  fill={color}
                  fillOpacity={0.85}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    ...chartMotion.spring,
                    delay: layerIdx * 0.12 + nodeIdx * 0.04,
                  }}
                  style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                  onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent, layerIdx, nodeIdx)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  cursor={interactive ? 'pointer' : undefined}
                />
              ) : (
                <circle
                  key={`node-${layerIdx}-${nodeIdx}`}
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill={color}
                  fillOpacity={0.85}
                  onMouseEnter={(e) => handleMouseEnter(e, layerIdx, nodeIdx)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  cursor={interactive ? 'pointer' : undefined}
                />
              );
            })
          )}

          {/* Layer labels */}
          {layers.map((nodeCount, layerIdx) => {
            const x = padding + layerIdx * layerSpacing;
            return (
              <text
                key={`label-${layerIdx}`}
                x={x}
                y={height - padding / 2}
                textAnchor="middle"
                fontSize={fontSize}
                fill="var(--color-text-secondary)"
              >
                L{layerIdx + 1} ({nodeCount})
              </text>
            );
          })}
        </svg>

        {showTooltip && interactive && hovered && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`Layer ${hovered.layerIdx + 1}`}
            items={[
              { label: 'Node', value: hovered.nodeIdx + 1, color: palette[hovered.layerIdx % palette.length] },
              { label: 'Layer Size', value: layers[hovered.layerIdx] },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default NeuralNetworkViz;
